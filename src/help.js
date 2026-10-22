// The person asking for help: what they need, where they are, who to tell.
const choice = { need: null, town: null, tell: [] };

const townSelect = document.getElementById("town");
const locationNote = document.getElementById("location-note");

// Towns come from the hubs data
[...new Set(window.HUBS.map((hub) => hub.town))].forEach((town) => {
  townSelect.add(new Option(town, town));
});

// Text codes, for people with no data
document.getElementById("code-list").innerHTML = t("codes.list")
  .map((c) => `<li><strong>${c.code}</strong>: ${c.means}</li>`)
  .join("");

// Step 1
document.querySelectorAll("[data-need]").forEach((button) => {
  button.addEventListener("click", () => {
    choice.need = button.dataset.need;
    showStep("step-where");
  });
});

// Step 2 (the location is pretend: it picks the first town)
document.getElementById("share-location").addEventListener("click", () => {
  townSelect.value = window.HUBS[0].town;
  locationNote.textContent = t("help.locationShared", { town: townSelect.value });
});

document.getElementById("where-next").addEventListener("click", () => {
  if (!townSelect.value) {
    locationNote.textContent = t("help.pickTown");
    townSelect.focus();
    return;
  }
  choice.town = townSelect.value;
  showStep("step-who");
});

// Step 3
document.getElementById("who-form").addEventListener("submit", (event) => {
  event.preventDefault();
  choice.tell = [...document.querySelectorAll('input[name="tell"]:checked')].map((box) => box.value);
  showResult();
});

// Back and start-again buttons
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showStep(button.dataset.go));
});

// Step 4
function showResult() {
  const volunteer = choice.tell.includes("volunteer")
    ? window.VOLUNTEERS.find((v) => v.town === choice.town)
    : null;
  const hub = window.HUBS.find((h) => h.town === choice.town);

  const messages = [];
  messages.push(volunteer
    ? t("help.doneVolunteer", { name: volunteer.firstName, miles: volunteer.milesAway })
    : t("help.doneNoVolunteer"));

  const told = [];
  if (choice.tell.includes("family")) told.push(t("help.whoFamily"));
  if (choice.tell.includes("worker")) told.push(t("help.whoWorker"));
  if (told.length) messages.push(t("help.doneTold", { who: told.join(` ${t("help.and")} `) }));

  if (choice.need === "place" && hub && volunteer) {
    messages.push(t("help.doneHub", { name: volunteer.firstName }));
  }
  if (choice.tell.includes("morning")) messages.push(t("help.doneMorning"));

  document.getElementById("done-messages").innerHTML = messages.map((m) => `<p>${m}</p>`).join("");

  document.getElementById("hub").innerHTML = hub
    ? `<div class="card">
         <h3>${hub.name}, ${hub.town}</h3>
         <p>${t("help.hubHours", { opens: hub.opens, closes: hub.closes })}</p>
         <ul class="tags">${hub.offers.map((o) => `<li>${o}</li>`).join("")}</ul>
       </div>`
    : `<p>${t("help.noHub")}</p>`;

  showStep("step-done");
}
