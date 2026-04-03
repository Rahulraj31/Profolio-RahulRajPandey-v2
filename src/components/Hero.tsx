import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  name: string;
  headline: string;
}

export default function Hero({ name, headline }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-400/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono tracking-widest uppercase mb-8 text-brand-300"
        >
          Available for new opportunities
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
          Beyond <span className="text-gradient">Binary</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Hi, I'm <span className="text-white font-medium">{name}</span>. {headline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#experience" 
            className="group px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-brand-400 hover:text-white transition-all duration-300"
          >
            View Experience
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
