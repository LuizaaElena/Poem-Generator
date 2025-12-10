<p align="center">
  <img src="./public/wax-seal.png" width="96" alt="Wax seal logo" />
</p>

<h1 align="center">Dreambook Poem Maker · Vintage AI Poem Generator</h1>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/LuizaaElena/Poem-Generator?color=b98b73&style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/badge/React-19.2.0-ffe8d6?style=flat-square&logo=react&logoColor=8ecae6" alt="React 19.2.0">
  <img src="https://img.shields.io/badge/Vite-7.2.4-ecbfa5?style=flat-square&logo=vite&logoColor=8661d1" alt="Vite 7.2.4">
  <img src="https://img.shields.io/badge/Node.js-18%2B-d4a373?style=flat-square&logo=node.js&logoColor=35643c" alt="Node.js 18+">
  <img src="https://img.shields.io/badge/Express-4.22.1-cfa48f?style=flat-square&logo=express&logoColor=3a2b20" alt="Express 4.22.1">
  <img src="https://img.shields.io/badge/Gemini%20SDK-0.24.1-ddb892?style=flat-square&logo=google&logoColor=3b3b98" alt="Gemini SDK 0.24.1">
</p>

---


# 📜 Poem Generator – AI Poetry in an Old Book UI

A vintage, old-book styled poem generator powered by **Google Gemini**.  
Choose a topic, style, and language, then let the model write a poem for you in a romantic, elegant interface that looks like a classic book page.

## 📸 Preview
<p align='center'>
    <img src='public/preview.png'>
</p>

## ✨ Features

- 🎨 **Vintage book UI** – parchment background, page-like cards, bookmark ribbon
- 🧠 **AI-powered poems** – generated using Google Gemini API
- 🌍 **Multi-language support** – English, Romanian, French, Spanish
- 🎭 **Multiple styles** – romantic, sad/melancholic, funny, motivational, haiku, dark/dramatic
- 📜 **Scrollable poem output** – long poems stay inside a scrollable page area

---

## 🛠 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Custom CSS (vintage old-book aesthetic)
- **Backend:** Node.js + Express
- **AI:** Google Generative AI (Gemini)
- **Other:** dotenv, CORS

---

## 🚀 Getting Started (Local)

### 1. Clone the repository

```bash
git clone https://github.com/USERNAME/poem-generator.git
cd poem-generator-with-google-gemini
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
cd ..
```

### 4. Configure environment variables

```bash
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=5000
```
>⚠️ Note: Never commit your real API key.

### 5. Run the backend
In a terminal:
```bash
cd server
node index.js
```

### 6. Run the frontend
In another terminal (from the root of the project):
```bash
cd ..
npm run dev
```

Open it in your browser and start generating poems. ✨