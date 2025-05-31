# instarec 📸

**instarec** is a lightweight JavaScript tool to automatically record and download Instagram stories (including Close Friends) directly from your browser.  
No extensions, no logins, no third-party sites — just run the script and save the story.

---

## 🚀 Features

- ⏱️ Automatically detects story video
- ▶️ Auto-plays and records the moment it starts
- 📥 Downloads the story as `.webm` file
- 🔐 Works on Close Friends (CF) stories
- 🧠 No dependencies or setup needed

---

## 🛠️ How to Use

1. Open the Instagram story you want to save (desktop browser only).
2. Right-click the page and choose **Inspect**, or press `F12`.
3. Go to the **Console** tab.
4. Paste the contents of `instarec.js` and hit **Enter**.
5. The script will:
   - Wait for the story’s video to appear
   - Auto-play the story
   - Start recording
   - Download it once it ends ✅

---

## 📁 Files

- `instarec.js` – The JavaScript you paste in the console.
- `README.md` – This file, with usage info and details.

---

## ⚠️ Limitations

- Only works for Instagram **stories**, not Reels or Posts.
- Output is in `.webm` (not `.mp4`) due to browser constraints.
- Requires Chromium-based browsers (Chrome, Edge, Brave).
- Doesn’t record audio if Instagram mutes it by default.

---

## 📜 License

MIT License — free to use, tweak, and share.

---

## 💡 Pro Tips

- Don’t refresh the page during recording
- Avoid switching tabs — it may pause playback
- You can rename the downloaded file afterward

---

Made with 💻 and ☕ by [me](https://github.com/theawesomeyopro1/) — contributions welcome!
