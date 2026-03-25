import { motion, useScroll, useTransform } from 'framer-motion';
import { getSafeImage, handleImageError } from '../../utils/imageFallback';

interface HeroBannerProps {
  image: string;
  title: string;
  location: string;
  category: string;
}

export default function HeroBanner(props: HeroBannerProps) {
  const { image, title, location, category } = props;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const safeImage = getSafeImage(image, category);

  return (
    <div className="relative h-[80vh] w-full overflow-hidden flex items-end justify-center">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={safeImage} 
          alt={title} 
          onError={(e) => handleImageError(e, category)}
          className="w-full h-[120%] object-cover object-center" 
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-[#0B0B0C]/20"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-24"
      >
        <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] p-8 md:p-12 rounded-2xl inline-block max-w-2xl transform transition-transform hover:shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-[#FFD56A] font-label uppercase text-xs tracking-[0.2em] mb-4"
          >
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            {location}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-noto-serif font-bold text-[#EDEDED] leading-tight mb-8"
          >
            {title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-gradient-to-r from-[#FFD56A] to-[#D4AF37] text-[#0C0C0E] px-8 py-3 font-bold uppercase tracking-widest text-sm rounded-md shadow-lg shadow-[rgba(255,215,0,0.2)] hover:scale-95 transition-transform duration-300">
              Book Now
            </button>
            <button className="flex items-center gap-2 border border-[rgba(255,255,255,0.2)] text-[#EDEDED] px-8 py-3 rounded-md hover:bg-[rgba(255,255,255,0.06)] hover:border-[#FFD56A] transition-all duration-300 hover:scale-95 uppercase tracking-widest text-sm font-bold">
              <span className="material-symbols-outlined text-[18px]">favorite</span>
              Save to Wishlist
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
