// Words for the "behind the scenes" pages: Jamie's plan, the support worker, becoming a volunteer,
// privacy, and places with no one nearby. Kept in their own file so they don't clash with content.js.
// Load it after content.js. Change the words here, not in the HTML.
Object.assign(window.CONTENT, {
  more: {
    title: "How it works behind the scenes",
    plan: "Make my plan",
    planHint: "You choose who's told, your check-in number and when to check in.",
    worker: "I'm a support worker",
    workerHint: "Hand over at 5pm, and hear about the night the next morning.",
    join: "Become a volunteer",
    joinHint: "Sign up, your free PVG check, training and your local hub.",
    privacy: "What we keep about you",
    privacyHint: "Who sees it, for how long, and how to delete it.",
    rural: "When there's no one nearby",
    ruralHint: "What happens in places with no volunteer or help point."
  },

  plan: {
    title: "Make my plan",
    intro: "You decide who knows what, and when. You can change or stop your plan at any time.",
    example: "We've filled this in as Jamie, to show how it works. All the details are made up.",
    tellTitle: "Who should we tell when you ask for help?",
    tellHint: "We only tell the people you tick. You can leave them all blank.",
    contactName: "Their first name",
    contactHow: "How you know them",
    tellContact: "Tell this person",
    tellWorker: "Tell my support worker what happened, the next morning",
    checkTitle: "Check-ins",
    checkHint: "A check-in tells the people you chose that you're OK. If you miss one, they get a gentle message.",
    checkWhen: "When would you like to check in?",
    checkOptions: ["No check-ins", "Only on nights I choose", "Every night"],
    checkBy: "Check in by",
    checkMissed: "If I miss a check-in",
    missedOptions: ["Text the person I chose", "Ask a volunteer to look in on me", "Both"],
    pinTitle: "Your check-in number",
    pinHint: "4 numbers. Use it at any help point, with no phone. Don't use your bank PIN.",
    pinLabel: "Choose 4 numbers",
    pinAgain: "Type them again",
    save: "Save my plan",
    errorTitle: "There's a problem",
    errorPin: "Your check-in number must be 4 numbers, like 2580.",
    errorMatch: "The two numbers don't match. Type them again.",
    errorName: "Add their first name, or untick 'Tell this person'.",
    doneTitle: "Your plan is saved",
    doneTell: "When you ask for help, we'll tell {who}.",
    doneTellNobody: "When you ask for help, we won't tell anyone else.",
    doneWorker: "Your support worker will hear what happened the next morning.",
    doneNoChecks: "You haven't set up check-ins.",
    doneChecks: "{when}, you'll check in by {time}. If you miss it, we'll {missed}.",
    checkSay: ["", "On nights you choose", "Every night"],
    missedSay: ["text {name}", "ask a volunteer to look in on you", "text {name} and ask a volunteer to look in on you"],
    doneChange: "Change or stop your plan at any time: ask at a hub, tell a volunteer, or text STOP.",
    edit: "Change my plan"
  },

  worker: {
    title: "Support worker",
    madeUp: "Priya and everyone on her list are made up.",
    handoverTitle: "Handing over at 5pm",
    handoverIntro: "Tick anyone tonight's cover should keep an eye on. They only see a first name and your note, and only for people who've agreed.",
    flag: "Pass to tonight's cover",
    noteLabel: "Note for tonight's cover",
    send: "Hand over",
    sent: "Handed over to tonight's cover: {names}.",
    sentNone: "Nobody ticked. Tonight's cover will still answer anyone who asks.",
    rotaTitle: "Tonight's cover",
    rotaIntro: "Local charities share the night, so someone is always on call.",
    morningTitle: "This morning",
    morningIntro: "What happened overnight, for people who agreed to share it with you.",
    others: "{n} more people on your list used Night Neighbours last night but haven't agreed to share. We don't show who.",
    followUp: "I'll follow up",
    followed: "Noted. You're following up with {name}."
  },

  join: {
    title: "Become a volunteer",
    intro: "Be there for someone in your own town, in the evening or at night. You don't need to fix anything: being there is enough.",
    aboutTitle: "About you",
    name: "Your first name",
    town: "Your nearest town",
    chooseTown: "Choose a town",
    when: "When could you help?",
    whenOptions: ["Evenings, 6pm to 10pm", "Late, 10pm to 2am", "Weekends"],
    peer: "I have my own experience of drugs or alcohol, or of supporting someone who does",
    peerHint: "Optional. Peer volunteers are some of the people others trust most.",
    send: "Sign me up",
    errorTitle: "There's a problem",
    errorName: "Add your first name.",
    errorTown: "Choose your nearest town.",
    errorWhen: "Tick at least one time you could help.",
    nextTitle: "Thanks, {name}. Here's what happens next",
    steps: [
      { title: "Your PVG check", text: "You'll need to join the Protecting Vulnerable Groups scheme. It's free for volunteers, and we start it for you." },
      { title: "Training", text: "Listening, keeping yourself safe, first aid, and naloxone (a medicine that reverses an opioid overdose). Example only: the real course is still to design." },
      { title: "Two shadow shifts", text: "Go out with an experienced volunteer twice before you go on your own. You'll always work in pairs at night." },
      { title: "Your hub", text: "" }
    ],
    hub: "Your nearest hub is {hub} in {town}, open {opens} to {closes}.",
    noHub: "There's no hub in {town} yet. You could help us start one."
  },

  privacy: {
    title: "What we keep about you",
    intro: "In plain words: what we keep, who sees it, for how long, and how to get rid of it.",
    proposal: "This is what our prototype proposes. A real service would check it with a data protection expert.",
    rows: [
      { what: "Your phone number", who: "Only the volunteer helping you, and only while they're helping", long: "Until you text STOP or ask us to delete it" },
      { what: "What you asked for and where (like COME at help point 214)", who: "Tonight's volunteer and the on-call coordinator", long: "30 days, then only the total is kept" },
      { what: "Your plan: who to tell, your check-in number and time", who: "Only you can see it. We use it to tell the people you chose", long: "Until you change or stop it" },
      { what: "Notes for your support worker", who: "Your support worker, and only if you agreed", long: "As long as they support you" },
      { what: "Totals by area, like '41 requests in Annan in September'", who: "Councils and local services, to see where help is missing", long: "Kept, but never about one person. Numbers under 10 are hidden" }
    ],
    colWhat: "What we keep",
    colWho: "Who sees it",
    colLong: "For how long",
    neverTitle: "We never",
    never: [
      "Ask why you need help, or whether you use drugs or alcohol",
      "Track your phone. A help point's number tells us where you are",
      "Share anything with the police, your landlord or the job centre, unless someone's life is in danger",
      "Sell or share your details with anyone else"
    ],
    deleteTitle: "Deleting what we keep",
    delete: "Ask at any hub, tell a volunteer, or text STOP then DELETE. The law gives us one month, and we aim to do it within a week."
  },

  rural: {
    title: "When there's no one nearby",
    intro: "Some places have no volunteer on call, no hub open, or no help point. Choose a town to see what happens there tonight.",
    madeUp: "The towns are real. Everything else is made up.",
    townLabel: "Choose a town",
    tonightTitle: "Tonight in {town}",
    volunteerYes: "A volunteer is on call: {name}, about {miles} miles away.",
    volunteerNo: "No volunteer is on call.",
    hubYes: "{hub} is open {opens} to {closes}.",
    hubNo: "No hub here.",
    pointYes: "Help point {id}, {place}.",
    pointNo: "No help point yet.",
    visitYes: "A volunteer walks past it at {time}.",
    visitNo: "No volunteer walks past tonight.",
    allCovered: "{town} is covered tonight. Requests go to the volunteer on call first.",
    insteadTitle: "What we do instead",
    instead: [
      { title: "The out-of-hours support worker rings you", text: "Charities share one on-call worker for the whole area, who rings or texts back within 15 minutes." },
      { title: "A peer listens by phone", text: "If you'd like to talk, a peer volunteer from another town rings you. They don't need to be nearby." },
      { title: "Help points where people already go late", text: "Petrol stations, pubs, rural shops and post offices. The button uses the shop's landline or wifi, so it works with no mobile signal." },
      { title: "A hub on wheels", text: "A van with tea, charging and someone to talk to, parked in small towns on set nights." },
      { title: "The gap is counted", text: "Every request we can't cover locally shows up for the council as a gap, so the next volunteers and hubs go where they're needed." }
    ]
  }
});
