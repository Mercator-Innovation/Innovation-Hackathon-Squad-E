// The coordinator's view: anonymised totals by area and time. Never anything about one person.
const SMALL = 10;   // hide any count of requests under this, so no one can be recognised

const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
const shown = (n) => (n < SMALL ? t("coordinator.fewer") : n.toLocaleString());

// The table
document.getElementById("area-rows").innerHTML = window.AREA_TOTALS.map((row) => {
  const requests = sum(row.byTime);
  const perVolunteer = requests / row.volunteers;
  const flagged = perVolunteer > window.FLAG_LIMIT;
  return `<tr>
    <th scope="row">${row.area}</th>
    <td class="num">${shown(requests)}</td>
    <td class="num">${row.volunteers}</td>
    <td class="num">${perVolunteer.toFixed(1)}</td>
    <td>${flagged ? `<span class="flag">${t("coordinator.needsMore")}</span>` : t("coordinator.covered")}</td>
  </tr>`;
}).join("");

document.getElementById("why").textContent = t("coordinator.why", { limit: window.FLAG_LIMIT });

// The times chart for one area
const areaSelect = document.getElementById("area");
window.AREA_TOTALS.forEach((row) => areaSelect.add(new Option(row.area, row.area)));

function drawTimes() {
  const row = window.AREA_TOTALS.find((r) => r.area === areaSelect.value);
  const max = Math.max(...row.byTime);
  const bands = t("coordinator.bands");

  document.getElementById("times").innerHTML = row.byTime.map((n, i) => `
    <div class="bar-row">
      <span class="bar-label">${bands[i]}</span>
      <span class="bar-track"><span class="bar${n < SMALL ? " hidden-number" : ""}"
        style="width:${n < SMALL ? 8 : Math.round((n / max) * 100)}%"></span></span>
      <span class="bar-value">${shown(n)}</span>
    </div>`).join("");
}

areaSelect.addEventListener("change", drawTimes);
drawTimes();
