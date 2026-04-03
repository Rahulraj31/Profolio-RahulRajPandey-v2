import { motion } from "motion/react";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Article } from "../types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.02 }}
      className="glass rounded-3xl p-8 flex flex-col group hover:border-brand-400/30 transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
        <span className="flex items-center gap-1.5">
          <Calendar size={14} />
          {article.date}
        </span>
        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
        <span className="flex items-center gap-1.5">
          <Clock size={14} />
          5 min read
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-400 transition-colors leading-tight">
        {article.title}
      </h3>
      
      <p className="text-zinc-500 mb-8 line-clamp-3 leading-relaxed">
        {article.summary}
      </p>

      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brand-400 transition-colors">
        Read Article
        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </motion.a>
  );
}
