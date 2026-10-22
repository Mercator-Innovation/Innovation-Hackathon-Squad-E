// Welsh (cy) and Scottish Gaelic (gd) words, for the language switch in the header.
// DRAFT translations by Claude: they must be checked by a fluent speaker before anyone relies on them.
// Only some pages are translated (listed in `pages`). Anything missing falls back to English.
// Text codes (TALK, COME, BED, OK) stay in English, because they're what people type.
// Load this after content.js and before app.js, on translated pages only.
window.TRANSLATIONS = {
  pages: ["index", "help"],

  cy: {
    reassure: {
      title: "Preifat, a'ch dewis chi",
      points: [
        { icon: "lock", title: "Mae'n breifat", text: "Dydyn ni byth yn gofyn pam mae angen help arnoch, nac a ydych chi'n defnyddio cyffuriau neu alcohol." },
        { icon: "mask", title: "Does dim angen enw", text: "Arhoswch yn ddienw os hoffech chi. Anfonwch god neu defnyddiwch bwynt cymorth. Mae llysenw'n iawn." },
        { icon: "hand", title: "Chi sy'n dewis pwy sy'n gwybod", text: "Dim ond y bobl rydych chi'n eu dewis y byddwn ni'n dweud wrthynt. Does dim byd yn mynd at yr heddlu, eich landlord na'r ganolfan waith, oni bai bod bywyd rhywun mewn perygl." }
      ],
      delete: "Eisiau i ni eich anghofio? Anfonwch STOP, yna DELETE.",
      more: "Beth rydyn ni'n ei gadw amdanoch chi"
    },
    ui: {
      language: "Iaith",
      draft: "Cyfieithiad drafft: i'w wirio gan siaradwr Cymraeg rhugl. Mae rhai geiriau yn Saesneg o hyd.",
      notTranslated: "Dydy'r dudalen hon ddim wedi'i chyfieithu eto, felly mae hi yn Saesneg."
    },
    service: {
      tagline: "Rhywun gerllaw pan mae'n hwyr a chithau ar eich pen eich hun.",
      prototypeNote: "Prototeip yw hwn. Mae'r holl bobl, lleoedd a rhifau ynddo wedi'u creu."
    },
    safety: {
      emergency: "Os nad yw rhywun yn anadlu'n normal, os na ellir eu deffro, neu os yw eu bywyd mewn perygl, ffoniwch 999 nawr."
    },
    home: {
      intro: "Pobl leol sydd wedi cofrestru i helpu, a lleoedd cynnes i fynd iddynt, gyda'r nos ac yn y nos.",
      choose: "Pwy ydych chi?",
      help: "Hoffwn gael cwmni neu rywun i siarad â nhw",
      helpHint: "Gofynnwch drwy'r ap neu drwy neges destun. Does dim angen data.",
      text: "Gofyn drwy neges destun, ar unrhyw ffôn",
      textHint: "Dim ap, dim data, batri isel? Rhowch gynnig arni yma.",
      helpPoint: "Gweld pwynt cymorth",
      helpPointHint: "Y sgrin mewn pwynt cymorth cymunedol, i unrhyw un heb ffôn.",
      family: "Mae rhywun rwy'n poeni amdanynt yn defnyddio Night Neighbours",
      familyHint: "Beth welwch chi os ydyn nhw'n gofyn am help neu'n methu cadarnhau eu bod yn iawn.",
      volunteer: "Rwy'n wirfoddolwr",
      volunteerHint: "Gweld ceisiadau gerllaw heno.",
      coordinator: "Rwy'n cynllunio cymorth lleol",
      coordinatorHint: "Gweld ble a phryd mae angen help. Dim enwau, dim ond cyfansymiau."
    },
    codes: {
      title: "Neu anfonwch god at 60000",
      intro: "Yn gweithio ar unrhyw ffôn, heb ddata. Ychwanegwch eich tref neu rif y pwynt cymorth, fel TALK ANNAN neu TALK 214. (Rhif wedi'i greu yw hwn.)",
      list: [
        { code: "HELP", means: "Mae angen help arnaf" },
        { code: "TALK", means: "Hoffwn siarad â rhywun" },
        { code: "COME", means: "Dewch ataf i, os gwelwch yn dda" },
        { code: "BED", means: "Mae angen rhywle i aros heno" },
        { code: "OK", means: "Rwy'n iawn nawr, diolch" }
      ]
    },
    help: {
      title: "Cael cwmni heno",
      needQuestion: "Beth fyddai'n helpu nawr?",
      needTalk: "Rhywun i siarad â nhw",
      needCome: "Rhywun i ddod ataf i",
      needPlace: "Rhywle i aros heno",
      whereQuestion: "Ble ydych chi?",
      townLabel: "Eich tref agosaf",
      chooseTown: "Dewiswch dref",
      shareLocation: "Defnyddio fy lleoliad",
      locationShared: "Diolch. Rydych chi ger {town}.",
      pickTown: "Dewiswch eich tref agosaf yn gyntaf.",
      next: "Nesaf",
      back: "Yn ôl",
      whoQuestion: "Pwy ddylen ni ddweud wrthynt?",
      contactQuestion: "Pwy ddylai gysylltu â chi heno?",
      contactVolunteer: "Gwirfoddolwr gerllaw",
      contactWorker: "Y gweithiwr cymorth y tu allan i oriau",
      alsoQuestion: "Pwy arall ddylai wybod?",
      whoHint: "Chi sy'n dewis. Dim ond y bobl rydych chi'n eu ticio y byddwn ni'n dweud wrthynt. Gallwch eu gadael i gyd yn wag.",
      tellFamily: "Rhywun yn fy nheulu",
      tellWorker: "Fy ngweithiwr cymorth",
      tellMorning: "Dweud wrth fy ngweithiwr cymorth beth ddigwyddodd, bore yfory",
      send: "Gofyn am help",
      doneTitle: "Mae help ar ei ffordd",
      doneVolunteer: "Bydd {name}, gwirfoddolwr tua {miles} milltir i ffwrdd, yn anfon neges destun atoch yn yr ychydig funudau nesaf.",
      doneVolunteerCome: "Mae {name}, gwirfoddolwr, ar y ffordd atoch chi. Tua {minutes} munud. Arhoswch rywle golau os gallwch.",
      fromPlan: "O'ch cynllun: byddwn yn rhoi gwybod i {who}. Gallwch newid hyn isod, ar gyfer heno yn unig.",
      doneNoVolunteer: "Rydyn ni wedi gofyn i'r gweithiwr cymorth y tu allan i oriau anfon neges destun atoch yn yr ychydig funudau nesaf.",
      doneTold: "Rydyn ni hefyd wedi rhoi gwybod i {who}.",
      doneHub: "Pan fyddwch chi'n barod, gall {name} gerdded gyda chi i'r hyb.",
      doneMorning: "Bore yfory, bydd eich gweithiwr cymorth yn clywed beth ddigwyddodd. Gallwch newid eich meddwl cyn hynny.",
      whoFamily: "eich cyswllt teulu",
      whoWorker: "eich gweithiwr cymorth",
      and: "a",
      waitTitle: "Tra byddwch chi'n aros",
      waitTips: [
        "Arhoswch lle rydych chi, neu ewch i'r hyb isod os hoffech gwmni.",
        "Cadwch eich ffôn ymlaen ac yn gwefru os gallwch.",
        "Gall gymryd ychydig funudau. Does dim angen i chi wneud dim byd arall."
      ],
      updateTitle: "Rhowch wybod i ni sut ydych chi",
      imOk: "Rwy'n iawn nawr",
      noReply: "Does neb wedi cysylltu eto",
      okSent: "Diolch am ddweud wrthym. Rydyn ni wedi rhoi gwybod i'r bobl sy'n eich helpu eich bod yn iawn. Gallwch ofyn eto unrhyw bryd.",
      noReplySent: "Mae'n ddrwg gennym am yr aros. Rydyn ni wedi gofyn i'r gweithiwr cymorth y tu allan i oriau anfon neges destun atoch hefyd.",
      hubTitle: "Ar agor gerllaw heno",
      hubHours: "Ar agor {opens} tan {closes}",
      afterHub: "Ar ôl {closes}, anfonwch TALK at 60000 a bydd gwirfoddolwr yn eich ffonio.",
      noHub: "Does dim hyb ar agor gerllaw heno.",
      startAgain: "Dechrau eto"
    }
  },

  gd: {
    reassure: {
      title: "Prìobhaideach, agus do roghainn-sa",
      points: [
        { icon: "lock", title: "Tha e prìobhaideach", text: "Cha bhi sinn a-riamh a' faighneachd carson a tha feum agad air cobhair, no a bheil thu a' gabhail dhrugaichean no deoch-làidir." },
        { icon: "mask", title: "Chan fheum thu ainm", text: "Fuirich gun ainm ma thogras tu. Cuir còd no cleachd ionad-cobhrach. Tha far-ainm ceart gu leòr." },
        { icon: "hand", title: "Is tusa a thaghas cò aig a bhios fios", text: "Cha innis sinn ach do na daoine a thaghas tu. Cha tèid dad chun a' phoileis, an uachdarain agad no an ionaid-obrach, mura h-eil beatha cuideigin ann an cunnart." }
      ],
      delete: "Airson 's gun dìochuimhnich sinn thu? Cuir STOP, an uairsin DELETE.",
      more: "Na chumas sinn mud dheidhinn"
    },
    ui: {
      language: "Cànan",
      draft: "Eadar-theangachadh dreachd: ri sgrùdadh le neach aig a bheil Gàidhlig fhileanta. Tha cuid de dh'fhaclan fhathast ann am Beurla.",
      notTranslated: "Chan eil an duilleag seo air a h-eadar-theangachadh fhathast, mar sin tha i ann am Beurla."
    },
    service: {
      tagline: "Cuideigin faisg ort nuair a tha e anmoch agus tu nad aonar.",
      prototypeNote: "Seo ro-shamhla. Tha na daoine, na h-àiteachan agus na h-àireamhan uile air an dèanamh suas."
    },
    safety: {
      emergency: "Mura h-eil cuideigin a' tarraing anail mar as àbhaist, mura gabh an dùsgadh, no ma tha am beatha ann an cunnart, cuir fòn gu 999 an-dràsta."
    },
    home: {
      intro: "Daoine ionadail a chlàraich airson cuideachadh, agus àiteachan blàtha airson a dhol, air an fheasgar agus air an oidhche.",
      choose: "Cò thusa?",
      help: "Bu toigh leam cuideachd no cuideigin airson bruidhinn ris",
      helpHint: "Faighnich tron aplacaid no le teacsa. Chan fheum thu dàta.",
      text: "Faighnich le teacsa, air fòn sam bith",
      textHint: "Gun aplacaid, gun dàta, bataraidh ìosal? Feuch e an seo.",
      helpPoint: "Faic ionad-cobhrach",
      helpPointHint: "An sgrion aig ionad-cobhrach coimhearsnachd, do dhuine sam bith gun fòn.",
      family: "Tha cuideigin air a bheil cùram agam a' cleachdadh Night Neighbours",
      familyHint: "Na chì thu ma dh'iarras iad cobhair no mura dearbh iad gu bheil iad ceart gu leòr.",
      volunteer: "'S e saor-thoileach a th' annam",
      volunteerHint: "Faic iarrtasan faisg ort a-nochd.",
      coordinator: "Bidh mi a' dealbhadh taic ionadail",
      coordinatorHint: "Faic càite agus cuin a tha feum air cobhair. Gun ainmean, dìreach àireamhan iomlan."
    },
    codes: {
      title: "No cuir còd gu 60000",
      intro: "Obraichidh e air fòn sam bith, gun dàta. Cuir ris am baile agad no àireamh an ionaid-chobhrach, mar TALK ANNAN no TALK 214. (Seo àireamh a chaidh a dhèanamh suas.)",
      list: [
        { code: "HELP", means: "Tha cuideachadh a dhìth orm" },
        { code: "TALK", means: "Bu toigh leam bruidhinn ri cuideigin" },
        { code: "COME", means: "Thig thugam, mas e do thoil e" },
        { code: "BED", means: "Tha feum agam air àite airson fuireach a-nochd" },
        { code: "OK", means: "Tha mi ceart gu leòr a-nis, taing" }
      ]
    },
    help: {
      title: "Faigh cuideachd a-nochd",
      needQuestion: "Dè chuidicheadh an-dràsta?",
      needTalk: "Cuideigin airson bruidhinn ris",
      needCome: "Cuideigin a thighinn thugam",
      needPlace: "Àite airson fuireach a-nochd",
      whereQuestion: "Càite a bheil thu?",
      townLabel: "Am baile as fhaisge ort",
      chooseTown: "Tagh baile",
      shareLocation: "Cleachd an t-àite agam",
      locationShared: "Taing. Tha thu faisg air {town}.",
      pickTown: "Tagh am baile as fhaisge ort an toiseach.",
      next: "Air adhart",
      back: "Air ais",
      whoQuestion: "Cò dha a bu chòir dhuinn innse?",
      contactQuestion: "Cò bu chòir fios a chur thugad a-nochd?",
      contactVolunteer: "Saor-thoileach faisg orm",
      contactWorker: "An neach-taice a-mach à uairean obrach",
      alsoQuestion: "Cò eile a bu chòir fios a bhith aca?",
      whoHint: "Is tusa a thaghas. Cha innis sinn ach do na daoine a chuireas tu strìochag riutha. Faodaidh tu am fàgail uile bàn.",
      tellFamily: "Cuideigin san teaghlach agam",
      tellWorker: "An neach-taice agam",
      tellMorning: "Innis don neach-taice agam dè thachair, madainn a-màireach",
      send: "Iarr cobhair",
      doneTitle: "Tha cobhair air an t-slighe",
      doneVolunteer: "Cuiridh {name}, saor-thoileach mu {miles} mìle air falbh, teacsa thugad anns na beagan mhionaidean a tha romhainn.",
      doneVolunteerCome: "Tha {name}, saor-thoileach, air an t-slighe thugad. Mu {minutes} mionaidean. Fuirich far a bheil solas ma ghabhas e.",
      fromPlan: "Bhon phlana agad: innsidh sinn do {who}. Faodaidh tu seo atharrachadh gu h-ìosal, airson a-nochd a-mhàin.",
      doneNoVolunteer: "Dh'iarr sinn air an neach-taice a-mach à uairean obrach teacsa a chur thugad anns na beagan mhionaidean a tha romhainn.",
      doneTold: "Leig sinn fios cuideachd gu {who}.",
      doneHub: "Nuair a bhios tu deiseil, faodaidh {name} coiseachd còmhla riut chun an ionaid.",
      doneMorning: "Madainn a-màireach, cluinnidh an neach-taice agad dè thachair. Faodaidh tu d' inntinn atharrachadh ron uair sin.",
      whoFamily: "an neach-conaltraidh san teaghlach agad",
      whoWorker: "an neach-taice agad",
      and: "agus",
      waitTitle: "Fhad 's a tha thu a' feitheamh",
      waitTips: [
        "Fuirich far a bheil thu, no theirig chun an ionaid gu h-ìosal ma tha thu ag iarraidh cuideachd.",
        "Cùm am fòn agad air agus a' teàirrdseadh ma ghabhas e dèanamh.",
        "Faodaidh e beagan mhionaidean a thoirt. Chan fheum thu dad sam bith eile a dhèanamh."
      ],
      updateTitle: "Innis dhuinn ciamar a tha thu",
      imOk: "Tha mi ceart gu leòr a-nis",
      noReply: "Cha do chuir duine fios fhathast",
      okSent: "Taing airson innse dhuinn. Leig sinn fios do na daoine a tha gad chuideachadh gu bheil thu ceart gu leòr. Faodaidh tu iarraidh a-rithist uair sam bith.",
      noReplySent: "Tha sinn duilich mun fheitheamh. Dh'iarr sinn air an neach-taice a-mach à uairean obrach teacsa a chur thugad cuideachd.",
      hubTitle: "Fosgailte faisg ort a-nochd",
      hubHours: "Fosgailte bho {opens} gu {closes}",
      afterHub: "Às dèidh {closes}, cuir TALK gu 60000 agus cuiridh saor-thoileach fòn thugad.",
      noHub: "Chan eil ionad fosgailte faisg ort a-nochd.",
      startAgain: "Tòisich a-rithist"
    }
  }
};
