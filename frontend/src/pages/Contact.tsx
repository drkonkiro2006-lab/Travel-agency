export default function Contact() {
  return (
    <div className="bg-surface text-text transition-colors duration-300">
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        {/* Hero Title Section */}
        <header className="mb-24 flex flex-col items-center text-center">
          <span className="font-label text-primary text-[11px] uppercase tracking-[0.3em] mb-4">Inquiry &amp; Concierge</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-text">
            Craft Your <br /> <span className="italic font-normal text-primary">Legacy Journey</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Form Section (Bento Inspired) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-surface-low/80 backdrop-blur-md p-10 md:p-16 rounded-xl border border-text/10 midnight-glow transition-colors duration-300">
              <form action="#" className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-text/60 mb-3 block">Full Name</label>
                    <input type="text" placeholder="ALEXANDER VANE" className="w-full bg-transparent border-none border-b border-text/20 focus:ring-0 focus:border-primary text-text placeholder:text-text/30 py-4 transition-all duration-300" />
                  </div>
                  <div className="relative group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-text/60 mb-3 block">Email Address</label>
                    <input type="email" placeholder="A.VANE@CURATOR.COM" className="w-full bg-transparent border-none border-b border-text/20 focus:ring-0 focus:border-primary text-text placeholder:text-text/30 py-4 transition-all duration-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-text/60 mb-3 block">Interest</label>
                    <select className="w-full bg-transparent border-none border-b border-text/20 focus:ring-0 focus:border-primary text-text py-4 transition-all duration-300 cursor-pointer">
                      <option className="bg-surface text-text">PRIVATE EXPEDITION</option>
                      <option className="bg-surface text-text">ART CURATION</option>
                      <option className="bg-surface text-text">ESTATE RETREAT</option>
                    </select>
                  </div>
                  <div className="relative group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-text/60 mb-3 block">Timeline</label>
                    <input type="text" placeholder="Q4 2024" className="w-full bg-transparent border-none border-b border-text/20 focus:ring-0 focus:border-primary text-text placeholder:text-text/30 py-4 transition-all duration-300" />
                  </div>
                </div>

                <div className="relative group">
                  <label className="font-label text-[10px] uppercase tracking-widest text-text/60 mb-3 block">The Vision</label>
                  <textarea rows={4} placeholder="DESCRIBE THE UNFORGETTABLE..." className="w-full bg-transparent border-none border-b border-text/20 focus:ring-0 focus:border-primary text-text placeholder:text-text/30 py-4 transition-all duration-300 resize-none"></textarea>
                </div>

                <button type="submit" className="gold-gradient text-text-on-accent px-12 py-5 font-bold uppercase tracking-[0.25em] text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center w-full md:w-auto shadow-2xl shadow-primary/30">
                  Submit Inquiry
                  <span className="material-symbols-outlined ml-3 text-[18px]">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>

          {/* Concierge & Locations Section */}
          <div className="lg:col-span-5 space-y-16">
            {/* Concierge High Contrast Image */}
            <div className="relative group overflow-hidden rounded-xl h-80 shadow-2xl flex items-end">
              <img alt="Desk keys" className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZJm4hrTnhxte4mrbQlbe6q-kMgIGf7XkwB-PEiX5-vGqyOGe1sQdEC9806jpsR37W2A4-xa64JfM9CWZn6bbBa6CKYx_j2GUQ9DG5S_euDQVT5ewwrcZwHD09Zc8njjX74UvOYPjwSNjVmfBrwx0kth55j2rIn_nNrsAB9kTBg31P7ry0Wx1W2fa4Ldh6i2HPqPfHltpzd0sf8AGmYlgv36K0AbPr4R91JLTn2p-tRUIF2fWqHIZ3Nz3l-GsreTeqjSSg5-R-teJ" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
              <div className="relative z-10 p-8">
                <span className="font-label text-[9px] uppercase tracking-[0.4em] text-accent block mb-2">Available 24/7</span>
                <h3 className="font-headline text-2xl font-bold text-white">The Midnight Concierge</h3>
              </div>
            </div>

            {/* Locations Grid */}
            <div className="space-y-12 pl-4 border-l border-text/10">
              <div className="space-y-4">
                <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-text/70">Global Reach</h4>
                
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-surface-low rounded-lg text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-text/50 mb-1">Direct Line</p>
                    <p className="font-headline text-lg">+44 (0) 20 7946 0852</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-surface-low rounded-lg text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-text/50 mb-1">Electronic Post</p>
                    <p className="font-headline text-lg">concierge@midnightcurator.com</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">London Atelier</p>
                  <p className="text-text/70 text-sm leading-relaxed">Mayfair, W1K 2HB<br />United Kingdom</p>
                </div>
                <div className="space-y-2">
                  <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Zurich Bureau</p>
                  <p className="text-text/70 text-sm leading-relaxed">Bahnhofstrasse 1<br />8001 Switzerland</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Quote / Ambient Section */}
        <section className="mt-40 border-t border-text/10 pt-20 text-center">
          <p className="font-headline italic text-2xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            "The night does not hide life; it reveals the essence of it for those who know where to look."
          </p>
        </section>
      </main>
    </div>
  );
}
