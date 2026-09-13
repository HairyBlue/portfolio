# Dispatch II: Late to the Wave, But I Built My Own Boat
**Broadsheet Section: `[ ORIGIN STORY ]` · Lead Dispatch & Personal Essay**  
*How money, not doubt, pushed me to build my own AI agent crew*  
*By Nicki Marty Pecision · Mindanao, Philippines · Special Personal Dispatch*

---

Everyone else seemed to be sprinting. Agentic workflows, vibe coding, whole fleets of AI agents shipping code while their owners slept — and I was still watching from the shore.

It wasn't ego. It wasn't doubt about the technology either. It was money.

---

### It was never about doubting AI

I help support my mother alongside my siblings — she's a single parent who's gotten by on *diskarte ray puhunan* — resourcefulness as the only capital you've got. A significant part of what I earn goes toward helping her, because for a long time things were genuinely tight, and every peso mattered more than every new tool I wanted to try.

So while other developers were subscribing to two or three AI platforms at once, my workflow was: open a browser, use free credits, burn through them fast, switch to another provider when they ran out. That's not a workflow you can build an agentic pipeline on. Agentic work eats tokens. A monthly subscription was the obvious answer, and for a long time it wasn't one I could afford.

---

### A way in: student accounts and Antigravity

The break came when I realized I still qualified for a student account, and that it worked with **Antigravity**. That was the first real door into agentic work I could actually walk through.

It wasn't smooth. I run my dev environment on WSL, and Antigravity 2.0 doesn't work inside WSL. My workaround became a small ritual: use the Antigravity IDE for coding, and keep Antigravity 2.0 for research and anything that could comfortably stay on the Windows side. I've never liked developing directly on Windows — the filesystem is messy compared to Linux or macOS — so this was a compromise, not a preference.

---

### Building the foundation while I waited

While I figured all this out, I started something on the side: a repo to hold skills and memory files — `AGENTS.md` — so I wouldn't rebuild the same conventions from zero every time I started a new project. If I'm working on a Laravel app, I want a memory file that already knows Laravel and a set of skills that already apply, instead of reintroducing myself to my own AI assistant every single time.

I also started folding in skills other people had already open-sourced — including some from Matt Pocock — so I didn't have to `npx install` a skill package into every new project. I'd just ask the AI to carry the relevant skill over. I called this little collection **ACON**. At the time, that was really all it was: my own agent collection.

---

### The next wave: parallel agents

Eventually the conversation shifted again — people weren't just running one agent anymore, they were running fleets of them in parallel, orchestrating instead of prompting. Antigravity alone couldn't get me there. If I wanted to touch a different project, I had to reopen the IDE and start a new chat inside it. No continuity, no crew — just one agent at a time, one project at a time.

---

### herdr, and learning to live in the terminal

That sent me looking, and I landed on a YouTube video — catchy thumbnail, *"L8 Principal's Agentic Engineering Setup"* — by an engineer named **Kun Chen**. He was running **herdr**, a terminal multiplexer built specifically for running and managing multiple AI coding agents at once. As someone who's always been a terminal person at heart, this felt like exactly the direction I wanted. Adoption was slower than I expected, though — I'd been living in app-based tools, and getting comfortable driving everything from the CLI took real time.

![herdr terminal multiplexer setup](/images/herdr-setup.png)
*Fig. 2: Four parallel Antigravity CLI worker panes running Gemini 3.8 Flash (effort: high) in herdr multiplexer on a single subscription.*

I went looking for alternatives too. I tried **Orca**, an Agent Development Environment (ADE) built to run, monitor, and orchestrate multiple agents at once — and hit the same wall again: it doesn't run directly on WSL either. The workaround was SSHing into WSL while some of the agent's files lived on the Windows side. Workable, but not something I trusted enough to build on.

So I stuck with herdr, and slowly, it stuck with me.

---

### Then I found firstmate

Digging further into Kun Chen's work, I found [**firstmate**](https://github.com/kunchenguid/firstmate) — his project built around a simple idea: *"Talk to one agent. Ship with a crew."* Instead of juggling five terminal tabs yourself, you talk to a single "first mate," and it spawns a crew of autonomous agents behind the scenes — each with its own isolated git worktree, each supervised to completion, handing you back finished pull requests or investigation reports.

> *"Instead of juggling five terminal tabs yourself, you talk to a single first mate, and it spawns a crew of autonomous agents behind the scenes."*

It's a genuinely impressive piece of engineering, and it's clearly resonating — the repo has grown to around 3,000 stars. But reading through it, I realized something: it's built for someone with multiple subscriptions and access to genuinely powerful models. My reality was different. Antigravity's free and student tier mostly gave me Gemini Flash, plus older, lower-tier Claude and GPT access — not the kind of models firstmate's crew architecture seems to assume you're running.

---

### Why I didn't just adopt it

So I didn't. I asked the AI to help me build something in the same spirit, but lighter — no background scripts, no session daemons, no extra infrastructure. Just an `AGENTS.md` file and a set of skills, sitting on top of whatever harness I was already running. I went back to my existing ACON repo — the same one that had started as just "my agent collection" — and had the agent fold in the productivity skills I already had: `prompt-master`, which hands a prompt off through calibrated tiers depending on how complex the task is; `grill-me`, for asking sharp clarifying questions before work starts instead of after; `ponytail`, for keeping engineering honest and un-overengineered; plus a handful of governance rules to keep everything from turning into chaos once multiple agents were running at once.

What started as a folder of borrowed conventions slowly became something with an actual shape: **ACON**, now more formally an Agentic Conventions & Control Plane Network — my own Control Plane, my own Captain-and-Crew model, built to run on one subscription instead of three.

![ACON 4-Phase Architecture Flowchart](/images/acon-architecture.png)
*Fig. 3: The ACON 4-Phase Lifecycle: Alignment, Task Shaping & Calibration, Autonomous Crew Flight, and Central Synthesis.*

---

### What I actually learned

Being late wasn't a character flaw. It was a constraint — and constraints are just a different kind of teacher. I didn't get to install every shiny new agent tool the week it launched. But having to ask *"what does this actually need to work, for me, on my setup, on my budget?"* at every step is probably why what I ended up building fits me better than anything I could have just installed off the shelf.

---

### References & Credits
*ACON is open source and still very early — you can find it at [https://github.com/HairyBlue/acon](https://github.com/HairyBlue/acon). It stands on the shoulders of firstmate, prompt-master, and a handful of other open-source agent-skill projects, credited in full in the repository's references.*
