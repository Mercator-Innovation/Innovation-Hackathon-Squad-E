// Home page only: make Daniel's explainer exactly as tall as its content, so there's no inner scrollbar.
const explainer = document.getElementById("explainer");

// Tell the video which language to use, so it always matches the page
const videoUrl = `${explainer.dataset.src}?lang=${LANG}`;
explainer.src = videoUrl;
document.getElementById("explainer-full").href = videoUrl;

function fitExplainer() {
  try {
    const doc = explainer.contentDocument;
    if (doc) explainer.style.height = `${doc.documentElement.scrollHeight + 4}px`;
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
