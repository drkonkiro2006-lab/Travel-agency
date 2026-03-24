import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { fetchPackages } from '../api/queries';
import type { Package } from '../api/queries';
import { Skeleton } from '../components/ui/Skeleton';

const mockPackages: Package[] = [
  {
    id: '1',
    title: 'Alpine Majesty',
    description: 'The pinnacle of European winter luxury across the Swiss and Italian Alps.',
    price: '$15,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT21n2lVt04_u4y0eKYAUSCwFlZhsOXecpBUNaQQKS6DB9U-uH1H3CYapEeDcVX56lk8YLUY7wlU-DLH9LqPiP15Jnebuu9LhJbKYHsQ8bF2H2JUxXWS11W7Dvjo15ogtELGAQZ73FAbgbcoE1Z2rb7kpV4hOUUo_riiIIS-w91utPwUyNiiUHhpjK_pFxArnlAjD22hbR_Erg6W0vpUNqH3XVNm_mPzS58OOXLAmgqdCmiRjOc4ZhOGMC0hLv9qyb3e9yDl7sr2go',
  },
  {
    id: '2',
    title: 'Australian Odyssey',
    description: 'From the Red Centre to the coral labyrinths of the Great Barrier Reef.',
    price: '$11,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Y4C--8tkaEbvxiV9y_o_YWlEYXSDiGnMZfqcZMNl94Ld0XBZ3MLPeuhdrV1qwCQfk0OpEIWClMic73UfSrR31og2mg_0mLSNRfD-o912NZOHnvpN8uFdgqtvQJxAfQWy2F3kWfC440VQa7rnK7V4y5rHNdizCgFIHVo93kI2uvjbV7jNHhrLIIgy0fCp8aiEGbn8r_ulxAIwFP4-CMkrs2_uB7W29EF47Anwc_soDATMKIlQxUHleCU0XJ-ds_WuAxgDbi5f_vqB',
  },
  {
    id: '3',
    title: 'Amalfi Elegance',
    description: 'Coastal sophistication, private yacht charters, and Michelin-starred dining.',
    price: '$13,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYnSObwS1C9Y7jcePFldouBfT0S4OXUnr8jGq3t8G_NcijqeUpZDTNZ1SPxfg5i5SK4vWKKdXL8PVGh4ArM6NIYjqlZ26HPYmqwBTQb03RF29OxGnrEV3V65ou9H8i6Vea_GCBxiRwSQvNd6JuaYpO6rteNyIfFPexauQwpD6gxw6QcpD9BFp6gT53bV8okWZ8dIK6cQLU6vUb8cEMZK8uoYFJhSvFefKITituDJu3dxhYJNejVL2MjdsQjNmd_1RebN5GcVncupAJ',
  }
];

export default function Packages() {
  const { data: packages = [], isLoading, isError } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchPackages,
  });

  return (
    <div className="bg-surface text-text transition-colors duration-300">
      <div className="pt-20 pb-20">
        {/* Hero Header */}
        <header className="px-6 md:px-12 mb-20 max-w-7xl mx-auto pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-label text-sm uppercase tracking-[0.2em] text-primary mb-4 block">Exclusive Escapes</span>
            <h1 className="font-headline text-5xl md:text-8xl tracking-tight leading-none text-text">Curated Collections</h1>
            <p className="max-w-2xl mt-8 text-text/70 text-lg leading-relaxed font-light">
              A selection of unparalleled journeys designed for the discerning explorer. Each collection is a masterpiece of logistics, luxury, and cultural immersion.
            </p>
          </motion.div>
        </header>

        {/* Secondary Packages (Grid) */}
        <section className="px-6 md:px-12 mb-32 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h3 className="font-headline text-3xl">Signature Discoveries</h3>
            <div className="h-px flex-grow mx-4 md:mx-8 bg-text/20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoading && Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-4">
                <Skeleton className="w-full h-64 rounded-xl" />
                <Skeleton className="w-3/4 h-6 rounded" />
                <Skeleton className="w-full h-16 rounded" />
              </div>
            ))}

            {!isLoading && (isError ? mockPackages : packages).map((pkg, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                key={pkg.id} 
                className="bg-surface-low dark:dark-depth rounded-xl overflow-hidden transition-all duration-300 dark-glow shadow-xl"
              >
                <img alt={pkg.title} className="w-full h-64 object-cover" src={pkg.image} />
                <div className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary opacity-50"></div>
                  <h4 className="font-headline text-2xl mb-2">{pkg.title}</h4>
                  <p className="text-text/70 text-sm mb-6 font-light leading-relaxed">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-bold tracking-tight text-xl">{pkg.price}</span>
                    <button className="text-text border border-text/30 px-4 py-2 text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all rounded">Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bespoke Customization Section */}
        <section className="mx-6 md:mx-12 py-24 px-8 md:px-12 rounded-2xl bg-surface-low dark:dark-depth dark-glow overflow-hidden relative group max-w-7xl xl:mx-auto">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="noise">
                <feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" type="fractalNoise"></feTurbulence>
              </filter>
              <rect filter="url(#noise)" height="100%" width="100%"></rect>
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6 block">Beyond the Ordinary</span>
              <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight text-text">Bespoke Customization</h2>
              <p className="text-text/70 text-lg mb-12 font-light leading-relaxed">
                For those who demand a journey tailored to their exact frequency. Our curators will craft an itinerary that begins at your doorstep and ends wherever your imagination dictates.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="gold-gradient text-text-on-accent font-label text-sm uppercase tracking-widest px-10 py-4 font-bold hover:scale-105 transition-all rounded shadow-lg shadow-accent/20">Consult a Curator</button>
                <button className="border border-text/30 text-text font-label text-sm uppercase tracking-widest px-10 py-4 hover:bg-surface transition-all rounded">Download Portfolio</button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
              <img alt="Private Jet Interior" className="rounded-xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8rVquzAmWQQR1SwP3h1IEzQuUQ9mEsJuANjg9WF9MALjNOYlRy0CqEglRA7GVv82PlrhVifMiTEU9bbiUQSf0dU3Rmu5Y6RQRyRpXuYNbKQ2nMSLNpdWEl2dzYLES50X7nJ3_mwI3Cnjrl3-sQ0zpeM7vLjRwA7RpAP5Q9Ge61DVpzt_H6gugUpY-Ph2VGQgnME6XZ6fu3UfldcojvpHRiWHzBDQDPXBo45JXmYruWvtoq2ZBrU6WN2jkwwXeNoi57uTlNIH93Je" />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
