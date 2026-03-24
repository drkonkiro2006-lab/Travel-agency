export default function About() {
  return (
    <div className="bg-surface text-text transition-colors duration-300 pt-10">
      <main className="pt-20">
        {/* Hero Section / Aethelgard Global */}
        <section className="px-12 py-24 md:py-40 flex flex-col items-center text-center">
          <span className="font-label text-xs tracking-[0.4em] uppercase text-primary mb-6">Established 1924</span>
          <h1 className="font-headline text-5xl md:text-8xl tracking-tight leading-tight text-text">Aethelgard Global</h1>
          <p className="mt-8 max-w-2xl font-body text-text/70 text-lg leading-relaxed opacity-80">
            Crafting the world's most exclusive travel narratives for a century. We operate in the silence between the moments, curating excellence for those who value time above all.
          </p>
        </section>

        {/* Our Legacy & The Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-text/15">
          <div className="bg-surface-low p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-headline text-3xl md:text-4xl mb-8">Our Legacy</h2>
            <div className="space-y-6 text-text/70 leading-relaxed font-body">
              <p>Founded on the principles of discretion and architectural travel, Aethelgard began as a private concierge service for the European elite. Over ten decades, we have evolved into a global sentinel of luxury.</p>
              <p>Our history is not written in brochures, but in the whispered testimonials of heads of state, industry titans, and visionaries who require more than just a destination—they require a sanctuary.</p>
            </div>
          </div>
          <div className="bg-surface p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/5 blur-[100px]"></div>
            <h2 className="font-headline text-3xl md:text-4xl mb-8">The Philosophy</h2>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">verified_user</span>
                <div>
                  <h3 className="font-label text-sm uppercase tracking-widest mb-2 font-bold">Absolute Trust</h3>
                  <p className="text-text/70 text-sm">We operate with the highest tier of encryption and human discretion. Your privacy is our paramount asset.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">language</span>
                <div>
                  <h3 className="font-label text-sm uppercase tracking-widest mb-2 font-bold">Global Intuition</h3>
                  <p className="text-text/70 text-sm">Our network of local curators anticipates needs before they are voiced, providing seamless transitions across borders.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="material-symbols-outlined text-primary text-3xl shrink-0">diamond</span>
                <div>
                  <h3 className="font-label text-sm uppercase tracking-widest mb-2 font-bold">Quiet Luxury</h3>
                  <p className="text-text/70 text-sm">Elegance that doesn't need to shout. We prioritize depth, authenticity, and rarity over flashy displays.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Quote */}
        <section className="py-32 px-12 md:px-24 bg-surface-low text-center transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <span className="material-symbols-outlined text-text/30 text-6xl mb-8 opacity-40">format_quote</span>
            <blockquote className="font-headline italic text-3xl md:text-5xl leading-snug">
              "True luxury is not found in the acquisition of things, but in the seamless curation of time and the quiet assurance of absolute belonging."
            </blockquote>
            <cite className="mt-8 block font-label text-sm uppercase tracking-[0.3em] text-primary not-italic">— Elias Aethelgard, Founder</cite>
          </div>
        </section>

        {/* The Network (Map & Stats) */}
        <section className="relative bg-surface p-12 md:p-24 overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img alt="Map" className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8S1CrqPgJTtc6Qk_VQkHfYc9ZeKmLCCWPD_3egmU_1_GbQ_NnQJfhb3PLVHKnOdUvoMSpXtbxpsWYY4f7TL-Le3lp8akFme1VL32m_v5MZVkXXt5xp_assdkLF3W5Xb6NhMeW0TX88L9jP4EAIai8idqq1bmUi5dqNZzJZdKv-FvuzziXNiz9UGSKfT4MRI1-9OKOkchCElLbYWrLTplYD6cN2O6MehxLqj5jpLNd9tIBvX9jVAM4G5UeX8ibYYvO82Zj-byFJw_K" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,var(--surface)_100%)]"></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-label text-xs tracking-[0.4em] uppercase text-primary mb-6 block">Our Presence</span>
              <h2 className="font-headline text-4xl md:text-6xl mb-10 text-text">The Global Network</h2>
              <p className="text-text/70 text-lg leading-relaxed mb-12">
                From the subterranean vaults of Zurich to the hidden villas of Kyoto, our reach is unrivaled. We maintain boots on the ground in over 80 countries, ensuring that Aethelgard standards are met wherever you land.
              </p>
              <div className="flex flex-wrap gap-16">
                <div className="flex flex-col">
                  <span className="font-headline text-5xl text-accent drop-shadow-[0_0_15px_rgba(233,195,73,0.4)]">450+</span>
                  <span className="font-label text-xs uppercase tracking-widest text-text/50 mt-2">Private Assets</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-5xl text-accent drop-shadow-[0_0_15px_rgba(233,195,73,0.4)]">12k</span>
                  <span className="font-label text-xs uppercase tracking-widest text-text/50 mt-2">Curated Itineraries</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-surface-low overflow-hidden shadow-2xl">
                <img alt="Jet interior" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV08cjmnr4oVvcn1Y37kmV73ezqn4_Auyfwh0lR1EIK4vN_xWhOZzVRJ4VbPYElyDIIJCJNePacFEN4i3SDHKkso7aaV3DjspPxgYOZjrki6A2lbFTkY84X0MBAdIRInLNZ3Lh4OWn6xW06o_8VGGbKhoEVdkfMVdfRVf-9fpe0yOs-V0WKCXoYWWF_D6eFPhB0Qgly8nvPtXws9uGDaJIA-XhFYGGWk0wqVsotWvoAOrnWLosyrY56aXFkqkMV3Zx8JsjpDhkHQ3l" />
              </div>
              <div className="aspect-square bg-surface-low overflow-hidden shadow-2xl translate-y-8">
                <img alt="Villa architecture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc1xZ_JKZSvSSsEI3zNG1t9yUTvly5q6q62gFL2eUEL2jtF_KXydYs1ejV6BSd9xKSV3RwQ8GDFtZi8q_FQQC-ptEwaXyok8kCQPr85HV8GklcqaUYXtqxlU8TIjD_esDtCQbn2HlBGa250FSgd4DXyoCtYcZfISEqpKMRsfvXW8fVdwJkG3PCNW8Nb4W4Gca0roWoAb899z7LUFjJA9qSi4zUYwE1MwE7YdS1gWJ68ihng5r_QwrBqUFBew1-7_cviS5sNnAkYJod" />
              </div>
              <div className="aspect-square bg-surface-low overflow-hidden shadow-2xl -translate-y-8">
                <img alt="Concierge service" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiHvM_vzwlUQIsz7Rf6fiYl5Jjt5h9s14p_mLIQK-YyYYC5R2mt_fsaXcD_OSny0P-X_QKqY9SiKKSnsVw39gHQ32_dGmZSAEVBvbn5rmOXOh-B-_MVTRQ22Aq5sNHBOKh00lzTcyznPJ0ig7RiylW6C3HGsNK-kqDWZrG2zmOMR3x951wXO8QPtxGbJjQOo_dj8TyGZzh1ZWi9VVYV-e1dgBvbo3bZNaWLhD1xeC4y4cz0yi-Fn5JAragjbZrvyIu_iPWxuHQr5-8" />
              </div>
              <div className="aspect-square bg-surface-low overflow-hidden shadow-2xl">
                <img alt="Luxury yacht" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbmh5eWWQBZ2g0RjmIkpKNsCH3wcqNx4fTmejePb3ZBN0uNeLUn-xmqnCy17rStkKCcTFh_kwGycGYkx-RHe88yMBb6XYj3QKVwrEWA-Tzglhtxb3oA0wTWJkowLkmiY2UC1yUjC0BIG6DnKSYzh_xevkENoBaEeKRD1i5q0qSMeEuno2MT2a2QpFu7ESLubV_wxFSRkI1KiwgJ7-IYFNzsTS_4xB5bD4uPyiv0R877xYhp89h5GT6jOboINewVU2d_7VOJGD2OtyC" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-12 py-32 text-center bg-surface-low transition-colors duration-300">
          <h2 className="font-headline text-4xl mb-10 text-text">Step into the Midnight</h2>
          <button className="gold-gradient text-text-on-accent font-label text-sm uppercase tracking-[0.2em] px-12 py-5 hover:scale-105 transition-transform duration-300 ease-out shadow-2xl font-bold">
            Inquire for Membership
          </button>
        </section>
      </main>
    </div>
  );
}
