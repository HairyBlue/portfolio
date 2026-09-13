<template>
  <article class="reader-container">
    <div v-if="storyId === 'dispatch-two'" class="feature-article">
      <header class="article-header">
        <h3 class="article-title font-headline">LATE TO THE WAVE, BUT I BUILT MY OWN BOAT</h3>
        <p class="article-deck font-body"><em>How money, not doubt, pushed me to build my own AI agent crew</em></p>
        <div class="article-meta dateline">
          <span>By Nicki Marty Pecision</span>
          <span class="separator">|</span>
          <span>Mindanao, Philippines</span>
          <span class="separator">|</span>
          <span>Special Personal Dispatch</span>
        </div>
      </header>

      <div class="article-body font-body">
        <p class="drop-cap">
          Everyone else seemed to be sprinting. Agentic workflows, vibe coding, whole fleets of AI agents shipping code while their owners slept — and I was still watching from the shore.
        </p>
        <p class="article-paragraph">
          It wasn't ego. It wasn't doubt about the technology either. It was money.
        </p>
        <h4 class="editorial-subheading font-headline">It was never about doubting AI</h4>
        <p class="article-paragraph">
          I help support my mother alongside my siblings — she's a single parent who's gotten by on <em>diskarte ray puhunan</em> — resourcefulness as the only capital you've got. A significant part of what I earn goes toward helping her, because for a long time things were genuinely tight, and every peso mattered more than every new tool I wanted to try.
        </p>
        <p class="article-paragraph">
          So while other developers were subscribing to two or three AI platforms at once, my workflow was: open a browser, use free credits, burn through them fast, switch to another provider when they ran out. That's not a workflow you can build an agentic pipeline on. Agentic work eats tokens. A monthly subscription was the obvious answer, and for a long time it wasn't one I could afford.
        </p>
        <h4 class="editorial-subheading font-headline">A way in: student accounts and Antigravity</h4>
        <p class="article-paragraph">
          The break came when I realized I still qualified for a student account, and that it worked with <strong>Antigravity</strong>. That was the first real door into agentic work I could actually walk through.
        </p>
        <p class="article-paragraph">
          It wasn't smooth. I run my dev environment on WSL, and Antigravity 2.0 doesn't work inside WSL. My workaround became a small ritual: use the Antigravity IDE for coding, and keep Antigravity 2.0 for research and anything that could comfortably stay on the Windows side. I've never liked developing directly on Windows — the filesystem is messy compared to Linux or macOS — so this was a compromise, not a preference.
        </p>
        <h4 class="editorial-subheading font-headline">Building the foundation while I waited</h4>
        <p class="article-paragraph">
          While I figured all this out, I started something on the side: a repo to hold skills and memory files — <code class="font-mono">AGENTS.md</code> — so I wouldn't rebuild the same conventions from zero every time I started a new project. If I'm working on a Laravel app, I want a memory file that already knows Laravel and a set of skills that already apply, instead of reintroducing myself to my own AI assistant every single time.
        </p>
        <p class="article-paragraph">
          I also started folding in skills other people had already open-sourced — including some from Matt Pocock — so I didn't have to <code class="font-mono">npx install</code> a skill package into every new project. I'd just ask the AI to carry the relevant skill over. I called this little collection <strong>ACON</strong>. At the time, that was really all it was: my own agent collection.
        </p>
        <h4 class="editorial-subheading font-headline">The next wave: parallel agents</h4>
        <p class="article-paragraph">
          Eventually the conversation shifted again — people weren't just running one agent anymore, they were running fleets of them in parallel, orchestrating instead of prompting. Antigravity alone couldn't get me there. If I wanted to touch a different project, I had to reopen the IDE and start a new chat inside it. No continuity, no crew — just one agent at a time, one project at a time.
        </p>
        <h4 class="editorial-subheading font-headline">herdr, and learning to live in the terminal</h4>
        <p class="article-paragraph">
          That sent me looking, and I landed on a YouTube video — catchy thumbnail, <em>"L8 Principal's Agentic Engineering Setup"</em> — by an engineer named <strong>Kun Chen</strong>. He was running <strong>herdr</strong>, a terminal multiplexer built specifically for running and managing multiple AI coding agents at once. As someone who's always been a terminal person at heart, this felt like exactly the direction I wanted. Adoption was slower than I expected, though — I'd been living in app-based tools, and getting comfortable driving everything from the CLI took real time.
        </p>
        
        <figure class="editorial-figure">
          <div class="figure-frame">
            <a href="/images/herdr-setup.png" target="_blank" rel="noopener">
              <img src="/images/herdr-setup.png" alt="herdr terminal multiplexer setup" class="editorial-img" />
            </a>
          </div>
          <figcaption class="font-mono cutline">Fig. 2: Four parallel Antigravity CLI worker panes running Gemini 3.8 Flash (effort: high) in herdr multiplexer on a single subscription.</figcaption>
        </figure>

        <p class="article-paragraph">
          I went looking for alternatives too. I tried <strong>Orca</strong>, an Agent Development Environment (ADE) built to run, monitor, and orchestrate multiple agents at once — and hit the same wall again: it doesn't run directly on WSL either. The workaround was SSHing into WSL while some of the agent's files lived on the Windows side. Workable, but not something I trusted enough to build on.
        </p>
        <p class="article-paragraph">
          So I stuck with herdr, and slowly, it stuck with me.
        </p>

        <h4 class="editorial-subheading font-headline">Then I found firstmate</h4>
        <p class="article-paragraph">
          Digging further into Kun Chen's work, I found <a href="https://github.com/kunchenguid/firstmate" class="telegraph-link" target="_blank" rel="noopener noreferrer"><strong>firstmate</strong></a> — his project built around a simple idea: <em>"Talk to one agent. Ship with a crew."</em> Instead of juggling five terminal tabs yourself, you talk to a single "first mate," and it spawns a crew of autonomous agents behind the scenes — each with its own isolated git worktree, each supervised to completion, handing you back finished pull requests or investigation reports.
        </p>

        <blockquote class="pull-quote font-body" style="font-style: italic;">
          "Instead of juggling five terminal tabs yourself, you talk to a single first mate, and it spawns a crew of autonomous agents behind the scenes."
        </blockquote>

        <p class="article-paragraph">
          It's a genuinely impressive piece of engineering, and it's clearly resonating — the repo has grown to around 3,000 stars. But reading through it, I realized something: it's built for someone with multiple subscriptions and access to genuinely powerful models. My reality was different. Antigravity's free and student tier mostly gave me Gemini Flash, plus older, lower-tier Claude and GPT access — not the kind of models firstmate's crew architecture seems to assume you're running.
        </p>

        <h4 class="editorial-subheading font-headline">Why I didn't just adopt it</h4>
        <p class="article-paragraph">
          So I didn't. I asked the AI to help me build something in the same spirit, but lighter — no background scripts, no session daemons, no extra infrastructure. Just an <code class="font-mono">AGENTS.md</code> file and a set of skills, sitting on top of whatever harness I was already running. I went back to my existing ACON repo — the same one that had started as just "my agent collection" — and had the agent fold in the productivity skills I already had: <code class="font-mono">prompt-master</code>, which hands a prompt off through calibrated tiers depending on how complex the task is; <code class="font-mono">grill-me</code>, for asking sharp clarifying questions before work starts instead of after; <code class="font-mono">ponytail</code>, for keeping engineering honest and un-overengineered; plus a handful of governance rules to keep everything from turning into chaos once multiple agents were running at once.
        </p>
        <p class="article-paragraph">
          What started as a folder of borrowed conventions slowly became something with an actual shape: <strong>ACON</strong>, now more formally an Agentic Conventions & Control Plane Network — my own Control Plane, my own Captain-and-Crew model, built to run on one subscription instead of three.
        </p>

        <figure class="editorial-figure">
          <div class="figure-frame">
            <a href="/images/acon-architecture.png" target="_blank" rel="noopener">
              <img src="/images/acon-architecture.png" alt="ACON 4-Phase Architecture Flowchart" class="editorial-img" />
            </a>
          </div>
          <figcaption class="font-mono cutline">Fig. 3: The ACON 4-Phase Lifecycle: Alignment, Task Shaping & Calibration, Autonomous Crew Flight, and Central Synthesis.</figcaption>
        </figure>

        <h4 class="editorial-subheading font-headline">What I actually learned</h4>
        <p class="article-paragraph">
          Being late wasn't a character flaw. It was a constraint — and constraints are just a different kind of teacher. I didn't get to install every shiny new agent tool the week it launched. But having to ask <em>"what does this actually need to work, for me, on my setup, on my budget?"</em> at every step is probably why what I ended up building fits me better than anything I could have just installed off the shelf.
        </p>
        
        <hr class="editorial-rule-double" style="margin: 3rem 0 1rem; border-top: 1px solid var(--border-dim); border-bottom: none; height: 1px;">
        
        <p class="article-paragraph" style="font-size: 0.95rem; color: var(--text-muted);">
          <em>ACON is open source and still very early — you can find it <a href="https://github.com/HairyBlue/acon" class="telegraph-link" target="_blank" rel="noopener noreferrer">here</a>. It stands on the shoulders of firstmate, prompt-master, and a handful of other open-source agent-skill projects, credited in full in the repo's references.</em>
        </p>
      </div>
    </div>

    <div v-else-if="storyId === 'dispatch-one'" class="feature-article">
      <header class="article-header">
        <h3 class="article-title font-headline">{{ miniBlog.title.toUpperCase() }}</h3>
        <p class="article-deck font-body"><em>{{ miniBlog.subtitle }}</em></p>
        <div class="article-meta dateline">
          <span>By Nicki Marty Pecision</span>
          <span class="separator">|</span>
          <span>{{ miniBlog.date }}</span>
          <span class="separator">|</span>
          <span>{{ miniBlog.readTime }}</span>
        </div>
      </header>

      <div class="article-body font-body">
        <p v-for="(para, idx) in miniBlog.paragraphs" :key="idx" :class="{ 'drop-cap': idx === 0, 'article-paragraph': true }">
          {{ para }}
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { miniBlog } from '~/data/portfolioData'

defineProps<{
  storyId: string
}>()
</script>

<style scoped>
.reader-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.feature-article {
  padding-bottom: 2rem;
}

.article-header {
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-dim);
  padding-bottom: 2rem;
  text-align: center;
}

.article-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.article-deck {
  font-size: 1.5rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.article-meta {
  color: var(--text-dim);
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.separator {
  color: var(--border-dim);
}

.article-body {
  font-size: 1.25rem;
  line-height: 1.85;
  color: var(--text-main);
}

.article-paragraph {
  margin-bottom: 2rem;
  text-align: justify;
}

.drop-cap {
  margin-bottom: 2rem;
  text-align: justify;
}

.editorial-subheading {
  font-size: 2rem;
  margin: 4rem 0 1.5rem;
  color: var(--text-main);
  text-transform: uppercase;
  border-bottom: 1px dashed var(--border-dim);
  padding-bottom: 0.5rem;
}

.telegraph-link {
  color: var(--accent-ink);
  text-decoration: none;
  border-bottom: 1px solid var(--accent-ink);
  font-weight: 600;
  transition: all 0.2s ease;
}

.telegraph-link:hover {
  background-color: var(--accent-ink);
  color: var(--bg-page);
}

/* Figures */
.editorial-figure {
  margin: 3.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.figure-frame {
  border: 4px double var(--border-strong);
  padding: 0.5rem;
  background: var(--bg-surface);
  max-width: 100%;
}

.editorial-img {
  max-width: 100%;
  height: auto;
  display: block;
  filter: sepia(0.2) contrast(1.1); /* Vintage ink feel */
}

.cutline {
  margin-top: 1.25rem;
  font-size: 0.95rem;
  color: var(--text-muted);
  text-align: center;
  max-width: 90%;
  line-height: 1.5;
}

.pull-quote {
  font-size: 2rem;
  line-height: 1.4;
  margin: 4rem auto;
  text-align: center;
  position: relative;
  padding: 3rem 0;
  color: var(--text-main);
  max-width: 90%;
}

.pull-quote::before {
  content: '“';
  font-family: var(--font-headline);
  font-size: 7rem;
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--border-dim);
  opacity: 0.2;
}

code {
  font-size: 0.9em;
  background: var(--bg-surface-subtle);
  padding: 0.1em 0.3em;
  border: 1px solid var(--border-dim);
}

@media (max-width: 768px) {
  .article-title {
    font-size: 2.5rem;
  }
}
</style>
