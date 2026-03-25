import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, packages } from '../../data/packages';
import PackageCard from '../../components/package/PackageCard';
import { getSafeImage } from '../../utils/imageFallback';

export default function PackagesPage() {
  return (
    <div className="bg-[#0B0B0C] min-h-screen transition-colors duration-500">
      {/* 1. BIG HERO BANNER */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Landscape Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            alt="Travel Collections"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/40 via-transparent to-[#0B0B0C]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label text-accent uppercase tracking-[0.5em] text-xs mb-6 block"
          >
            Exclusive Collections
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-noto-serif font-bold text-white mb-8 tracking-tighter"
          >
            Our Travel <span className="italic text-[#FFD56A]">Collections</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Choose your next journey from our curated experiences.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* 2. CATEGORY DISCOVERY GRID (Quick Navigation) */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 bg-[#0B0B0C]">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-noto-serif text-white mb-6">Signature Categories</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative h-[280px] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#121214]"
            >
              <Link to={`/packages/${cat.slug}`} className="block h-full w-full relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${getSafeImage(cat.bannerImage, cat.slug)})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-80" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest group-hover:text-accent transition-colors duration-500">
                    {cat.name}
                  </h3>
                  
                  {/* Explore Button */}
                  <div className="relative">
                    <span className="px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white font-bold uppercase tracking-[0.2em] flex items-center gap-3 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-500 shadow-xl">
                      Explore 
                      <span className="material-symbols-outlined text-xs animate-pulse">east</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SHOWCASE SECTIONS (ONE PER CATEGORY) */}
      <div className="space-y-0">
        {categories.map((cat, catIdx) => {
          const catPackages = packages.filter(p => p.category === cat.slug).slice(0, 3);
          if (catPackages.length === 0) return null;

          return (
            <section key={cat.id} className={`py-32 ${catIdx % 2 === 0 ? 'bg-[#0F0F11]' : 'bg-[#0B0B0C]'}`}>
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                  <div className="flex flex-col gap-4">
                    <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px]">Collection {catIdx + 1}</span>
                    <h2 className="text-4xl md:text-5xl font-noto-serif text-white">{cat.name}</h2>
                    <p className="text-white/40 max-w-xl text-lg font-light italic">{cat.description}</p>
                  </div>
                  <Link
                    to={`/packages/${cat.slug}`}
                    target="_blank"
                    className="flex items-center gap-3 py-4 px-10 rounded-full border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View Category <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                  {catPackages.map((pkg, pIdx) => (
                    <PackageCard key={pkg.id} pkg={pkg} index={pIdx} />
                  ))}
                </div>

                {/* Horizontal Divider */}
                <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </section>
          );
        })}
      </div>

      {/* 4. FOOTER CTA */}
      <section className="py-40 bg-[#0B0B0C] border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <span className="material-symbols-outlined text-6xl text-accent mb-8 animate-pulse">explore</span>
          <h2 className="text-4xl md:text-7xl font-noto-serif text-white mb-8">Ready to curate <br />your legacy?</h2>
          <Link
            to="/contact"
            className="inline-block py-6 px-16 gold-gradient rounded-none text-black font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform duration-300 shadow-2xl"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
