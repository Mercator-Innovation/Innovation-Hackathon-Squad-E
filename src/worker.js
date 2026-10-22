// The support worker's view: this morning, the 5pm handover, and tonight's shared cover.

// This morning: only people who agreed to share
document.getElementById("overnight").innerHTML = window.OVERNIGHT.map((o, i) => `
  <div class="person">
    <p><strong>${o.name}</strong> <span class="time">${o.time}</span></p>
    <p>${o.what}</p>
    <button type="button" class="secondary" data-follow="${i}">${t("worker.followUp")}</button>
    <p class="status" id="follow-${i}" aria-live="polite"></p>
  </div>`).join("");
document.querySelectorAll("[data-follow]").forEach((button) => {
  button.addEventListener("click", () => {
    const o = window.OVERNIGHT[button.dataset.follow];
    document.getElementById(`follow-${button.dataset.follow}`).textContent = t("worker.followed", { name: o.name });
  });
});
document.getElementById("not-shared").textContent = t("worker.others", { n: window.OVERNIGHT_NOT_SHARED });

// The 5pm handover
const people = window.CASELOAD.filter((p) => p.agreed);
document.getElementById("caseload").innerHTML = people.map((p, i) => `
  <div class="person">
    <label class="check"><input type="checkbox" id="flag-${i}"> <span><strong>${p.name}</strong>, ${p.town}: ${t("worker.flag")}</span></label>
    <label for="note-${i}" class="hint">${t("worker.noteLabel")}</label>
    <textarea id="note-${i}">${p.note}</textarea>
  </div>`).join("");

document.getElementById("handover-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const names = people.filter((p, i) => document.getElementById(`flag-${i}`).checked).map((p) => p.name);
  document.getElementById("handover-status").textContent = names.length
    ? t("worker.sent", { names: names.join(", ") })
    : t("worker.sentNone");
});

// Tonight's shared cover
document.getElementById("rota").innerHTML = window.ROTA
  .map((r) => `<li class="yes"><span class="time">${r.from} to ${r.to}</span>: <strong>${r.who}</strong>. ${r.how}</li>`)
  .join("");
