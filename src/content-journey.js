// Words for "How it works" on the home page: the core journey in five steps.
// Kept in their own file so they don't clash with content.js. Load it after content.js.
Object.assign(window.CONTENT, {
  // The big button at the top of the home page, for anyone who needs someone right now
  now: {
    button: "I need someone tonight",
    orText: "Or text HELP and your town to 60000, from any phone. No data needed."
  },

  journey: {
    homeLink: "How it works, in 5 steps",
    mapsLink: "Journey maps for each part",
    title: "How it works",
    videoTitle: "Watch Jamie's night",
    videoFull: "Open the video full screen",
    intro: "Night Neighbours is simple at heart: you text or tap, a local volunteer gets back to you, and there's a warm place to go if you want one.",
    noDetails: "You don't have to give your name or sign up to get help. Everything else is optional.",
    seeIt: "See it",
    steps: [
      {
        title: "Getting in touch for the first time",
        text: "There are three ways in. Pick the one that suits you.",
        ways: [
          {
            title: "Just text. No setup.",
            text: "Text HELP and your town to 60000, from any phone. We ask for your town and what you'd like, and nothing else. A nickname is fine.",
            asks: "We ask: your town. That's all.",
            links: [{ href: "text.html", label: "Ask by text" }]
          },
          {
            title: "Set up a plan yourself",
            text: "If you'd like, choose who we tell when you ask for help, and whether you want check-ins. You can change or delete it any time.",
            asks: "You choose: a first name for anyone we should tell, and a 4-number check-in code.",
            links: [{ href: "plan.html", label: "Make my plan" }]
          },
          {
            title: "With someone you trust",
            text: "A support worker, GP or hostel worker can tell you about us and help you set up, but only with your agreement.",
            asks: "They ask you first, then share only what you agree to.",
            links: [{ href: "refer.html", label: "Refer someone" }]
          }
        ]
      },
      {
        title: "Asking for help tonight",
        text: "When it's late and you're on your own, ask the way that works for you right then: a text with no data, the app, or a help point if your phone is dead.",
        links: [
          { href: "text.html", label: "By text" },
          { href: "help.html", label: "By app" },
          { href: "help-point.html", label: "At a help point" }
        ]
      },
      {
        title: "A local volunteer gets back to you",
        text: "Within minutes, a volunteer near you rings or texts. If you'd like, they come to you or meet you at a hub. Volunteers are checked, trained and never sent out alone.",
        links: [
          { href: "volunteer.html", label: "What the volunteer sees" },
          { href: "join.html", label: "How volunteers join" },
          { href: "worker.html#rota", label: "Who's on call tonight" }
        ]
      },
      {
        title: "Somewhere to go",
        text: "A hub open late, with tea, a warm seat, phone charging and people to talk to. If nothing is open near you, a volunteer stays on the phone or we find another way.",
        links: [
          { href: "help.html", label: "Find a hub" },
          { href: "rural.html", label: "When there's no one nearby" }
        ]
      },
      {
        title: "The next day",
        text: "Only if you agreed, your support worker hears what happened and can follow up, so you're connected to ongoing support, not just one night. Family hear only if you chose them.",
        links: [
          { href: "worker.html", label: "What the support worker sees" },
          { href: "family.html", label: "What family see" }
        ]
      }
    ],
    behindTitle: "Behind it all",
    behindText: "Local charities share the night between them, on one rota, so someone is always on call. Anonymised totals show where more volunteers are needed. Nothing is ever about one person.",
    behindLinks: [
      { href: "worker.html#rota", label: "Tonight's rota" },
      { href: "coordinator.html", label: "Where help is needed" },
      { href: "privacy.html", label: "What we keep about you" },
      { href: "journey-maps.html", label: "Journey maps for each part" }
    ]
  }
});
