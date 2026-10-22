// Shared by every page: fills in the words from content.js, plus small helpers.

// Languages for the switch in the header. Welsh and Gaelic words are drafts, in translations.js.
const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "cy", name: "Cymraeg" },
  { code: "gd", name: "Gàidhlig" }
];

// The language comes from ?lang=cy in the address, or the one chosen last time.
function chosenLanguage() {
  const asked = new URLSearchParams(location.search).get("lang");
  if (LANGUAGES.some((l) => l.code === asked)) {
    try { localStorage.setItem("lang", asked); } catch (e) {}
    return asked;
  }
  try { return localStorage.getItem("lang") || "en"; } catch (e) { return "en"; }
}
const LANG = chosenLanguage();

function lookUp(words, key) {
  return key.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), words);
}

// Is this word translated into the chosen language? (If not, it shows in English.)
function translated(key) {
  return LANG !== "en" && lookUp(window.TRANSLATIONS?.[LANG], key) !== undefined;
}

// Look up words by key, e.g. t("help.title"), and fill in {curly} bits.
function t(key, values) {
  let text = LANG === "en" ? undefined : lookUp(window.TRANSLATIONS?.[LANG], key);
  if (text === undefined) text = lookUp(window.CONTENT, key);
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
    // Words still in English get lang="en", so screen readers say them properly
    if (LANG !== "en" && !translated(el.dataset.text)) el.lang = "en";
  });
}

// The language switch in the header: the current language as text, the others as links.
function addLanguageSwitch() {
  const page = location.pathname.split("/").pop().replace(".html", "") || "index";
  const isTranslated = LANG !== "en" && !!window.TRANSLATIONS?.pages?.includes(page);
  document.documentElement.lang = isTranslated ? LANG : "en";
  const header = document.querySelector("header.top");
  if (!header) return;
  const nav = document.createElement("nav");
  nav.className = "lang-switch";
  nav.setAttribute("aria-label", LANG === "en" ? "Language" : (window.TRANSLATIONS?.[LANG]?.ui?.language || "Language"));
  nav.innerHTML = "<ul>" + LANGUAGES.map((l) => l.code === LANG
    ? `<li><span aria-current="true" lang="${l.code}">${l.name}</span></li>`
    : `<li><a href="?lang=${l.code}" hreflang="${l.code}" lang="${l.code}">${l.name}</a></li>`
  ).join("") + "</ul>";
  header.append(nav);

  // Say plainly that the words are a draft, or that this page isn't translated yet
  const main = document.querySelector("main");
  if (LANG === "en" || !main) return;
  const note = document.createElement("p");
  note.className = "card lang-note";
  note.textContent = isTranslated
    ? window.TRANSLATIONS[LANG].ui.draft
    : (window.TRANSLATIONS?.[LANG]?.ui?.notTranslated || "This page isn't translated yet, so it's in English.");
  if (!window.TRANSLATIONS) note.lang = "en";
  else if (!isTranslated) note.lang = LANG;
  main.prepend(note);
}

addLanguageSwitch();

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
