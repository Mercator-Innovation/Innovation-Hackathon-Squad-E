// The words people see, in one place. Change the words here, not in the HTML.
// {curly} bits are filled in by the code, so keep them.
window.CONTENT = {
  service: {
    name: "Night Neighbours",
    tagline: "Someone nearby when it's late and you're on your own.",
    prototypeNote: "This is a prototype. All the people, places and numbers in it are made up."
  },

  safety: {
    emergency: "If someone isn't breathing normally, can't be woken up, or their life is in danger, call 999 now."
  },

  home: {
    intro: "Local people who've signed up to help, and warm places to go, in the evening and at night.",
    choose: "Who are you?",
    help: "I'd like some company or someone to talk to",
    helpHint: "Ask by app or by text. No data needed.",
    volunteer: "I'm a volunteer",
    volunteerHint: "See requests near you tonight.",
    helpPoint: "See a help point",
    helpPointHint: "The screen at a community help point, for anyone without a phone.",
    coordinator: "I plan local support",
    coordinatorHint: "See where and when help is needed. No names, only totals."
  },

  // Text codes work from any phone, with no data. Shown on the help page and the help point.
  codes: {
    title: "Or text a code to 60000",
    intro: "Works on any phone, with no data. Add your town, like TALK ANNAN. (This is a made-up number.)",
    list: [
      { code: "TALK", means: "I'd like someone to talk to" },
      { code: "COME", means: "Please come to me" },
      { code: "BED", means: "I need somewhere to stay tonight" },
      { code: "OK", means: "I'm alright now, thanks" }
    ]
  },

  helpPoint: {
    title: "Community help point",
    where: "Help point {id}, {place}",
    intro: "You're not on your own. Press a button and someone nearby will come or call.",
    charging: "Charge your phone here, free. Plug in below the screen.",
    needQuestion: "What would help?",
    sent: "Thanks. {who} will be here in about {minutes} minutes. You can wait here, it's lit and warm.",
    sentWorker: "Thanks. The out-of-hours support worker will call this help point in a few minutes.",
    sentPlace: "Thanks. {hub} is open until {closes}. It's {walk} minutes' walk. {who} will meet you there.",
    sentNoHub: "Thanks. There's no hub open nearby tonight, so {who} will come to you here.",
    aVolunteer: "A volunteer",
    startAgain: "Start again"
  },

  help: {
    title: "Get some company tonight",
    needQuestion: "What would help right now?",
    needTalk: "Someone to talk to",
    needCome: "Someone to come to me",
    needPlace: "Somewhere to stay tonight",
    whereQuestion: "Where are you?",
    townLabel: "Your nearest town",
    chooseTown: "Choose a town",
    shareLocation: "Use my location",
    locationShared: "Got it. You're near {town}.",
    pickTown: "Choose your nearest town first.",
    next: "Next",
    back: "Back",
    whoQuestion: "Who should we tell?",
    contactQuestion: "Who should get in touch with you tonight?",
    contactVolunteer: "A volunteer near me",
    contactWorker: "The out-of-hours support worker",
    alsoQuestion: "Who else should know?",
    whoHint: "You choose. We only tell the people you tick. You can leave them all blank.",
    tellFamily: "Someone in my family",
    tellWorker: "My support worker",
    tellMorning: "Tell my support worker what happened, tomorrow morning",
    send: "Ask for help",
    doneTitle: "Help is on its way",
    doneVolunteer: "{name}, a volunteer about {miles} miles away, will text you in the next few minutes.",
    doneNoVolunteer: "We've asked the out-of-hours support worker to text you in the next few minutes.",
    doneTold: "We've also let {who} know.",
    doneHub: "When you're ready, {name} can walk with you to the hub.",
    doneMorning: "Tomorrow morning, your support worker will hear what happened. You can change your mind before then.",
    whoFamily: "your family contact",
    whoWorker: "your support worker",
    and: "and",
    waitTitle: "While you wait",
    waitTips: [
      "Stay where you are, or go to the hub below if you'd like company.",
      "Keep your phone on and charging if you can.",
      "It can take a few minutes. You don't need to do anything else."
    ],
    updateTitle: "Let us know how you are",
    imOk: "I'm OK now",
    noReply: "Nobody's been in touch yet",
    okSent: "Thanks for telling us. We've let the people helping you know you're OK. You can ask again any time.",
    noReplySent: "Sorry for the wait. We've asked the out-of-hours support worker to text you as well.",
    hubTitle: "Open near you tonight",
    hubHours: "Open {opens} to {closes}",
    noHub: "There's no hub open near you tonight.",
    startAgain: "Start again"
  },

  volunteer: {
    title: "Tonight's requests",
    newRequest: "New request",
    requestSummary: "Someone near {town} would like {need}.",
    needs: {
      talk: "someone to talk to",
      come: "someone to come to them",
      place: "somewhere to stay tonight"
    },
    from: "Asked from: {source}.",
    distance: "About {miles} miles from you. Asked at {time}.",
    privacy: "You'll only see their first name and a way to text them if you say yes.",
    accept: "I can help",
    decline: "Not right now",
    declined: "That's fine. We'll ask someone else nearby.",
    safetyTitle: "Before you go",
    safetyChecks: [
      "Meet in a public place or at the hub, not in their home.",
      "Tell the on-call coordinator you're going.",
      "Check they're awake and breathing normally. If not, call 999.",
      "You don't have to fix anything. Being there is enough."
    ],
    backup: "Call for backup",
    backupSent: "The on-call coordinator knows and will phone you now.",
    escalate: "They need more help",
    escalateSent: "We've asked the out-of-hours support worker to phone them.",
    finish: "I've finished",
    finishTitle: "How did it go?",
    outcomes: ["They're OK now", "We went to the hub", "They needed more help"],
    save: "Save",
    done: "Thank you. We only keep the totals, never who it was."
  },

  coordinator: {
    title: "Where help is needed",
    intro: "Requests from the last 4 weeks, by area. No names, only totals. Numbers under 10 are hidden so no one can be recognised.",
    madeUp: "All these numbers are made up.",
    tableCaption: "Requests and volunteers by area, last 4 weeks",
    colArea: "Area",
    colRequests: "Requests",
    colVolunteers: "Volunteers",
    colPer: "Requests per volunteer",
    colStatus: "Status",
    needsMore: "Needs more volunteers",
    covered: "Covered",
    why: "An area is flagged when there are more than {limit} requests per volunteer. A person checks every flag before anything changes.",
    areaLabel: "Show the times for",
    timesTitle: "When people ask for help",
    fewer: "fewer than 10",
    bands: ["6pm to 8pm", "8pm to 10pm", "10pm to midnight", "Midnight to 2am", "2am to 4am", "4am to 6am"]
  }
};
