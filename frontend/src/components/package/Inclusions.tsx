import { motion } from 'framer-motion';

interface InclusionsProps {
  inclusions: string[];
  exclusions: string[];
}

export default function Inclusions({ inclusions, exclusions }: InclusionsProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-noto-serif text-[#EDEDED] mb-8">Amenities & Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inclusions Card */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={container}
          className="bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.05)] p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <h3 className="text-xl font-noto-serif text-[#EDEDED]">What's Included</h3>
          </div>
          <ul className="space-y-4">
            {inclusions.map((item, idx) => (
              <motion.li variants={itemAnim} key={idx} className="flex items-start gap-3 text-[#A5A5A7]">
                <span className="material-symbols-outlined text-[#FFD56A] text-sm mt-1 shrink-0">check</span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Exclusions Card */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={container}
          className="bg-[rgba(255,255,255,0.01)] backdrop-blur-sm border border-[rgba(255,255,255,0.02)] p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-[#A5A5A7]">cancel</span>
            <h3 className="text-xl font-noto-serif text-[#A5A5A7]">Not Included</h3>
          </div>
          <ul className="space-y-4">
            {exclusions.map((item, idx) => (
              <motion.li variants={itemAnim} key={idx} className="flex items-start gap-3 text-[#A5A5A7]/60">
                <span className="material-symbols-outlined text-red-400/50 text-sm mt-1 shrink-0">close</span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
