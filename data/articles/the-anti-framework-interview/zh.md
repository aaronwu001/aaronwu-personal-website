> **TL;DR:** 這是我在經歷十幾場面試、拿下 AMD 機會並與多位大廠主管深聊後，領悟到的面試反直覺真相——在這個履歷過度膨脹的時代，資深面試官早就對空泛的「商業影響力」免疫。真正能讓你脫穎而出的，是「有底氣的誠實」與「刨根問底的技術好奇心」。

大家好，我是 Aaron Wu。寫這篇文章，是想和大家分享我在軟體工程面試的戰場上，跌撞摸索出的一套「反套路」心得。

寫這篇文章時，我心裡想著幾種不同的對象：
*   **如果你是主管或招募夥伴：** 希望這能讓你看見最真實的我，以及我面對技術細節和專案開發的誠實態度。
*   **如果你也正處於職涯前期，或是走在相似的路上：** 希望這能幫你打破「瘋狂包裝履歷」的迷思，找回面試的底氣。
*   **如果你是被我直接推坑來看這篇的：** 可能是因為你最近剛好問了我面試技巧或履歷準備的問題。我想用這篇血淋淋的實戰反思，當作我們聊天的起點。

## 要知道主管想聽什麼，先知道他們「聽爛了什麼」

你一定聽過 XYZ 原則，還有面試必備的 STAR 原則。我們被各式各樣的教學文章教導要講 Result（結果），要強調量化指標。這本來只是一個幫助表達的文章架構，但現在的求職者似乎總是過度包裝了「影響力」的部分，尤其是那些漂漂亮亮的數字。

## 為什麼「影響力數據」對面試官沒有意義？

在 AMD 實習結束前，我約了主管一對一開會，我問他：「你當初為什麼錄取我？」

他毫不猶豫地說：「因為你可以把程式碼講清楚。」

什麼意思？ 

他接著抱怨，現在太多初階工程師，一開口就是空泛的商業價值，以為這樣顯得很專業。但當被問到「這行函式吃什麼參數？為什麼這樣設計？」時，卻一句話都答不出來。這種人，前五分鐘就會被淘汰。因為對於一個專案從 high level 到 low level 的整體理解，證明你作為一個「軟體工程師」對於你的專案的投入程度。在找 junior dev 時，在開發和設計上的思辨和解釋能力，遠比專案最終的結果重要。

「可是，有些專案真的需要數字來表現它有多成功啊？這證明了我的能力不是嗎？」我試著反駁。

主管看著我說：「我問你，一個準確率從 80% 提升到 95%，這數字對『我正在面試你』這件事有什麼意義？」

「可以證明這為公司帶來了價值？」我試探性地回答。

「那它有說明這背後的開發者是怎麼做到的嗎？」主管搖搖頭，「對，完全沒有。除此之外什麼資訊量都沒有。」

他接著道出了一個非常殘酷的邏輯：「我不管你的專案在 Production 賺了多少錢、解決了多少人的問題，或是讓速度快了多少。因為這些『成功』背後，可能只是一個有問題的工程師剛好呼叫了對的 API，或是用錯誤的架構硬幹出來的，許多技術債被隱藏了。相反地，很多徹底失敗的專案背後，其實有著非常優秀的工程師，只是受限於太多無法控制的外部因素。」

他頓了一下，總結道：「所以說，對於一個邏輯清晰的 Hiring Manager 來說，那些光鮮亮麗的 Metrics（指標）並不能代表坐在我面前的這個 Candidate。」

「相較之下，你對於你懂和不懂的東西非常誠實的分析出來，因為你有去思考過你能和不能在有限的時間對你之前台灣實習的專案做什麼，所以你的話語間充滿了自信，讓我打從心裡覺得你會是一個不錯的 candidate。」

從這邊我們可以看出，其實在這個 AI 能幫所有人寫出完美履歷的年代，甚至有些人推薦你自己掰一點數據來展現你對於 impact 的敏銳度和在意程度，資深的面試官早就對空泛的影響力數據免疫了。能夠對於會和不會的東西、和我當時的開發環境背景冷靜判斷，和有自信的侃侃而談，成為我 stand out 的主因。

## 準備好的「江湖騙術」，在微軟大佬面前瞬間瓦解

我再分享這之後一場微軟的應用科學家實習面試。這是一場 behavioral 面試，結果我面對一位有 15 年資歷的業界大佬劈頭問的一個又一個問題，發現我原本準備好要講的「溝通框架」故事和「在團隊上沒有人懂 agent 的狀況下自學解決」故事，瞬間變得像「江湖騙術」。

他完全不跟我聊廢話，直接先問我到底成功把 agent 的準確率提升了多少，並直接拷問我半年前專案的「資料集大小、難度分佈、底層測試數據」，總而言之就是「你怎麼達到這個準確率的」。哇，這和 AMD 主管給我的回答有異曲同工之妙，不一樣的是他起於影響力，然後透過不斷問 how 和 how do you know 來抽絲剝繭。

我深吸一口氣，決定放棄所有包裝，誠實講述我當初純粹「因為好奇」而私下做的底層測試。結果，我反而靠著這些死去的記憶和他的測試打得有來有回。雖然我後來沒上（我覺得很合理，因為我對於 agent 測試準備的實在不夠充足），不過這讓我學會重要的一課：在面試時作為我底氣的，除了清楚自己知道什麼、我不知道什麼、為什麼要怎麼做以外，還需要刨根問底的技術好奇心。

因為他們在找的不是一個會考試的機器，而是一個**遇到 Bug 會想去挖底層邏輯的活人**。

## 面試不是套公式，而是分享你的「探險紀錄」

我發現在面試的時候，分享自己探險尋寶般的「尋找問題解方」的過程，那感覺真的很棒，好像被紀錄片採訪一樣可以回去咀嚼。不過如果我們要在所有面試前都好好咀嚼我們的開發經驗實在是太勉強了，所以在開發和測試當下就要有技術好奇心，要不斷問自己為什麼，這樣才能對 situation and task 有更好的理解，好像認真追劇那種投入程度去看待自己的開發專案。

這樣就算被問倒了，至少我們還能說「我不知道，但…」。一個人在誠實自信的狀況下，那個能量是很強力的，我相信這會讓人產生「我想要這個人來我團隊」的想法。

所以這就是結論，面試不能被當作套公式，而是應該要把工作切開：面試前積極投入開發等等蒐集探險故事，而面試的時候就是想辦法把這個流程講出來（這個才是 STAR method 的用處，而不是讓你掰故事或 result，那樣就反了）。這個時候你的能量應該要放在動態的注意面試官到底想要和你聊什麼、對什麼有興趣，就像一個正常聊天分享的人一樣。

希望這篇文章有幫助到你們，或是讓你們了解我對於求職的態度。我自己覺得網路上講這種大實話的人不多，但是很多人都告訴我他們在選 Junior 的時候最在意的真的就是這些特質。我認為永遠無敵的武器就是「有底氣的誠實」，還有清楚你在賣的是你自己，而不是你之前的 accomplishment。

如果你覺得我的思維和做事方式很適合你們團隊，我非常樂意探討合作的可能。又或者，如果你單純只是想聊聊技術、交換想法，我的信箱隨時為你敞開。直接寫信給我吧：**AaronWu.official@gmail.com** —— 我很期待能跟你聊聊！

***

> **TL;DR:** This is the story of how I realized a counter-intuitive truth after going through dozens of interviews, landing a role at AMD, and having deep conversations with Big Tech managers: in an era of over-inflated resumes, senior interviewers are completely immune to vague "business impact" metrics. What truly sets you apart is "unfiltered honesty" and "relentless technical curiosity."

Hi, I’m Aaron Wu. I’m writing this to share the "anti-playbook" interview lessons I learned the hard way while navigating the software engineering job market.

I’m writing this with a few different people in mind:
*   **If you are a hiring manager or recruiter:** I hope this gives you a clear window into who I am, and my honest approach to technical details and project development.
*   **If you are early in your career or on a similar path:** I hope this helps break the myth of "obsessively over-selling your resume" and helps you regain your authentic confidence in interviews.
*   **If I sent this to you directly:** You might be reading this because you recently asked me about interview tips or resume prep. I want to use these raw, real-world reflections as a starting point for our conversation.

## To Know What Managers Want to Hear, Know What They Are "Sick of Hearing"

You've definitely heard of the XYZ formula, or the mandatory STAR method for interviews. We are taught by countless tutorials to focus on the Result, to emphasize quantitative metrics. This was originally just a structural tool to help with expression, but nowadays, candidates seem to over-inflate the "impact" portion—especially those shiny numbers.

## Why "Impact Metrics" Are Meaningless to Interviewers

Right before my internship at AMD ended, I set up a 1-on-1 meeting with my manager and asked him, "Why did you hire me?"

He didn't hesitate: "Because you could actually explain your code."

What did that mean?

He went on to complain that too many junior engineers today open their mouths and spout empty business value, thinking it makes them look professional. But when asked, "What parameters does this function take? Why did you design it this way?" they can't utter a single word. Those candidates are disqualified in the first five minutes. A holistic understanding of a project—from the high level down to the low level—proves your true dedication as a "software engineer" to your work. When hiring a junior dev, the ability to think critically and explain development and design choices is far more important than the final result of the project.

"But some projects really need numbers to show how successful they are, right? Doesn't that prove my capability and effort?" I asked.

"Let me ask you," he replied, "an accuracy rate improving from 80% to 95%—what does that number actually mean?"

"It brings value to the company and the team?" I offered tentatively.

"Does it explain anything about the developers behind it? Does it prove they are competent?" He shook his head. "Right, there's zero information beyond that."

He then broke down a harsh reality: "I don't care how much money your project made in production, how many users' problems it solved, or how much faster it became. Behind all those successes, there could be a problematic engineer who just happened to tweak the right API, or who used the wrong approach to reach the goal, hiding all the technical trade-offs. Conversely, behind many completely failed projects, there are truly excellent engineers—there are just too many uncontrollable external factors."

He paused, then summarized: "So, to a clear-headed hiring manager, metrics don't really mean anything when evaluating the specific candidate sitting in front of me."

"In contrast, you honestly analyzed what you knew and what you didn't know, because you had actively thought about the trade-offs you could and couldn't make within a limited timeframe during your previous internship in Taiwan. Your words were full of confidence, which made me genuinely feel you'd be a great candidate."

From this, we can see that in an era where AI can write a perfect resume for anyone—and where some even recommend fabricating data just to show you have an "eye for impact"—senior interviewers are already immune to empty impact metrics. Being able to calmly judge what I knew and didn't know within my specific development context, and talking about it with confidence, was the main reason I stood out.

## My Rehearsed "Scripts" Crumbled Before a Microsoft Veteran

Let me share another story from an Applied Scientist internship interview at Microsoft shortly after. It was supposed to be a behavioral interview. But facing a 15-year industry veteran who fired off question after question, I realized that my prepared "communication framework" stories and my "self-taught to solve problems when no one in the team knew about agents" stories suddenly felt like cheap parlor tricks.

He skipped the small talk entirely. He directly asked exactly how much I successfully improved the agent's accuracy, and immediately grilled me on a project from six months ago: "What was the dataset size? What was the difficulty distribution? Where is the underlying test data?" Essentially, his entire line of questioning was: "How exactly did you achieve this accuracy rate?" Wow, this was remarkably similar to what my AMD manager told me, except he started with the impact and then peeled back the layers by constantly asking *how* and *how do you know*.

I took a deep breath, abandoned all the packaging, and honestly explained the underlying tests I ran privately back then, purely out of "curiosity." As a result, I actually managed to hold my ground using those long-forgotten details. Although I ultimately didn't get the offer (which I felt was completely fair, as my preparation for agent testing was genuinely insufficient), it taught me a vital lesson: The confidence I bring to an interview requires knowing clearly what I know, what I don't know, and why I did what I did—but it also requires a relentless technical curiosity. 

Because they are not looking for a machine that knows how to pass a test; they are looking for **a living, breathing person who digs into bottom-layer logic out of curiosity when they encounter a bug**.

## An Interview Isn't a Formula; It's Sharing Your "Expedition Log"

I realized that during an interview, sharing the treasure-hunt-like process of "finding a solution to a problem" feels incredible, almost like unpacking your thought process while being interviewed for a documentary. But it's too much to ask ourselves to thoroughly unpack our development experiences right before every single interview. Therefore, that technical curiosity has to exist *during* the actual development and testing phase. You have to constantly ask yourself "why" so you can have a better understanding of the situation and task. You need to treat your development projects with the same level of immersion as binge-watching a great TV show.

That way, even if we get stumped by a question, we can at least say, "I don't know, but..." The energy a person projects when they are honest and confident is incredibly powerful, and I believe this is what makes an interviewer think, "I want this person on my team."

So, this is the conclusion: Interviews shouldn't be treated like plugging numbers into a formula. You need to separate the work. Before the interview, actively immerse yourself in development and collect those "expedition stories." During the interview, your job is simply to figure out how to articulate that process (this is the true purpose of the STAR method, not a framework for making up stories or results—that’s completely backward). At that moment, your energy should be focused dynamically on noticing what the interviewer actually wants to talk about and what they are interested in, just like a normal person sharing a conversation.

I hope this article helps you out or gives you a sense of my approach to job hunting. I feel like not many people on the internet share this kind of brutal honesty, but many people have told me that these traits are exactly what they care about most when selecting a Junior. I believe the ultimately invincible weapon is "confident honesty," along with the clear understanding that what you are selling is yourself, not your past accomplishments.

If you think my mindset and approach would be a good fit for your team, I’d love to explore opportunities to work together. Or, if you just want to discuss tech or bounce some ideas around, my inbox is always open. Just shoot me an email at **AaronWu.official@gmail.com** — I’d love to chat!
