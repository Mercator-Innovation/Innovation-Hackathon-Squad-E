# Testing Night Neighbours as Jamie

*Sruthi James, Ctrl-Alt-Elite, 22 October, about 16:45. I walked through the prototype as Jamie, our persona: it's 23:15, he's alone and low, his phone is on 12%, and he has no data. Route: Ask by text → help point → check-in. This is a walkthrough by one of us, not testing with real people.*

## What's confusing, most important first

1. **"help" doesn't work.** The first thing Jamie texted was `help`, and he got "Sorry, we didn't get that". It's the most natural word to send. *Fix: treat HELP like TALK, or reply with the choices.*
2. **"Someone to talk to" at the help point sends someone to him.** It says "Sam will be here in about 10 minutes", the same as "Someone to come to me". Jamie might only want a chat, and someone turning up could put him off. *Fix: "Talk" should say Sam will ring this help point, or ring his phone.*
3. **The help point shows his name, and his sister's, on a public screen.** After he types his PIN, it says "Thanks, Jamie... We've let Karen know". Anyone standing nearby can read that. *Fix: "Thanks, you're checked in. We've let the people you chose know."*
4. **The text service doesn't know he's at a help point.** The help point screen tells him to text `TALK ANNAN` with his town, but he's standing at help point 214, which already gives his location. `TALK 214` isn't understood. *Fix: accept the help point number as well as the town, and show `TALK 214` on the help point screen.*
5. **"We've let anyone you chose know".** After texting `OK`, he's told people he chose have been told, but the text route never asked who to tell. Jamie would wonder who knows. *Fix: say who ("We've let Karen know"), or ask once, the first time.*
6. **Forgetting the town costs another text.** `talk` on its own gets "Which town are you near?", and he has to text again. With 8% battery, every text counts. *Fix: ask "Reply with your town, like ANNAN" and accept the town on its own.*
7. **What if his phone dies?** He's told "Sam will ring you in the next 10 mins", but his phone could die before then. *Fix: add "If your phone dies, go to help point 214 at Annan station. It's lit and has charging."*

## What worked well

- Replies are short, calm and never mention drugs. Each fits in one text, and 999 is mentioned without making it feel like an emergency.
- `TXT` instead of a call is a good touch for someone who can't talk.
- After `COME`, he's asked where he is "like a street or shop", which makes sense to him.
- The help point says when a volunteer next walks past, so he isn't left wondering.
- `BED` then `COME` leads to someone walking with him to the hub.

## Not tested

- Real people. The persona is made up, and these are our guesses.
- A screen reader, or keyboard-only use, all the way through.
