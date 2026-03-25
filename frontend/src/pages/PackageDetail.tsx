import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiClient } from '../api/client';

import HeroBanner from '../components/package/HeroBanner';
import QuickInfo from '../components/package/QuickInfo';
import Description from '../components/package/Description';
import ItineraryAccordion from '../components/package/ItineraryAccordion';
import Gallery from '../components/package/Gallery';
import Inclusions from '../components/package/Inclusions';
import Reviews from '../components/package/Reviews';
import BookingSidebar from '../components/package/BookingSidebar';

export default function PackageDetail() {
  const { id } = useParams<{ id: string }>();
  const [pkg, setPkg] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const data = await apiClient<any>(`/packages/${id}`);
        setPkg(data);
      } catch (error) {
        console.error('Error fetching package details:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) fetchPackage();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0C0C0E]">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-2 border-[rgba(255,215,0,0.4)] border-t-[#FFD56A] rounded-full"
        />
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0C0C0E] text-[#EDEDED] font-noto-serif text-2xl">
        Package not found.
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0C] min-h-screen font-body text-[#EDEDED] selection:bg-[#FFD56A]/30 transition-colors">
      <HeroBanner 
        image={pkg.image} 
        title={pkg.title} 
        location={pkg.location} 
        category={pkg.category || 'luxury'}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative -mt-16 z-20 pb-32">
        <QuickInfo 
          duration={pkg.duration}
          price={pkg.price}
          rating={pkg.rating}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
          <div className="lg:col-span-8 space-y-24">
            <Description description={pkg.description} highlights={pkg.highlights} />
            <ItineraryAccordion itinerary={pkg.itinerary} category={pkg.category || 'luxury'} />
            <Gallery images={pkg.galleryImages || pkg.gallery || []} category={pkg.category || 'luxury'} />
            <Inclusions inclusions={pkg.inclusions} exclusions={pkg.exclusions} />
            <Reviews reviews={pkg.reviews} />
          </div>
          
          <div className="lg:col-span-4 relative">
            <BookingSidebar 
              price={pkg.price} 
              availability={pkg.availability} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
