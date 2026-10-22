// Looking after volunteers (volunteer page) and "Did it help?" (planner page).
// Each part only runs on the page that has its section. Nothing is really sent.

// Volunteer: after they save how it went, ask how they are
const youSection = document.getElementById("you");
if (youSection) {
  document.getElementById("you-options").innerHTML = t("care.youOptions")
    .map((o, i) => `<label class="check"><input type="radio" name="you" value="${o.value}"${i === 0 ? " checked" : ""}> <span>${o.label}</span></label>`)
    .join("");
  document.getElementById("support-list").innerHTML = t("care.support").map((s) => `<li>${s}</li>`).join("");

  document.getElementById("outcome-form").addEventListener("submit", () => {
    youSection.hidden = false;
    const heading = youSection.querySelector("h2");
    heading.setAttribute("tabindex", "-1");
    heading.focus();
  });

  document.getElementById("you-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const how = document.querySelector("[name=you]:checked").value;
    document.getElementById("you-status").textContent = t(`care.youReplies.${how}`);
  });

  // Take a break: no requests for 7 days
  const breakButton = document.getElementById("break");
  const breakStatus = document.getElementById("break-status");
  let onBreak = false;
  breakButton.addEventListener("click", () => {
    onBreak = !onBreak;
    const back = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      .toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
    breakStatus.textContent = onBreak ? t("care.breakOn", { date: back }) : t("care.breakBack");
    breakButton.textContent = onBreak ? t("care.breakOff") : t("care.breakButton");
    breakButton.setAttribute("aria-pressed", onBreak);
  });
}

// Planner: did it help?
const helped = document.getElementById("helped");
if (helped && window.OUTCOMES) {
  const o = window.OUTCOMES;
  const answered = o.answers.yes + o.answers.bit + o.answers.no;
  const labels = t("care.helpedLabels");
  helped.innerHTML = ["yes", "bit", "no"].map((k) => {
    const pct = Math.round((o.answers[k] / answered) * 100);
    return `<div class="bar-row">
      <span class="bar-label">${labels[k]}</span>
      <span class="bar-track"><span class="bar" style="width:${pct}%"></span></span>
      <span class="bar-value">${pct}% (${o.answers[k]})</span>
    </div>`;
  }).join("") + `<p class="note">${t("care.helpedOf", { n: answered, asked: o.asked })}</p>`;

  document.getElementById("no-reasons").innerHTML = o.noReasons.map((r) => `<li>${r}</li>`).join("");
  document.getElementById("volunteer-care").innerHTML = t("care.volunteerFacts")
    .map((fact) => `<li>${Object.entries(o.volunteers)
      .reduce((text, [name, value]) => text.replace(`{${name}}`, value), fact)}</li>`)
    .join("");
}
