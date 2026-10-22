// Walk me home: check-ins on the way, with a real person as back-up. No GPS, no tracking.
// Test version: one minute passes every 2 seconds, and a check-in comes every 5 "minutes".
const MINUTE = 2000;
const CHECK_EVERY = 5;   // minutes between check-ins
const ANSWER_WITHIN = 2; // minutes to answer before we ask again, then tell someone

const placeSelect = document.getElementById("place");
const minutesSelect = document.getElementById("minutes");
t("walk.places").forEach((p) => placeSelect.add(new Option(p, p)));
t("walk.times").forEach((n) => minutesSelect.add(new Option(t("walk.minutes", { n }), n)));
minutesSelect.value = "20";
document.getElementById("who").innerHTML = t("walk.whoOptions")
  .map((o, i) => `<label class="check"><input type="radio" name="who" value="${o.value}"${i === 0 ? " checked" : ""}> <span>${o.label}</span></label>`)
  .join("");

const walk = { place: "", left: 0, untilCheck: 0, waiting: null, missed: 0, who: "", timer: null };
const status = document.getElementById("walk-status");
const check = document.getElementById("check");

function render() {
  document.getElementById("time-left").textContent = t("walk.timeLeft", { n: Math.max(walk.left, 0) });
  document.getElementById("next-check").textContent = walk.waiting === null
    ? t("walk.nextCheck", { n: walk.untilCheck }) : "";
}

function askIfOK() {
  walk.waiting = ANSWER_WITHIN;
  check.hidden = false;
  document.getElementById("ok").focus();
}

function tick() {
  walk.left -= 1;
  if (walk.waiting !== null) {
    walk.waiting -= 1;
    if (walk.waiting <= 0) {
      walk.missed += 1;
      if (walk.missed === 1) {
        status.textContent = t("walk.missedOnce");
        walk.waiting = ANSWER_WITHIN;
      } else {
        status.textContent = t("walk.missedTwice", { who: t(`walk.whoWords.${walk.who}`), place: walk.place.toLowerCase() });
        check.hidden = true;
        walk.waiting = null;
        walk.untilCheck = CHECK_EVERY;
        walk.missed = 0;
      }
    }
  } else {
    walk.untilCheck -= 1;
    if (walk.untilCheck <= 0) askIfOK();
  }
  render();
}

document.getElementById("walk-form").addEventListener("submit", (event) => {
  event.preventDefault();
  walk.place = placeSelect.value;
  walk.left = Number(minutesSelect.value);
  walk.untilCheck = CHECK_EVERY;
  walk.waiting = null;
  walk.missed = 0;
  walk.who = document.querySelector("[name=who]:checked").value;
  const volunteer = window.VOLUNTEERS[0];
  document.getElementById("walking-title").textContent = t("walk.walkingTitle", { place: walk.place });
  document.getElementById("company-note").textContent = document.getElementById("company").checked
    ? t("walk.companyOn", { name: volunteer.firstName }) : "";
  status.textContent = "";
  check.hidden = true;
  render();
  showStep("step-walking");
  clearInterval(walk.timer);
  walk.timer = setInterval(tick, MINUTE);
});

document.getElementById("ok").addEventListener("click", () => {
  walk.waiting = null;
  walk.missed = 0;
  walk.untilCheck = CHECK_EVERY;
  check.hidden = true;
  status.textContent = t("walk.okThanks");
  render();
});

document.getElementById("someone").addEventListener("click", () => {
  walk.waiting = null;
  walk.untilCheck = CHECK_EVERY;
  check.hidden = true;
  status.textContent = t("walk.someoneSent", { who: t(`walk.whoWords.${walk.who}`) });
  render();
});

function endWalk(words) {
  clearInterval(walk.timer);
  check.hidden = true;
  walk.waiting = null;
  document.getElementById("next-check").textContent = "";
  status.textContent = words;
}
document.getElementById("arrived").addEventListener("click", () => endWalk(t("walk.homeDone")));
document.getElementById("stop").addEventListener("click", () => endWalk(t("walk.stopped")));
