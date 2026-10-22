# Walkthrough testing: Night Neighbours

*Sruthi James, Ctrl-Alt-Elite, 22 October, about 17:40. Claude walked through the whole prototype as each of our personas, plus keyboard, phone-width and language checks.*

**This isn't real user testing.** No real people took part, and the personas are made up. It finds the problems a careful reviewer would spot. It can't tell us how Jamie, Karen or Priya would really feel. Next step: test with people who have lived experience, families and support workers.

## Routes tested

| Who | Route |
|---|---|
| Anyone, first visit | Home → "Who is this for?" → each of the 5 groups |
| Jamie, with the app | Help → someone to come → Annan → who to tell → ask for help → I'm OK now |
| Jamie, no data | Ask by text: HELP, a town on its own, COME 214, OK (tested earlier, now fixed) |
| Jamie, no phone | Help point → buttons → check in with his number |
| Karen | Someone I care about → missed check-in → ask a volunteer to look in |
| Sam, a volunteer | Tonight's request → I can help → before you go → walk |
| Priya | Support worker: this morning, handover, tonight's cover |
| A professional | Refer someone |
| Keyboard and languages | Help point by keyboard, and in Cymraeg |

## What gets in the way, most important first

1. **Jamie's plan isn't used when he asks for help.** He set up who to tell in "Make my plan", but the help page asks again from scratch. Then it says "We've let your family contact know" without ever asking who that is. *Fix: if he has a plan, say "We'll tell Karen, as in your plan", with a way to change it.*
2. **"Someone to come to me" gets "Sam will text you".** Jamie asked for someone to come. Being told he'll get a text could make him think he wasn't heard. *Fix: "Sam is on the way. About 10 minutes."*
3. **The volunteer is promised details they never get.** Before accepting, it says "You'll see their first name and a way to text them if you say yes". After "I can help", neither appears, so Sam can't find or reach Jamie. *Fix: show a first name, the meeting place and a "Text them" button after accepting.*
4. **HELP isn't in the list of codes.** The text service now leads with HELP, but the code lists on the help and help point screens still start with TALK. *Fix: add HELP at the top. This one came from our own change today.*
5. **Karen can't act unless Jamie has a plan.** If she's worried tonight and Jamie hasn't set anything up, her page only offers support for herself. *Fix: add "Ask a volunteer to check on someone", with a note that the person will be asked first.*
6. **Welsh, but this is a Scottish service.** Cymraeg is offered next to Gàidhlig. Scots, Polish, Ukrainian, Arabic and an easy-read version would probably reach more people here. *(Our inference: check local language data.)*
7. **On a phone, the home page is all choices.** The five "Who is this for?" buttons fill the first screen, and "Me" is vague. Someone low at 11pm has to read and decide. *Fix: one big "I'd like someone now" button first.*
8. **Asking for help in the app takes three screens.** That's fine on a full battery, but a lot at 8%. *Fix: with a plan saved, one tap could send it.*

## What works well

- **Choosing by who you are is clear.** Every group leads to the right pages, and nothing is missing or broken.
- **999 is there but calm,** on every screen, never pushy.
- **The volunteer safety checklist** is practical: meet in public, tell the coordinator, being there is enough.
- **The help point works by keyboard** in a sensible order (9 stops), with a visible focus ring.
- **Pages that aren't translated say so,** instead of mixing languages without warning.
- **The hub says what to do after it closes**, so nobody is left at a closed door.
- **The privacy page is linked from the footer** of help screens, right where people need reassurance.

## Fixed earlier today, from testing as Jamie

- Texting HELP didn't work. Now it does.
- "Talk" at a help point sent someone. Now it offers a chat through the speaker.
- The help point showed Jamie's and Karen's names on a public screen. Now it doesn't.
