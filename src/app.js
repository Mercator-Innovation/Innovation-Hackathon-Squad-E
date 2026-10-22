// Shared by every page: fills in the words from content.js, plus small helpers.

// Look up words by key, e.g. t("help.title"), and fill in {curly} bits.
function t(key, values) {
  let text = key.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), window.CONTENT);
  if (text === undefined) return `[${key}]`;
  if (values) {
    for (const [name, value] of Object.entries(values)) {
      text = text.replaceAll(`{${name}}`, value);
    }
  }
  return text;
}

// Any element with data-text="some.key" gets its words from content.js.
function fillWords(root = document) {
  root.querySelectorAll("[data-text]").forEach((el) => {
    el.textContent = t(el.dataset.text);
  });
}

// Pages with steps: show one step, hide the rest, and move focus to its heading.
function showStep(id) {
  document.querySelectorAll(".step").forEach((step) => {
    step.hidden = step.id !== id;
  });
  const heading = document.querySelector(`#${id} h2`);
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus();
  }
}

fillWords();
