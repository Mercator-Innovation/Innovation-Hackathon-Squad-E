// Home page only: make Daniel's video (no-phone-video) exactly as tall as its content, so there's no inner scrollbar.
const explainer = document.getElementById("explainer");

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
