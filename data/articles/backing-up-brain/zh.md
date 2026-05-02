> **摘要：** 這不是一篇吹捧「AI 魔法」的廢文。這是一個真實紀錄：在入伍前 20 天，我如何以架構師的身分，與總是「通靈」產生幻覺的 AI 搏鬥，最終打造出全自動 Markdown 發布管線的故事。

*狀態：咖啡因過載 | 距離登入國軍 Online：20 天*

想像一下：你剛寫完一篇關於 System Design 的乾貨，但光是搞定 Canonical URL、OG Image，還要依照 GitHub Pages、Dev.to、LinkedIn 等不同平台去調校 Markdown 格式，就耗掉你整個下午。

更慘的是：我還有 20 天就要進去當兵了。為了確保我的技術部落格不會在我待在營區時直接長草，我決定把整個發布流程「自動化」。我可不想把寶貴的放假時間拿來複製貼上文章。

## 架構設計：人腦為核心，AI 只是執行者

網路上有很多教你用各種 No-code 工具串接 Pipeline 的教學，但我沒打算照抄。身為工程師，我習慣自己定義問題。在打開 AI 聊天視窗前，我的腦袋裡已經有一張完整的架構藍圖：

1.  **Input（輸入）：** 我只提供草稿概念與關鍵字。
2.  **Process（處理）：** 系統必須自動展開成完整文章、雙語翻譯，並生出符合各平台調性的社群貼文。
3.  **Output（輸出）：** 產出完美符合 Next.js / Hugo 規範的 Markdown 檔案，檔名與 Front Matter 必須一字不差。

我把需求踩得很死：我不要 AI 來幫我「想」工作流；我要 AI 幫我「寫出」能執行我工作流的 System Prompt。

## Debugging AI：當機器開始「自作聰明」

這個系統誕生的過程，基本上就是我（Senior Engineer）跟 AI 之間的一場大型 Code Review 攻防戰。AI 就像個剛畢業的 Junior 工程師：非常聰明，但超級愛「假會（自作聰明）」。

### 1. 變數命名大戰
我的專案名稱是 `aaronwubuilds`。但在生成 Config 檔時，AI 總是自作主張把它簡化成 `Aaron Builds`。這聽起來是小事？大錯特錯。在 SSH Config 裡，差一個字元就會直接噴出 `Host verification failed`，導致 Git Push 完全卡死。我只好化身嚴格的 Tech Lead 狂電它：「不要亂改我的變數命名！照我給的 Spec 寫！」

### 2. 規格蔓延 (Feature Creep) 的逆襲
在初期測試時，我的網站 Build 直接噴錯。追查後發現，AI 在產生的 Markdown 裡擅自塞了一個 Shortcode（簡碼），因為它預設每個部落格都應該要有「訂閱電子報」的區塊。我的版型根本沒掛這個功能！我明明說了 "Keep It Simple"，卻還是得下達死命令：「移除所有 Shortcode，我現在不需要這個功能。」

如果我沒抓到這個 Bug，這個隱形炸彈絕對會在我未來自動部署時引爆——而且很可能是我被關在營區、完全無法救火的時候。

## 解決方案：Aaron Wu 發布管線 v1.0

在修掉所有 AI 的「幻覺」後，這是我現在使用的高速發布系統：

*   **Step 1: The Input:** 準備草稿、日期跟 Slug。
*   **Step 2: The Compiler:** 餵給微調過的 Prompt。它現在會乖乖吐出格式正確的雙語 Markdown（包含 Canonical URL）和社群貼文。
*   **Step 3: Build & Deploy:** 存檔並執行標準的 Git 操作 (`git push`)，接下來就交給 Vercel / GitHub Actions 去自動 Build 靜態網站。

## 核心體悟

這套工作流把原本需要 4 小時的苦力活，壓縮到不到 30 分鐘。

1.  **別讓 AI 負責架構：** 架構是人腦決定的。如果你不知道自己要什麼，AI 只會塞給你一坨跑不動的垃圾 Code。你必須先有清晰的 Pipeline 設計圖。
2.  **Review 所有的東西：** AI 會偷懶、會隨心所欲地亂改變數。身為現代工程師，**Code Review 的能力，現在已經比寫 Code 的能力更重要了。**

距離入伍還有幾天。我會繼續用這套「我設計、AI 執行」的系統，把我在 Rutgers 學到的 CS 知識、在 AMD 看到的企業架構，以及入伍前的焦慮，全部備份下來。
