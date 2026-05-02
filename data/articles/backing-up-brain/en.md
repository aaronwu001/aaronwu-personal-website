> **TL;DR:** This isn't an 'AI is magic' hype post. It's a realistic look at how I acted as the Architect to an AI Executor, fighting hallucinations and bugs to build a fully automated markdown content pipeline 20 days before my mandatory military enlistment.

*Status: Caffeinated | Days until Enlistment: 20*

Imagine this scenario: You have insights to share about system design, but dealing with Canonical URLs, OG Images, and formatting Markdown for different platforms (GitHub Pages, Dev.to, LinkedIn) takes hours per post. 

To make matters worse: I'm leaving for mandatory military service in Taiwan in 20 days. To ensure my tech blog doesn't die while I'm in the barracks, I decided to "automate" the entire publishing process. I definitely don't want to spend my precious weekend leave time copy-pasting articles.

## The Architecture: Brain First, AI Second

There are plenty of tutorials online on how to stitch together pipelines with various tools, but I didn't copy them. As an engineer, I define the problem myself. Before opening the AI chat window, I already had a complete architectural blueprint in my head:

1.  **Input:** I only provide a raw idea and keywords.
2.  **Process:** The system must automatically expand this into a full article, translate it into English, and generate social media posts tailored to each platform.
3.  **Output:** Produce Hugo/Next.js-compliant Markdown files, where the filename and Front Matter must match my specs precisely.

I made the requirements clear: I didn't want the AI to "think" of a workflow for me; I wanted the AI to "write" the System Prompt that executes *my* workflow.

## Debugging the AI: When the Machine Tries to be Creative

The birth of this system was essentially a massive Code Review war between a Senior Engineer (Me) and the AI. AI is like a fresh Junior Engineer: very smart, but it loves to be a smart-ass.

### 1. The War on Naming Conventions
My brand name is `aaronwubuilds`. But when generating Config and SSH settings, the AI constantly tried to simplify it to `Aaron Builds`. Does that sound trivial? Wrong. In an SSH Config, a single character difference causes `Host verification failed`, blocking my Git Push entirely. I had to act like a strict Tech Lead, repeatedly correcting it: *"Do not change my Variable Names!"*

### 2. The Attack of Feature Creep
During initial testing, my site build failed. After investigating, I found the AI had arbitrarily inserted a Shortcode into the generated Markdown, assuming every blog must have a newsletter subscription box. My theme doesn't even have that feature configured! I had explicitly said "Keep It Simple," yet I had to issue a direct order: *"Remove all Shortcodes."* 

If I hadn't caught this, this hidden bug would have certainly exploded during a future automated deployment—likely when I'm stuck in the army camp, unable to put out fires.

## The Solution: Aaron Wu Builds Pipeline v1.0

After fixing all the hallucinations, here is the high-speed publishing system I use now:

*   **Step 1: The Input:** I prepare a raw outline, today's date, and a Slug.
*   **Step 2: The Compiler:** I feed the Input into my fine-tuned Prompt. It obediently outputs localized Markdown (with correct Cross-links and Canonical URLs) and social media packs.
*   **Step 3: Build & Deploy:** I save the Markdown files and execute standard Git operations (`git push`). Vercel/GitHub Actions automatically builds the static site.

## The Takeaway

This workflow compressed a process that used to take 4 hours into less than 30 minutes. 

1.  **Don't let AI handle the Architecture:** The architecture comes from the human mind. If you don't know what you want, AI will just give you unrunnable garbage code. You must have a clear Pipeline design first.
2.  **Review Everything:** AI gets lazy and changes variables on a whim. As an engineer, the ability to *Code Review* is now more important than the ability to write code.

For every day remaining before enlistment, I will use this system—designed by me, executed by AI—to back up all my CS knowledge, enterprise architecture insights, and pre-enlistment anxiety.
