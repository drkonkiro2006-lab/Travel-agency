import { motion } from 'framer-motion';

interface BookingSidebarProps {
  price: string;
  availability: string[];
}

export default function BookingSidebar({ price, availability }: BookingSidebarProps) {
  return (
    <div className="sticky top-28 bg-[#0C0C0E]/90 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] p-8 rounded-2xl shadow-2xl overflow-hidden group">
      {/* Subtle background glow effect tied to parent hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD56A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      {/* Discount Ribbon */}
      <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FFD56A] to-[#D4AF37] text-[#0C0C0E] text-xs font-bold px-4 py-1 uppercase tracking-widest rounded-bl-lg">
        Exclusive Rate
      </div>

      <div className="mb-8 mt-4">
        <p className="text-[#A5A5A7] font-label uppercase tracking-widest text-xs mb-2">Starting from</p>
        <div className="flex items-end gap-2">
          <h2 className="text-4xl font-noto-serif text-[#EDEDED] font-bold">{price}</h2>
          <span className="text-[#A5A5A7] mb-1">/ person</span>
        </div>
      </div>

      <div className="space-y-6 mb-8 relative z-10">
        <label className="block">
          <span className="text-[#EDEDED] text-sm uppercase tracking-widest font-label mb-3 block">Date Selection</span>
          <div className="relative">
            <select className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg p-4 pt-[18px] text-[#EDEDED] appearance-none focus:outline-none focus:border-[#FFD56A] transition-colors cursor-pointer pr-10">
              <option className="bg-[#0B0B0C] text-[#EDEDED]" value="">Select available dates</option>
              {availability.map(date => (
                <option className="bg-[#0B0B0C] text-[#EDEDED]" key={date} value={date}>{date}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#A5A5A7] pointer-events-none">
              expand_more
            </span>
          </div>
        </label>

        <label className="block">
          <span className="text-[#EDEDED] text-sm uppercase tracking-widest font-label mb-3 block">Travelers</span>
          <div className="flex border border-[rgba(255,255,255,0.1)] rounded-lg overflow-hidden bg-[rgba(255,255,255,0.03)]">
            <button className="flex-1 py-3 text-[#EDEDED] hover:bg-[rgba(255,255,255,0.05)] transition-colors border-r border-[rgba(255,255,255,0.1)]">-</button>
            <span className="flex-1 text-center py-3 text-[#EDEDED]">2</span>
            <button className="flex-1 py-3 text-[#EDEDED] hover:bg-[rgba(255,255,255,0.05)] transition-colors border-l border-[rgba(255,255,255,0.1)]">+</button>
          </div>
        </label>
      </div>

      <motion.button 
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-[#FFD56A] to-[#D4AF37] text-[#0C0C0E] py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-shadow duration-300 relative z-10"
      >
        Book This Tour
      </motion.button>
      
      <p className="text-center text-[#A5A5A7] text-xs mt-4">
        No payment required at this stage.
      </p>
    </div>
  );
}
