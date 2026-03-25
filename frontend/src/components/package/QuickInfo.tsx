import { motion } from 'framer-motion';

interface QuickInfoProps {
  duration: number;
  price: string;
  rating: number;
}

export default function QuickInfo({ duration, price, rating }: QuickInfoProps) {
  const infoItems = [
    { icon: 'schedule', label: 'Duration', value: `${duration} Days` },
    { icon: 'sell', label: 'From', value: price },
    { icon: 'group', label: 'Group Size', value: 'Private' },
    { icon: 'terrain', label: 'Difficulty', value: 'Moderate' },
    { icon: 'cloud_queue', label: 'Best Season', value: 'All Year' },
    { icon: 'star', label: 'Rating', value: `${rating.toFixed(1)} / 5.0` }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#0C0C0E]/80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 shadow-2xl flex flex-wrap md:flex-nowrap justify-between gap-6"
    >
      {infoItems.map((item, index) => (
        <motion.div 
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="flex flex-col items-center justify-center flex-1 min-w-[100px] group hover:-translate-y-1 transition-transform duration-300"
        >
          <span className="material-symbols-outlined text-[#A5A5A7] group-hover:text-[#FFD56A] transition-colors duration-300 mb-2 text-3xl drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
            {item.icon}
          </span>
          <span className="text-xs text-[#A5A5A7] uppercase tracking-widest font-label mb-1">{item.label}</span>
          <span className="text-[#EDEDED] font-noto-serif text-lg md:text-xl">{item.value}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
