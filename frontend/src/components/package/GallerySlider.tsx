import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleImageError } from '../../utils/imageFallback';

interface GallerySliderProps {
  images: string[];
  category?: string;
}

export default function GallerySlider({ images, category }: GallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group w-full h-[60vh] rounded-3xl overflow-hidden bg-[#1A1A1C]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full object-cover brightness-75"
          onError={(e) => handleImageError(e, category)}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prev} className="p-4 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button onClick={next} className="p-4 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-primary transition-all">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all rounded-full ${currentIndex === idx ? 'w-10 bg-primary shadow-[0_0_10px_rgba(255,213,106,0.6)]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}
