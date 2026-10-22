// Home page only.

// "Who is this for?": show only the chosen group. The choice goes in the address (#group-self),
// so the back button and shared links land on the same group.
const pickButtons = document.querySelectorAll("[data-show]");
const groups = document.querySelectorAll(".group");

function showGroup(id, moveFocus) {
  groups.forEach((group) => { group.hidden = group.querySelector("h2").id !== id; });
  pickButtons.forEach((button) => button.setAttribute("aria-pressed", button.dataset.show === id));
  document.getElementById("pick-prompt").hidden = Boolean(id);
  if (id && moveFocus) {
    const heading = document.getElementById(id);
    heading.setAttribute("tabindex", "-1");
    heading.focus();
  }
}

pickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    history.replaceState(null, "", `#${button.dataset.show}`);
    showGroup(button.dataset.show, true);
  });
});

const fromAddress = location.hash.slice(1);
showGroup(document.querySelector(`[data-show="${fromAddress}"]`) ? fromAddress : null, false);

// Make Daniel's explainer exactly as tall as its content, so there's no inner scrollbar.
const explainer = document.getElementById("explainer");

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
