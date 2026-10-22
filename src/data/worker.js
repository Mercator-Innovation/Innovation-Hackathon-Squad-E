// Made-up caseload for Priya, a support worker. First names only, and only people who agreed to share.
window.CASELOAD = [
  { name: "Jamie", town: "Annan", agreed: true, note: "Low this week. Has a check-in plan with his sister." },
  { name: "Dee", town: "Dumfries", agreed: true, note: "New tenancy, no furniture yet. Likes the drop-in." },
  { name: "Ross", town: "Annan", agreed: true, note: "Back from hospital on Monday." },
  { name: "Lorna", town: "Dumfries", agreed: true, note: "" }
];

// Tonight's shared cover. The charity names are made up.
window.ROTA = [
  { from: "5pm", to: "9pm", who: "Annan Outreach Trust", how: "Drop-in at The Lamp Room" },
  { from: "9pm", to: "1am", who: "Solway Night Support", how: "On-call worker and 2 volunteers" },
  { from: "1am", to: "9am", who: "Dumfries and Galloway pooled line", how: "One on-call worker for the whole area" }
];

// What happened overnight, only for people who agreed to share it.
window.OVERNIGHT = [
  { name: "Jamie", time: "11:20pm", what: "Used help point 214 at Annan station. Sam, a volunteer, met him and walked with him to The Lamp Room. Texted OK at 1:05am." },
  { name: "Dee", time: "9:40pm", what: "Texted TALK. A volunteer rang her and they talked for 20 minutes." }
];
window.OVERNIGHT_NOT_SHARED = 2;
