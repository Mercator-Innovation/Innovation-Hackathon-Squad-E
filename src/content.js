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
    text: "Ask by text, on any phone",
    textHint: "No app, no data, low battery? Try it here.",
    helpPoint: "See a help point",
    helpPointHint: "The screen at a community help point, for anyone without a phone.",
    coordinator: "I plan local support",
    coordinatorHint: "See where and when help is needed. No names, only totals.",
    family: "Someone I care about uses Night Neighbours",
    familyHint: "What you see if they ask for help or miss a check-in.",
    outreach: "Get the word out",
    outreachHint: "A wallet card and a poster, for people who aren't online."
  },

  // Cards and posters. They never say "drugs", so a card is safe to keep in a wallet.
  outreach: {
    title: "Get the word out",
    intro: "Most people who need Night Neighbours won't find it online. These go where they already are.",
    cardTitle: "Wallet card",
    cardNote: "Credit-card size. In naloxone kits, pharmacy bags and hostel welcome packs.",
    cardFront: "Front",
    cardBack: "Back",
    cardTagline: "Someone nearby when it's late and you're on your own.",
    cardTextLine: "Text TALK and your town to",
    cardFree: "Free. No data needed. Day or night.",
    cardNoPhone: "No phone? Go to a help point at the parcel lockers. Charge up, press a button.",
    cardPin: "My check-in number:",
    cardWho: "Who to tell:",
    posterTitle: "Poster",
    posterNote: "For pharmacies, bus stops, GP surgeries, hostels and the shops by the help points. Tear off a strip and keep it.",
    posterHeadline: "Late, and on your own?",
    posterBody: "Local people who've signed up to help. Someone to talk to, someone to come to you, or a warm place to go tonight.",
    posterText: "Text TALK and your town to",
    posterFamily: "Worried about someone? Text TALK too. Families get support as well.",
    tearOff: "Night Neighbours: text TALK to 60000",
    whereTitle: "Where they go",
    where: [
      { who: "People who might need help", places: "Wallet cards in naloxone kits and pharmacy bags. Posters at needle exchanges, food banks, hostels and the job centre. Cards handed out when leaving hospital or prison." },
      { who: "Through people they trust", places: "Peer workers and volunteers hand out cards and tell people face to face. That builds the trust posters can't." },
      { who: "At the help points", places: "The locker screen shows Night Neighbours when no one is using it, with a poster in the shop next door." },
      { who: "Families and friends", places: "GP surgeries, schools, churches, community councils, local radio and local Facebook groups." },
      { who: "Everyone else", places: "Bus stops, beer mats, the back of shop receipts. The number, everywhere." }
    ]
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

  // Ask by text: for people with a basic phone, no data or low battery.
  // Replies never say "drugs" or "overdose", in case someone else sees the phone, and each fits in one text.
  text: {
    title: "Ask by text, on any phone",
    intro: "No app and no data. It works on an old phone with a low battery. Text a word and your town.",
    demoNote: "Try it below. Nothing is really sent, and the number, names and places are made up.",
    signal: "Weak signal",
    noData: "No data",
    thread: "Messages with 60000",
    messageLabel: "Type a text",
    send: "Send",
    tryTitle: "Try a code",
    townLabel: "Pretend you're near",
    youSent: "You sent:",
    theySent: "Night Neighbours sent:",
    size: "{n} of 160 characters: 1 text",
    replies: {
      welcome: "Night Neighbours: text TALK, COME, BED or OK and your town, like TALK ANNAN. Free, day or night. In danger? Call 999.",
      whichTown: "Thanks. Which town are you near? Text the word again with your town, like TALK ANNAN.",
      talk: "Thanks for texting. {name}, a volunteer, will ring you in the next 10 mins. Can't talk? Reply TXT and {name} will text instead.",
      txt: "OK. {name} will text you instead. Reply OK when you're alright.",
      come: "Got it. {name} is on the way to you in {town}. Reply with where you are, like a street or shop. In danger? Call 999.",
      where: "Thanks. {name} will meet you there soon. Stay where it's lit if you can. Reply OK if you're alright now.",
      bed: "Open tonight: {hub}, {town}, till {closes}. Tea and a warm seat. Reply COME and a volunteer can walk there with you.",
      noHub: "Sorry, nothing's open near you tonight. Reply TALK and someone will ring you. In danger? Call 999.",
      noVolunteer: "Sorry, no volunteer is free near you right now. The out-of-hours support worker will text you soon. In danger? Call 999.",
      ok: "Glad you're OK. We've let anyone you chose know. Text TALK, COME or BED any time, day or night.",
      stop: "You won't get any more texts from us. Text TALK any time to start again.",
      unknown: "Sorry, we didn't get that. Text TALK, COME, BED or OK and your town, like TALK ANNAN."
    }
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
    startAgain: "Start again",
    nextVisit: "A volunteer walks past here next at {time}.",
    noVisit: "No volunteer walks past here tonight. Press a button above and someone will come.",
    checkInTitle: "Checking in tonight?",
    checkInIntro: "If you've agreed to check in, type your number. We'll let the people you chose know you're OK.",
    pinLabel: "Your 4-digit number",
    pinHint: "Prototype: try 1234.",
    checkIn: "Check in",
    // This shows on a public screen, so never show names here.
    checkedIn: "Thanks, you're checked in. We've let the people you chose know you're OK.",
    pinWrong: "We don't recognise that number. Check it and try again, or press a button above.",
    pinEmpty: "Type your 4-digit number first."
  },

  family: {
    title: "Someone you care about",
    smsLabel: "The text you'd get",
    sms: "{name} hasn't checked in tonight. It might be nothing. Reply CALL to talk to someone, or COME to ask a volunteer to look in on him.",
    alertTitle: "{name} hasn't checked in tonight",
    alert: "{name} agreed to check in by {checkBy}. It's now {now} and he hasn't. It might be nothing: his phone may just be flat.",
    whyYou: "{name} set this up himself and chose you. He can change it at any time.",
    whatQuestion: "What would you like to do?",
    lookIn: "Ask a volunteer to look in on him",
    callMe: "Call me back",
    heardFrom: "I've heard from him, he's OK",
    lookInSent: "Thanks. {volunteer}, a volunteer near {town}, will look in on {name} and text you when they've seen him.",
    callMeSent: "The out-of-hours support worker will ring you in the next few minutes.",
    heardSent: "Thanks for letting us know. We've closed tonight's check-in.",
    forYouTitle: "Support for you",
    forYou: "Worried, or just need to talk? Text TALK to 60000 any time, day or night. (This is a made-up number.)"
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
    done: "Thank you. We only keep the totals, never who it was.",
    walkTitle: "Your walk tonight",
    walkIntro: "You and {partner} walk past these help points, so people without a phone know someone's coming.",
    walkStop: "{time}: help point {id}, {place}",
    walkCheck: "Mark as checked",
    walkChecked: "Checked"
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
    gapsTitle: "Help points no one walks past tonight",
    gapsIntro: "People without a phone rely on a volunteer walking past. These help points have no walk tonight.",
    noGaps: "Every help point has a volunteer walk tonight.",
    bands: ["6pm to 8pm", "8pm to 10pm", "10pm to midnight", "Midnight to 2am", "2am to 4am", "4am to 6am"]
  }
};
