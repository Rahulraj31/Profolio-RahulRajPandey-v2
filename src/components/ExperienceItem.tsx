import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { Experience } from "../types";

export default function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-12 pb-12 border-l border-white/10 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]" />
      
      <div className="glass rounded-3xl p-8 hover:bg-white/[0.07] transition-colors duration-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
            <div className="flex items-center gap-2 text-brand-400 font-medium">
              <Briefcase size={16} />
              {experience.company}
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-sm font-mono text-zinc-400">
            <Calendar size={14} />
            {experience.dates}
          </div>
        </div>

        <ul className="space-y-4">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-3 text-zinc-400 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
