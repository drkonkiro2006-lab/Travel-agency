import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { packages } from '../../data/packages';
import HeroBanner from '../../components/package/HeroBanner';
import PackageStats from '../../components/package/PackageStats';
import PackageHighlights from '../../components/package/PackageHighlights';
import ItineraryAccordion from '../../components/package/ItineraryAccordion';
import Gallery from '../../components/package/Gallery';
import BookingSidebar from '../../components/package/BookingSidebar';
import FAQSection from '../../components/package/FAQSection';
import GallerySlider from '../../components/package/GallerySlider';

export default function PackageDetailPage() {
  const { slug } = useParams<{ category: string; slug: string }>();
  
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0C] text-[#EDEDED] font-noto-serif text-2xl">
        Package meticulously hidden. (Not found)
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0C] min-h-screen font-body text-[#EDEDED] selection:bg-[#FFD56A]/30 transition-colors">
      <HeroBanner 
        image={pkg.heroImage} 
        title={pkg.title} 
        location={pkg.location} 
        category={pkg.category}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative -mt-24 z-20 pb-40">
        <PackageStats 
          duration={pkg.duration}
          price={pkg.price}
          groupSize={pkg.groupSize}
          difficulty={pkg.difficulty}
          season={pkg.season}
          rating={pkg.rating}
        />
        
        {/* Cinematic Gallery Slider */}
        <div className="mt-20 mb-32">
          <div className="mb-12">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Visual Narratives</span>
            <h2 className="text-4xl font-noto-serif text-white">Moments Captured</h2>
          </div>
          <GallerySlider images={pkg.gallery} category={pkg.category} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          <div className="lg:col-span-8 space-y-32">
            {/* Experience Narrative */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-noto-serif text-[#EDEDED] flex items-center gap-4">
                The Narrative <div className="h-[1px] flex-1 bg-white/5" />
              </h2>
              <p className="text-[#A5A5A7] text-xl leading-relaxed font-light italic">
                {pkg.description}
              </p>
            </motion.section>

            {/* Curated Highlights */}
            <section className="space-y-12">
              <h2 className="text-3xl font-noto-serif text-[#EDEDED]">Exclusive Highlights</h2>
              <PackageHighlights highlights={pkg.highlights} />
            </section>

            {/* Itinerary */}
            <ItineraryAccordion itinerary={pkg.itinerary} category={pkg.category} />

            {/* Included / Not Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl group hover:border-primary/20 transition-colors">
                <h3 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-8">What's Included</h3>
                <ul className="space-y-6">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 text-sm leading-relaxed">
                      <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl opacity-60">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-8">Service Amenities</h3>
                <ul className="space-y-6">
                  {pkg.amenities.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-500 text-sm leading-relaxed">
                      <span className="material-symbols-outlined text-gray-500 text-xl">concierge</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Masonry Secondary Gallery */}
            <Gallery images={pkg.gallery} category={pkg.category} />

            {/* FAQ SECTION */}
            <FAQSection />
          </div>
          
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <BookingSidebar 
                price={`$${pkg.price}`} 
                availability={['Oct 2026', 'Nov 2026', 'Jan 2027']} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
