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
  return towns.find((town) => words.includes(town.toUpperCase())) || null;
}

function reply(message) {
  const words = message.toUpperCase().trim().split(/\s+/);
  const code = words[0];
  const town = findTown(words) || state.town;
  if (town) state.town = town;
  const volunteer = town ? window.VOLUNTEERS.find((v) => v.town === town) : null;
  const hub = town ? window.HUBS.find((h) => h.town === town) : null;

  if (["TALK", "COME", "BED"].includes(code) && !town) return t("text.replies.whichTown");

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
  setTimeout(() => addText("service", reply(message)), 600);
});

addText("service", t("text.replies.welcome"));
