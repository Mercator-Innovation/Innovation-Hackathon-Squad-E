// What happens tonight in a chosen town, and what we do where there's no one nearby.
const select = document.getElementById("town");
const towns = [...new Set([
  ...window.HUBS.map((h) => h.town),
  ...window.VOLUNTEERS.map((v) => v.town),
  ...window.HELP_POINTS.map((p) => p.town)
])].sort();
towns.forEach((town) => select.add(new Option(town, town)));
select.value = "Wick";   // start with the gap

document.getElementById("instead").innerHTML = t("rural.instead")
  .map((s) => `<li><span><strong>${s.title}</strong>${s.text}</span></li>`)
  .join("");

function show() {
  const town = select.value;
  const volunteer = window.VOLUNTEERS.find((v) => v.town === town);
  const hub = window.HUBS.find((h) => h.town === town);
  const point = window.HELP_POINTS.find((p) => p.town === town);
  const fact = (ok, text) => `<li class="${ok ? "yes" : "no"}"><span class="visually-hidden">${ok ? t("rural.yes") : t("rural.no")}</span>${text}</li>`;

  document.getElementById("tonight-title").textContent = t("rural.tonightTitle", { town });
  document.getElementById("tonight").innerHTML = [
    volunteer ? fact(true, t("rural.volunteerYes", { name: volunteer.firstName, miles: volunteer.milesAway })) : fact(false, t("rural.volunteerNo")),
    hub ? fact(true, t("rural.hubYes", { hub: hub.name, opens: hub.opens, closes: hub.closes })) : fact(false, t("rural.hubNo")),
    point ? fact(true, t("rural.pointYes", { id: point.id, place: point.place })) : fact(false, t("rural.pointNo")),
    point ? (point.nextVisit ? fact(true, t("rural.visitYes", { time: point.nextVisit })) : fact(false, t("rural.visitNo"))) : ""
  ].join("");

  // Fully covered towns don't need the fallbacks, but we still show them for anyone curious
  const covered = volunteer && hub && point && point.nextVisit;
  document.getElementById("covered").textContent = covered ? t("rural.allCovered", { town }) : "";
}

select.addEventListener("change", show);
show();
