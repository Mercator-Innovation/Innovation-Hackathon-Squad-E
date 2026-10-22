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

// Reassurance at the bottom of the pages people use to ask for help: it's private, no name needed, you choose.
const REASSURE_PAGES = ["index", "help", "text", "help-point", "for", "plan"];
const ICONS = {
  lock: '<path d="M7 11V8a5 5 0 0 1 10 0v3"/><rect x="5" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="16" r="1.4"/>',
  mask: '<path d="M3 9c3-1.5 15-1.5 18 0 0 5-3 8-6 8-1.5 0-2-1.5-3-1.5S10.5 17 9 17c-3 0-6-3-6-8Z"/><path d="M8 11.5h2.5M13.5 11.5H16"/>',
  hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10.5V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.4-1.7L8 13"/>'
};

function addReassurance() {
  const page = location.pathname.split("/").pop().replace(".html", "") || "index";
  const main = document.querySelector("main");
  if (!REASSURE_PAGES.includes(page) || !main || !window.CONTENT.reassure) return;
  const english = (key) => LANG !== "en" && !translated(key) ? ' lang="en"' : "";
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const footer = document.createElement("footer");
  footer.className = "reassure";
  footer.setAttribute("aria-labelledby", "reassure-title");
  footer.innerHTML = `
    <div class="reassure-inner">
      <h2 id="reassure-title"${english("reassure.title")}>${esc(t("reassure.title"))}</h2>
      <ul class="reassure-points"${english("reassure.points")}>
        ${t("reassure.points").map((p) => `
          <li>
            <span class="reassure-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[p.icon]}</svg></span>
            <span><strong>${esc(p.title)}</strong>${esc(p.text)}</span>
          </li>`).join("")}
      </ul>
      <p class="reassure-foot">
        <span${english("reassure.delete")}>${esc(t("reassure.delete"))}</span>
        <a href="privacy.html"${english("reassure.more")}>${esc(t("reassure.more"))}</a>
      </p>
    </div>`;
  main.after(footer);
}

addReassurance();

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
