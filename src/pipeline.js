// The data pipeline, run in the browser on made-up data:
// 1 raw requests -> 2 anonymised -> 3 combined by area, small numbers hidden -> 4 areas most in need, with reasons.
const SMALL = 10;
const BANDS = ["6pm to 8pm", "8pm to 10pm", "10pm to midnight", "Midnight to 2am", "2am to 4am", "4am to 6am"];
const AFTER_MIDNIGHT = [3, 4, 5];
const SLOW = 15;   // minutes: answered slower than this counts as a long wait
const WEIGHTS = { perVolunteer: 0.5, longWait: 0.3, lateNight: 0.2 };

const raw = window.RAW_REQUESTS;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pct = (x) => `${Math.round(x * 100)}%`;
const shown = (n) => (n < SMALL ? "fewer than 10" : n.toLocaleString());

function table(el, headings, rows) {
  document.getElementById(el).innerHTML =
    `<thead><tr>${headings.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead>` +
    `<tbody>${rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;
}

// 1. What arrives (5 examples)
const sample = [raw[3], raw[120], raw[260], raw[340], raw[420]].filter(Boolean);
document.getElementById("raw-count").textContent = `${raw.length.toLocaleString()} requests this week. Here are 5:`;
table("raw-table", ["Ref", "First name", "Phone", "Town", "Day", "Time", "Asked by", "Answered in"],
  sample.map((r) => [r.ref, r.firstName, r.phone, r.town, r.day, r.time, r.route, `${r.minutesToAnswer} min`]));

// 2. Anonymise: keep only what planning needs
const anonymise = (r) => ({
  area: r.area,
  band: r.band,
  route: r.route,
  longWait: r.minutesToAnswer > SLOW
});
const anon = raw.map(anonymise);
table("anon-table", ["Council area", "Time band", "Asked by", `Waited over ${SLOW} min?`],
  sample.map(anonymise).map((a) => [a.area, BANDS[a.band], a.route, a.longWait ? "Yes" : "No"]));
document.getElementById("removed").textContent = "reference, first name, phone number, town, day and exact time.";

// 3. Combine by area, hiding small numbers
const volunteers = Object.fromEntries(window.AREA_TOTALS.map((a) => [a.area, a.volunteers]));
const areas = Object.values(anon.reduce((acc, a) => {
  const row = acc[a.area] || (acc[a.area] = { area: a.area, requests: 0, longWait: 0, lateNight: 0 });
  row.requests++;
  if (a.longWait) row.longWait++;
  if (AFTER_MIDNIGHT.includes(a.band)) row.lateNight++;
  return acc;
}, {})).map((row) => ({
  ...row,
  volunteers: volunteers[row.area],
  perVolunteer: row.requests / volunteers[row.area],
  longWaitRate: row.longWait / row.requests,
  lateRate: row.lateNight / row.requests,
  tooSmall: row.requests < SMALL
}));

table("area-table", ["Council area", "Requests", "Volunteers", "Waited over 15 min", "After midnight"],
  areas.slice().sort((a, b) => a.area.localeCompare(b.area)).map((r) => [
    r.area, shown(r.requests), r.volunteers, shown(r.longWait), shown(r.lateNight)
  ]));

// 4. Score: each measure scaled 0 to 1 across areas, then weighted. Too-small areas aren't ranked.
const rankable = areas.filter((a) => !a.tooSmall);
const scale = (key) => {
  const values = rankable.map((a) => a[key]);
  const lo = Math.min(...values), hi = Math.max(...values);
  return (v) => (hi === lo ? 0 : (v - lo) / (hi - lo));
};
const sPer = scale("perVolunteer"), sWait = scale("longWaitRate"), sLate = scale("lateRate");
rankable.forEach((a) => {
  a.score = WEIGHTS.perVolunteer * sPer(a.perVolunteer) + WEIGHTS.longWait * sWait(a.longWaitRate) + WEIGHTS.lateNight * sLate(a.lateRate);
});
rankable.sort((a, b) => b.score - a.score);

document.getElementById("weights").innerHTML = [
  `<strong>Half</strong> the score: requests per volunteer`,
  `<strong>Under a third</strong>: how many people waited over ${SLOW} minutes`,
  `<strong>A fifth</strong>: how many asked after midnight, when the fewest services are open`
].map((w) => `<li>${w}</li>`).join("");

const topAreas = rankable.slice(0, 5);
const tooSmall = areas.filter((a) => a.tooSmall);
document.getElementById("ranked").innerHTML = topAreas.map((a, i) => `
  <li class="ranked-item${i < 3 ? " flagged" : ""}">
    <strong>${esc(a.area)}</strong>${i < 3 ? ' <span class="flag">Look at first</span>' : ""}
    <ul>
      <li>${a.perVolunteer.toFixed(1)} requests per volunteer this week</li>
      <li>${pct(a.longWaitRate)} waited over ${SLOW} minutes</li>
      <li>${pct(a.lateRate)} asked after midnight</li>
    </ul>
  </li>`).join("") +
  tooSmall.map((a) => `<li class="ranked-item"><strong>${esc(a.area)}</strong>: too few requests this week to rank safely. Look at 4 weeks together instead.</li>`).join("");
