// Words for "Refer someone": for NHS, ambulance, social work and care staff.
// Kept in their own file so they don't clash with content.js. Load it after content.js.
// The rule: professionals can pass people in, but the person decides. Nothing about them comes back.
Object.assign(window.CONTENT, {
  refer: {
    homeTitle: "I work in health, care or social work",
    homeHint: "Refer someone, with their agreement.",

    title: "Refer someone",
    intro: "For ambulance crews, hospital and GP staff, social workers, care workers and pharmacists. Use it when someone is going home alone tonight and could do with company.",
    notEmergency: "This isn't an emergency service. If someone's life is in danger, call 999.",
    madeUp: "This is a prototype. Don't type in anyone's real details.",

    roleQuestion: "What's your role?",
    roles: ["Ambulance crew", "Hospital or A&E", "GP or community health", "Social worker", "Care worker", "Pharmacy", "Other"],
    chooseRole: "Choose your role",
    roleError: "Choose your role.",
    next: "Next",
    back: "Back",

    howQuestion: "How would you like to help them?",
    howCode: "Give them the code",
    howCodeHint: "Nothing is shared. They text us if and when they want to.",
    howAsk: "Ask a volunteer to get in touch",
    howAskHint: "Only if they've said yes. They'll get a text to check first.",

    codeTitle: "Give them this",
    codeCard: "Night Neighbours. Someone nearby when it's late and you're on your own. Text TALK and your town to 60000. Free, no data needed.",
    codeHowTo: "Read it out, show this screen, or give them a wallet card.",
    codeNothing: "We don't know who you gave it to, and we won't tell you if they get in touch.",

    askTitle: "Ask a volunteer to get in touch",
    consentLabel: "They've agreed to us texting them about this",
    consentError: "Ask them first. We only get in touch with people who've said yes.",
    nameLabel: "What should we call them?",
    nameHint: "First name or a nickname is fine.",
    nameError: "Add a first name or nickname.",
    phoneLabel: "Their mobile number",
    phoneHint: "Prototype: use a made-up number like 07700 900123.",
    phoneError: "Add their mobile number.",
    townLabel: "Their nearest town",
    chooseTown: "Choose a town",
    townError: "Choose their nearest town.",
    whenQuestion: "When would help most?",
    whenOptions: ["Tonight", "Tomorrow evening", "They'll text when they're ready"],
    noteLabel: "Anything a volunteer should know (optional)",
    noteHint: "Keep it short and practical, like 'lives alone, no transport'. No diagnoses or medical details.",
    send: "Send referral",
    errorTitle: "There's a problem",

    doneTitle: "Referral sent",
    doneText: "We've texted {name} to check they still want this. Nothing happens unless they reply YES.",
    doneVolunteer: "If they do, {volunteer}, a volunteer near {town}, will get in touch {when}.",
    doneNoVolunteer: "If they do, the out-of-hours support worker will get in touch {when}.",
    doneWhenReady: "If they do, they'll get the code to text whenever they're ready.",
    whenWords: { "Tonight": "tonight", "Tomorrow evening": "tomorrow evening" },
    whatYouHear: "What you'll hear back",
    hearText: "Only that the referral was received. We won't tell you whether they replied, or anything else about them, unless they ask us to.",
    theirText: "The text they'll get",
    theirSms: "Hi {name}, someone looking after you today asked if you'd like a Night Neighbour to get in touch {when}. Reply YES or NO. Free.",
    another: "Refer someone else"
  }
});
