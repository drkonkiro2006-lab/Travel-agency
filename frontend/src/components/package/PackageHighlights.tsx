import { motion } from 'framer-motion';

interface PackageHighlightsProps {
  highlights: { text: string; icon?: string }[];
}

export default function PackageHighlights({ highlights }: PackageHighlightsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {highlights.map((highlight, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors group"
        >
          <div className="mt-1">
            <span className="material-symbols-outlined text-accent text-xl group-hover:rotate-12 transition-transform">
              {highlight.icon || 'check_circle'}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed font-body">
            {highlight.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
