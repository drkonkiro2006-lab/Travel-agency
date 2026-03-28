import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/packages';

// Import your logo asset
import logo from '../../assets/logo.png'; 

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Logic to sync with the Layout's top-bar disappearance
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home', color: 'bg-blue-500/10 text-blue-600 border-blue-200/50' },
    { path: '/destinations', label: 'Destinations', color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200/50' },
    { path: '/about', label: 'About', color: 'bg-pink-500/10 text-pink-600 border-pink-200/50' },
    { path: '/contact', label: 'Contact', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 flex items-center justify-between px-12
      ${scrolled 
        ? 'top-0 h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl shadow-sm border-b border-slate-100 dark:border-white/5' 
        : 'top-10 h-24 bg-transparent'}`} 
    >
      {/* --- LOGO SECTION --- */}
      <Link to="/" className="flex items-center group min-w-[200px]">
        <img 
          src={logo} 
          alt="M.C. Travel Logo" 
          className={`transition-all duration-500 object-contain ${scrolled ? 'h-20' : 'h-16'}`} 
        />
      </Link>

      {/* --- CENTER PILL (The Shaded Navigation) --- */}
      <div className="flex items-center gap-1 p-1.5 bg-white/40 dark:bg-white/5 backdrop-blur-3xl rounded-full border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)]">
        
        {/* Home & Destinations */}
        {links.slice(0, 2).map((link) => (
          <NavButton key={link.path} to={link.path} label={link.label} activeColor={link.color} />
        ))}
        
        {/* Packages Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-black tracking-widest transition-all uppercase border border-transparent
            ${location.pathname.startsWith('/packages') || isDropdownOpen
              ? 'bg-white text-blue-600 shadow-sm scale-105 border border-slate-100' 
              : 'text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-white/10 hover:text-blue-600'}`}
          >
            Services
            <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 rounded-[2.5rem] overflow-hidden z-50 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border border-white/40 dark:border-white/5 shadow-2xl"
              >
                <div className="flex flex-col gap-1">
                  <span className="px-5 py-2 text-[9px] uppercase tracking-[0.3em] text-slate-400 font-bold">Discover Collections</span>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/packages/${cat.slug}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="group flex flex-col p-4 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                    >
                      <span className="text-[12px] font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600">
                        {cat.name}
                      </span>
                      <span className="text-[9px] text-slate-400 line-clamp-1">{cat.description}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* About & Contact */}
        {links.slice(2).map((link) => (
          <NavButton key={link.path} to={link.path} label={link.label} activeColor={link.color} />
        ))}
      </div>

      {/* --- RIGHT ACTIONS --- */}
      <div className="flex items-center gap-4 min-w-[200px] justify-end">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-white/5 text-slate-700 dark:text-white backdrop-blur-md border border-slate-100 dark:border-white/10 hover:shadow-md transition-all"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Auth CTA */}
        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all"
          >
            Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-8 py-3 rounded-full bg-slate-900 text-white font-black text-[11px] uppercase tracking-widest hover:bg-black hover:shadow-xl active:scale-95 transition-all"
          >
            Book Consultation
          </Link>
        )}
      </div>
    </nav>
  );
}

/**
 * Reusable Nav Button with the "Shaded Highlight" effect
 */
function NavButton({ to, label, activeColor }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        px-6 py-2.5 rounded-full text-[11px] font-black tracking-widest transition-all uppercase border border-transparent
        ${isActive
          ? 'bg-white text-blue-600 shadow-sm scale-105 border border-slate-100' 
          : 'text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-white/10 hover:text-blue-600'
        }
      `}
    >
      {label}
    </NavLink>
  );
}