/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Code, BookOpen, User, Send, Database, GraduationCap, ArrowRight } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ArticleCard from "./components/ArticleCard";
import ExperienceItem from "./components/ExperienceItem";
import { PortfolioData } from "./types";
import yaml from "js-yaml";
import profilePic from "./assets/profile.jpg";

console.log("App Version: v19");

export default function App() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/portfolio.yaml?t=${Date.now()}`);
      if (response.ok) {
        const yamlText = await response.text();
        const yamlData = yaml.load(yamlText) as PortfolioData;
        if (yamlData && yamlData.fullName) {
          setData(yamlData);
        }
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data && !loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-6 p-6 text-center">
        <p className="text-brand-400 font-mono text-sm uppercase tracking-widest">
          Failed to load portfolio data.
        </p>
        <button 
          onClick={() => fetchData()}
          className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
        >
          Retry Loading
        </button>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-6">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-12 h-12 border-2 border-brand-500/20 border-t-brand-500 rounded-full"
        />
        <p className="font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase animate-pulse">
          Initializing Beyond Binary...
        </p>
      </div>
    );
  }

  const portfolio = data;

  return (
    <div className="relative">
      <Navbar />
      
      <Hero name={portfolio.fullName} headline={portfolio.headline} />

      <Section id="about" title="About Me" subtitle="Bridging research and production.">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-500/30 rounded-full" />
              <p className="text-2xl text-white leading-snug font-light tracking-tight">
                {portfolio.bio}
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="group">
                <h4 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Code size={12} /> Technical Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(portfolio.skills.technical || []).map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg glass text-[10px] font-mono text-indigo-400 border border-indigo-500/10 hover:border-indigo-400/50 hover:scale-105 hover:bg-indigo-500/5 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="group">
                <h4 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <User size={12} /> Strategic Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(portfolio.skills.strategicCompetencies || []).map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg glass text-[10px] font-mono text-cyan-400 border border-cyan-500/10 hover:border-cyan-400/50 hover:scale-105 hover:bg-cyan-500/5 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="group">
                <h4 className="text-rose-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Database size={12} /> Professional Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(portfolio.skills.certifications || []).map(cert => (
                    <span key={cert} className="px-3 py-1.5 rounded-lg glass text-[10px] font-mono text-rose-400 border border-rose-500/10 hover:border-rose-400/50 hover:scale-105 hover:bg-rose-500/5 hover:shadow-[0_0_15px_rgba(251,113,133,0.2)] transition-all cursor-default">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-500/10 rounded-[2.5rem] blur-3xl" />
            <div className="relative glass rounded-[2.5rem] overflow-hidden aspect-[4/5] group hover:border-brand-500/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.25)] transition-all duration-700">
              <img 
                src={profilePic} 
                alt={portfolio.fullName}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-display font-bold text-2xl tracking-tighter">RR<span className="text-brand-400">.</span></p>
                <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">{portfolio.shortRole || "7x Google Cloud Architect"}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience" subtitle="My professional journey.">
        <div className="max-w-4xl">
          {(portfolio.experience || []).map((exp, idx) => (
            <ExperienceItem key={idx} experience={exp} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" subtitle="My academic background.">
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl">
          {(portfolio.education || []).map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl group hover:bg-white/5 transition-all border border-white/5 hover:border-brand-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-500/10 rounded-2xl text-brand-400">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">{edu.school}</h3>
                    <p className="text-zinc-400 font-medium">{edu.degree}</p>
                    {edu.grade && (
                      <p className="text-brand-400/80 font-mono text-xs mt-1 uppercase tracking-widest">Grade: {edu.grade}</p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">{edu.dates}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="articles" title="Latest Articles" subtitle="Thoughts on technology and development.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(portfolio.articles || []).map((article, idx) => (
            <ArticleCard key={idx} article={article} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch" subtitle="Let's build something amazing together.">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 glass p-10 rounded-[2.5rem] flex flex-col justify-center space-y-6 border border-white/5">
              <h3 className="text-3xl font-bold text-white tracking-tight">Ready to collaborate?</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <div className="pt-4">
                <a 
                  href={`mailto:${portfolio.contact.email}`} 
                  className="inline-flex items-center gap-3 px-6 py-3 bg-brand-500 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-500/20 group"
                >
                  <Mail size={18} />
                  Send an Email
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={`mailto:${portfolio.contact.email}`} className="glass p-5 rounded-3xl hover:bg-white/5 transition-all group border border-white/5 hover:border-brand-500/30 flex items-center gap-5">
                <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-0.5">Direct Email</p>
                  <p className="text-sm font-medium text-white truncate">{portfolio.contact.email}</p>
                </div>
              </a>

              <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="glass p-5 rounded-3xl hover:bg-white/5 transition-all group border border-white/5 hover:border-brand-500/30 flex items-center gap-5">
                <div className="p-3 rounded-2xl bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors shrink-0">
                  <Linkedin size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-0.5">Professional</p>
                  <p className="text-sm font-medium text-white">LinkedIn Profile</p>
                </div>
              </a>

              <a href={portfolio.contact.github} target="_blank" rel="noreferrer" className="glass p-5 rounded-3xl hover:bg-white/5 transition-all group border border-white/5 hover:border-brand-500/30 flex items-center gap-5">
                <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                  <Github size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-0.5">Open Source</p>
                  <p className="text-sm font-medium text-white">GitHub Repos</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a href={portfolio.contact.medium} target="_blank" rel="noreferrer" className="glass p-5 rounded-3xl hover:bg-white/5 transition-all group border border-white/5 hover:border-brand-500/30 flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Blog</p>
                    <p className="text-xs font-medium text-white">Medium</p>
                  </div>
                </a>
                {portfolio.contact.kaggle && (
                  <a href={portfolio.contact.kaggle} target="_blank" rel="noreferrer" className="glass p-5 rounded-3xl hover:bg-white/5 transition-all group border border-white/5 hover:border-brand-500/30 flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-[#20beff]/10 text-[#20beff] group-hover:bg-[#20beff] group-hover:text-white transition-colors shrink-0">
                      <Database size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Data</p>
                      <p className="text-xs font-medium text-white">Kaggle</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} {portfolio.fullName} • Beyond Binary
        </p>
      </footer>

      {/* Custom Cursor or other aesthetic elements can go here */}
    </div>
  );
}
