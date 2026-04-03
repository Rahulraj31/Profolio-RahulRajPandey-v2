import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
        {subtitle && <p className="text-lg text-zinc-500 max-w-2xl">{subtitle}</p>}
        <div className="h-1 w-20 bg-brand-500 mt-6 rounded-full" />
      </motion.div>
      {children}
    </section>
  );
}
