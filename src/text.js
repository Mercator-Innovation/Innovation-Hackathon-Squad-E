// Ask by text: a pretend text conversation on a basic phone, with no app and no data.
// Nothing is really sent. Every reply must fit in one text (160 characters).
const thread = document.getElementById("thread");
const input = document.getElementById("message");
const townSelect = document.getElementById("town");
const towns = [...new Set(window.HUBS.map((hub) => hub.town))];

// What the person last asked for, so follow-up texts make sense
const state = { open: null, town: null, volunteer: null };

towns.forEach((town) => townSelect.add(new Option(town, town)));

document.getElementById("code-list").innerHTML = t("codes.list")
  .map((c) => `<li><strong>${c.code}</strong>: ${c.means}</li>`)
  .join("");

// Quick buttons fill the message box, like typing it
function quickButtons() {
  const town = townSelect.value.toUpperCase();
  document.getElementById("quick").innerHTML = t("codes.list")
    .map((c) => `<button type="button" class="secondary" data-message="${c.code} ${town}">${c.code} ${town}</button>`)
    .join("");
  document.querySelectorAll("[data-message]").forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.message;
      input.focus();
    });
  });
}
townSelect.addEventListener("change", quickButtons);
quickButtons();

function addText(who, words) {
  const li = document.createElement("li");
  li.className = `bubble ${who}`;
  const label = document.createElement("span");
  label.className = "visually-hidden";
  label.textContent = who === "me" ? t("text.youSent") : t("text.theySent");
  const body = document.createElement("span");
  body.textContent = words;
  li.append(label, body);
  if (who === "service") {
    const size = document.createElement("span");
    size.className = "bubble-size";
    size.setAttribute("aria-hidden", "true"); // useful to see, noisy to hear on every text
    size.textContent = t("text.size", { n: words.length });
    li.append(size);
  }
  thread.append(li);
  li.scrollIntoView({ block: "nearest" });
}

function findTown(words) {
  // A help point number, like TALK 214, tells us the town too
  const point = (window.HELP_POINTS || []).find((p) => words.includes(p.id));
  if (point) return point.town;
  return towns.find((town) => words.includes(town.toUpperCase())) || null;
}

// Words people naturally send that mean the same as a code
const SAME_AS = { HELP: "TALK", CHAT: "TALK", HI: "TALK", HELLO: "TALK" };

// "Did tonight help?": asked once after OK. Anonymous, and only totals are kept.
function feedbackReply(message) {
  const answer = message.toUpperCase().trim().replace(/\s+/g, " ");
  if (state.feedback === "why") {
    state.feedback = null;
    // A code means they need help again, not feedback
    if (["TALK", "COME", "BED", "OK", "STOP", "HELP"].includes(answer.split(" ")[0])) return null;
    return t("textCare.noThanks");
  }
  if (["YES", "A BIT", "BIT", "NO"].includes(answer)) {
    state.feedback = answer === "NO" ? "why" : null;
    return answer === "NO" ? t("textCare.no") : t("textCare.thanks");
  }
  state.feedback = null; // They've moved on: carry on as normal
  return null;
}

function reply(message) {
  if (state.feedback && window.CONTENT.textCare) {
    const answer = feedbackReply(message);
    if (answer) return answer;
  }
  const words = message.toUpperCase().trim().split(/\s+/);
  let code = SAME_AS[words[0]] || words[0];
  const named = findTown(words);
  // Just a town, after we asked "which town?": carry on with what they first asked for
  if (named && state.waiting && !["TALK", "COME", "BED", "OK", "STOP", "TXT"].includes(code)) code = state.waiting;
  const town = named || state.town;
  if (town) state.town = town;
  const volunteer = town ? window.VOLUNTEERS.find((v) => v.town === town) : null;
  const hub = town ? window.HUBS.find((h) => h.town === town) : null;

  if (["TALK", "COME", "BED"].includes(code) && !town) {
    state.waiting = code;
    return t("text.replies.whichTown");
  }
  state.waiting = null;

  switch (code) {
    case "TALK":
      state.open = "talk"; state.volunteer = volunteer;
      return volunteer ? t("text.replies.talk", { name: volunteer.firstName }) : t("text.replies.noVolunteer");
    case "TXT":
      return state.volunteer ? t("text.replies.txt", { name: state.volunteer.firstName }) : t("text.replies.unknown");
    case "COME":
      state.open = "come"; state.volunteer = volunteer;
      return volunteer ? t("text.replies.come", { name: volunteer.firstName, town }) : t("text.replies.noVolunteer");
    case "BED":
      state.open = "bed";
      return hub
        ? t("text.replies.bed", { hub: hub.name, town: hub.town, closes: hub.closes })
        : t("text.replies.noHub");
    case "OK":
      state.open = null; state.volunteer = null;
      return t("text.replies.ok");
    case "STOP":
      state.open = null; state.volunteer = null;
      return t("text.replies.stop");
    default:
      // After COME, anything else is them saying where they are
      if (state.open === "come" && state.volunteer) return t("text.replies.where", { name: state.volunteer.firstName });
      return t("text.replies.unknown");
  }
}

document.getElementById("send-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message) return;
  addText("me", message);
  input.value = "";
  // A short pause, like a real reply
  setTimeout(() => {
    const wasOpen = state.open;
    const answer = reply(message);
    addText("service", answer);
    // After OK closes a request, ask once whether it helped
    if (answer === t("text.replies.ok") && wasOpen && window.CONTENT.textCare) {
      state.feedback = "ask";
      setTimeout(() => addText("service", t("textCare.ask")), 1200);
    }
  }, 600);
});

addText("service", t("text.replies.welcome"));
