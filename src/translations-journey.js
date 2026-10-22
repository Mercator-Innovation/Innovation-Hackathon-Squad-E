// Welsh (cy) and Scottish Gaelic (gd) for "How it works" on the home page.
// DRAFT translations by Claude: they must be checked by a fluent speaker before anyone relies on them.
// Kept separate from translations.js so they don't clash. Load after translations.js, before app.js.
// Text codes (HELP) and the number 60000 stay as they are, because they're what people type.
(function () {
  const T = window.TRANSLATIONS;
  if (!T) return;
  T.cy = T.cy || {};
  T.gd = T.gd || {};

  T.cy.journey = {
    homeLink: "Sut mae'n gweithio, mewn 5 cam",
    intro: "Mae Night Neighbours yn syml yn ei hanfod: rydych chi'n anfon neges neu'n tapio, mae gwirfoddolwr lleol yn cysylltu â chi, ac mae lle cynnes i fynd iddo os hoffech chi.",
    noDetails: "Does dim rhaid i chi roi eich enw na chofrestru i gael help. Mae popeth arall yn ddewisol.",
    seeIt: "Gweld hyn",
    steps: [
      {
        title: "Cysylltu am y tro cyntaf",
        text: "Mae tair ffordd i mewn. Dewiswch yr un sy'n addas i chi.",
        ways: [
          {
            title: "Dim ond anfon neges. Dim gosod.",
            text: "Anfonwch HELP a'ch tref i 60000, o unrhyw ffôn. Rydyn ni'n gofyn am eich tref a beth hoffech chi, a dim byd arall. Mae llysenw'n iawn.",
            asks: "Rydyn ni'n gofyn: eich tref. Dyna'r cyfan.",
            links: [{ href: "text.html", label: "Gofyn drwy neges destun" }]
          },
          {
            title: "Gwneud cynllun eich hun",
            text: "Os hoffech chi, dewiswch pwy rydyn ni'n dweud wrthynt pan fyddwch chi'n gofyn am help, ac a ydych chi eisiau gwiriadau. Gallwch ei newid neu ei ddileu unrhyw bryd.",
            asks: "Chi sy'n dewis: enw cyntaf unrhyw un y dylen ni ddweud wrthynt, a chod gwirio 4 rhif.",
            links: [{ href: "plan.html", label: "Gwneud fy nghynllun" }]
          },
          {
            title: "Gyda rhywun rydych chi'n ymddiried ynddyn nhw",
            text: "Gall gweithiwr cymorth, meddyg teulu neu weithiwr hostel ddweud wrthych chi amdanom ni a'ch helpu i ddechrau, ond dim ond gyda'ch caniatâd.",
            asks: "Maen nhw'n gofyn i chi yn gyntaf, ac yn rhannu dim ond yr hyn rydych chi'n cytuno iddo.",
            links: [{ href: "refer.html", label: "Cyfeirio rhywun" }]
          }
        ]
      },
      {
        title: "Gofyn am help heno",
        text: "Pan mae'n hwyr a chi ar eich pen eich hun, gofynnwch yn y ffordd sy'n gweithio i chi ar y pryd: neges destun heb ddata, yr ap, neu bwynt cymorth os yw eich ffôn wedi marw.",
        links: [
          { href: "text.html", label: "Drwy neges destun" },
          { href: "help.html", label: "Drwy'r ap" },
          { href: "help-point.html", label: "Mewn pwynt cymorth" }
        ]
      },
      {
        title: "Mae gwirfoddolwr lleol yn cysylltu â chi",
        text: "O fewn munudau, mae gwirfoddolwr yn agos atoch chi yn ffonio neu'n anfon neges. Os hoffech chi, maen nhw'n dod atoch chi neu'n cwrdd â chi mewn hyb. Mae gwirfoddolwyr wedi'u gwirio a'u hyfforddi, a dydyn nhw byth yn mynd allan ar eu pen eu hunain.",
        links: [
          { href: "volunteer.html", label: "Beth mae'r gwirfoddolwr yn ei weld" },
          { href: "join.html", label: "Sut mae gwirfoddolwyr yn ymuno" }
        ]
      },
      {
        title: "Rhywle i fynd",
        text: "Hyb sydd ar agor yn hwyr, gyda phaned, sedd gynnes, gwefru ffôn a phobl i siarad â nhw. Os nad oes dim ar agor yn agos atoch chi, mae gwirfoddolwr yn aros ar y ffôn neu rydyn ni'n dod o hyd i ffordd arall.",
        links: [
          { href: "help.html", label: "Dod o hyd i hyb" },
          { href: "rural.html", label: "Pan nad oes neb gerllaw" }
        ]
      },
      {
        title: "Y diwrnod wedyn",
        text: "Dim ond os gwnaethoch chi gytuno, mae eich gweithiwr cymorth yn clywed beth ddigwyddodd a gall ddilyn i fyny, fel eich bod chi'n gysylltiedig â chymorth parhaus, nid un noson yn unig. Dim ond os gwnaethoch chi eu dewis y mae teulu'n clywed.",
        links: [
          { href: "worker.html", label: "Beth mae'r gweithiwr cymorth yn ei weld" },
          { href: "family.html", label: "Beth mae teulu'n ei weld" }
        ]
      }
    ],
    behindTitle: "Y tu ôl i'r cyfan",
    behindText: "Mae gwasanaethau lleol yn rhannu'r nos rhyngddynt, ac mae cyfansymiau dienw yn dangos ble mae angen mwy o wirfoddolwyr. Does dim byd byth am un person.",
    behindLinks: [
      { href: "coordinator.html", label: "Ble mae angen help" },
      { href: "privacy.html", label: "Beth rydyn ni'n ei gadw amdanoch chi" }
    ]
  };

  T.gd.journey = {
    homeLink: "Mar a tha e ag obair, ann an 5 ceumannan",
    intro: "Tha Night Neighbours sìmplidh aig a chridhe: cuiridh tu teacsa no brùthaidh tu, gheibh saor-thoileach ionadail air ais thugad, agus tha àite blàth ri dhol ann ma tha thu ga iarraidh.",
    noDetails: "Chan fheum thu d' ainm a thoirt seachad no clàradh airson cuideachadh fhaighinn. Tha a h-uile càil eile roghainneil.",
    seeIt: "Faic e",
    steps: [
      {
        title: "A' cur fios a' chiad turas",
        text: "Tha trì dòighean a-steach. Tagh am fear a tha freagarrach dhut.",
        ways: [
          {
            title: "Dìreach cuir teacsa. Gun shuidheachadh.",
            text: "Cuir HELP agus do bhaile gu 60000, bho fòn sam bith. Faighnichidh sinn mu do bhaile agus dè tha thu ag iarraidh, agus sin e. Tha far-ainm ceart gu leòr.",
            asks: "Faighnichidh sinn: do bhaile. Sin uile.",
            links: [{ href: "text.html", label: "Iarr le teacsa" }]
          },
          {
            title: "Dèan plana thu fhèin",
            text: "Ma thogras tu, tagh cò dha a dh'innseas sinn nuair a dh'iarras tu cuideachadh, agus a bheil thu ag iarraidh sgrùdaidhean. Faodaidh tu atharrachadh no sguabadh às uair sam bith.",
            asks: "Taghaidh tu: ciad ainm neach sam bith a bu chòir dhuinn innse dha, agus còd sgrùdaidh le 4 àireamhan.",
            links: [{ href: "plan.html", label: "Dèan mo phlana" }]
          },
          {
            title: "Le cuideigin anns a bheil earbsa agad",
            text: "Faodaidh neach-obrach taic, dotair no neach-obrach ostail innse dhut mu ar deidhinn agus do chuideachadh tòiseachadh, ach dìreach le d' aonta.",
            asks: "Faighnichidh iad dhut an toiseach, agus cha roinn iad ach na dh'aontaicheas tu.",
            links: [{ href: "refer.html", label: "Cuir cuideigin thugainn" }]
          }
        ]
      },
      {
        title: "Ag iarraidh cuideachadh a-nochd",
        text: "Nuair a tha e anmoch agus tu nad aonar, iarr ann an dòigh a tha ag obair dhut aig an àm: teacsa gun dàta, an aplacaid, no puing-cuideachaidh ma tha am fòn agad marbh.",
        links: [
          { href: "text.html", label: "Le teacsa" },
          { href: "help.html", label: "Leis an aplacaid" },
          { href: "help-point.html", label: "Aig puing-cuideachaidh" }
        ]
      },
      {
        title: "Gheibh saor-thoileach ionadail air ais thugad",
        text: "Taobh a-staigh beagan mhionaidean, cuiridh saor-thoileach faisg ort fòn no teacsa. Ma thogras tu, thig iad thugad no coinnichidh iad riut aig ionad. Tha saor-thoilich air an sgrùdadh agus air an trèanadh, agus cha tèid iad a-mach nan aonar gu bràth.",
        links: [
          { href: "volunteer.html", label: "Na chì an saor-thoileach" },
          { href: "join.html", label: "Mar a thig saor-thoilich a-steach" }
        ]
      },
      {
        title: "Àite ri dhol",
        text: "Ionad fosgailte anmoch, le cupa tì, suidheachan blàth, teàirrseadh fòn agus daoine ri bruidhinn riutha. Mura h-eil càil fosgailte faisg ort, fuirichidh saor-thoileach air a' fòn no lorgaidh sinn dòigh eile.",
        links: [
          { href: "help.html", label: "Lorg ionad" },
          { href: "rural.html", label: "Nuair nach eil duine faisg" }
        ]
      },
      {
        title: "An ath latha",
        text: "Dìreach ma dh'aontaich thu, cluinnidh an neach-obrach taic agad mu na thachair agus faodaidh iad leantainn air, gus am bi thu ceangailte ri taic leantainneach, chan e dìreach aon oidhche. Cha chluinn an teaghlach ach ma thagh thu iad.",
        links: [
          { href: "worker.html", label: "Na chì an neach-obrach taic" },
          { href: "family.html", label: "Na chì an teaghlach" }
        ]
      }
    ],
    behindTitle: "Air cùl a h-uile càil",
    behindText: "Bidh seirbheisean ionadail a' roinn na h-oidhche eatarra, agus tha àireamhan gun ainm a' sealltainn far a bheil feum air barrachd shaor-thoileach. Chan eil càil a-riamh mu aon neach.",
    behindLinks: [
      { href: "coordinator.html", label: "Far a bheil feum air cuideachadh" },
      { href: "privacy.html", label: "Na chumas sinn mud dheidhinn" }
    ]
  };
})();
