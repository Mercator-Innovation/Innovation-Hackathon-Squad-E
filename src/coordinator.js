// The coordinator's view: anonymised totals by area and time. Never anything about one person.
const SMALL = 10;   // hide any count of requests under this, so no one can be recognised

const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
const shown = (n) => (n < SMALL ? t("coordinator.fewer") : n.toLocaleString());

// Work out each area's numbers once, busiest per volunteer first
const areas = window.AREA_TOTALS.map((row) => {
  const requests = sum(row.byTime);
  if (row.byRoute && sum(row.byRoute) !== requests) {
    console.warn(`data/requests.js: ${row.area} byRoute doesn't add up to byTime (${sum(row.byRoute)} vs ${requests})`);
  }
  const perVolunteer = requests / row.volunteers;
  return { ...row, requests, perVolunteer, flagged: perVolunteer > window.FLAG_LIMIT };
}).sort((a, b) => b.perVolunteer - a.perVolunteer);

// The headline
const total = sum(areas.map((a) => a.requests));
const byText = sum(areas.map((a) => a.byRoute[1]));
document.getElementById("summary").textContent = t("coordinator.summary", {
  total: total.toLocaleString(),
  flagged: areas.filter((a) => a.flagged).length,
  textShare: Math.round((byText / total) * 100)
});

// The table. data-label lets each cell show its heading when the table becomes cards on a phone.
const col = (key) => t(`coordinator.${key}`);
document.getElementById("area-rows").innerHTML = areas.map((row) => `<tr>
    <th scope="row">${row.area}</th>
    <td class="num" data-label="${col("colRequests")}">${shown(row.requests)}</td>
    <td class="num" data-label="${col("colVolunteers")}">${row.volunteers}</td>
    <td class="num" data-label="${col("colPer")}">${row.perVolunteer.toFixed(1)}</td>
    <td data-label="${col("colStatus")}">${row.flagged ? `<span class="flag">${col("needsMore")}</span>` : col("covered")}</td>
  </tr>`).join("");

document.getElementById("why").textContent = t("coordinator.why", { limit: window.FLAG_LIMIT });

// Bar charts for one area: when people asked, and how
function bars(values, labels) {
  const max = Math.max(...values);
  return values.map((n, i) => `
    <div class="bar-row">
      <span class="bar-label">${labels[i]}</span>
      <span class="bar-track"><span class="bar${n < SMALL ? " hidden-number" : ""}"
        style="width:${n < SMALL ? 8 : Math.round((n / max) * 100)}%"></span></span>
      <span class="bar-value">${shown(n)}</span>
    </div>`).join("");
}

const areaSelect = document.getElementById("area");
areas.forEach((row) => areaSelect.add(new Option(row.area, row.area)));

function drawArea() {
  const row = areas.find((r) => r.area === areaSelect.value);
  document.getElementById("times").innerHTML = bars(row.byTime, t("coordinator.bands"));
  document.getElementById("routes").innerHTML = bars(row.byRoute, t("coordinator.routes"));
}

areaSelect.addEventListener("change", drawArea);
drawArea();

// Help points with no volunteer walk tonight
const gaps = window.HELP_POINTS.filter((p) => !p.nextVisit);
document.getElementById("gaps").innerHTML = gaps.length
  ? gaps.map((p) => `<li><span class="flag">${p.town}</span>: help point ${p.id}, ${p.place}</li>`).join("")
  : `<li>${t("coordinator.noGaps")}</li>`;
