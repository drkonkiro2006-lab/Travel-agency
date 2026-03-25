import { motion } from 'framer-motion';
import { useState } from 'react';
import { handleImageError } from '../../utils/imageFallback';

interface GalleryProps {
  images: string[];
  category?: string;
}

export default function Gallery({ images, category }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="space-y-12 overflow-hidden">
      <h2 className="text-3xl font-noto-serif text-[#EDEDED] mb-8">Visual Narratives</h2>

      {/* Serial Moving Marquee */}
      <div className="relative w-full h-80 overflow-hidden rounded-xl group/carousel mb-12">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-4 absolute left-0"
        >
          {/* Double the array for seamless endless loop */}
          {[...images, ...images, ...images].map((img, idx) => (
            <div key={idx} className="w-96 h-80 flex-shrink-0 relative overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1A1A1C]">
              <img 
                src={img} 
                alt={`Gallery view ${idx}`} 
                className="w-full h-full object-cover" 
                onError={(e) => handleImageError(e, category)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 to-transparent opacity-60"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            onClick={() => setSelectedImage(img)}
            className="relative overflow-hidden group cursor-pointer rounded-xl break-inside-avoid shadow-2xl transition-all duration-500 bg-[#1A1A1C]"
          >
            <img 
              src={img} 
              alt={`Gallery detail ${idx}`} 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.05]"
              onError={(e) => handleImageError(e, category)}
            />
            {/* Dark Overlay Glow */}
            <div className="absolute inset-0 bg-[#0B0B0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#FFD56A] text-5xl mix-blend-screen drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
                visibility
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0E]/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-[rgba(255,255,255,0.05)] cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute top-8 right-8 text-[#A5A5A7] hover:text-[#FFD56A] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
        </div>
      )}
    </section>
  );
}
