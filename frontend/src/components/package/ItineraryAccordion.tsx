import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSafeImage, handleImageError } from '../../utils/imageFallback';

interface ItineraryDay {
  day: string;
  description: string;
  image?: string;
}

interface ItineraryAccordionProps {
  itinerary: ItineraryDay[];
  category?: string;
}

export default function ItineraryAccordion({ itinerary, category }: ItineraryAccordionProps) {
  const [expandedDay, setExpandedDay] = useState<string | null>(itinerary[0]?.day || null);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-noto-serif text-[#EDEDED]">Daily Journey</h2>
      
      <div className="space-y-4">
        {itinerary.map((item, idx) => {
          const isExpanded = expandedDay === item.day;
          
          return (
            <div 
              key={idx}
              className={`border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transition-all duration-500 ${isExpanded ? 'bg-[rgba(255,255,255,0.06)] shadow-[0_0_30px_rgba(255,215,0,0.08)]' : 'bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)]'}`}
            >
              <button
                onClick={() => setExpandedDay(isExpanded ? null : item.day)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-6">
                  <span className={`font-label uppercase tracking-widest text-[10px] font-bold px-3 py-1 rounded-full border transition-colors ${isExpanded ? 'text-[#FFD56A] border-[#FFD56A]' : 'text-[#A5A5A7] border-white/10'}`}>
                    {item.day}
                  </span>
                  <span className="font-noto-serif text-lg text-[#EDEDED] tracking-wide">
                    {/* If we had titles per day, they'd go here. Using description snippet if title missing. */}
                    {item.day.includes('Day') ? 'Experience Narrative' : item.day}
                  </span>
                </div>
                <motion.span 
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`material-symbols-outlined transition-colors ${isExpanded ? 'text-[#FFD56A]' : 'text-[#A5A5A7]'}`}
                >
                  keyboard_arrow_down
                </motion.span>
              </button>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="p-8 pt-0 text-[#A5A5A7] leading-relaxed border-t border-[rgba(255,255,255,0.05)] mt-2">
                      <div className="flex flex-col md:flex-row gap-8 pt-6">
                        {item.image && (
                          <div className="w-full md:w-64 h-40 overflow-hidden rounded-xl border border-white/10 flex-shrink-0">
                            <img 
                              src={getSafeImage(item.image, category)} 
                              alt={item.day}
                              onError={(e) => handleImageError(e, category)}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="font-body text-sm md:text-lg">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
