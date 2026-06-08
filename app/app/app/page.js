import React from 'react';
import { 
  LineChart, Search, Zap, Users, Globe, Mail, Phone, Linkedin, ExternalLink, CheckCircle2 
} from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter text-blue-600">TANVEER.SEO</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="mailto:bhattitanveerraza@gmail.com" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Contact Me</a>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap size={14} /> Available for Projects
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                Mastering Search in the <span className="text-blue-600">Age of AI.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                I’m <span className="text-slate-900 font-semibold">Tanveer Raza</span>. I bridge the gap between traditional SERP dominance and AI-driven discovery (AEO/GEO) to drive organic growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">
                  View Experience
                </a>
                <a href="https://pk.linkedin.com/in/tanveer-raza-91a262231" target="_blank" className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold flex items-center gap-2 transition hover:bg-slate-50">
                  <Linkedin size={20} className="text-blue-600" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="relative p-8 bg-white border border-slate-200 rounded-[2rem] shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-lg"><LineChart /></div>
                    <p className="text-sm text-slate-500 italic">"Specializing in High-Converting Revenue across hyper-competitive verticals."</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-slate-900">4+</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Years Exp.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl text-center">
                      <p className="text-2xl font-bold text-slate-900">100+</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">SEO Audits</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="py-24 px-6 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-16 text-center">Professional Timeline</h2>
            <div className="space-y-12">
              <div className="relative pl-12 border-l-2 border-blue-600">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <h3 className="text-2xl font-bold">Team Lead – SEO Specialist</h3>
                <p className="text-blue-600 font-semibold mb-2 text-sm">Rankviz Pvt Ltd | Feb 2024 — Present</p>
                <p className="text-slate-600 text-sm italic">Leading the SEO department, managing specialists, and executing AI/LLM visibility strategies.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-300 border-4 border-white"></div>
                <h3 className="text-2xl font-bold text-slate-800">Junior SEO Specialist</h3>
                <p className="text-slate-500 font-semibold mb-2 text-sm">Rankviz Pvt Ltd | Feb 2023 — Jan 2024</p>
                <p className="text-slate-600 text-sm italic">Executed off-page SEO campaigns to improve website authority while advancing on-page SEO skills.</p>
              </div>
              <div className="relative pl-12 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-300 border-4 border-white"></div>
                <h3 className="text-2xl font-bold text-slate-800">Link Building & Outreach</h3>
                <p className="text-slate-500 font-semibold mb-2 text-sm">Quality Resources Pvt Ltd | Oct 2022 — Dec 2022</p>
                <p className="text-slate-600 text-sm italic">Built high-quality backlinks and conducted guest posting outreach to improve organic traffic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- TOOLS & SKILLS --- */}
        <section id="skills" className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 my-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest">Expertise & Tools</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Technical SEO Audit', 'AEO / GEO Optimization', 'Semantic SEO', 
                'Local SEO', 'Keyword Research', 'Ahrefs', 'Semrush', 
                'Screaming Frog', 'GSC', 'GTM', 'WordPress'
              ].map((tool) => (
                <span key={tool} className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8 italic text-blue-600">Let’s drive Growth.</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-xl mx-auto">
            <a href="mailto:bhattitanveerraza@gmail.com" className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition">
              <Mail className="text-blue-600" /> bhattitanveerraza@gmail.com
            </a>
            <a href="tel:+923066775744" className="flex items-center justify-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition">
              <Phone className="text-blue-600" /> +92 306 6775744
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-100">
        © 2025 Tanveer Raza | SEO Specialist Portfolio
      </footer>
    </div>
  );
}
