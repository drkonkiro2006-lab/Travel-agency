import { motion } from 'framer-motion';

interface DescriptionProps {
  description: string;
  highlights: (string | { text: string; icon?: string })[];
}

export default function Description({ description, highlights }: DescriptionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="space-y-12"
    >
      <div>
        <h2 className="text-3xl font-noto-serif text-[#EDEDED] mb-6">The Experience</h2>
        <p className="text-[#A5A5A7] leading-loose text-lg font-light tracking-wide">
          {description}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-noto-serif text-[#EDEDED] mb-6">Curated Highlights</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, idx) => {
            const isObject = typeof highlight !== 'string';
            const text = isObject ? highlight.text : highlight;
            const icon = isObject ? highlight.icon : 'auto_awesome';
            
            return (
              <motion.li 
                key={idx}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,215,0,0.3)] transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[#FFD56A] mt-1 shrink-0">
                  {icon || 'auto_awesome'}
                </span>
                <span className="text-[#EDEDED] leading-relaxed">
                  {text}
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}
