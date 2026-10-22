// The family view: what Karen sees when Jamie misses a check-in he set up himself.
const plan = window.CHECK_INS[0];
const nearby = window.VOLUNTEERS.find((v) => v.town === plan.town);

document.getElementById("sms").textContent = t("family.sms", { name: plan.name });
document.getElementById("alert-title").textContent = t("family.alertTitle", { name: plan.name });
document.getElementById("alert").textContent = t("family.alert", { name: plan.name, checkBy: plan.checkBy, now: plan.now });
document.getElementById("why-you").textContent = t("family.whyYou", { name: plan.name });

const messages = {
  lookIn: () => t("family.lookInSent", { volunteer: nearby ? nearby.firstName : t("helpPoint.aVolunteer"), town: plan.town, name: plan.name }),
  callMe: () => t("family.callMeSent"),
  heard: () => t("family.heardSent")
};

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("family-status").textContent = messages[button.dataset.action]();
  });
});
