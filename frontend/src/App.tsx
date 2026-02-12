import { motion } from 'framer-motion';
import {
  MessageSquare,
  Brain,
  Clock,
  ArrowRight,
  Search,
  Zap,
  ChevronRight
} from 'lucide-react';

const Navbar = () => (
  <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-5">
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-9 h-9 bg-[#FF4D4C] rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
          <MessageSquare className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold font-heading tracking-tight text-black">Voxa.ai</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-500">
        <a href="#product" className="hover:text-black transition-colors">Product</a>
        <a href="#solutions" className="hover:text-black transition-colors">Solutions</a>
        <a href="#docs" className="hover:text-black transition-colors">Docs</a>
        <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
      </div>
      <div className="flex items-center gap-5">
        <button className="btn-lamatic px-6 py-2.5 shadow-lg shadow-red-500/20">Talk to Sales</button>
      </div>
    </div>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="lamatic-card p-10 flex flex-col gap-5 group items-start text-left h-full"
  >
    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-[#FF4D4C] transition-all duration-300">
      <Icon className="text-[#FF4D4C] group-hover:text-white w-7 h-7 transition-colors" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mt-2">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium text-[16px]">{description}</p>
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen selection:bg-red-100 selection:text-red-600">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[13px] font-bold mb-10 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <span className="bg-white border border-gray-200 px-2 py-0.5 rounded text-[#FF4D4C] text-[11px] uppercase tracking-wider">New</span>
            Introducing Voxa v2.0
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[88px] font-bold font-heading tracking-tight text-gray-900 leading-[0.95] max-w-[900px] mx-auto"
          >
            Turn Intent into <br />
            <span className="text-[#FF4D4C]">Reliable Action</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-medium leading-relaxed mt-10 max-w-2xl mx-auto"
          >
            Experience the next generation of scheduling. Voxa is an enterprise grade WhatsApp Agent
            that leverages the full orchestration power of Lamatic.ai to automate your calendar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4D4C] to-[#FF8080] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Book a meeting with Sarah tomorrow at 4 PM. Email: sarah@example.com..."
                className="input-lamatic shadow-2xl shadow-red-500/5 group-hover:shadow-red-500/10 py-5 text-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#FF4D4C] rounded-xl flex items-center justify-center text-white hover:bg-[#E64545] shadow-lg shadow-red-500/20 transition-all hover:scale-105 active:scale-95">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className="badge-lamatic hover:translate-y-[-2px] transition-transform">
              <Zap className="w-4 h-4 text-[#FF4D4C]" /> Automate Bookings
            </div>
            <div className="badge-lamatic hover:translate-y-[-2px] transition-transform">
              <Brain className="w-4 h-4 text-purple-500" /> Intent Recognition
            </div>
            <div className="badge-lamatic hover:translate-y-[-2px] transition-transform">
              <Search className="w-4 h-4 text-blue-500" /> Calendar Search
            </div>
            <div className="text-gray-400 text-[11px] font-bold mt-6 w-full tracking-widest uppercase opacity-80">No credit card required</div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Connection Section */}
      <section id="demo" className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="lamatic-card p-12 bg-white relative overflow-hidden border-2 border-red-50">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <span className="text-[#FF4D4C] font-bold text-sm tracking-widest uppercase mb-4 block">Live Now</span>
                  <h2 className="text-4xl font-bold font-heading text-gray-900 leading-tight mb-6">
                    Try the Agent <br />on WhatsApp.
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <p className="text-gray-600 font-medium">Scan the QR or add <span className="text-black font-bold">+1 415 523 8886</span> to your contacts.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <p className="text-gray-600 font-medium">Send the code <span className="bg-gray-100 px-2 py-1 rounded font-mono text-black">join year-shut</span> to activate.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <p className="text-gray-600 font-medium">Say: "Book a meeting with John tomorrow at 5 PM. Email: john@example.com, Phone: 9876543210"</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-64 aspect-square bg-white rounded-2xl border-4 border-white shadow-lg overflow-hidden flex items-center justify-center group cursor-pointer hover:border-red-100 transition-colors">
                  <img src="/qr.jpeg" alt="WhatsApp QR Code" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-32 bg-gray-50/30 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 font-bold">Powered by Lamatic.ai Intelligence</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Voxa isn't just a chatbot; it's a sophisticated agentic workflow built on the
              Lamatic.ai orchestration engine for high-reliability automation.            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={Brain}
              title="Agentic Workflow"
              description="Voxa uses Lamatic's complex node-based logic to handle real-world scheduling nuances like relative dates and participant memory."
            />
            <FeatureCard
              icon={Clock}
              title="Temporal Awareness"
              description="A dedicated Lamatic context node injects real-time IST data, allowing Voxa to truly understand 'tomorrow' or 'next week'."
            />
            <FeatureCard
              icon={Zap}
              title="Instant Executioner"
              description="Data is parsed by Gemini via Lamatic nodes and pushed directly to Google Calendar via Airtable automations for zero-latency booking."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 overflow-hidden relative">
        <div className="container text-center relative z-10">
          <div className="lamatic-card p-16 max-w-4xl mx-auto bg-white border-2 border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            <h2 className="text-4xl font-bold font-heading mb-6">Ready to automate your life?</h2>
            <p className="text-xl text-gray-500 mb-10 font-medium">
              Join 500+ users who are reclaiming their time with Voxa WhatsApp Agent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-lamatic px-10 py-4 text-lg">
                Get Started for Free
              </button>
              <button className="px-10 py-4 rounded-lg bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors text-lg" onClick={() => window.open('https://github.com/Abhishekgoyal007/voxa', '_blank')}>
                Project Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-20 text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-[#FF4D4C] rounded-lg flex items-center justify-center shadow-md">
                  <MessageSquare className="text-white w-5 h-5" />
                </div>
                <span className="text-2xl font-bold font-heading tracking-tight text-black">Voxa.ai</span>
              </div>
              <p className="text-gray-500 max-w-[340px] font-medium leading-relaxed text-[15px]">
                The leading AI agent for personal scheduling and automation.
                Built natively on Lamatic.ai's orchestration engine.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-gray-900 uppercase text-[11px] tracking-[0.2em]">Product</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-sm">
                <li><a href="#" className="hover:text-[#FF4D4C] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#FF4D4C] transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-[#FF4D4C] transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8 text-gray-900 uppercase text-[11px] tracking-[0.2em]">Connect</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-sm">
                <li><a href="https://www.linkedin.com/in/abhishek-goyal7/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D4C] transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/Abhishek_G_dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF4D4C] transition-colors">Twitter (X)</a></li>
                <li><a href="mailto:abhishekgoyal1311@gmail.com" className="hover:text-[#FF4D4C] transition-colors">abhishekgoyal1311@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-gray-400 text-[13px] font-bold tracking-tight">
              © 2026 Voxa AI. All rights reserved. Created with ❤️ for <span className="text-gray-600">Lamatic.ai</span>
            </p>
            <div className="flex gap-10 text-gray-400 text-[13px] font-bold tracking-tight">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

