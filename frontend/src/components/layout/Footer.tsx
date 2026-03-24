import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-low w-full border-t border-text/10 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-16 py-20 w-full">
        <div className="space-y-6">
          <div className="text-xl font-serif text-accent uppercase tracking-tighter">Midnight Curator</div>
          <p className="text-text/70 font-body text-sm leading-relaxed">Defining the next generation of luxury travel through artful curation and global exploration.</p>
          <div className="flex gap-4">
            <a href="#" className="text-accent hover:scale-110 transition-transform"><span className="material-symbols-outlined">public</span></a>
            <a href="#" className="text-accent hover:scale-110 transition-transform"><span className="material-symbols-outlined">photo_camera</span></a>
            <a href="#" className="text-accent hover:scale-110 transition-transform"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
        <div>
          <h4 className="font-noto-serif text-accent mb-8 font-bold">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">Privacy Policy</Link></li>
            <li><Link to="#" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">Terms of Service</Link></li>
            <li><Link to="#" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">FAQ</Link></li>
            <li><Link to="#" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-noto-serif text-accent mb-8 font-bold">Destinations</h4>
          <ul className="space-y-4">
            <li><Link to="/destinations" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">Western Europe</Link></li>
            <li><Link to="/destinations" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">Southeast Asia</Link></li>
            <li><Link to="/destinations" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">South America</Link></li>
            <li><Link to="/destinations" className="text-text/70 hover:text-primary transition-all duration-300 inline-block font-body text-sm">Polar Expeditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-noto-serif text-accent mb-8 font-bold">Subscribe</h4>
          <p className="text-text/70 text-sm mb-6">Receive curated travel inspiration directly to your inbox.</p>
          <div className="relative">
            <input type="email" placeholder="Email Address" className="w-full bg-surface border-none ring-1 ring-text/30 focus:ring-accent transition-all rounded px-4 py-3 text-sm" />
            <button className="absolute right-2 top-2 text-accent"><span className="material-symbols-outlined">send</span></button>
          </div>
        </div>
      </div>
      <div className="px-16 py-8 border-t border-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text/50 text-xs">© 2024 Midnight Curator Travel. All rights reserved.</p>
        <div className="flex gap-8 text-xs font-label uppercase tracking-widest text-text/50">
          <span>London</span>
          <span>New York</span>
          <span>Tokyo</span>
        </div>
      </div>
    </footer>
  );
}
