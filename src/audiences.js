// Who is this for? One entry per kind of person, and the pages for them.
// Each person's page (for.html?who=...) is built from this list. The banner buttons are in app.js.
// To add a page: add a card to the right group. Words come from content.js (and content-more.js, content-refer.js).
window.AUDIENCES = [
  {
    id: "self", button: "home.pickSelf", title: "home.groupSelf", hint: "home.groupSelfHint",
    cards: [
      { href: "help.html",       title: "home.help",      hint: "home.helpHint" },
      { href: "text.html",       title: "home.text",      hint: "home.textHint" },
      { href: "walk.html",       title: "walk.homeTitle", hint: "walk.homeHint" },
      { href: "help-point.html", title: "home.helpPoint", hint: "home.helpPointHint" },
      { href: "plan.html",       title: "more.plan",      hint: "more.planHint" },
      { href: "privacy.html",    title: "more.privacy",   hint: "more.privacyHint" }
    ]
  },
  {
    id: "others", button: "home.pickOthers", title: "home.groupOthers", hint: "home.groupOthersHint",
    cards: [
      { href: "family.html", title: "home.family",     hint: "home.familyHint" },
      { href: "refer.html",  title: "refer.homeTitle", hint: "refer.homeHint" }
    ]
  },
  {
    id: "volunteer", button: "home.pickVolunteer", title: "home.groupVolunteer", hint: "home.groupVolunteerHint",
    cards: [
      { href: "join.html",      title: "more.join",      hint: "more.joinHint" },
      { href: "volunteer.html", title: "home.volunteer", hint: "home.volunteerHint" }
    ]
  },
  {
    id: "services", button: "home.pickServices", title: "home.groupServices", hint: "home.groupServicesHint",
    cards: [
      { href: "worker.html",      title: "more.worker",      hint: "more.workerHint" },
      { href: "coordinator.html", title: "home.coordinator", hint: "home.coordinatorHint" },
      { href: "rural.html",       title: "more.rural",       hint: "more.ruralHint" }
    ]
  },
  {
    id: "word", button: "home.pickWord", title: "home.groupWord", hint: "home.groupWordHint",
    cards: [
      { href: "outreach.html",  title: "home.outreach",  hint: "home.outreachHint" },
      { href: "marketing.html", title: "home.marketing", hint: "home.marketingHint" }
    ]
  }
];
