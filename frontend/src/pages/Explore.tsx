import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, Minimize2, Compass, MapPin, 
  ArrowRight, MousePointer2, Plane, 
  Sparkles, Info, TouchpadOff
} from 'lucide-react';

const destinations = [
  {
    id: 'bali',
    name: 'Uluwatu Temple',
    country: 'Bali, Indonesia',
    url: 'https://truevirtualtours.com/panorama/190103/360view',
    coords: '8.8291° S, 115.0849° E',
    description: 'A spiritual cliffside sanctuary overlooking the endless Indian Ocean.',
    price: 'From $1,200',
    accent: 'text-blue-500'
  },
  {
    id: 'dubai',
    name: 'Downtown Dubai',
    country: 'UAE',
    url: 'https://truevirtualtours.com/panorama/190107/360view',
    coords: '25.2048° N, 55.2708° E',
    description: 'The pinnacle of modern architectural marvels and luxury living.',
    price: 'From $2,500',
    accent: 'text-amber-500'
  }
];

export default function Explore() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const activeDest = destinations[activeIdx];

  return (
    <section className="relative min-h-screen w-full transition-colors duration-700 bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-4 md:p-12 overflow-hidden">
      
      {/* --- BACKGROUND BLOOM --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-1/4 -left-1/4 w-full h-full rounded-full blur-[100px] md:blur-[160px] opacity-20 transition-colors duration-1000 ${activeIdx === 0 ? 'bg-blue-500' : 'bg-amber-500'}`} />
      </div>

      <div className={`relative z-10 w-full max-w-7xl transition-all duration-1000 ${isCinemaMode ? 'scale-[1.01] md:scale-[1.02]' : 'scale-100'}`}>
        
        {/* --- HEADER --- */}
        <AnimatePresence>
          {!isCinemaMode && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="flex flex-col md:flex-row items-center md:items-end justify-between mb-6 md:mb-10 gap-6 text-center md:text-left"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 dark:text-blue-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  <Compass size={14} className="animate-spin-slow" />
                  Hyper-Realistic Portals
                </div>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                  Virtual <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">Expeditions</span>
                </h2>
              </div>

              {/* Destination Switcher - Horizontal Scroll on Mobile */}
              <div className="flex p-1 bg-slate-100 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/10 w-full md:w-auto overflow-x-auto no-scrollbar">
                {destinations.map((dest, i) => (
                  <button
                    key={dest.id}
                    onClick={() => setActiveIdx(i)}
                    className={`flex-1 md:flex-none px-6 md:px-8 py-2.5 md:py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${activeIdx === i ? 'bg-white dark:bg-white/10 text-blue-600 dark:text-white shadow-lg' : 'text-slate-500 dark:text-slate-400'}`}
                  >
                    {dest.id}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- THE VIRTUAL STAGE --- */}
        <div className={`relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-black transition-all duration-700
          ${isCinemaMode ? 'h-[80vh] md:h-auto md:aspect-[21/9]' : 'aspect-[4/5] md:aspect-[21/9]'}`}>
          
          <AnimatePresence mode="wait">
            <motion.iframe 
              key={activeDest.id}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              width="100%" height="100%" frameBorder="0" allowFullScreen={true} 
              src={activeDest.url}
              className={`transition-all duration-1000 ${isCinemaMode ? 'brightness-110' : 'brightness-90 md:group-hover:brightness-100'}`}
            />
          </AnimatePresence>

          {/* Interactive Hint */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <AnimatePresence>
              {!isCinemaMode && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3 bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-full border border-white/20">
                  <MousePointer2 className="text-white animate-bounce hidden md:block" size={24} />
                  <TouchpadOff className="text-white animate-pulse md:hidden" size={24} />
                  <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">Swipe to explore</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cinema Toggle - Moved to top right on mobile for better thumb reach */}
          <button 
            onClick={() => setIsCinemaMode(!isCinemaMode)}
            className="absolute top-6 right-6 md:top-auto md:bottom-10 md:right-10 z-20 p-4 md:p-5 bg-white/90 dark:bg-white/10 backdrop-blur-3xl border border-slate-200 dark:border-white/20 rounded-2xl text-slate-900 dark:text-white shadow-xl pointer-events-auto"
          >
            {isCinemaMode ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>

          {/* Location HUD - Becomes a Bottom Sheet on Mobile */}
          <AnimatePresence>
            {!isCinemaMode && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto p-5 md:p-8 bg-white/95 dark:bg-slate-950/80 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] md:max-w-sm space-y-3 md:space-y-4 pointer-events-auto shadow-2xl"
              >
                <div className={`flex items-center gap-2 font-black text-[9px] md:text-[10px] uppercase ${activeDest.accent}`}>
                  <MapPin size={12} /> {activeDest.coords}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-tight">{activeDest.name}</h3>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">{activeDest.country}</p>
                </div>
                <p className="hidden md:block text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{activeDest.description}</p>
                <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest group/link">
                  Book Now <ArrowRight size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- BOTTOM FEATURES --- */}
        <AnimatePresence>
          {!isCinemaMode && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16"
            >
              <FeatureItem icon={<Plane className="text-blue-500" />} title="Fast Booking" desc="Direct API integration." />
              <FeatureItem icon={<Sparkles className="text-amber-500" />} title="Luxury" desc="Hand-picked suites." />
              <div className="flex items-center justify-between p-6 md:p-8 bg-slate-100 dark:bg-white/5 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/5 group hover:bg-slate-900 dark:hover:bg-white transition-all cursor-pointer">
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{activeDest.price}</p>
                  <p className="text-lg md:text-xl font-black text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-slate-900">Reserve Spot</p>
                </div>
                <ArrowRight size={20} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-5 p-5 md:p-8 bg-white dark:bg-white/5 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 dark:border-white/5">
      <div className="w-12 h-12 shrink-0 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="text-slate-900 dark:text-white font-black text-[11px] uppercase tracking-tight">{title}</h4>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{desc}</p>
      </div>
    </div>
  );
}