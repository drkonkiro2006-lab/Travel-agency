import { motion } from 'framer-motion';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-surface text-text transition-colors duration-300">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-low/80 via-surface/40 to-surface-low transition-colors duration-300"></div>
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.span variants={fadeUp} className="font-label text-accent uppercase tracking-[0.3em] mb-4 block text-sm">A World Beyond Ordinary</motion.span>
          <motion.h1 variants={fadeUp} className="font-noto-serif text-6xl md:text-8xl font-bold text-text leading-tight mb-8 tracking-tight drop-shadow-lg">
            Explore the World <br /> <span className="italic text-primary">in Style</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-text/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience bespoke travel curation that blends deep immersion with uncompromising luxury. Your journey starts where the ordinary ends.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="gold-gradient text-text-on-accent px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-md shadow-2xl hover:scale-105 transition-transform duration-300 beveled-edge">
              View Collections
            </button>
            <button className="text-text hover:bg-surface-low px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-md transition-all duration-300">
              Discover More
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* Featured Destinations - Bento Grid */}
      <section className="py-32 px-12 bg-surface-low dark:bg-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-20 text-center"
          >
            <span className="font-label text-accent uppercase tracking-[0.2em] text-xs mb-2 block">Curation No. 01</span>
            <h2 className="font-noto-serif text-5xl font-bold text-text">Featured Destinations</h2>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]"
          >
            {/* Large Card */}
            <motion.div variants={fadeUp} className="md:col-span-8 relative overflow-hidden group rounded-xl shadow-2xl dark-glow z-10 hover:z-20 scale-interaction">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="London cityscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6E6Xnl7JVnY4lnjQE6RmllqjT0djBC5Gpwy63SF9Z9o2KOwcL2HIJMeza4oxs2Hf6JommX9_sKiEiNDVtnMM8Cfxf1DhxdLuneJZF12VzrCYPwRbtpxle7e1-8PnIglQehENtlnbztpOP-dpog_lJNfKMRG57Bd-KWSfBIt_9mmAKUMMDU0tIyG50MvStn_dhX8otJqLJs5yjyqz6jxsriCUeseOo-lvBVsGMXqmmbx4T7woNf3Dt2Ny2ePHCjyq2l67DvcXFHD71" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <span className="text-accent font-label uppercase tracking-widest text-xs mb-3 block shadow-black drop-shadow-md">Europe Boutique</span>
                <h3 className="text-4xl font-noto-serif text-white mb-4">Midnight in London</h3>
                <p className="text-gray-300 max-w-lg mb-6">Experience the private clubs and hidden alleys of the historic capital.</p>
                <a className="inline-flex items-center gap-3 text-accent uppercase font-bold text-xs tracking-widest hover:gap-5 transition-all" href="#">Explore <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </motion.div>
            {/* Vertical Card */}
            <motion.div variants={fadeUp} className="md:col-span-4 relative overflow-hidden group rounded-xl shadow-2xl dark-glow z-10 hover:z-20 scale-interaction">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Taj Mahal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA24y786H79m7Ep7qKLXhFWC_cBWabGyBOQ5-MIQX157SuQ1qHaYtabW_kFk4MtEkXAnTfxjCGNX3GAX6aOK37t2xtAVJnI6hi9Drs3CMVvHRRnjXvH8lks3PJXVpjvlsbVUtuQHhZT-za_6DJTh1RWq8LDhmvWg9aDaGXMEOVwsYbF1G0Le1lJaDvxbPoWuVRHxB9CKPQSjhjx74xzOeSTb9M78PGMl3qiBrMCR-gbfqOynTTdelXAANj47yN2We-ts72ibIzcSx94" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-accent font-label uppercase tracking-widest text-xs mb-2 block shadow-black drop-shadow-md">Royal Heritage</span>
                <h3 className="text-3xl font-noto-serif text-white">Ethereal India</h3>
              </div>
            </motion.div>
            {/* Horizontal Bottom */}
            <motion.div variants={fadeUp} className="md:col-span-6 relative overflow-hidden group rounded-xl shadow-2xl dark-glow z-10 hover:z-20 scale-interaction">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cinque Terre" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR29EyhjmWWt6xIgUcQmrXNL8PGFDWYqjgta7etQhFaa0bX66p_0ftCG2EHR7foB0BHU_E65kxzhoK_H2S2n8iU9SmjXmXlcCagjs_gYSHo--pJaWwgemGIqlFJVKr7yltklDebYW17DkAxcx7ndY53bNAPQjtDte6hB1qwvxQmCP_atAtxAIcjNuzxOZLwmsSk2aN8IKmkZr5PInnCwm20tlalvj2alEY5LNCWIxDhsxwqbOVkLbwMgbaaUgWvMEZhzUt4KqbGn6Z" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-accent font-label uppercase tracking-widest text-xs mb-2 block shadow-black drop-shadow-md">Coastal Serenity</span>
                <h3 className="text-3xl font-noto-serif text-white">Amalfi Gold</h3>
              </div>
            </motion.div>
            {/* Last Square */}
            <motion.div variants={fadeUp} className="md:col-span-6 relative overflow-hidden group rounded-xl shadow-2xl dark-glow z-10 hover:z-20 scale-interaction">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Kyoto lanterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDazylAa-Zf4Z1jlkeNBJTtWavoQ_wimMZspgWY1boReQqRFR28ziTfoqD2g8pGsoRUraxk9JjhvSikrTSg-8mFGiCngZhIYlsoehLsjdE4CZpWEU3yQs5dBIpIzekUXgbhJKRbyd9rzlrNKHpcEwQh9oT0KKb0cSGPlKJ7wdn6gVDD7W7w_3nbjuz-DVHOEeysP5W36LjdpdEFdGu-5U5PqyXY3aeDoxoZAztnH6nQSP05Cot_BrL-aARGs8OUD5glbAaJUtUDT_DO" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-accent font-label uppercase tracking-widest text-xs mb-2 block shadow-black drop-shadow-md">Zen Retreat</span>
                <h3 className="text-3xl font-noto-serif text-white">Kyoto Echoes</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Curated Itineraries */}
      <section className="py-32 bg-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-label text-accent uppercase tracking-[0.2em] text-xs mb-2 block">Exclusive Access</span>
              <h2 className="font-noto-serif text-5xl font-bold text-text max-w-lg">Curated Itineraries</h2>
            </div>
            <button className="border border-text/30 px-8 py-3 rounded-md text-sm uppercase font-bold tracking-widest hover:bg-surface-low transition-all">View All Journeys</button>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[1, 2, 3].map((item) => (
              <motion.div variants={fadeUp} key={item} className="group bg-surface-low dark:dark-depth border border-text/10 p-8 rounded-xl dark-glow scale-interaction relative overflow-hidden transition-colors duration-300 shadow-xl">
                <div className="mb-8 overflow-hidden rounded-lg aspect-square">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Itinerary ${item}`} src={
                    item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuA5grzVd71qEoTYcTf4BtyX_WeSizLhBrGPjL1Y5pcBIG1seVjSgNjYpCyLo8v6TvFoPYWxhk3FQmvpp_FAuNiadhbR1YPDM_lZKKb7gSW3wqzJDbFn8hfw779oGkMfySuFKfF5hlH_VzwomX_7y0H-JDV7ooWV4k5U5Fa9B4f23BZVk2yvLAq3TQFQFCFRcFIMIaRrMUI0ecLKZuWLyEupy176B6p0CAeN01Rw9UhjV-y4Fgoy5xIfhKYam3x5qtv-7XpaC7wIXCXa" :
                    item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCs0W17TyWxDVVuff1R8NVQ1s9XA7XPRL65CVtucQo-1JiNF8uwyy47aSehsz66AMwefBhCeEoV6nnMp83DEXeOb5pKqmd0BakcITHf-lu8dvI5FxVRUzTWnLtopSQQr6lsBsBEMHb_mfYk-hLy18FXjfIBXR6mb6mmMAelYBbiUEdwoWvVbg5Xb3p_pKvJnQ-XrHS9Py8cGm6oSk3VpS2s5--Z6kKqSFf_sn7rQaTpu_kpw9FQdBL070AlRZ10RYI9eXpzyqsincGT" :
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCyJVNk9MrrVCUHODxRxDZbzqEbycmNwpPS0bDh0O3eb6qGyFa1fVjtiaTBlSouC60Y6c-HkadHHeLmyZPMm0jSUXYlaZSzB07SwXXQYsETDfOw-6MPvfMFYJu-t73EqaMi5jMSyoOrZCCf9fEfdWxe9E0jIZ55Ydijn5jpNXJQA9-GjEtymFuhAHNFbgjsDCYoV10PGZvMVKkGap9FnI0rTffjvAW7swWQpWHusPwK6IZFqRzxTEqkB4w_b2uvos67bpXhimbxT6DM"
                  } />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-noto-serif text-2xl text-text">
                    {item === 1 ? "The Pearl of Indochina" : item === 2 ? "Alpine Solitude" : "Amazonian Mystery"}
                  </h4>
                  <span className="text-primary font-bold">{item === 1 ? "14 Days" : item === 2 ? "8 Days" : "10 Days"}</span>
                </div>
                <p className="text-text/70 font-body mb-8 leading-relaxed">
                  {item === 1 ? "A deep dive into the spirituality of Southeast Asia through private villa stays and guided meditation." : item === 2 ? "High-altitude luxury combined with heli-skiing and private observatory sessions under clear skies." : "Journey into the heart of the rainforest aboard a luxury river cruiser with world-renowned naturalists."}
                </p>
                <div className="flex items-center justify-between border-t border-text/15 pt-6">
                  <span className="text-sm font-label uppercase tracking-widest opacity-60">From ${item === 1 ? "12,500" : item === 2 ? "9,200" : "15,800"}</span>
                  <button className="material-symbols-outlined text-accent group-hover:translate-x-2 transition-transform">east</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-12 bg-surface-low dark:bg-surface-low/50 overflow-hidden relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="font-label text-accent uppercase tracking-[0.2em] text-xs mb-2 block">The Philosophy</motion.span>
            <motion.h2 variants={fadeUp} className="font-noto-serif text-5xl font-bold text-text mb-12 leading-tight">Why the Midnight <br/>Curator approach?</motion.h2>
            <div className="space-y-12">
              <motion.div variants={fadeUp} className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">verified_user</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Surgical Precision</h4>
                  <p className="text-text/70">We don't just book hotels; we secure the specific corner suite that catches the morning light perfectly.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">auto_awesome</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Unseen Experiences</h4>
                  <p className="text-text/70">Access to private estates, closed museum tours, and cultural icons usually off-limits to the public.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">workspace_premium</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Constant Concierge</h4>
                  <p className="text-text/70">A dedicated travel guardian available 24/7 to adjust your itinerary in real-time as your mood shifts.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
            <div className="bg-surface-low aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl scale-interaction dark-glow">
              <img className="w-full h-full object-cover" alt="Vintage map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoBJFXTOvVT1lfKyMB6p9IHDlUW7lGj65bQ9dywg3m5MgDPgbtZiltZb5mfV22wC7y7lkpsnyT5CjNzMlz7NCnZ8pEbQXP_1FKFS7TlwuSA2VOb1kptDXwQTA-jBPbCZAiScZn1fph7zlLAsXI5bO5705QTGppg_-rFSppJzYa7VjA--dEN2kQq_wLdzpPPGIlVnTc58gttCGpOwoQGknQY0gctgPOdehLa_G55WbudsTk-QET_Acd7Cblb04YVCm5d6dkjDWpn8CP" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface dark:dark-depth p-8 rounded-xl shadow-2xl max-w-xs scale-interaction border border-text/10">
              <p className="text-text italic font-noto-serif text-lg">"The best journeys are those that tell a story before you even arrive."</p>
              <span className="block mt-4 text-xs font-bold uppercase tracking-widest text-text/70">— Julian Vance, Lead Curator</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Narratives */}
      <section className="py-32 bg-surface transition-colors duration-300">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="px-12 mb-16 max-w-7xl mx-auto">
          <h2 className="font-noto-serif text-5xl font-bold text-text">Visual Narratives</h2>
        </motion.div>
        <div className="flex overflow-x-auto gap-8 px-12 pb-12 no-scrollbar">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-none w-[500px] aspect-video rounded-xl overflow-hidden hover:scale-[1.03] transition-transform duration-500 group relative shadow-2xl dark-glow">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Visual ${item}`} src={
                item === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBstOnsf2-2vw9q04uzu8YlbIp_v7-OxgOnoOTBHSIkysMycWxgWFpFDfnfgL2Hjl3deeVYdLpZLrWJn3B5iZgJWVhrGr0geW1T6KoA3nyhvv3prho89va7Y2A8ZMDxAY0j0icS5sjJX03RXvvCkPU_qDfargA0zqyEuPXMbCw1jcitio04eHBwR_2FheOveDtQ6EBCWdMixRZlLDuKghM-eUysKXrRCcTIYYlye_0dXi9GMlamAu5QeZWZb8ZHPXHNgASQoonyUR05" :
                item === 2 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCsZjsrv0Ia1o61r9fmK9229r34J8emhRvNGTy36QsynxF_Gt2D1j6Q0ZKKsJkDuMi2_vUkE8C9XvKGJonJgDP392wzbl7giI1gTeOoBKt4iBCWCWu3JgrnLqlfeNCffBbwwWyeCavcRv5IRzcEwMA9jEm5-6yyUp26CFC0WntdH6uy0LLwLVzu_MR7HfvKBNPn2e5yajyPjCAQQxrZJ9YWdTCUF6fVFhTnjmgHuHRxlE-EWF036iAoiFUA1Ry_LDIHHBfDp8qpSt9b" :
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAGIh2uSqRw1qUyP5eUFSj6Ia6i30zk8SQWvjrtmff488z4bcv0feLjZXMdvlR3ss0jbCQtnvZghOfKP-yPAOSvBqQ02tVJK2BKKUbtXuv_c6C2pocgGQbIWyTDmYadck0MTVmTY7hDJYPPueSinCRUAZBEaomPOB03H6Wyxkd1fXJmSHq6CIPRvQ0ONIheX_qdhZNqWGZtH5wQynyFWvSH7ifYbtoPFeBDNUulOS6l3dtAM8bDj7H_a32PKBJKeLj2XUX3cQOk89C8"
              } />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white text-6xl drop-shadow-xl">play_circle</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About CTA */}
      <section className="py-32 bg-surface-low dark:bg-surface border-t border-text/10 transition-colors duration-300">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-7xl mx-auto px-12 text-center">
          <h2 className="font-noto-serif text-5xl font-bold mb-8 text-text">Ready to curate your legacy?</h2>
          <p className="text-text/70 max-w-2xl mx-auto mb-12 text-lg">Our curators are waiting to discuss your next grand departure. Let's create something timeless.</p>
          <div className="flex justify-center gap-6">
            <button className="gold-gradient text-text-on-accent px-12 py-5 font-bold uppercase tracking-widest text-sm rounded-md shadow-2xl hover:scale-105 transition-transform duration-300 beveled-edge">
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
