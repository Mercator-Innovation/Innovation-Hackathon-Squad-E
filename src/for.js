// One person's page: shows the options for whoever was picked in the banner.
const who = new URLSearchParams(location.search).get("who");
const audience = window.AUDIENCES.find((a) => a.id === who) || window.AUDIENCES[0];

document.title = `${t(audience.title)}: ${t("service.name")} (prototype)`;
document.getElementById("for-title").textContent = t(audience.title);
document.getElementById("for-hint").textContent = t(audience.hint);
document.getElementById("for-home").textContent = t("home.backHome");

document.getElementById("for-cards").innerHTML = audience.cards.map((card) => `
  <a class="card" href="${card.href}">
    <strong>${t(card.title)}</strong>
    <span>${t(card.hint)}</span>
  </a>`).join("");

// Daniel's journey maps: a step-by-step picture of this part (journey-maps.html, English only for now)
document.getElementById("for-cards").insertAdjacentHTML("afterend",
  `<p class="map-link"><a href="journey-maps.html#${audience.id}"${LANG !== "en" ? ' lang="en"' : ""}>See how this part works, step by step</a></p>`);
