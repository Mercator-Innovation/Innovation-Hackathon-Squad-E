// Synthetic sample data for the prototype. Sruthi James, Ctrl-Alt-Elite, 22 October.
// EVERYTHING HERE IS MADE UP. No real people, hubs or services. Towns are real places in East Ayrshire, with approximate locations.
// Ready to move to src/data/ once the first version is in main: the page loads it with <script src="data/sample-data.js"></script>.
window.DATA = {
  tonight: "2026-10-22",

  hubs: [
    { id: "hub-1", name: "Riverside Hub", town: "Cumnock", address: "12 Bridge St", lat: 55.455, lng: -4.265, opens: "18:00", closes: "02:00", whatsOn: "Pool night, soup and a chat", charging: true, overnightBeds: 2, staff: "1 support worker and 2 volunteers" },
    { id: "hub-2", name: "The Kettle", town: "Kilmarnock", address: "4 Portland Rd", lat: 55.611, lng: -4.495, opens: "17:00", closes: "07:00", whatsOn: "Open all night, film from 21:00", charging: true, overnightBeds: 4, staff: "2 support workers and 3 volunteers" },
    { id: "hub-3", name: "Hilltop Café", town: "Dalmellington", address: "Main St community hall", lat: 55.322, lng: -4.399, opens: "18:00", closes: "23:00", whatsOn: "Walk and talk group at 19:00", charging: true, overnightBeds: 0, staff: "2 volunteers" },
    { id: "hub-4", name: "Ayr Night Space", town: "Ayr", address: "20 Sandgate", lat: 55.462, lng: -4.632, opens: "19:00", closes: "03:00", whatsOn: "Peer support circle at 20:00", charging: true, overnightBeds: 3, staff: "1 support worker and 2 peer volunteers" }
  ],

  helpPoints: [
    { id: "214", place: "Parcel lockers, Main St shop", town: "Cumnock", lat: 55.456, lng: -4.262, open24h: true, charging: true, button: true },
    { id: "215", place: "Parcel lockers, petrol station", town: "Cumnock", lat: 55.449, lng: -4.271, open24h: true, charging: true, button: true },
    { id: "301", place: "Parcel lockers, supermarket car park", town: "Kilmarnock", lat: 55.607, lng: -4.501, open24h: false, closes: "22:00", charging: true, button: true },
    { id: "402", place: "Parcel lockers, railway station", town: "Dalmellington", lat: 55.323, lng: -4.398, open24h: true, charging: true, button: false },
    { id: "510", place: "Parcel lockers, 24-hour shop", town: "Ayr", lat: 55.459, lng: -4.626, open24h: true, charging: true, button: true }
  ],

  // First names only. Every volunteer is fictional.
  volunteers: [
    { id: "v1", firstName: "Mo", town: "Cumnock", type: "Peer volunteer", pvgChecked: true, naloxoneTrained: true, onShiftTonight: true, shift: "20:00–02:00" },
    { id: "v2", firstName: "Elaine", town: "Cumnock", type: "Community volunteer", pvgChecked: true, naloxoneTrained: true, onShiftTonight: true, shift: "18:00–00:00" },
    { id: "v3", firstName: "Craig", town: "Kilmarnock", type: "Peer volunteer", pvgChecked: true, naloxoneTrained: true, onShiftTonight: true, shift: "22:00–04:00" },
    { id: "v4", firstName: "Aisha", town: "Kilmarnock", type: "Community volunteer", pvgChecked: true, naloxoneTrained: false, onShiftTonight: false, shift: null },
    { id: "v5", firstName: "Tam", town: "Dalmellington", type: "Peer volunteer", pvgChecked: true, naloxoneTrained: true, onShiftTonight: true, shift: "19:00–23:00" },
    { id: "v6", firstName: "Grace", town: "Ayr", type: "Community volunteer", pvgChecked: false, naloxoneTrained: false, onShiftTonight: false, shift: null, note: "PVG check in progress, can't take requests yet" }
  ],

  // Tonight's requests. No names: each person is a reference number only. P-0117 is our persona Jamie.
  requests: [
    { id: "r1", time: "19:42", code: "HUB", via: "text", helpPoint: null, town: "Kilmarnock", person: "P-0093", status: "done", outcome: "Sent to The Kettle" },
    { id: "r2", time: "21:10", code: "TALK", via: "app", helpPoint: null, town: "Ayr", person: "P-0150", status: "done", respondedBy: "Ayr Night Space", minutesToRespond: 6, outcome: "Talked for 20 mins, joined the peer circle" },
    { id: "r3", time: "22:05", code: "TALK", via: "text", helpPoint: "402", town: "Dalmellington", person: "P-0088", status: "done", respondedBy: "v5", minutesToRespond: 4, outcome: "Rang back, walked to Hilltop Café" },
    { id: "r4", time: "23:20", code: "COME", via: "text", helpPoint: "214", town: "Cumnock", person: "P-0117", status: "in progress", respondedBy: "v1", minutesToRespond: 3, outcome: "Mo on the way. Karen told, as Jamie chose", toldContacts: ["Karen (sister)"] },
    { id: "r5", time: "23:48", code: "COME", via: "button", helpPoint: "301", town: "Kilmarnock", person: "P-0201", status: "waiting", respondedBy: null, minutesToRespond: null, outcome: "Help point closed at 22:00, button still works. Alert passed to Craig" },
    { id: "r6", time: "00:35", code: "OK", via: "text", helpPoint: null, town: "Ayr", person: "P-0150", status: "done", outcome: "Closed, thanked" }
  ],

  // Anonymised totals for the council view. Counts only, never anything about one person.
  areaTotals: [
    { town: "Cumnock", month: "2026-09", requests: 41, eveningRequests: 33, eveningHubs: 1, medianMinutesToRespond: 7 },
    { town: "Kilmarnock", month: "2026-09", requests: 68, eveningRequests: 49, eveningHubs: 1, medianMinutesToRespond: 9 },
    { town: "Dalmellington", month: "2026-09", requests: 19, eveningRequests: 17, eveningHubs: 1, medianMinutesToRespond: 12 },
    { town: "Ayr", month: "2026-09", requests: 57, eveningRequests: 38, eveningHubs: 1, medianMinutesToRespond: 6 },
    { town: "New Cumnock", month: "2026-09", requests: 14, eveningRequests: 13, eveningHubs: 0, medianMinutesToRespond: 21 },
    { town: "Auchinleck", month: "2026-09", requests: 22, eveningRequests: 18, eveningHubs: 0, medianMinutesToRespond: 15 }
  ]
};
