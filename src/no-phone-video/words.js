// Words for the "No phone, no problem" video, in English, Welsh (cy) and Scottish Gaelic (gd).
// The video follows the prototype's language switch (?lang=cy, or the language chosen last time).
// DRAFT translations by Claude: they must be checked by a fluent speaker before anyone relies on them.
// Text codes (TALK, COME, BED) and the name Night Neighbours stay in English, as on the rest of the prototype.
// The voiceover is English only (Jamie, a Mac voice): there are no Welsh or Gaelic voices on the Mac.
// In the headlines, <b> marks the words shown in the lamp colour.
window.VIDEO_WORDS = {
  en: {
    ui: {
      title: "Night Neighbours: no phone, no problem",
      start: "Help for people with no phone, a dead battery or no smartphone",
      playSound: "Play with sound", playQuiet: "Play without sound",
      back: "Back", play: "Play", pause: "Pause", next: "Next", again: "Play again",
      soundOn: "Sound on", soundOff: "Sound off", ccOn: "Captions on", ccOff: "Captions off",
      note: "About 2 minutes. Everything here is made up: the people, places and help points. Space pauses, arrows move between scenes.",
      script: "Read the full script", language: "Language", scene: "Scene",
      home: "Back to Night Neighbours", draft: "", voiceNote: ""
    },
    lines: [
      "It's two in the morning. Jamie's feeling low, and he's on his own. And then, his phone dies.",
      "Most support closes at five o'clock. But the night is often when people feel most alone.",
      "And not everyone has a smartphone. Some people have no phone at all. Some have an old phone, with no data, or nowhere to charge it.",
      "If help only lives in an app, the people who need it most can't always reach it.",
      "So Night Neighbours brings help to the places people already go. Like the supermarket that's open late.",
      "By the parcel lockers, there's a community help point. It's there all night, and it's free.",
      "Jamie can charge his phone here. And if he has no phone at all, he can take one, already charged, kindly donated by people like you.",
      "Any phone will do, even an old one. He just texts one word. TALK, if he'd like someone to talk to. COME, if he'd like someone to come. Or BED, for somewhere to stay. No data needed.",
      "Or, he can simply press one big button. No account. No password. No forms.",
      "It's made for everyone. Big buttons, and plain words. Pictures, as well as text. It can read out loud. And nothing private is ever shown on screen.",
      "A trained Night Neighbour nearby gets the message. They'll come to Jamie, or walk with him to the local hub, which stays open late.",
      "Night Neighbours is here to support you, not to replace emergency services. If someone's life is in danger, please always call 999.",
      "Tonight, Jamie has someone to talk to, and somewhere warm to be. He's not on his own.",
      "Night Neighbours is powered by people like you. Give a few hours a month. We'll train you, and link you to your local hub.",
      "Or donate an old phone, or help keep a help point charged and running.",
      "Be someone's Night Neighbour. Volunteer, donate, and help spread the word. Thank you."
    ],
    heads: [
      "2am. Battery: <b>0%</b>", "Most help closes at <b>5pm</b>", "Not everyone has a <b>smartphone</b>",
      "An app alone leaves people <b>behind</b>", "Help where people <b>already go</b>", "A community <b>help point</b>",
      "Charge up, or <b>take a phone</b>", "Any phone. <b>No data.</b>", "One button. <b>No login.</b>",
      "Made for <b>everyone</b>", "A neighbour is <b>on the way</b>", "Support, not an <b>emergency</b>",
      "Tonight, Jamie <b>isn't alone</b>", "Be a <b>Night Neighbour</b>", "Donate a phone. <b>Fund a help point.</b>", ""
    ],
    art: {
      lowBattery: "Low battery", supportCentre: "Support centre", open95: "Open 9 to 5", closed: "CLOSED",
      noPhone: "No phone", noData: "No data", oldPhone: "Old phone", nowhere: "Nowhere to charge", appOnly: "App only",
      shop: "SUPERMARKET · OPEN LATE", notOk: "Not OK tonight?", bb1: "Help point by the", bb2: "parcel lockers.", free: "Free · all night",
      helpPoint: "HELP POINT", openAllNight: "open all night", donated: "Donated phones", chargedFree: "charged · free to take",
      talk: "someone to talk to", come: "someone to come", bed: "somewhere to stay", nd1: "No data", nd2: "needed",
      helpButton: "HELP", noAccount: "No account", noPassword: "No password", noForms: "No forms",
      bigButtons: "Big buttons", plainWords: "Plain words", pictures: "Pictures", readsAloud: "Reads aloud", private: "Private",
      hub: "Local hub · open late", onMyWay: "On my way", support1: "Night Neighbours is support,", support2: "not an emergency service.",
      call999: "Danger to life? Call 999", volunteer: "Volunteer", oldPhones: "Old phones", hp: "Help point", keptRunning: "kept running",
      end1: "Be someone's", end2: "Night Neighbour", pill1: "Volunteer", pill2: "Donate", pill3: "Spread the word",
      footer: "A prototype by Ctrl-Alt-Elite. All people and places are made up."
    }
  },

  cy: {
    ui: {
      title: "Night Neighbours: dim ffôn, dim problem",
      start: "Help i bobl heb ffôn, gyda batri fflat, neu heb ffôn clyfar",
      playSound: "Chwarae gyda llais Saesneg", playQuiet: "Chwarae heb sain",
      back: "Yn ôl", play: "Chwarae", pause: "Saib", next: "Nesaf", again: "Chwarae eto",
      soundOn: "Sain ymlaen", soundOff: "Sain i ffwrdd", ccOn: "Capsiynau ymlaen", ccOff: "Capsiynau i ffwrdd",
      note: "Tua 2 funud. Mae popeth yma wedi'i greu: y bobl, y lleoedd a'r pwyntiau cymorth.",
      script: "Darllen y sgript yn llawn", language: "Iaith", scene: "Golygfa",
      home: "Yn ôl i Night Neighbours",
      draft: "Cyfieithiad drafft: i'w wirio gan siaradwr Cymraeg rhugl.",
      voiceNote: "Mae'r llais yn Saesneg am nawr. Gall siaradwr Cymraeg ei recordio."
    },
    lines: [
      "Mae hi'n ddau o'r gloch y bore. Mae Jamie'n teimlo'n isel, ac mae ar ei ben ei hun. Ac yna, mae ei ffôn yn marw.",
      "Mae'r rhan fwyaf o gymorth yn cau am bump o'r gloch. Ond yn y nos mae pobl yn aml yn teimlo fwyaf unig.",
      "A does gan bawb ddim ffôn clyfar. Does gan rai pobl ddim ffôn o gwbl. Mae gan eraill hen ffôn, heb ddata, neu does unman i'w wefru.",
      "Os mai dim ond mewn ap mae help, dydy'r bobl sydd ei angen fwyaf ddim bob amser yn gallu ei gyrraedd.",
      "Felly mae Night Neighbours yn dod â help i'r lleoedd mae pobl yn mynd iddyn nhw'n barod. Fel yr archfarchnad sydd ar agor yn hwyr.",
      "Wrth y loceri parseli, mae pwynt cymorth cymunedol. Mae yno drwy'r nos, ac mae am ddim.",
      "Gall Jamie wefru ei ffôn yma. Ac os nad oes ganddo ffôn o gwbl, gall gymryd un, wedi'i wefru'n barod, wedi'i roi'n garedig gan bobl fel chi.",
      "Mae unrhyw ffôn yn iawn, hyd yn oed hen un. Mae'n anfon un gair. TALK, os hoffai siarad â rhywun. COME, os hoffai i rywun ddod. Neu BED, am rywle i aros. Does dim angen data.",
      "Neu, gall wasgu un botwm mawr. Dim cyfrif. Dim cyfrinair. Dim ffurflenni.",
      "Mae wedi'i wneud i bawb. Botymau mawr, a geiriau syml. Lluniau, yn ogystal â thestun. Gall ddarllen yn uchel. A does dim byd preifat byth yn cael ei ddangos ar y sgrin.",
      "Mae Night Neighbour hyfforddedig gerllaw yn cael y neges. Byddan nhw'n dod at Jamie, neu'n cerdded gydag e i'r ganolfan leol, sydd ar agor yn hwyr.",
      "Mae Night Neighbours yma i'ch cefnogi chi, nid i gymryd lle'r gwasanaethau brys. Os yw bywyd rhywun mewn perygl, ffoniwch 999 bob amser.",
      "Heno, mae gan Jamie rywun i siarad â nhw, a rhywle cynnes i fod. Dydy e ddim ar ei ben ei hun.",
      "Pobl fel chi sy'n cadw Night Neighbours i fynd. Rhowch ychydig oriau'r mis. Byddwn ni'n eich hyfforddi, ac yn eich cysylltu â'ch canolfan leol.",
      "Neu rhowch hen ffôn, neu helpwch i gadw pwynt cymorth wedi'i wefru ac yn gweithio.",
      "Byddwch yn Night Neighbour i rywun. Gwirfoddolwch, rhowch, a helpwch i ledaenu'r gair. Diolch."
    ],
    heads: [
      "2 y.b. Batri: <b>0%</b>", "Mae'r rhan fwyaf o help yn cau am <b>5pm</b>", "Does gan bawb ddim <b>ffôn clyfar</b>",
      "Mae ap ar ei ben ei hun yn gadael pobl <b>ar ôl</b>", "Help lle mae pobl <b>yn mynd yn barod</b>", "<b>Pwynt cymorth</b> cymunedol",
      "Gwefru, neu <b>gymryd ffôn</b>", "Unrhyw ffôn. <b>Dim data.</b>", "Un botwm. <b>Dim mewngofnodi.</b>",
      "Wedi'i wneud i <b>bawb</b>", "Mae cymydog <b>ar y ffordd</b>", "Cymorth, nid <b>argyfwng</b>",
      "Heno, dydy Jamie <b>ddim ar ei ben ei hun</b>", "Byddwch yn <b>Night Neighbour</b>", "Rhowch ffôn. <b>Ariannwch bwynt cymorth.</b>", ""
    ],
    art: {
      lowBattery: "Batri isel", supportCentre: "Canolfan gymorth", open95: "Ar agor 9 tan 5", closed: "AR GAU",
      noPhone: "Dim ffôn", noData: "Dim data", oldPhone: "Hen ffôn", nowhere: "Unman i wefru", appOnly: "Ap yn unig",
      shop: "ARCHFARCHNAD · AR AGOR YN HWYR", notOk: "Ddim yn iawn heno?", bb1: "Pwynt cymorth wrth y", bb2: "loceri parseli.", free: "Am ddim · drwy'r nos",
      helpPoint: "PWYNT CYMORTH", openAllNight: "ar agor drwy'r nos", donated: "Ffonau rhodd", chargedFree: "wedi'u gwefru · am ddim",
      talk: "rhywun i siarad â nhw", come: "rhywun i ddod", bed: "rhywle i aros", nd1: "Dim angen", nd2: "data",
      helpButton: "HELP", noAccount: "Dim cyfrif", noPassword: "Dim cyfrinair", noForms: "Dim ffurflenni",
      bigButtons: "Botymau mawr", plainWords: "Geiriau syml", pictures: "Lluniau", readsAloud: "Darllen yn uchel", private: "Preifat",
      hub: "Canolfan leol · ar agor yn hwyr", onMyWay: "Ar fy ffordd", support1: "Cymorth yw Night Neighbours,", support2: "nid gwasanaeth brys.",
      call999: "Bywyd mewn perygl? Ffoniwch 999", volunteer: "Gwirfoddoli", oldPhones: "Hen ffonau", hp: "Pwynt cymorth", keptRunning: "yn dal i weithio",
      end1: "Byddwch yn", end2: "Night Neighbour i rywun", pill1: "Gwirfoddoli", pill2: "Rhoi", pill3: "Lledaenu'r gair",
      footer: "Prototeip gan Ctrl-Alt-Elite. Mae'r holl bobl a lleoedd wedi'u creu."
    }
  },

  gd: {
    ui: {
      title: "Night Neighbours: gun fhòn, gun duilgheadas",
      start: "Cuideachadh do dhaoine gun fhòn, le bataraidh falamh, no gun fhòn smart",
      playSound: "Cluich le guth Beurla", playQuiet: "Cluich gun fhuaim",
      back: "Air ais", play: "Cluich", pause: "Stad", next: "Air adhart", again: "Cluich a-rithist",
      soundOn: "Fuaim air", soundOff: "Fuaim dheth", ccOn: "Fo-thiotalan air", ccOff: "Fo-thiotalan dheth",
      note: "Mu 2 mhionaid. Tha a h-uile càil an seo air a dhèanamh suas: na daoine, na h-àiteachan agus na h-ionadan-cuideachaidh.",
      script: "Leugh an sgriobt gu lèir", language: "Cànan", scene: "Sealladh",
      home: "Air ais gu Night Neighbours",
      draft: "Eadar-theangachadh dreachd: feumaidh neach le Gàidhlig fhileanta sùil a thoirt air.",
      voiceNote: "Tha an guth sa Bheurla an-dràsta. B' urrainn do neach le Gàidhlig a chlàradh."
    },
    lines: [
      "Tha e dà uair sa mhadainn. Tha Jamie a' faireachdainn ìosal, agus tha e leis fhèin. Agus an uair sin, tha am fòn aige a' dol dheth.",
      "Bidh a' mhòr-chuid de thaic a' dùnadh aig còig uairean. Ach 's ann air an oidhche a bhios daoine gu tric a' faireachdainn nas aonaranaiche.",
      "Agus chan eil fòn smart aig a h-uile duine. Chan eil fòn idir aig cuid. Tha seann fhòn aig cuid eile, gun dàta, no gun àite airson a theàirrdseadh.",
      "Mura bheil cuideachadh ach ann an aplacaid, chan urrainn dha na daoine a tha feumach air as motha a ruighinn an-còmhnaidh.",
      "Mar sin, bheir Night Neighbours cuideachadh gu na h-àiteachan far am bi daoine a' dol mu thràth. Mar a' bhùth mhòr a tha fosgailte anmoch.",
      "Ri taobh nam preasan-pharsail, tha ionad-cuideachaidh coimhearsnachd. Tha e ann fad na h-oidhche, agus tha e an-asgaidh.",
      "'S urrainn do Jamie am fòn aige a theàirrdseadh an seo. Agus mura h-eil fòn idir aige, faodaidh e fear a ghabhail, làn-teàirrdste, air a thoirt seachad gu coibhneil le daoine mar sibhse.",
      "Nì fòn sam bith a' chùis, fiù 's seann fhear. Cuiridh e teacsa le aon fhacal. TALK, ma tha e airson bruidhinn ri cuideigin. COME, ma tha e airson gun tig cuideigin. No BED, airson àite fuireach. Chan fheum e dàta.",
      "No, faodaidh e dìreach aon phutan mòr a bhrùthadh. Gun chunntas. Gun fhacal-faire. Gun fhoirmean.",
      "Tha e air a dhèanamh airson a h-uile duine. Putanan mòra, agus faclan sìmplidh. Dealbhan, a bharrachd air teacsa. 'S urrainn dha leughadh a-mach. Agus cha tèid dad prìobhaideach a shealltainn air an sgrìn.",
      "Gheibh Night Neighbour faisg air làimh, le trèanadh, an teachdaireachd. Thig iad gu Jamie, no coisichidh iad còmhla ris chun an ionaid ionadail, a tha fosgailte anmoch.",
      "Tha Night Neighbours an seo airson taic a chumail ribh, chan ann an àite nan seirbheisean-èiginn. Ma tha beatha cuideigin ann an cunnart, cuiribh fòn gu 999 an-còmhnaidh.",
      "A-nochd, tha cuideigin aig Jamie airson bruidhinn ris, agus àite blàth airson a bhith. Chan eil e leis fhèin.",
      "'S e daoine mar sibhse a chumas Night Neighbours a' dol. Thoiribh beagan uairean gach mìos. Bheir sinn trèanadh dhuibh, agus ceanglaidh sinn sibh ris an ionad ionadail agaibh.",
      "No thoiribh seachad seann fhòn, no cuidichibh le bhith a' cumail ionad-cuideachaidh làn agus a' dol.",
      "Bithibh nur Night Neighbour do chuideigin. Dèanaibh obair shaor-thoileach, thoiribh tabhartas, agus sgaoilibh am facal. Mòran taing."
    ],
    heads: [
      "2m. Bataraidh: <b>0%</b>", "Bidh a' mhòr-chuid de chuideachadh a' dùnadh aig <b>17:00</b>", "Chan eil <b>fòn smart</b> aig a h-uile duine",
      "Fàgaidh aplacaid leatha fhèin daoine <b>air dheireadh</b>", "Cuideachadh far am bi daoine <b>a' dol mu thràth</b>", "<b>Ionad-cuideachaidh</b> coimhearsnachd",
      "Teàirrdsich, no <b>gabh fòn</b>", "Fòn sam bith. <b>Gun dàta.</b>", "Aon phutan. <b>Gun logadh a-steach.</b>",
      "Airson <b>a h-uile duine</b>", "Tha nàbaidh <b>air an rathad</b>", "Taic, chan e <b>èiginn</b>",
      "A-nochd, chan eil Jamie <b>leis fhèin</b>", "Bi nad <b>Night Neighbour</b>", "Thoir seachad fòn. <b>Maoinich ionad-cuideachaidh.</b>", ""
    ],
    art: {
      lowBattery: "Bataraidh ìosal", supportCentre: "Ionad-taic", open95: "Fosgailte 9 gu 5", closed: "DÙINTE",
      noPhone: "Gun fhòn", noData: "Gun dàta", oldPhone: "Seann fhòn", nowhere: "Gun àite teàirrdseadh", appOnly: "Aplacaid a-mhàin",
      shop: "BÙTH MHÒR · FOSGAILTE ANMOCH", notOk: "Feum air taic a-nochd?", bb1: "Ionad-cuideachaidh ri taobh", bb2: "nam preasan-pharsail.", free: "An-asgaidh · fad na h-oidhche",
      helpPoint: "IONAD-CUIDEACHAIDH", openAllNight: "fosgailte fad na h-oidhche", donated: "Fònaichean tabhartais", chargedFree: "làn · an-asgaidh",
      talk: "cuideigin airson bruidhinn", come: "cuideigin a thighinn", bed: "àite fuireach", nd1: "Chan fheum", nd2: "dàta",
      helpButton: "HELP", noAccount: "Gun chunntas", noPassword: "Gun fhacal-faire", noForms: "Gun fhoirmean",
      bigButtons: "Putanan mòra", plainWords: "Faclan sìmplidh", pictures: "Dealbhan", readsAloud: "Leughadh a-mach", private: "Prìobhaideach",
      hub: "Ionad ionadail · fosgailte anmoch", onMyWay: "Air an rathad", support1: "'S e taic a th' ann an Night Neighbours,", support2: "chan e seirbheis-èiginn.",
      call999: "Beatha ann an cunnart? Fòn gu 999", volunteer: "Saor-thoileach", oldPhones: "Seann fhònaichean", hp: "Ionad-cuideachaidh", keptRunning: "a' dol fhathast",
      end1: "Bi nad", end2: "Night Neighbour do chuideigin", pill1: "Saor-thoileach", pill2: "Tabhartas", pill3: "Sgaoil am facal",
      footer: "Prototype le Ctrl-Alt-Elite. Tha gach duine is àite air an dèanamh suas."
    }
  }
};
