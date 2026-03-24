import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`bg-surface-low dark:dark-depth dark-glow border border-text/5 rounded-xl p-6 md:p-8 shadow-xl transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function EmptyState({ title, description, icon, action }: { 
  title: string; 
  description: string; 
  icon?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center border border-dashed border-text/20 rounded-xl bg-surface-low/50">
      {icon && <span className="material-symbols-outlined text-4xl text-text/30 mb-4">{icon}</span>}
      <h3 className="font-headline text-xl text-text mb-2">{title}</h3>
      <p className="text-text/60 font-light text-sm max-w-sm mb-6 leading-relaxed">{description}</p>
      {action}
    </div>
  );
}
