// Refer someone: for NHS, ambulance, social work and care staff.
// They can give the code (nothing shared), or ask a volunteer to get in touch, only with the person's agreement.
// The person gets a text and decides. Nothing about them comes back to the referrer. Nothing is really sent.
const roleSelect = document.getElementById("role");
const townSelect = document.getElementById("town");

roleSelect.add(new Option(t("refer.chooseRole"), ""));
t("refer.roles").forEach((role) => roleSelect.add(new Option(role, role)));

townSelect.add(new Option(t("refer.chooseTown"), ""));
[...new Set(window.HUBS.map((h) => h.town).concat(window.VOLUNTEERS.map((v) => v.town)))]
  .sort().forEach((town) => townSelect.add(new Option(town, town)));

document.getElementById("when").innerHTML = t("refer.whenOptions")
  .map((o, i) => `<label class="check"><input type="radio" name="when" value="${o}"${i === 0 ? " checked" : ""}> <span>${o}</span></label>`)
  .join("");

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => showStep(button.dataset.go));
});

// Step 1
document.getElementById("role-next").addEventListener("click", () => {
  const error = document.getElementById("role-error");
  error.hidden = !!roleSelect.value;
  document.getElementById("role-field").classList.toggle("has-error", !roleSelect.value);
  if (!roleSelect.value) {
    error.textContent = t("refer.roleError");
    roleSelect.focus();
    return;
  }
  showStep("step-how");
});

// Step 3b
const FIELDS = ["consent", "name", "phone", "town"];

function showErrors(errors) {
  FIELDS.forEach((f) => {
    document.getElementById(`${f}-error`).hidden = true;
    document.getElementById(`${f}-field`).classList.remove("has-error");
  });
  const box = document.getElementById("errors");
  box.hidden = errors.length === 0;
  if (!errors.length) return;
  document.getElementById("error-list").innerHTML = errors
    .map((e) => `<li><a href="#${e.field}">${e.text}</a></li>`).join("");
  errors.forEach((e) => {
    const el = document.getElementById(`${e.field}-error`);
    el.textContent = e.text;
    el.hidden = false;
    document.getElementById(`${e.field}-field`).classList.add("has-error");
  });
  box.focus();
}

document.getElementById("ask-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const town = townSelect.value;
  const when = document.querySelector("[name=when]:checked").value;

  const errors = [];
  if (!document.getElementById("consent").checked) errors.push({ field: "consent", text: t("refer.consentError") });
  if (!name) errors.push({ field: "name", text: t("refer.nameError") });
  if (!phone) errors.push({ field: "phone", text: t("refer.phoneError") });
  if (!town) errors.push({ field: "town", text: t("refer.townError") });
  showErrors(errors);
  if (errors.length) return;

  const whenWords = t("refer.whenWords")[when];
  const volunteer = window.VOLUNTEERS.find((v) => v.town === town);
  let next;
  if (!whenWords) next = t("refer.doneWhenReady");
  else if (volunteer) next = t("refer.doneVolunteer", { volunteer: volunteer.firstName, town, when: whenWords });
  else next = t("refer.doneNoVolunteer", { when: whenWords });

  const done = document.getElementById("done-messages");
  done.innerHTML = "";
  [t("refer.doneText", { name }), next].forEach((words) => {
    const p = document.createElement("p");
    p.textContent = words;
    done.append(p);
  });
  document.getElementById("their-sms").textContent = t("refer.theirSms", { name, when: whenWords || "when you're ready" });
  showStep("step-done");
});

document.getElementById("another").addEventListener("click", () => {
  document.getElementById("ask-form").reset();
  showErrors([]);
  showStep("step-how");
});
