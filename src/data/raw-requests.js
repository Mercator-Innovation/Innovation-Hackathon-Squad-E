// Made-up raw requests, as a local service would receive them over one week, BEFORE anonymising.
// EVERYTHING HERE IS MADE UP. Names are invented; phone numbers are in 07700 900xxx, the range Ofcom keeps for fiction.
// Generated from the area totals in requests.js, so the two always agree. Loaded after requests.js.
(function () {
  // A seeded random number generator, so the same "random" data appears every time
  let seed = 20261022;
  const rand = () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const pick = (list) => list[Math.floor(rand() * list.length)];
  const pickWeighted = (weights) => {
    const total = weights.reduce((a, b) => a + b, 0);
    let r = rand() * total;
    for (let i = 0; i < weights.length; i++) { r -= weights[i]; if (r < 0) return i; }
    return weights.length - 1;
  };

  const TOWNS = {
    "Aberdeen City": ["Aberdeen"],
    "Argyll and Bute": ["Oban", "Dunoon", "Campbeltown"],
    "City of Edinburgh": ["Edinburgh", "Leith"],
    "Dumfries and Galloway": ["Annan", "Dumfries", "Stranraer"],
    "Dundee City": ["Dundee"],
    "East Ayrshire": ["Kilmarnock", "Cumnock"],
    "Fife": ["Kirkcaldy", "Dunfermline", "Methil"],
    "Glasgow City": ["Glasgow"],
    "Highland": ["Inverness", "Wick", "Thurso"],
    "Inverclyde": ["Greenock", "Port Glasgow"],
    "North Ayrshire": ["Irvine", "Saltcoats"],
    "Scottish Borders": ["Hawick", "Galashiels"],
    "West Dunbartonshire": ["Clydebank", "Dumbarton"]
  };
  const NAMES = ["Jamie", "Sam", "Alex", "Chris", "Lee", "Robbie", "Kerry", "Dee", "Mo", "Stevie", "Ali", "Jo", "Frankie", "Tam", "Kim"];
  const ROUTES = ["app", "text", "help point"];
  const NEEDS = ["talk", "come", "place"];
  // Start hour of each time band in content.js: 6pm, 8pm, 10pm, midnight, 2am, 4am
  const BAND_START = [18, 20, 22, 0, 2, 4];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const rows = [];
  let ref = 1;
  window.AREA_TOTALS.forEach((area) => {
    const week = Math.round(area.byTime.reduce((a, b) => a + b, 0) / 4);   // one week of the 4-week total
    const perVolunteer = week / area.volunteers;
    for (let i = 0; i < week; i++) {
      const band = pickWeighted(area.byTime);
      const hour = (BAND_START[band] + Math.floor(rand() * 2)) % 24;
      const minute = Math.floor(rand() * 60);
      // Busier areas per volunteer wait longer: more requests not answered within 15 minutes
      const slow = rand() < Math.min(0.6, 0.04 + 0.03 * perVolunteer);
      rows.push({
        ref: `P-${String(ref++).padStart(4, "0")}`,
        firstName: pick(NAMES),
        phone: `07700 900${String(Math.floor(rand() * 1000)).padStart(3, "0")}`,
        town: pick(TOWNS[area.area]),
        area: area.area,
        day: pick(days),
        time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
        band,
        route: ROUTES[pickWeighted(area.byRoute)],
        need: pick(NEEDS),
        minutesToAnswer: slow ? 16 + Math.floor(rand() * 30) : 2 + Math.floor(rand() * 12)
      });
    }
  });

  window.RAW_REQUESTS = rows;
})();
