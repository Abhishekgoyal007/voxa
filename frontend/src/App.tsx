import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  Calendar,
  MessageSquare,
  Brain,
  CheckCircle2,
  Clock,
  Zap,
  ChevronRight,
  ArrowRight,
  Play
} from 'lucide-react';

const Navbar = () => (
  <nav className="container flex items-center justify-between py-6">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
        <Mic className="text-white w-6 h-6" />
      </div>
      <span className="text-2xl font-bold font-heading tracking-tight">Voxa</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
      <a href="#features" className="hover:text-white transition-colors">Features</a>
      <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
      <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
      <button className="btn-primary">Get Started</button>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass-card p-8 flex flex-col gap-4 border-white/5 hover:border-violet-500/30 transition-colors group"
  >
    <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
      <Icon className="text-violet-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Simulator = () => {
  const [step, setStep] = useState(0);

  const demoSteps = [
    {
      role: 'user',
      type: 'voice',
      content: "Book a meeting with Shiv today at 9:30 PM",
      sub: "Transcription: 'Hey, book a meeting with Shiv today at nine thirty at night.'"
    },
    {
      role: 'agent',
      type: 'reasoning',
      content: "Processing with Lamatic.ai...",
      details: ["Extracting Intent: schedule_meeting", "Retrieving Memory: Abhishek default duration = 30m", "Checking Google Calendar API..."]
    },
    {
      role: 'agent',
      type: 'message',
      content: "You have 'Dinner with Mom' until 10 PM. Should I schedule Shiv for 10:00 PM instead?",
      sub: "Conflict found at 9:30 PM. Proposing nearest free slot."
    }
  ];

  return (
    <div className="glass-card overflow-hidden w-full max-w-2xl mx-auto shadow-2xl shadow-violet-500/5">
      <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Lamatic Agent Sandbox</span>
        <div className="w-10" />
      </div>

      <div className="p-8 h-[400px] overflow-y-auto flex flex-col gap-6 bg-slate-900/50">
        <AnimatePresence mode="popLayout">
          {demoSteps.slice(0, step + 1).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex flex-col ${item.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl ${item.role === 'user'
                  ? 'bg-violet-600'
                  : item.type === 'reasoning'
                    ? 'bg-slate-800 italic text-slate-400 border border-white/5'
                    : 'bg-slate-800'
                }`}>
                {item.type === 'voice' && <Mic className="w-4 h-4 mb-2 opacity-50" />}
                <p className="text-sm leading-relaxed">{item.content}</p>
                {item.details && (
                  <ul className="mt-2 space-y-1">
                    {item.details.map((d, j) => (
                      <li key={j} className="text-[10px] flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {item.sub && <span className="text-[10px] text-slate-500 mt-2 px-2">{item.sub}</span>}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-white/5 border-t border-white/5 flex justify-center">
        {step < demoSteps.length - 1 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors"
          >
            Continue Simulation <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={() => setStep(0)}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white font-medium transition-colors"
          >
            Reset Demo
          </button>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] hero-gradient opacity-50" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold tracking-widest uppercase"
            >
              Powered by Lamatic.ai
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1]"
            >
              The Assistant <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">That Actually Listens.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mt-4 max-w-xl"
            >
              Voxa is a premium voice-first scheduling agent for WhatsApp.
              No forms, no links—just talk to your calendar.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
            >
              <button className="btn-primary px-8 py-4 text-lg">
                Try Demo <Play className="w-5 h-5 fill-current" />
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-lg font-semibold">
                View Architecture
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-24"
          >
            <Simulator />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-slate-900/30">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-heading text-white">Why Voxa?</h2>
              <p className="text-slate-400 mt-4 leading-relaxed">
                We built Voxa with an "Agent-First" philosophy. Unlike simple bots, Voxa uses
                multiple reasoning agents to handle the complexity of your life.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={Brain}
                title="Agentic Reasoning"
                description="Lamatic agents reason through scheduling conflicts, proposing alternatives instead of just failing."
              />
              <FeatureCard
                icon={Clock}
                title="Deep Memory"
                description="Voxa remembers your meeting preferences, default durations, and working hours for effortless bookings."
              />
              <FeatureCard
                icon={Calendar}
                title="Tool Integration"
                description="Directly connected to Google Calendar via Lamatic Tool-Calling for real-time consistency."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="how-it-works" className="py-32">
        <div className="container">
          <div className="glass-card p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] group-hover:bg-violet-500/20 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-bold font-heading text-white leading-tight">
                  Powered by the <br />
                  <span className="text-violet-400">Lamatic AI Engine.</span>
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-violet-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Multi-Agent Orchestration</h4>
                      <p className="text-slate-400 text-sm mt-1">Specialized agents handle specific tasks like Intent Extraction, Memory Lookup, and Action Execution.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-fuchsia-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Stateful Conversational UX</h4>
                      <p className="text-slate-400 text-sm mt-1">Maintains state across multiple turns on WhatsApp without complex local database management.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Native Tool-Calling</h4>
                      <p className="text-slate-400 text-sm mt-1">Seamlessly connects to Google APIs via Lamatic's secure tool infrastructure.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur opacity-25" />
                  <div className="relative bg-slate-950 w-64 h-64 rounded-full flex flex-col items-center justify-center gap-2 border border-white/10 shadow-3xl">
                    <Brain className="w-16 h-16 text-violet-400 mb-2" />
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Decision Engine</span>
                    <span className="text-lg font-bold text-white">Lamatic.ai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
              <Mic className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight">Voxa</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Voxa. Created by Abhishek.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
