import { useEffect, useState } from 'react';
import Navbar from './Navbar'; 
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Plane, Clock } from 'lucide-react'; 
import logo from "../../assets/logo.png"; 

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col transition-colors duration-300">
      
      {/* --- TOP BAR --- */}
      <div className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-white/5 ${scrolled ? '-translate-y-full' : 'h-12'}`}>
        <div className="container mx-auto px-8 lg:px-12 h-full flex items-center justify-between">
          
          <div className="flex items-center gap-5 border-r border-slate-100 dark:border-white/10 pr-8 h-full">
            <SocialIconLink href="https://facebook.com/dipsodyssey" Icon={Facebook} hoverColor="hover:text-blue-700" />
            <SocialIconLink href="https://twitter.com/dipsodyssey" Icon={Twitter} hoverColor="hover:text-blue-400" />
            <SocialIconLink href="https://instagram.com/dipsodyssey" Icon={Instagram} hoverColor="hover:text-pink-600" />
          </div>

          <div className="flex-1 overflow-hidden relative h-full flex items-center">
            <div className="animate-marquee flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 whitespace-nowrap">
              <span className="flex items-center gap-3"><Plane size={14} /> Global Premium Travel Solutions</span>
              <span className="text-slate-200">|</span>
              <span>Bali Summer Exclusive: 20% Off</span>
            </div>
          </div>

          <div className="flex items-center gap-8 pl-8 h-full">
            <a href="tel:+919432155266" className="flex items-center gap-2.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Phone size={14} className="text-blue-500" /> +91 9432155266
            </a>
            <a href="mailto:info@dipsodyssey.com" className="flex items-center gap-2.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
              <Mail size={14} className="text-blue-500" /> info@dipsodyssey.com
            </a>
            <div className="bg-amber-50 dark:bg-amber-900/20 px-4 py-1.5 rounded-md flex items-center gap-2 text-amber-700 dark:text-amber-400 text-[10px] font-black border border-amber-100 dark:border-amber-800/30">
              <Clock size={13} /> 10:00 — 19:00 IST
            </div>
          </div>
        </div>
      </div>

      <Navbar />

      <main className={`flex-1 w-full transition-all duration-500 ${scrolled ? 'pt-24' : 'pt-40'}`}>
        {children}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 pt-32 pb-16">
        <div className="container mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <img src={logo} alt="DipsOdyssey" className="h-14 w-auto object-contain" />
            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed max-w-xs">
              Crafting premium journeys for the discerning traveler. We turn complex itineraries into seamless experiences.
            </p>
            <div className="flex gap-5">
               <SocialBtn href="https://facebook.com/dipsodyssey" Icon={Facebook} />
               <SocialBtn href="https://twitter.com/dipsodyssey" Icon={Twitter} />
               <SocialBtn href="https://instagram.com/dipsodyssey" Icon={Instagram} />
            </div>
          </div>

          <FooterLinkGroup title="Services" links={['Bespoke Tours', 'Luxury Stays', 'Flight Curation', 'Visa Assistance']} />
          <FooterLinkGroup title="Explore" links={['About Us', 'Destinations', 'Insights', 'Contact']} />

          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">Contact</h4>
            <div className="text-[15px] text-slate-500 dark:text-slate-400 space-y-4">
               <p className="flex items-center gap-3"><MapPin size={20} className="text-blue-500" /> Salt Lake, Sector V, Kolkata</p>
               <a href="tel:+919432155266" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                  <Phone size={20} className="text-blue-500" /> +91 9432155266
               </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- PREMIUM FLOATING WHATSAPP --- */}
      <a 
        href="https://wa.me/919432155266" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group fixed bottom-8 right-8 z-[90] flex items-center justify-center w-16 h-16 
                   rounded-full transition-all duration-500 ease-out
                   bg-white/90 dark:bg-slate-900/90 backdrop-blur-md
                   border border-slate-200 dark:border-white/10
                   hover:-translate-y-3 hover:scale-110
                   shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                   dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                   hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)]"
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/30 opacity-75 duration-[2000ms]"></span>
        
        {/* WhatsApp Icon */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-8 h-8 z-10 drop-shadow-md group-hover:rotate-[12deg] transition-transform duration-300"
        />
      </a>
    </div>
  );
}

function SocialIconLink({ href, Icon, hoverColor }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-slate-400 ${hoverColor} transition-colors`}>
      <Icon size={16} />
    </a>
  );
}

function SocialBtn({ href, Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className="w-11 h-11 rounded-full bg-white dark:bg-white/5 shadow-md border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-all hover:-translate-y-1">
      <Icon size={18} />
    </a>
  );
}

function FooterLinkGroup({ title, links }) {
  return (
    <div className="space-y-6">
      <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-4 text-[15px] text-slate-500 dark:text-slate-400">
        {links.map(link => (
          <li key={link}>
            <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600 transition-colors block">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}