// Made-up request totals. Never about one person: only counts by area and time.

// Tonight's open requests, as a volunteer would see them (no names).
window.TONIGHT = [
  // firstName is only shown to the volunteer after they say yes
  { town: "Annan", need: "come", milesAway: 1.2, time: "11:12pm", firstName: "Jamie",
    source: "help point 214, parcel lockers, Annan station car park" }
];

// The last 4 weeks, by council area. The areas are real; every number is made up.
// `byTime` follows the time bands in content.js:
//   6pm-8pm, 8pm-10pm, 10pm-midnight, midnight-2am, 2am-4am, 4am-6am.
// `byRoute` is how people asked: [app, text, help point]. It must add up to the same total as byTime.
// Rural areas lean on text and help points; cities use the app more.
window.AREA_TOTALS = [
  { area: "Aberdeen City",         volunteers: 15, byTime: [17, 27, 36, 33, 14, 6],  byRoute: [57, 58, 18] },
  { area: "Argyll and Bute",       volunteers: 2,  byTime: [4, 8, 10, 9, 4, 1],     byRoute: [6, 25, 5] },
  { area: "City of Edinburgh",     volunteers: 30, byTime: [30, 46, 62, 57, 25, 11], byRoute: [111, 92, 28] },
  { area: "Dumfries and Galloway", volunteers: 9,  byTime: [14, 22, 31, 27, 12, 6],  byRoute: [30, 58, 24] },
  { area: "Dundee City",           volunteers: 14, byTime: [25, 39, 52, 47, 21, 9],  byRoute: [81, 84, 28] },
  { area: "East Ayrshire",         volunteers: 6,  byTime: [12, 19, 26, 23, 10, 5],  byRoute: [27, 49, 19] },
  { area: "Fife",                  volunteers: 20, byTime: [21, 33, 44, 40, 17, 8],  byRoute: [62, 74, 27] },
  { area: "Glasgow City",          volunteers: 42, byTime: [48, 71, 95, 88, 40, 18], byRoute: [162, 151, 47] },
  { area: "Highland",              volunteers: 4,  byTime: [9, 15, 19, 17, 8, 3],    byRoute: [14, 44, 13] },
  { area: "Inverclyde",            volunteers: 10, byTime: [11, 18, 24, 20, 9, 4],   byRoute: [31, 41, 14] },
  { area: "North Ayrshire",        volunteers: 11, byTime: [13, 20, 27, 24, 11, 5],  byRoute: [33, 50, 17] },
  { area: "Scottish Borders",      volunteers: 3,  byTime: [6, 10, 14, 11, 5, 2],    byRoute: [9, 30, 9] },
  { area: "West Dunbartonshire",   volunteers: 9,  byTime: [10, 16, 21, 19, 8, 4],   byRoute: [25, 39, 14] }
];

// Flag an area when requests per volunteer go above this.
window.FLAG_LIMIT = 10;
