// Spreading the word: fills the places table, the partner pitch and the rules from content.js.
const words = window.CONTENT.marketing;

const places = document.getElementById("places");
words.places.forEach((row) => {
  const tr = document.createElement("tr");
  for (const value of [row.place, row.why, row.when]) {
    const td = document.createElement("td");
    td.textContent = value;
    tr.append(td);
  }
  places.append(tr);
});

const pitch = document.getElementById("partner-pitch");
const partners = document.getElementById("partners");
Object.entries(words.partners).forEach(([key, partner]) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = partner.button;
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    partners.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    document.getElementById("partner-ask").textContent = partner.ask;
    document.getElementById("partner-gain").textContent = partner.gain;
    pitch.hidden = false;
  });
  partners.append(button);
});

const rules = document.getElementById("rules");
words.rules.forEach((rule) => {
  const li = document.createElement("li");
  li.textContent = rule;
  rules.append(li);
});
