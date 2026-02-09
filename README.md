# Voxa: Voice-First WhatsApp Scheduling Agent

**Voxa** is a premium, agentic scheduling system that allows users to book, manage, and reschedule meetings using only their voice via WhatsApp. Powered by **Lamatic.ai**, Voxa orchestrates multiple specialized AI agents to handle intent extraction, memory-based personalization, and real-time calendar conflict resolution.

---

## 🌟 The Vision
Traditional scheduling tools require forms, links, and manual coordination. Voxa removes the friction by bringing the power of an executive assistant to your WhatsApp inbox.

- **Voice-Native**: Send a voice note like "Book a call with Sarah tomorrow morning" and let Voxa handle the rest.
- **Agentic Core**: Not a simple chatbot, but a system of coordinated agents that reason through conflicts and preferences.
- **Deep Personalization**: Remembers your preferred meeting lengths, working hours, and frequent contacts.

---

## 🏗️ System Architecture

Voxa is built with a "Thin Glue, Thick Brain" philosophy. The backend handles message routing and audio processing, while **Lamatic.ai** acts as the central intelligence engine.

### 1. The Interface Layer (WhatsApp + Node.js)
- **WhatsApp Webhook**: Receives incoming voice/text messages.
- **Audio Processor**: Converts voice notes (transcription) into clean text.
- **Relay**: Forwards data to the Lamatic API.

### 2. The Brain Layer (Lamatic.ai Orchestration)
The core logic resides in a multi-agent Lamatic flow:
- **Intent & Slot Extraction Agent**: Parses natural language into structured data (Who, When, What).
- **Personalization Agent**: Retrieves user preferences from Lamatic Memory (e.g., "Abhishek prefers 30-min calls").
- **Calendar Reasoning Agent**: Connects to the Google Calendar API via Lamatic Tool-Calling to check availability.
- **Conflict Resolution Agent**: If a slot is taken, it dynamically find the next best available time.

---

## 🚀 Key Features

- **Implicit Context**: "Book a call with Shiv" automatically looks up Shiv's contact info and your shared history.
- **Smart Conflict Handling**: "You're busy at 9:30 PM, but I've found a slot at 10:00 PM. Should I book it?"
- **Memory-Driven**: Learns your habits over time (e.g., "I see you usually schedule gym sessions at 6 AM").

---

## 🛠️ Tech Stack
- **AI Orchestration**: [Lamatic.ai](https://lamatic.ai/)
- **LLM**: GPT-4o / Gemini 1.5 Pro (via Lamatic)
- **Database**: Lamatic Vector DB / Global Memory
- **Integrations**: Google Calendar API, WhatsApp Business API
- **Backend Glue**: Node.js / Express

---

## 📈 Future Roadmap
- [ ] Support for multiple calendar providers (Outlook, iCloud).
- [ ] Automated meeting preparation briefs.
- [ ] Multi-party rescheduling (finding a slot that works for everyone).

---

## ⚙️ Lamatic.ai Setup (The "Brain")

Since the backend logic is entirely managed by Lamatic, you need to configure a flow in your [Lamatic.ai Dashboard](https://lamatic.ai/):

1. **Trigger**: Create a Webhook trigger to receive messages from WhatsApp/Frontend.
2. **Intent Agent**: Use an LLM node with a system prompt to extract `{intent, date, time, participant}`.
3. **Memory Node**: Connect to Lamatic's Global Memory to fetch user preferences (e.g., `preferred_duration`).
4. **Tool Node**: Add a Google Calendar connector. Configure it to `list` and `create` events.
5. **Reasoning Loop**: Use an LLM node to check for conflicts from the tool output and suggest alternatives.
6. **Response Node**: Finalize the conversational text and send it back via the API Response node.

---

## 🛠️ Local Development

1. **Install Dependencies**:
   ```bash
   npm run install:all
   ```

2. **Run Frontend**:
   ```bash
   npm run dev
   ```
   This will launch the landing page and agent simulator at `http://localhost:5173`.

---

## 🤝 Contributing
Created by **Abhishek**.
