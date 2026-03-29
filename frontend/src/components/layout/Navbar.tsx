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
      // Sync with the layout scroll
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 flex items-center justify-between px-12
      ${scrolled 
        ? 'top-0 h-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl shadow-md border-b border-slate-200 dark:border-white/5' 
        : 'top-8 h-24 bg-transparent'}`} 
    >
      {/* --- LOGO SECTION --- */}
      <Link to="/" className="flex items-center group min-w-[200px]">
        <img 
          src={logo} 
          alt="DIPs ODYSSEY" 
          className={`transition-all duration-500 object-contain ${scrolled ? 'h-14' : 'h-16'}`} 
        />
      </Link>

      {/* --- CENTER PILL (Highlighted Navigation) --- */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/50 dark:bg-white/5 backdrop-blur-3xl rounded-full border border-slate-300/40 dark:border-white/10 shadow-inner">
        
        {/* Home & Destinations */}
        {links.slice(0, 2).map((link) => (
          <NavButton key={link.path} to={link.path} label={link.label} />
        ))}
        
        {/* --- PACKAGES DROPDOWN --- */}
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-all uppercase
            ${location.pathname.startsWith('/packages') || isDropdownOpen
              ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] scale-105 border border-slate-100 dark:border-transparent' 
              : 'text-slate-800 dark:text-slate-300 hover:text-blue-600'}`}
          >
            Packages
            <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 rounded-[2rem] overflow-hidden z-50 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl"
              >
                <div className="flex flex-col gap-1">
                  <span className="px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Our Collections</span>
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/packages/${cat.slug}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="group flex flex-col p-4 rounded-2xl hover:bg-blue-50 dark:hover:bg-white/5 transition-all"
                    >
                      <span className="text-[12px] font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-600">
                        {cat.name}
                      </span>
                      {cat.description && (
                        <span className="text-[9px] text-slate-500 line-clamp-1 group-hover:text-slate-600">{cat.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* About & Contact */}
        {links.slice(2).map((link) => (
          <NavButton key={link.path} to={link.path} label={link.label} />
        ))}
      </div>

      {/* --- RIGHT ACTIONS --- */}
      <div className="flex items-center gap-4 min-w-[200px] justify-end">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 hover:shadow-md transition-all active:scale-90"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Auth CTA */}
        <Link
          to={isAuthenticated ? "/dashboard" : "/login"}
          className="px-8 py-3 rounded-full bg-slate-900 dark:bg-blue-600 text-white font-bold text-[11px] uppercase tracking-widest hover:bg-black dark:hover:bg-blue-700 hover:shadow-xl active:scale-95 transition-all"
        >
          {isAuthenticated ? 'Dashboard' : 'Book Now'}
        </Link>
      </div>
    </nav>
  );
}

/**
 * Reusable Nav Button with Highlighted Active State
 */
function NavButton({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-all uppercase border border-transparent
        ${isActive
          ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-[0_4px_12px_rgba(0,0,0,0.08)] scale-105 border-slate-100 dark:border-white/5' 
          : 'text-slate-800 dark:text-slate-300 hover:text-blue-600'
        }
      `}
    >
      {label}
    </NavLink>
  );
}