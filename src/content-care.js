// Words for two things the challenge asks about:
// 1. Looking after volunteers after a hard night ("Safety and risk").
// 2. "Did it help?", so services learn what works, not just where people ask.
// Kept in their own file so they don't clash with content.js. Load it after content.js.
Object.assign(window.CONTENT, {
  care: {
    // Volunteer, after saving how it went
    youTitle: "And how are you?",
    youIntro: "Being there for someone can be hard. It's OK if tonight was.",
    youOptions: [
      { value: "fine", label: "I'm fine" },
      { value: "hard", label: "That was a hard one" },
      { value: "talk", label: "I'd like to talk to someone now" }
    ],
    youSend: "Tell us",
    youReplies: {
      fine: "Good. Get home safe, and text your partner when you're in.",
      hard: "Thank you for being there. The on-call coordinator will ring you tomorrow for a chat. There's no rush to go out again.",
      talk: "The on-call coordinator will ring you in the next 10 minutes. You don't have to be OK."
    },
    supportTitle: "Support for you",
    support: [
      "A short check-in from the coordinator after every night you go out.",
      "A get-together with other volunteers each month, to talk about the hard ones.",
      "Free, confidential counselling if you need it. Example only: a real service would arrange this."
    ],
    breakTitle: "Need a break?",
    breakText: "Take as long as you need. We won't send you any requests until you come back.",
    breakButton: "Take a break for 7 days",
    breakOn: "You're on a break. No requests until {date}. Come back sooner any time.",
    breakOff: "Come back now",
    breakBack: "Welcome back. You'll get requests again from tonight.",

    // The planner: did it help?
    helpedTitle: "Did it help?",
    helpedIntro: "After someone texts OK, we ask one anonymous question: did tonight help? Last 4 weeks, made-up numbers.",
    helpedLabels: { yes: "Yes", bit: "A bit", no: "No" },
    helpedOf: "{n} people answered, out of {asked} who were asked.",
    noTitle: "When it didn't help, people said",
    volunteersTitle: "Looking after volunteers",
    volunteerFacts: [
      "{debriefs} volunteers asked to talk after a hard night. All were rung back.",
      "{breaks} volunteers are taking a break.",
      "{nights} nights covered, out of {total}."
    ]
  },

  // The text conversation: one anonymous question after OK
  textCare: {
    ask: "One question, and it's anonymous: did tonight help? Reply YES, A BIT or NO.",
    thanks: "Thank you. That helps us get better. Text HELP any time, day or night.",
    no: "Sorry it didn't help. Reply with one thing we could do better, or just ignore this. Text HELP any time.",
    noThanks: "Thank you for telling us. We read every one."
  }
});
