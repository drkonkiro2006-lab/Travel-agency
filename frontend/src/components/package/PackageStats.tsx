import { motion } from 'framer-motion';

interface StatItemProps {
  icon: string;
  label: string;
  value: string | number;
  delay: number;
}

function StatItem({ icon, label, value, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-accent/40 transition-colors"
    >
      <span className="material-symbols-outlined text-accent text-3xl mb-3 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">{label}</span>
      <span className="text-white font-bold tracking-widest uppercase text-xs">{value}</span>
    </motion.div>
  );
}

interface PackageStatsProps {
  duration: string;
  price: number;
  groupSize: string;
  difficulty: string;
  season: string;
  rating: number;
}

export default function PackageStats({ duration, price, groupSize, difficulty, season, rating }: PackageStatsProps) {
  const stats = [
    { icon: 'schedule', label: 'Duration', value: duration },
    { icon: 'payments', label: 'Price', value: `$${price}` },
    { icon: 'group', label: 'Group Size', value: groupSize },
    { icon: 'landscape', label: 'Difficulty', value: difficulty },
    { icon: 'wb_sunny', label: 'Best Season', value: season },
    { icon: 'star', label: 'Rating', value: rating.toFixed(1) },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full">
      {stats.map((stat, idx) => (
        <StatItem key={stat.label} {...stat} delay={idx * 0.1} />
      ))}
    </div>
  );
}
