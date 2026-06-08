# Uncomfortable Comfortability

**Publication:** Medium · AI Advances  
**Date:** June 2026  
**Read time:** ~10 min  
**Tags:** Agentic AI, Developer Productivity, Agent Memory, Platform Engineering

---

About two and a half, maybe three years ago, I started using AI tools for coding.

That sentence sounds so small now. I almost don't know how to explain what it meant then — or how far it's taken me from where I started.

It's June 2026. I'm doing things I genuinely did not think I would be doing. The shift has moved through my industry, through my colleagues, through people I've known for years who swore they'd never let a model touch their codebase. And here we are. All of us, in one way or another, here.

I didn't see it coming. Not like this. What I can tell you is that every change happened gradually, then suddenly — the way most real things do. Not from a roadmap or a mandate. From a feeling. One that started deeply uncomfortable, and over time, became something else entirely.

This is that story.

---

## It Started With a File Edit

The first time I let an AI write directly to my local filesystem, I watched it. Every character. Cursor hovering over undo.

It wasn't about trust in the outcome. I knew it would probably be fine. What it was — and I didn't have the words for this at the time — was territorial. That repo had been mine. Months, maybe years of commits, decisions, late nights, bad names I'd never gotten around to fixing. I knew every corner of it the way you know your own apartment. And now something was just walking in and changing things.

That's a different feeling than distrust. It's like coming back to your dorm room and finding out your mom came in while you were out and rearranged everything. Yeah — that pissed me off. But then I sat there, actually looked at what changed, and had to admit: she did a better job than I ever would have.

That's the part that gets you.

The edit was fine. Better than fine — it was right. And that was almost worse, because now I had to decide what to do with that information.

So I watched the next one too. And the one after that. Not because I expected it to fail. Because the repo was my baby, and I wasn't ready to stop hovering over it.

---

## Auto-Approval Was a Quiet Decision

I don't remember the exact moment I turned on auto-approval. I remember the reasoning: I'd reviewed enough edits that I had a working model of what the agent would and wouldn't do. I'd seen the failure modes. I'd built intuition.

It felt like a promotion I gave myself after a long performance review.

What I didn't expect was what it changed about my posture. When you're reviewing every change, you're still in execution mode — you're in the loop, latency and all. When you step back from that, you stop being a reviewer and start being an architect. You're no longer asking "is this right?" You're asking "is this the right thing to be doing?"

That's a different job. A better one.

---

## The Models Had Issues. Real Ones.

Here's the part people skip when they tell this story as a triumph arc.

The early models were genuinely frustrating in a specific way. Not unusable — but inconsistent in a way that forced a decision every single time you sat down to work: do I hand it a large chunk of work and let it run, knowing I might have to fall back and fix-forward? Or do I start small, stay close, and iterate?

Sonnet 3.7 was the clearest example. It had moments of real brilliance — you'd give it something hard and it would nail it. Then it would confidently produce something subtly wrong across a large edit and you'd spend more time unwinding it than you would have spent writing it yourself. The size of the task mattered. The complexity of the context mattered. You had to develop a feel for where the edge was, and the edge moved.

What those limitations forced me to do — and what I think junior developers genuinely struggle with today, even with far better models — was learn how to give context. Real context. Not a vague description of what you want, but the full picture: what exists, why it exists, what can't change, what the edge cases are, what done actually looks like. The more of that you gave the model, the better its judgment. Better judgment led to better decisions. Better decisions meant less time cleaning up.

People call this prompt engineering. Or context engineering. Or whatever the term is this month that gets the clicks. I don't care about any of that. What I care about is whether my tools and my assistants are performing at their best in every situation I put them in. That's it. And I only found that discipline because the lesser models made the cost of skipping it obvious. They punished laziness in a way the newer models are forgiving enough to hide — which, honestly, might be doing some people a disservice.

But that friction taught me something I wouldn't have learned any other way: how important it was to plan. Not a loose creative markdown file you throw together while ideating — an actual plan. One that covers the corner cases. One you've either thought through carefully yourself or worked through with someone else. Every edge case named, every assumption surfaced, and a testing framework built to support it before the model touches a line of code.

I discovered this during the 3 family. The model wasn't the problem — the ambiguity was. When you handed Sonnet 3.7 a well-defined plan with clear scope and tests that could tell it when it was done, it performed. When you handed it a vague direction and hoped for the best, you paid for it. The model was just honest enough to expose the planning debt you'd been carrying.

That instability had a cost people don't talk about enough: it kept you in a defensive posture. You couldn't fully let go because you'd been burned enough times to keep one hand on the wheel. Trust was building, but it had a ceiling — and that ceiling was almost always your own lack of clarity, not the model's lack of capability.

Then came Opus 4. Then 4.5. Then 4.6.

And somewhere in that progression, the ceiling disappeared.

It wasn't one release. It was the accumulation — each model closing the gap between what you asked for and what you got, shrinking the surface area of the fixes, making the errors cheaper to correct. By the time I was running 4.6 regularly, I'd stopped doing the mental math. I wasn't calculating risk tolerance per task anymore. I just gave it the work.

Code became cheap. Not because I stopped caring about quality — but because I already knew the model would land in the right place. If something broke in a lower environment, I'd fix it in minutes. The cost of being wrong had dropped so far that being cautious about it stopped making sense.

That shift — when the error rate gets low enough that fixing forward is cheaper than preventing — is the moment the relationship changes. You stop managing the model and start working with it.

---

## Then I Stopped Sitting in the IDE

This one took longer to admit to myself.

I'd open the IDE out of habit. `CMD+~`, cycling through my tabs the way I always had. Then I'd just... sit there. Looking at a diff I hadn't written, in a file I hadn't touched, in a project that was moving forward without me needing to be in it.

And I'd think: why the hell do I even need to be here?

So I stopped. I'd open a terminal in my project root — where all my repos lived — give it the work, tell it where the work needed to go, and let the agent cook. The tests were passing. The output was clean. I was reading summaries, not code. My interface had quietly shifted from an editor to a terminal — and then from a terminal to a summary.

I wasn't writing less software. I was operating more of it.

There's a version of this that sounds like I gave something up. I don't think that's right. What I gave up was the illusion that presence in the editor meant ownership of the outcome. What I kept was judgment — about what to build, why to build it, and when to stop.

---

## Building Systems for Other Developers

When you stop being precious about your own workflow, you start seeing everyone else's with new eyes.

I'd been building DevGPT at scale inside J.P. Morgan Chase — 6,500+ engineers, a platform that had to work across teams, personas, and risk tolerances. What I'd learned in my own workflow, I now had to operationalize for people who were exactly where I'd been two years earlier.

The work wasn't technical in the way I expected. It was mostly about trust gradients. About letting engineers move from watched edits to auto-approval at their own pace, without feeling like they were losing control. About designing the system so that the agent's judgment was legible enough to extend.

You can't automate trust. But you can build infrastructure that makes it easier to earn.

---

## The Data Collected. The System Ran Without Me.

Here's where it gets interesting.

At some point the agents stopped waiting for me. Not because I told them to — because the architecture made waiting unnecessary. They had context. They had memory. They had enough of a working model of intent that they could make decisions at the edges without escalating everything to the center.

I'd check in and find work already done. Not just tasks completed — decisions made, edge cases handled, outputs logged. The system had been running while I slept.

That is not automation. Automation is a script that runs on a schedule. What I was looking at was something that oriented itself to a goal and moved toward it continuously, asynchronously, across time.

This became the cornerstone of what we now call agentic memory.

---

## Agentic Memory Isn't a Feature. It's an Architecture.

Memory is the thing that turns a capable agent into a reliable one.

Without memory, every session starts from zero. The agent is competent but amnesiac — good at the task in front of it, blind to everything that came before. You rebuild context every time. You re-explain. You re-correct.

With memory, the system accumulates. It learns which patterns hold. It carries forward what mattered. It stops being a tool you use and starts being a system you operate.

Multi-tier memory — working context, session-level recall, long-horizon consolidation — isn't an academic distinction. It's the difference between a system that functions and one that compounds. Each tier doing different work at different timescales, feeding each other, getting better without you explicitly making it better.

I've written about this architecture in depth. What I want to say here is that it didn't emerge from a design doc. It emerged from watching real systems behave over real time and asking: what would this need to not forget?

---

## Agents Calling Agents

We are not done.

The next layer isn't better agents. It's agents that coordinate — that spawn work, delegate it, monitor it, and synthesize it without a human in the middle of every handoff.

I've been watching this shift happen in real systems. An orchestrator that breaks a goal into subtasks and assigns them to specialized agents. A monitor that watches outputs and decides when to intervene. A memory layer that keeps the whole thing coherent across the span of work.

The thing that strikes me isn't the capability. It's the inversion. For most of software history, systems did exactly what we told them and nothing more. Now the question is increasingly: what do you want the system to be responsible for? What decisions are yours, and what decisions can you afford to delegate?

That's not a technical question. It's an organizational one. A philosophical one, even.

---

## The Discomfort Was the Signal

Looking back, every moment of discomfort in this journey was pointing at something real.

The discomfort of watching the first file edit: *Am I still an engineer if I didn't write this?*  
The discomfort of auto-approval: *What am I responsible for if I'm not reviewing everything?*  
The discomfort of leaving the IDE: *What does it mean to do this work now?*  
The discomfort of the system running without me: *Is this still mine?*

These weren't signs to slow down. They were signs that something was actually changing — not just in the tooling, but in the nature of the work itself.

The engineers who are building the best systems right now aren't the ones who made peace with AI by ignoring the discomfort. They're the ones who sat with it long enough to understand what it was telling them.

Comfortability, I've learned, isn't the absence of discomfort. It's what you build on the other side of it.

We're still building.

---

*Jordan Carson is a Principal Engineer specializing in cloud-native AI systems and agentic developer platforms. He writes about agent architecture, memory engineering, and what it takes to run autonomous systems at enterprise scale.*
