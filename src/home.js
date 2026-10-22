// Home page only.

// Daniel's video (no-phone-video). Tell it which language to use, so it always matches the page.
const explainer = document.getElementById("explainer");
const sep = explainer.dataset.src.includes("?") ? "&" : "?";
explainer.src = `${explainer.dataset.src}${sep}lang=${LANG}`;
document.getElementById("explainer-full").href = `no-phone-video/?lang=${LANG}`;

// Make the video exactly as tall as its content, so there's no inner scrollbar
function fitExplainer() {
  try {
    const doc = explainer.contentDocument;
    if (doc?.body) explainer.style.height = `${Math.ceil(doc.body.getBoundingClientRect().height) + 4}px`;
  } catch (e) {
    // Opened straight from the file, the browser may not let us measure it. The CSS height still works.
  }
}

explainer.addEventListener("load", () => {
  fitExplainer();
  // The captions change length as it plays, so check again now and then
  setInterval(fitExplainer, 1000);
});
window.addEventListener("resize", fitExplainer);

// "How it works, in 5 steps": hidden until the button opens it, right here on the page.
// It also opens by itself if the address ends in #how-it-works.
const howButton = document.getElementById("how-button");
const howPanel = document.getElementById("how-panel");

function setHow(open) {
  howButton.setAttribute("aria-expanded", open);
  howPanel.hidden = !open;
}

howButton.addEventListener("click", () => setHow(howButton.getAttribute("aria-expanded") !== "true"));
if (location.hash === "#how-it-works") setHow(true);
