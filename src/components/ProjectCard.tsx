import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-3xl p-8 flex flex-col h-full group hover:border-brand-500/50 transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-500">
          <Github size={24} />
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          className="p-3 rounded-full hover:bg-white/10 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-400 transition-colors">{project.name}</h3>
      <p className="text-zinc-500 mb-8 flex-grow leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono uppercase tracking-wider text-zinc-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
