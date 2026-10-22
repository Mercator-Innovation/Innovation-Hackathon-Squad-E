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
    marketing: "I help spread the word",
    marketingHint: "Posters, beer mats and posts that tell people we're here."
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
  },

  // Spreading the word: the campaign, for partners and coordinators. Never mentions drugs or alcohol.
  marketing: {
    title: "Spreading the word",
    intro: "How people find out about Night Neighbours. We offer company, not treatment, so nothing we put up mentions drugs or alcohol.",
    madeUp: "These are example materials. The number 60000 is made up.",
    messageTitle: "Our message",
    message: "Somewhere to go tonight.",
    messageWhy: "The first step is small: text TALK and your town. Someone texts back. No names needed.",
    examplesTitle: "Example materials",
    poster: { label: "Poster for a pub or club toilet", head: "Somewhere to go tonight.", body: "Tea on, telly on, folk to talk to.", cta: "Text TALK and your town to 60000. Free. No names." },
    mat: { label: "Beer mat", front: "Fancy a brew and a chat?", back: "Text TALK and your town to 60000. Someone will text you back." },
    post: { label: "Post in a local Facebook group", name: "Night Neighbours Inverclyde", body: "New in Greenock: the Harbour Room, open till late Thursday to Sunday. Football on, kettle on, no need to book. Just turn up, or text TALK GREENOCK to 60000 and someone will text you back. Pass it on to anyone who'd like the company." },
    radio: { label: "Local radio, 20 seconds", script: "Long night ahead? Nothing on but the telly? Night Neighbours is a warm room, a cuppa and a few folk to talk to, open late near you. Text TALK and your town to 60000. It's free, and you don't need to give your name." },
    card: { label: "Card for people who visit at home", front: "Somewhere to go tonight.", back: "Text TALK and your town to 60000, or ask me for the nearest warm room." },
    whereTitle: "Where we put them",
    whereIntro: "We start where the evidence is strongest, then add the places people already go.",
    colPlace: "Where",
    colWhy: "Why",
    colFirst: "When",
    places: [
      { place: "Local Facebook groups", why: "Facebook reaches most adults online and leans over 35.", when: "First" },
      { place: "People who visit at home: pharmacy drivers, housing officers, nurses", why: "Reaches people who don't go out, from someone they know.", when: "First" },
      { place: "Through the door: housing letters, food bank bags", why: "Reaches people at home, no screen needed.", when: "Next" },
      { place: "Pub and club toilets, beer mats", why: "Private to read. Landlords look after their regulars.", when: "Next" },
      { place: "Pharmacies and GP surgeries", why: "Places people visit often.", when: "Next" },
      { place: "Football clubs, barbers, Men's Sheds", why: "Places men already talk.", when: "Later" },
      { place: "Local radio and YouTube", why: "Wide reach, less targeted.", when: "Later" }
    ],
    partnerTitle: "Asking a partner to help",
    partnerQuestion: "Who are you asking?",
    partners: {
      pub: { button: "A pub or club", ask: "Put a poster in the toilets and beer mats on the tables.", gain: "You look after your regulars, and people see you care about the community." },
      pharmacy: { button: "A pharmacy or GP surgery", ask: "Keep cards at the counter. Drivers hand one over on deliveries.", gain: "Somewhere to point lonely patients when you're closed." },
      housing: { button: "A housing association or council", ask: "Put a card in tenant letters. Housing officers carry a few.", gain: "Support for tenants earlier, before things reach a crisis." },
      football: { button: "A football club", ask: "An ad in the programme and a mention at home games.", gain: "Community work your fans see." }
    },
    askLabel: "What we ask",
    gainLabel: "What's in it for them",
    rulesTitle: "Our rules",
    rules: [
      "Never mention drugs or alcohol. Posters are seen by others, and texts stay on the phone.",
      "Supportive, not an emergency. No \"SOS\" or \"crisis\" in public.",
      "No names needed. We only ask for a town.",
      "Say \"a person who uses drugs\", never \"addict\".",
      "We count totals only, never people."
    ]
  }
};
