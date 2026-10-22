// "How it works" on the home page: draws the five steps from content-journey.js,
// each with links to the page that shows it. home.js opens and closes it.
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function seeLinks(links) {
  return `<span class="see-label">${esc(t("journey.seeIt"))}:</span> ` +
    links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join(" · ");
}

document.getElementById("steps").innerHTML = t("journey.steps").map((step, i) => `
  <li class="step-card">
    <span class="step-number" aria-hidden="true">${i + 1}</span>
    <div>
      <h3>${esc(step.title)}</h3>
      <p>${esc(step.text)}</p>
      ${step.ways ? `<div class="ways">${step.ways.map((way) => `
        <div class="way">
          <h4>${esc(way.title)}</h4>
          <p>${esc(way.text)}</p>
          <p class="asks">${esc(way.asks)}</p>
          <p class="see-links">${seeLinks(way.links)}</p>
        </div>`).join("")}</div>` : ""}
      ${step.links ? `<p class="see-links">${seeLinks(step.links)}</p>` : ""}
    </div>
  </li>`).join("");

document.getElementById("behind-links").innerHTML = seeLinks(t("journey.behindLinks"));
