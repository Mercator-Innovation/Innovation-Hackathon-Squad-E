// The person asking for help: what they need, where they are, who to tell.
const choice = { need: null, town: null, contact: "volunteer", tell: [] };

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
    // Tie the error to the field, so a screen reader reads it when focus lands there
    locationNote.textContent = t("help.pickTown");
    locationNote.classList.add("field-error");
    townSelect.setAttribute("aria-invalid", "true");
    townSelect.setAttribute("aria-describedby", "location-note");
    townSelect.focus();
    return;
  }
  clearTownError();
  choice.town = townSelect.value;
  showStep("step-who");
});

function clearTownError() {
  locationNote.classList.remove("field-error");
  townSelect.removeAttribute("aria-invalid");
  townSelect.removeAttribute("aria-describedby");
}
townSelect.addEventListener("change", () => {
  if (townSelect.value) { clearTownError(); locationNote.textContent = ""; }
});

// Step 3. If the person has made a plan, start from it (this prototype pretends you're Jamie)
const plan = (window.CHECK_INS || [])[0];
const familyName = plan ? plan.tell : t("help.whoFamily");
if (plan) {
  const who = [familyName];
  document.querySelector('input[name="tell"][value="family"]').checked = true;
  if (plan.tellWorkerMorning) {
    document.querySelector('input[name="tell"][value="morning"]').checked = true;
    who.push(t("help.whoWorker"));
  }
  const note = document.getElementById("from-plan");
  note.textContent = t("help.fromPlan", { who: who.join(` ${t("help.and")} `) });
  note.hidden = false;
}

document.getElementById("who-form").addEventListener("submit", (event) => {
  event.preventDefault();
  choice.contact = document.querySelector('input[name="contact"]:checked').value;
  choice.tell =[...document.querySelectorAll('input[name="tell"]:checked')].map((box) => box.value);
  showResult();
});

// Back and start-again buttons
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showStep(button.dataset.go));
});

// Step 4
function showResult() {
  const volunteer = choice.contact === "volunteer"
    ? window.VOLUNTEERS.find((v) => v.town === choice.town)
    : null;
  const hub = window.HUBS.find((h) => h.town === choice.town);

  const messages = [];
  // Say back what they asked for: someone coming is different from a text
  messages.push(!volunteer
    ? t("help.doneNoVolunteer")
    : choice.need === "come"
      ? t("help.doneVolunteerCome", { name: volunteer.firstName, minutes: Math.round(volunteer.milesAway * 8) })
      : t("help.doneVolunteer", { name: volunteer.firstName, miles: volunteer.milesAway }));

  const told = [];
  if (choice.tell.includes("family")) told.push(familyName);
  if (choice.tell.includes("worker")) told.push(t("help.whoWorker"));
  if (told.length) messages.push(t("help.doneTold", { who: told.join(` ${t("help.and")} `) }));

  if (choice.need === "place" && hub && volunteer) {
    messages.push(t("help.doneHub", { name: volunteer.firstName }));
  }
  if (choice.tell.includes("morning")) messages.push(t("help.doneMorning"));

  document.getElementById("done-messages").innerHTML = messages.map((m) => `<p>${m}</p>`).join("");

  document.getElementById("hub").innerHTML = hub
    ? `<div class="card">
         <h4>${hub.name}, ${hub.town}</h4>
         <p>${t("help.hubHours", { opens: hub.opens, closes: hub.closes })}</p>
         <p class="note">${t("help.afterHub", { closes: hub.closes })}</p>
         <ul class="tags">${hub.offers.map((o) => `<li>${o}</li>`).join("")}</ul>
       </div>`
    : `<p>${t("help.noHub")}</p>`;

  document.getElementById("wait-list").innerHTML = t("help.waitTips").map((tip) => `<li>${tip}</li>`).join("");
  document.getElementById("update-note").textContent = "";

  showStep("step-done");
}

// After asking: "I'm OK now" or "Nobody's been in touch yet" (pretend: nothing is sent)
document.getElementById("im-ok").addEventListener("click", () => {
  document.getElementById("update-note").textContent = t("help.okSent");
});
document.getElementById("no-reply").addEventListener("click", () => {
  document.getElementById("update-note").textContent = t("help.noReplySent");
});
