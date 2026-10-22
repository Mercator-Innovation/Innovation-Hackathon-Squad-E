// Jamie's plan: who's told, check-ins and his check-in number. Nothing is saved: it's a prototype.
const radios = (id, name, options, checked) => {
  document.getElementById(id).innerHTML = options
    .map((o, i) => `<label class="check"><input type="radio" name="${name}" value="${i}"${i === checked ? " checked" : ""}> <span>${o}</span></label>`)
    .join("");
};
radios("check-when", "when", t("plan.checkOptions"), 1);
radios("check-missed", "missed", t("plan.missedOptions"), 0);

// Only show the details that apply
const tellContact = document.getElementById("tell-contact");
const showHide = () => {
  document.getElementById("contact-field").hidden = !tellContact.checked;
  document.getElementById("check-details").hidden = document.querySelector("[name=when]:checked").value === "0";
};
tellContact.addEventListener("change", showHide);
document.querySelectorAll("[name=when]").forEach((r) => r.addEventListener("change", showHide));
showHide();

function showErrors(errors) {
  ["contact-name", "pin"].forEach((id) => {
    const el = document.getElementById(`${id}-error`);
    el.hidden = true;
    el.parentElement.classList.remove("has-error");
  });
  const box = document.getElementById("errors");
  box.hidden = errors.length === 0;
  if (!errors.length) return;
  document.getElementById("error-list").innerHTML = errors
    .map((e) => `<li><a href="#${e.id}">${e.text}</a></li>`).join("");
  errors.forEach((e) => {
    const el = document.getElementById(`${e.field}-error`);
    el.textContent = e.text;
    el.hidden = false;
    el.parentElement.classList.add("has-error");
  });
  box.focus();
}

document.getElementById("plan-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("contact-name").value.trim();
  const pin = document.getElementById("pin").value.trim();
  const again = document.getElementById("pin-again").value.trim();
  const errors = [];

  if (tellContact.checked && !name) errors.push({ id: "contact-name", field: "contact-name", text: t("plan.errorName") });
  if (!/^\d{4}$/.test(pin)) errors.push({ id: "pin", field: "pin", text: t("plan.errorPin") });
  else if (pin !== again) errors.push({ id: "pin-again", field: "pin", text: t("plan.errorMatch") });
  showErrors(errors);
  if (errors.length) return;

  // Say the plan back in plain words
  const when = Number(document.querySelector("[name=when]:checked").value);
  const missed = Number(document.querySelector("[name=missed]:checked").value);
  const who = [];
  if (tellContact.checked) who.push(name);
  if (document.getElementById("tell-worker").checked) who.push(t("help.whoWorker"));

  const lines = [
    who.length ? t("plan.doneTell", { who: who.join(` ${t("help.and")} `) }) : t("plan.doneTellNobody")
  ];
  if (document.getElementById("tell-worker").checked) lines.push(t("plan.doneWorker"));
  lines.push(when === 0
    ? t("plan.doneNoChecks")
    : t("plan.doneChecks", {
        when: t("plan.checkSay")[when],
        time: document.getElementById("check-by").value,
        missed: t("plan.missedSay")[missed].replaceAll("{name}", name || t("help.whoFamily"))
      }));

  document.getElementById("summary").innerHTML = lines.map((l) => `<li>${l}</li>`).join("");
  showStep("step-done");
});

document.getElementById("edit").addEventListener("click", () => showStep("step-form"));
