// The volunteer's view: a request near them, keeping safe, and afterwards.
const request = window.TONIGHT[0];

document.getElementById("request").innerHTML = `
  <p><strong>${t("volunteer.requestSummary", { town: request.town, need: t(`volunteer.needs.${request.need}`) })}</strong></p>
  <p>${t("volunteer.distance", { miles: request.milesAway, time: request.time })}</p>
  ${request.source ? `<p>${t("volunteer.from", { source: request.source })}</p>` : ""}`;

document.getElementById("accept").addEventListener("click", () => showStep("step-safety"));
document.getElementById("decline").addEventListener("click", () => {
  document.getElementById("alert-status").textContent = t("volunteer.declined");
});

document.getElementById("safety-list").innerHTML = t("volunteer.safetyChecks")
  .map((check) => `<li>${check}</li>`)
  .join("");

const safetyStatus = document.getElementById("safety-status");
document.getElementById("backup").addEventListener("click", () => {
  safetyStatus.textContent = t("volunteer.backupSent");
});
document.getElementById("escalate").addEventListener("click", () => {
  safetyStatus.textContent = t("volunteer.escalateSent");
});
document.getElementById("finish").addEventListener("click", () => showStep("step-finish"));

document.getElementById("outcomes").innerHTML = t("volunteer.outcomes")
  .map((outcome, i) => `<label class="check"><input type="radio" name="outcome" value="${i}"${i === 0 ? " checked" : ""}> <span>${outcome}</span></label>`)
  .join("");

document.getElementById("outcome-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("finish-status").textContent = t("volunteer.done");
});
