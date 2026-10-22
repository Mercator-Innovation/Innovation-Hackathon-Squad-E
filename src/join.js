// Becoming a volunteer: sign up, then what happens next (PVG, training, shadow shifts, your hub).
const townSelect = document.getElementById("town");
townSelect.add(new Option(t("join.chooseTown"), ""));
[...new Set(window.HUBS.map((h) => h.town).concat(window.VOLUNTEERS.map((v) => v.town), ["Wick"]))]
  .sort().forEach((town) => townSelect.add(new Option(town, town)));

document.getElementById("when").innerHTML = t("join.whenOptions")
  .map((o, i) => `<label class="check"><input type="checkbox" name="when" value="${i}"> <span>${o}</span></label>`)
  .join("");

function showErrors(errors) {
  ["name", "town", "when"].forEach((f) => {
    document.getElementById(`${f}-error`).hidden = true;
    document.getElementById(`${f}-field`).classList.remove("has-error");
  });
  const box = document.getElementById("errors");
  box.hidden = errors.length === 0;
  if (!errors.length) return;
  document.getElementById("error-list").innerHTML = errors
    .map((e) => `<li><a href="#${e.target}">${e.text}</a></li>`).join("");
  errors.forEach((e) => {
    const el = document.getElementById(`${e.field}-error`);
    el.textContent = e.text;
    el.hidden = false;
    document.getElementById(`${e.field}-field`).classList.add("has-error");
  });
  box.focus();
}

document.getElementById("join-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const town = townSelect.value;
  const errors = [];
  if (!name) errors.push({ field: "name", target: "name", text: t("join.errorName") });
  if (!town) errors.push({ field: "town", target: "town", text: t("join.errorTown") });
  if (!document.querySelector("[name=when]:checked")) errors.push({ field: "when", target: "when", text: t("join.errorWhen") });
  showErrors(errors);
  if (errors.length) return;

  const hub = window.HUBS.find((h) => h.town === town);
  const hubText = hub
    ? t("join.hub", { hub: hub.name, town, opens: hub.opens, closes: hub.closes })
    : t("join.noHub", { town });

  document.getElementById("next-title").textContent = t("join.nextTitle", { name });
  document.getElementById("next-steps").innerHTML = t("join.steps")
    .map((s) => `<li><span><strong>${s.title}</strong>${s.text || hubText}</span></li>`)
    .join("");
  showStep("step-next");
});
