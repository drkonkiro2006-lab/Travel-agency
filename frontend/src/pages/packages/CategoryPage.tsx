import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, packages } from '../../data/packages';
import PackageCard from '../../components/package/PackageCard';
import { getSafeImage } from '../../utils/imageFallback';

export default function CategoryPage() {
  const { category: categorySlug } = useParams<{ category: string }>();
  
  const category = categories.find(c => c.slug === categorySlug);
  const categoryPackages = packages.filter(p => p.category === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0C] text-[#EDEDED]">
        <h1 className="text-3xl font-noto-serif">Category not found.</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0C] min-h-screen transition-colors duration-500">
      {/* Cinematic Category Hero */}
      <header className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getSafeImage(category.bannerImage, category.slug)} 
            alt={category.name} 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-transparent to-[#0B0B0C]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            className="font-label text-accent uppercase text-xs mb-6 block"
          >
            Curated Category
          </motion.span>
          <h1 className="text-6xl md:text-9xl font-noto-serif font-bold text-white mb-8 drop-shadow-2xl tracking-tighter">
            {category.name}
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-xl font-light italic leading-relaxed">
            {category.description}
          </p>
        </motion.div>
      </header>

      {/* Grid Section */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 bg-[#0B0B0C]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-noto-serif text-white">Experience Library</h2>
            <p className="text-accent font-bold tracking-widest text-[10px] uppercase">{categoryPackages.length} Bespoke Packages Available</p>
          </div>
          <div className="flex items-center gap-4 text-white/40 text-xs font-label uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Sort: Recommended
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categoryPackages.map((pkg, idx) => (
            <PackageCard key={pkg.id} pkg={pkg} index={idx} />
          ))}
        </div>

        {categoryPackages.length === 0 && (
          <div className="text-center py-40 border border-white/5 rounded-3xl bg-white/5">
            <span className="material-symbols-outlined text-6xl text-white/10 mb-6">explore_off</span>
            <p className="text-white/40 font-noto-serif italic text-xl">New curations coming soon to this collection.</p>
          </div>
        )}
      </section>

      {/* Discovery Joiner */}
      <section className="py-32 bg-[#0F0F11] text-center border-t border-white/5">
        <h3 className="text-3xl font-noto-serif text-white mb-8">Not what you're looking for?</h3>
        <Link 
          to="/packages" 
          className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold uppercase tracking-widest text-xs transition-colors"
        >
          Discover All Collections <span className="material-symbols-outlined">arrow_right_alt</span>
        </Link>
      </section>
    </div>
  );
}
