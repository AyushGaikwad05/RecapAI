# RecapAI 🎥

RecapAI is an AI tool that helps you understand and talk to your videos. It turns video audio into text, creates easy summaries, lists action steps, and lets you ask questions directly to your video.

---

## ✨ Features

* **🎥 Video to Text:** Converts video speech into readable text transcripts.
* **📝 Quick Summaries:** Gives you short, clear summaries of long videos.
* **💬 Chat with Videos:** Ask questions and get instant answers based on the video.
* **🔎 Smart Search:** Easily find specific topics inside the video.
* **📋 Action Plans:** Automatically lists key tasks and next steps mentioned in the video.
* **🤖 Accurate Answers:** Uses AI to give correct answers directly from your video content.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, JavaScript, CSS
* **Backend:** Python, FastAPI
* **AI:** Google Gemini, Sarvam AI
* **Framework:** LangChain
* **Vector Database:** ChromaDB

---

## 📷 Screenshots
``` bash
Screenshots coming soon ...
```
---

## ⚙️ How to Run the Project

### 1. Backend Setup

Open your terminal and run:

```bash

# Create a virtual environment
python -m venv venv

# Activate it (Windows)
venv\Scripts\activate

# Install required packages
pip install -r requirements.txt



```
Create a file named `.env` in the `backend` folder and add your keys:

```bash

GEMINI_API_KEY=your_gemini_api_key
SARVAM_API_KEY=your_sarvam_api_key


```
Start the backend server:


```bash
uvicorn app:app --reload

```



---

### 2. Frontend Setup

Open a new terminal and run:

```bash

# Install packages
npm install

# Start the app
npm run dev

```

---



## 🧠 How It Works

```text
Video Text ➡️ Split into parts ➡️ Gemini Embeddings ➡️ Saved in ChromaDB ➡️ Find relevant parts ➡️ Sarvam AI ➡️ Final Answer

```

---
