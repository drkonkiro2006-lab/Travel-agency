import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { TravelPackage } from '../../data/types';
import { getSafeImage, handleImageError } from '../../utils/imageFallback';

interface PackageCardProps {
  pkg: TravelPackage;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const safeHeroImage = getSafeImage(pkg.heroImage, pkg.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className="group relative bg-[#121214] border border-white/5 rounded-2xl overflow-hidden active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-[#FFD56A]/10"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={safeHeroImage} 
          alt={pkg.title} 
          onError={(e) => handleImageError(e, pkg.category)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-60"></div>
        
        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-[#121214]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
          <span className="text-accent font-bold text-lg">${pkg.price}</span>
        </div>
        
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
          <span className="material-symbols-outlined text-accent text-sm">star</span>
          <span className="text-white text-xs font-bold">{pkg.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">{pkg.duration}</span>
        <h3 className="text-xl font-noto-serif font-bold text-white mb-3 group-hover:text-accent transition-colors">
          {pkg.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {pkg.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-gray-500">Difficulty</span>
              <span className="text-[10px] text-white font-bold">{pkg.difficulty}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-widest text-gray-500">Season</span>
              <span className="text-[10px] text-white font-bold">{pkg.season}</span>
            </div>
          </div>
          
          <Link 
            to={`/packages/${pkg.category}/${pkg.slug}`}
            className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest hover:text-accent transition-colors group/btn"
          >
            View Details
            <span className="material-symbols-outlined text-sm transform group-hover/btn:translate-x-1 transition-transform">east</span>
          </Link>
        </div>
      </div>

      {/* Hover Bloom Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-accent/5 via-transparent to-primary/5"></div>
    </motion.div>
  );
}
