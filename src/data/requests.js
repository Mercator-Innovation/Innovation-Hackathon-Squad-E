// Made-up request totals. Never about one person: only counts by area and time.

// Tonight's open requests, as a volunteer would see them (no names).
window.TONIGHT = [
  { town: "Annan", need: "come", milesAway: 1.4, time: "11:12pm",
    source: "help point 214, parcel lockers, Annan station car park" }
];

// The last 4 weeks, by council area. `byTime` follows the time bands in content.js:
// 6pm-8pm, 8pm-10pm, 10pm-midnight, midnight-2am, 2am-4am, 4am-6am.
window.AREA_TOTALS = [
  { area: "Dumfries and Galloway", volunteers: 9,  byTime: [14, 22, 31, 27, 12, 6] },
  { area: "Dundee City",           volunteers: 14, byTime: [25, 39, 52, 47, 21, 9] },
  { area: "Fife",                  volunteers: 20, byTime: [21, 33, 44, 40, 17, 8] },
  { area: "Glasgow City",          volunteers: 42, byTime: [48, 71, 95, 88, 40, 18] },
  { area: "Highland",              volunteers: 4,  byTime: [9, 15, 19, 17, 8, 3] },
  { area: "Inverclyde",            volunteers: 10, byTime: [11, 18, 24, 20, 9, 4] },
  { area: "Scottish Borders",      volunteers: 3,  byTime: [6, 10, 14, 11, 5, 2] }
];

// Flag an area when requests per volunteer go above this.
window.FLAG_LIMIT = 10;
