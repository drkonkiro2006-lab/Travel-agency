import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Facebook, Twitter, Instagram, Phone, Mail, MapPin, 
  Plane, Clock, ChevronDown, Sun, Moon, ArrowRight, Linkedin 
} from 'lucide-react'; 
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/packages';
import logo from "../../assets/logo.png"; 

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isAuthenticated } = useAuth();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About' },
    { path: '/explore', label: 'Explore' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'dark bg-slate-950' : 'bg-white'}`}>
      
      {/* --- PREMIUM TOP BAR --- */}
      <div className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 
        ${scrolled ? '-translate-y-full opacity-0' : 'h-10 translate-y-0 opacity-100'} 
        bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5`}>
        
        <div className="max-w-[1440px] mx-auto px-10 h-full flex items-center justify-between">
          <div className="flex items-center gap-4 border-r border-slate-200 dark:border-white/10 pr-6 h-1/2">
            <SocialIconLink href="#" Icon={Facebook} />
            <SocialIconLink href="#" Icon={Twitter} />
            <SocialIconLink href="#" Icon={Instagram} />
          </div>

          <div className="flex-1 relative h-full overflow-hidden mx-8 mask-fade-edges">
            <div className="animate-marquee flex items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 h-full">
              <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400"><Plane size={12} /> Bespoke Luxury Travel</span>
              <span className="opacity-20">/</span>
              <span>Bali Private Villas: Limited Availability</span>
              <span className="opacity-20">/</span>
              <span className="flex items-center gap-2 text-emerald-600"><Clock size={12} /> Summer 2026 Bookings Open</span>
            </div>
          </div>

          <div className="flex items-center gap-6 h-full">
            <div className="hidden xl:flex items-center gap-4">
              <ContactLink href="tel:+919432155266" Icon={Phone} label="+91 94321 55266" />
              <ContactLink href="mailto:info@dipsodyssey.com" Icon={Mail} label="Support" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              10:00 — 19:00 IST
            </div>
          </div>
        </div>
      </div>

      {/* --- GLASS NAVIGATION --- */}
      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-700 flex items-center justify-between px-10
        ${scrolled 
          ? 'top-0 h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg border-b border-slate-200/50 dark:border-white/5 shadow-sm' 
          : 'top-10 h-20 bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg'}`}>
        
        <Link to="/" className="flex items-center min-w-[180px]">
          <img src={logo} alt="Logo" className={`transition-all duration-500 object-contain ${scrolled ? 'h-20' : 'h-24'}`} />
        </Link>

        <div className="flex items-center gap-1 p-1 bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-full border border-white/40 dark:border-white/10 shadow-lg shadow-black/5">
          {navLinks.slice(0, 2).map((link) => (
            <NavButton key={link.path} to={link.path} label={link.label} />
          ))}
          
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all uppercase
              ${location.pathname.startsWith('/packages') || isDropdownOpen ? 'bg-white/90 dark:bg-white/10 text-blue-600 shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'}`}>
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 rounded-[2rem] p-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white/40 dark:border-white/10 shadow-2xl">
                  {categories.map((cat) => (
                    <Link key={cat.id} to={`/packages/${cat.slug}`} className="group flex items-center justify-between p-4 rounded-[1.5rem] hover:bg-white/50 dark:hover:bg-white/5 transition-all">
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-slate-900 dark:text-white">{cat.name}</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">View Collection</span>
                      </div>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavButton key={link.path} to={link.path} label={link.label} />
          ))}
        </div>

        <div className="flex items-center gap-3 min-w-[180px] justify-end">
          <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/50 dark:bg-white/5 text-slate-700 dark:text-white border border-white/40 dark:border-white/10 hover:bg-white transition-all">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to={isAuthenticated ? "/dashboard" : "/login"} className="px-6 py-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-[11px] uppercase tracking-tighter hover:opacity-90 active:scale-95 transition-all shadow-lg">
            {isAuthenticated ? 'Dashboard' : 'Consultation'}
          </Link>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className={`flex-1 transition-all duration-700 ${scrolled ? 'pt-16' : 'pt-32'}`}>
        {children}
      </main>

      {/* --- LUXURY FOOTER --- */}
      <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 pt-24 pb-12 transition-colors duration-500">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <img src={logo} alt="DipsOdyssey" className="h-12 w-auto object-contain" />
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                  Architecting bespoke journeys for the modern explorer. We blend local soul with global luxury to curate stories, not just trips.
                </p>
              </div>
              <div className="flex gap-3">
                <FooterSocialBtn icon={<Facebook size={18} />} />
                <FooterSocialBtn icon={<Instagram size={18} />} />
                <FooterSocialBtn icon={<Linkedin size={18} />} />
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-8">Services</h4>
                <ul className="space-y-4">
                  <FooterLink to="#">Bespoke Tours</FooterLink>
                  <FooterLink to="#">Luxury Stays</FooterLink>
                  <FooterLink to="#">Flight Curation</FooterLink>
                  <FooterLink to="#">Visa Assistance</FooterLink>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-8">Explore</h4>
                <ul className="space-y-4">
                  <FooterLink to="/about">Our Story</FooterLink>
                  <FooterLink to="/destinations">Destinations</FooterLink>
                  <FooterLink to="#">Insights</FooterLink>
                  <FooterLink to="/contact">Contact</FooterLink>
                </ul>
              </div>
            </div>

            {/* Newsletter/Contact Column */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-2">Location</h4>
              <div className="text-sm text-slate-500 dark:text-slate-400 space-y-4">
                <p className="flex items-center gap-3"><MapPin size={18} className="text-blue-500" /> Salt Lake, Sector V, Kolkata</p>
                <a href="tel:+919432155266" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                  <Phone size={18} className="text-blue-500" /> +91 94321 55266
                </a>
              </div>
              <div className="pt-4">
                <div className="relative group max-w-xs">
                  <input type="email" placeholder="Curated Newsletter" className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-5 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
                  <button className="absolute right-1.5 top-1.5 p-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full hover:scale-105 transition-transform"><ArrowRight size={14} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Dips Odyssey · Global Premium Travel Solutions
            </p>
            <div className="flex gap-6 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              <span>London</span>
              <span>Kolkata</span>
              <span>Dubai</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING --- */}
      <a href="https://wa.me/919432155266" target="_blank" rel="noopener noreferrer"
        className="group fixed bottom-8 right-8 z-[90] flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-2xl hover:-translate-y-2 hover:scale-110">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/20 opacity-75 duration-[2500ms]"></span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-7 h-7 z-10" />
      </a>

      {/* --- INLINE STYLES FOR MARQUEE --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; display: flex; width: max-content; }
        .mask-fade-edges { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
      `}} />
    </div>
  );
}

/* --- HELPER COMPONENTS --- */

function NavButton({ to, label }) {
  return (
    <NavLink to={to} className={({ isActive }) => `px-5 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all uppercase
      ${isActive ? 'bg-white/90 dark:bg-white/10 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-black/5' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'}`}>
      {label}
    </NavLink>
  );
}

function SocialIconLink({ href, Icon }) {
  return (
    <a href={href} className="text-slate-400 hover:text-blue-600 transition-all transform hover:scale-110">
      <Icon size={14} />
    </a>
  );
}

function ContactLink({ href, Icon, label }) {
  return (
    <a href={href} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
      <Icon size={12} className="opacity-70" /> {label}
    </a>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link to={to} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-300">
        {children}
      </Link>
    </li>
  );
}

function FooterSocialBtn({ icon }) {
  return (
    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
      {icon}
    </a>
  );
}