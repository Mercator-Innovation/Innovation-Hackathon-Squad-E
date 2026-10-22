// Words for "Walk me home": company and check-ins on the way, without tracking anyone.
// Keep in line with the privacy page: we never track your phone. Load after content.js.
Object.assign(window.CONTENT, {
  walk: {
    homeTitle: "Walk me home",
    homeHint: "Company on the way, and a check-in now and then. No tracking.",

    title: "Walk me home",
    intro: "We'll keep you company on the way. Every few minutes we'll ask if you're OK. Tap one button to say yes.",
    noTracking: "We don't track where you are. If you miss a check-in, we only know where you said you were going.",
    demoNote: "This is a test version. Minutes go by in seconds so you can try it.",

    whereLabel: "Where are you going?",
    places: ["Home", "The hub", "A friend's place", "Somewhere else"],
    howLongLabel: "About how long will it take?",
    times: [10, 20, 30, 45],
    minutes: "{n} minutes",
    whoLabel: "If you miss a check-in, who should we tell?",
    whoOptions: [
      { value: "volunteer", label: "A volunteer near me" },
      { value: "family", label: "Someone in my family" },
      { value: "worker", label: "Our night support worker" }
    ],
    companyLabel: "Would you like some company on the phone too?",
    companyYes: "Yes, a volunteer can ring me and chat while I walk",
    start: "Start my walk",

    walkingTitle: "Walking to: {place}",
    timeLeft: "About {n} minutes to go",
    nextCheck: "Next check-in in {n} minutes",
    companyOn: "{name}, a volunteer, will ring you in a minute for a chat while you walk.",
    checkTitle: "Are you OK?",
    checkText: "Tap if you're OK. Or tap the other button if you'd like someone.",
    ok: "I'm OK",
    wantSomeone: "I'd like someone now",
    okThanks: "Thanks. We'll check again in a few minutes.",
    missedOnce: "We didn't hear from you. We'll ask once more.",
    missedTwice: "We still haven't heard from you, so we've told {who} where you said you were going. They'll try to reach you.",
    someoneSent: "Thanks. {who} will ring you now. Keep walking where it's lit if you can.",
    home: "I'm there",
    homeDone: "Glad you got there. We've stopped the check-ins and let anyone you chose know.",
    stop: "Stop the walk",
    stopped: "Walk stopped. No more check-ins.",
    textTitle: "No data? Do it by text",
    textHow: "Text WALK and how many minutes to 60000, like WALK 20. Reply OK to each check-in. Text HOME when you're there.",
    whoWords: { volunteer: "a volunteer near you", family: "your family contact", worker: "our night support worker" }
  }
});
