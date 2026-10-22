// The screen at a community help point. It knows where it is, so no phone or GPS is needed.
const point = window.HELP_POINTS[0];   // this prototype shows the Annan help point
const hub = window.HUBS.find((h) => h.town === point.town);
const volunteer = window.VOLUNTEERS.find((v) => v.town === point.town);

document.getElementById("where").textContent = t("helpPoint.where", { id: point.id, place: point.place });

document.getElementById("code-list").innerHTML = t("codes.list")
  .map((c) => `<li><strong>${c.code}</strong>: ${c.means}</li>`)
  .join("");

document.querySelectorAll("[data-need]").forEach((button) => {
  button.addEventListener("click", () => {
    const who = volunteer ? volunteer.firstName : t("helpPoint.aVolunteer");
    let message;

    if (!volunteer) {
      message = t("helpPoint.sentWorker");
    } else if (button.dataset.need === "place") {
      message = hub
        ? t("helpPoint.sentPlace", { hub: hub.name, closes: hub.closes, walk: point.walkToHub, who })
        : t("helpPoint.sentNoHub", { who });
    } else if (button.dataset.need === "talk") {
      message = t("helpPoint.sentTalk", { who });   // talking doesn't mean sending someone
    } else {
      message = t("helpPoint.sent", { who, minutes: Math.round(volunteer.milesAway * 8) });
    }

    document.getElementById("sent-message").textContent = message;
    showStep("step-sent");
  });
});

document.getElementById("again").addEventListener("click", () => showStep("step-need"));

// When a volunteer next walks past, so people without a phone know someone's coming.
document.getElementById("next-visit").textContent = point.nextVisit
  ? t("helpPoint.nextVisit", { time: point.nextVisit })
  : t("helpPoint.noVisit");

// Check in with a PIN, no phone needed. The person set this up and chose who's told.
document.getElementById("check-in-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const pin = document.getElementById("pin");
  const status = document.getElementById("check-in-status");
  const plan = window.CHECK_INS.find((c) => c.pin === pin.value.trim());

  if (!pin.value.trim()) status.textContent = t("helpPoint.pinEmpty");
  else if (!plan) status.textContent = t("helpPoint.pinWrong");
  else status.textContent = t("helpPoint.checkedIn");
  pin.value = "";
});
