import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '../components/ui/Skeleton';
import type { Destination } from '../api/queries';

const mockGridDestinations: Destination[] = [
  {
    id: '1',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia Pacific',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbd-gfglyPCkVQFu57XhoUe9ubZI2C50c4wNt1lHBAZiz0IxEUvzgsyy-uzl4QcIdYVOfpaimAqDxJCa_cHHc1YojopI7I6AlSeRMo0AuyFvdZLgP-zj9vYjuGbzvd3B_MOOZn1_Wlp0GUXYr0dfZIAeHsAYuB6bY-0Tu1xk5wmc10WLZeGx_BFWqkbLB-V8T0l3JHAL-a6ufv9hQReiQXTgndcI4omXNIL4DT3DY-JaUjWARd2bEAxdN7r1hDQAqIk9FFfe-oytXg',
    type: 'Cultural Heritage',
    spanType: 'wide',
  },
  {
    id: '2',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP888gsky9R35Jm_hHFm6WKpBQUGz8CumAdOxO50Vtt5xdNmknWats0tKEaAre-OiMTT62GrOvBzFlg-vj9xbQDFywI5F47aEspShJqLAQ6BOhbL3gNbWRQOopFS75CBgbjERUwbe1Zmk5FjJq3GS7FCoHVYyRoxcEjc5OY5OBHq16y8dbevK7YuB9XpnCslX9uCHXYa__VHLDFemdBuGmhrqVw-rRgZ4kv7FpoSsTaesahamZhkojsm3qZircMy5McNJmub6oAhWb',
    type: 'Gastronomy',
    spanType: 'small',
  },
  {
    id: '3',
    name: 'Santorini',
    country: 'Greece',
    region: 'Mediterranean',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnOTk0SzfnbfBAYpWSGy_A6kf_UN2wOCQSiCakZqLJguZVD8_J9Pk7R-dOMOHw71pVpd51VyobGelK733f77UiE-IutHiJLCVHzfnhlI2N_VmkOuT6Xl9oiz8176EduFc3pXFpl2xhIEw08wxUWAWXwXQHcp4MD45CqYDnXsCZDK1ViqzALEfhI6qaYYi9kDfevikOcO-GN8Mgsw8dzCboE0iR-EE5mg0vEFkuA0_EW_f0DF2sb5wiRPCBAjuJM8LUdLErjE45xUI1',
    type: 'Seascape',
    spanType: 'small',
  },
  {
    id: '4',
    name: 'Patagonia',
    country: 'Chile',
    region: 'Other',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDctK-Ps5pBJVgOes_mPNL814UmdnXY9c3E8UtbGf-yGCsi32Arkn3LXe-kzFaPVHwUhtZ_frO-z2y0BxeiCtDzdBnPuqReGL0-R66VJhywRqCaZhlUCCp0vf4cD996X_x6226H4X7RpG16oL-otkboz6hpKrZFWCnYwUG9eeYOkiSkcbQeYnS09BWzeTjd3Bq13W55IBi11NItdv8uN-jEA37zmxZsCPayiheO5GZsP5ellUYv0Yx73fEzeSBLygj4AbMRLyxC_0Pb',
    type: 'Untamed Wilderness',
    spanType: 'wide',
  }
];

export default function Destinations() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const filteredDestinations = selectedRegion === 'All Regions' 
    ? destinations 
    : destinations.filter(d => d.region === selectedRegion);

  useEffect(() => {
    let isMounted = true;
    const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    fetch(`${baseURL}/destinations`)
      .then(res => res.json())
      .then((data: Destination[]) => {
        if (!isMounted) return;
        setDestinations(data);
        setIsError(false);
      })
      .catch(() => {
        if (!isMounted) return;
        console.warn('API fetch failed. Falling back to mock destinations.');
        setDestinations(mockGridDestinations);
        setIsError(false);
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-surface text-text transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-surface z-10 transition-colors duration-300"></div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw1aSJJMd9qZ7VfEgBLaJoyxP5FwL-gX1tfruJ-zMMO0YeaXydp0oWx8zdo9cGhvH6_ekluglN-AHXNf0oWIH1LD43jQ4MysbN0B3JZY6y47rwOJU8sEtAM2AwA1P3u2IyXKeVPFEa9IcwPgcegX5jPbQENZ2EPo5MbtawlHnvuzu_NvBAmsCe63B5vUa7oLdLQ1XvKpwd-wq4f_FYtIeMC3kXqNIsKShIdK6VUcYg-HJeMlYRH_9M12YP_LLw9w3GJ2-vsCManLur"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 text-center space-y-6 px-4"
        >
          <span className="font-label text-primary tracking-[0.4em] uppercase text-[12px] block mb-2">Curated Anthology</span>
          <h1 className="font-headline text-5xl md:text-9xl text-white font-light tracking-tight">The Global <span className="italic font-normal">Collection</span></h1>
          <p className="max-w-2xl mx-auto text-gray-200 font-light text-lg leading-relaxed">
            A definitive anthology of evocative landscapes, hand-selected for the discerning wanderer.
          </p>
        </motion.div>
      </section>

      {/* Filter Shell */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-low dark:dark-depth p-8 md:p-12 shadow-2xl dark-glow flex flex-col md:flex-row gap-12 items-end transition-colors duration-300 rounded-xl"
        >
          <div className="flex-1 space-y-4 w-full">
            <label className="font-label text-[10px] uppercase tracking-widest text-primary">Region</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['All Regions', 'Europe', 'Asia Pacific', 'Mediterranean'].map((region) => (
                <button 
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-3 border text-sm transition-all text-left rounded shadow-sm ${
                    selectedRegion === region 
                      ? 'border-primary bg-primary/10 text-primary font-bold' 
                      : 'border-text/20 hover:border-primary/50 bg-surface'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
          <button className="gold-gradient p-4 text-text-on-accent hover:scale-105 transition-transform shrink-0 rounded">
            <span className="material-symbols-outlined">search</span>
          </button>
        </motion.div>
      </section>

      {/* Bento Grid Collections */}
      <section className="py-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-4 text-text">The Global Grid</h2>
            <div className="h-px w-24 bg-primary/30 mx-auto"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {isLoading && (
              <>
                <Skeleton className="md:col-span-8 rounded-xl" />
                <Skeleton className="md:col-span-4 rounded-xl" />
                <Skeleton className="md:col-span-4 rounded-xl" />
                <Skeleton className="md:col-span-8 rounded-xl" />
              </>
            )}

            {isError && (
              <div className="md:col-span-12 py-20 text-center text-text/50">
                Failed to load destinations. Please try again later.
              </div>
            )}

            {!isLoading && !isError && filteredDestinations.map((dest, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                key={dest.id}
                className={`${dest.spanType === 'wide' ? 'md:col-span-8' : 'md:col-span-4'} group relative overflow-hidden bg-surface shadow-2xl dark-glow rounded-xl z-10 hover:z-20`}
              >
                <img alt={dest.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src={dest.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 space-y-2">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase shadow-black drop-shadow-md">{dest.type}</span>
                  <h4 className="font-headline text-3xl md:text-4xl text-white">{dest.name}, <span className="italic font-light">{dest.country}</span></h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12"
        >
          <h2 className="font-headline text-5xl md:text-7xl text-text">Where shall we <span className="italic text-primary">begin?</span></h2>
          <p className="text-text/70 text-xl font-light">
            Every journey begins with a single selection. Our curators are ready to design your definitive itinerary.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="gold-gradient text-text-on-accent px-12 py-5 font-label text-sm uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform duration-300 shadow-2xl rounded">
              Enquire Today
            </button>
            <button className="px-12 py-5 border border-primary/30 font-label text-sm uppercase tracking-[0.2em] hover:bg-surface-low transition-colors text-text rounded">
              View Lookbook
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
