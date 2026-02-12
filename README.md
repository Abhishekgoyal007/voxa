# Voxa: The Intelligent WhatsApp Scheduling Agent 📅🤖

**Voxa** is a premium, production-grade AI scheduling assistant that eliminates the friction of manual booking. By combining the power of **Gemini 2.5 Flash Lite**, **Lamatic.ai**, and **Airtable**, Voxa acts as a high-fidelity secretary accessible entirely through WhatsApp.

---

## 🌟 The Vision
Traditional scheduling tools often require switching apps, filling out forms, or manual calendar coordination. Voxa removes this friction by bringing the "Executive Assistant" experience to your messaging inbox. It's designed for the busy professional who wants to manage their time using natural language, not forms.

## ✨ Key Features
- **Natural Language Intent**: No rigid commands. "Book a sync with Chirag tomorrow at 4" works instantly.
- **Multimodal Ready**: High-fidelity architecture designed to handle raw text from WhatsApp.
- **Agentic Memory**: Uses vector embeddings (Gemini Embeddings) to remember participants and previous context.
- **Automated Audit Trail**: Every booking is recorded in a professional Airtable dashboard with real-time status updates.
- **Conflict-Aware Scheduling**: Processes relative dates (tomorrow, next Friday) using real-time IST context.

---

## 🏗️ Project Architecture
The system follows a distributed "Agentic Workflow" across three core layers:

### 1. The Frontend (Landing Page)
- **Tech Stack**: React.js, Tailwind CSS, Vite.
- **Purpose**: A glassmorphic landing page used to showcase the agent's capabilities and provide onboarding instructions (join sandbox).

### 2. The Brain (Lamatic.ai Workflow)
- **Trigger**: Twilio Webhook receiving WhatsApp payloads.
- **Logic Node (Context)**: A Node.js environment that calculates the exact IST `today` and `currentTime` to give the AI temporal awareness.
- **Extraction Node**: Gemini 2.5 Flash Lite parsing message intent into a structured JSON schema.
- **Integration Node**: Maps data directly into the Airtable API for permanent storage.

### 3. The Executioner (Airtable + Google)
- **Airtable Dashboard**: Acts as the central hub for all scheduled events.
- **Automated Workflow**: Airtable Automations trigger a Google Calendar event creation, attaching a **Google Meet** link and sending email invites to guests based on the AI-extracted email address.

---

## 📁 Project Structure
```text
voxa/
├── frontend/           # React + Vite Landing Page
│   ├── src/            # UI Components
│   └── public/         # Project Assets
├── lamatic/            # Logic Blueprint
│   └── code_nodes/     # IST Date/Time processing logic
├── README.md           # Documentation (You are here)
└── package.json        # Unified installation scripts
```

---

## 🚀 Get Started Locally

You can run the entire project environment (Root + Frontend) with one command.

### 1. Install Everything
```bash
# Installs root and frontend dependencies automatically
npm run install:all
```

### 2. Launch the Development Environment
```bash
# Starts the frontend dev server via the root script
npm run dev
```
The landing page will be available at `http://localhost:5173`.

---

## 🏗️ The Blueprint (For Developers)
To recreate the agent logic in **Lamatic.ai**:
- **Point of Truth**: Use a Code Node to set the ISO date context.
- **The Prompt**: 
  > *"You are Voxa. Today is {{today}}. Extract: intent, participant, date (YYYY-MM-DD), time (HH:mm), email, and phone."*
- **The Connection**: Map your AI output fields directly to your Airtable columns.

---

## 🚀 Live Demo Guide
1. **Join the Sandbox**: Save **+1 415 523 8886** and message `join year-shut`.
2. **Send a Request**: 
   > *"Book a 30-minute strategy with Sarah for tomorrow at 2 PM. Email: sarah@example.com"*
3. **Watch the Result**:
   - Check WhatsApp for your **✅ Done!** message.
   - Check Google Calendar for the **Auto-created Invite** and **Meet Link**.

---

## 🛠️ Tech Stack & Credits
- **AI Orchestration**: Lamatic.ai
- **LLM**: Google Gemini 2.5 Flash Lite
- **Interface**: Twilio WhatsApp API
- **Automation**: Airtable & Google Calendar
- **Developer**: Abhishek Goyal
- **Email**: [abhishekgoyal1311@gmail.com](mailto:abhishekgoyal1311@gmail.com)
- **WhatsApp**: [+91 9166403437](https://wa.me/9166403437)
