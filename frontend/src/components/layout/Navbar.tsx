import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun, Moon, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/packages';
import logo from '../../assets/logo.png'; 

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/explore', label: 'Explore' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-[100] transition-all duration-700 flex items-center justify-between px-10
      ${scrolled 
        ? 'top-0 h-16 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md backdrop-saturate-150 border-b border-white/20 dark:border-white/5' 
        : 'top-6 h-20 bg-transparent'}`} 
    >
      {/* --- LOGO --- */}
      <Link to="/" className="flex items-center min-w-[180px]">
        <img 
          src={logo} 
          alt="Logo" 
          className={`transition-all duration-500 object-contain ${scrolled ? 'h-10' : 'h-12'}`} 
        />
      </Link>

      {/* --- NAVIGATION PILL --- */}
      <div className="flex items-center gap-1 p-1 bg-white/30 dark:bg-black/20 backdrop-blur-2xl rounded-full border border-white/40 dark:border-white/10 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.1)]">
        
        {links.slice(0, 2).map((link) => (
          <NavButton key={link.path} to={link.path} label={link.label} />
        ))}
        
        {/* Services Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button 
            className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all uppercase
            ${location.pathname.startsWith('/packages') || isDropdownOpen
              ? 'bg-white/90 dark:bg-white/10 text-blue-600 dark:text-blue-400 shadow-sm' 
              : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Services
            <ChevronDown size={14} className={`opacity-50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-80 rounded-[2rem] p-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-3xl border border-white/40 dark:border-white/10 shadow-2xl"
              >
                <div className="grid gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/packages/${cat.slug}`}
                      className="group flex items-center justify-between p-4 rounded-[1.5rem] hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                    >
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-slate-900 dark:text-white">{cat.name}</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Explore collection</span>
                      </div>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {links.slice(2).map((link) => (
          <NavButton key={link.path} to={link.path} label={link.label} />
        ))}
      </div>

      {/* --- RIGHT ACTIONS --- */}
      <div className="flex items-center gap-3 min-w-[180px] justify-end">
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/40 dark:bg-white/5 text-slate-700 dark:text-white border border-white/40 dark:border-white/10 hover:bg-white/60 transition-all"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <Link
          to={isAuthenticated ? "/dashboard" : "/login"}
          className="px-6 py-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-[11px] uppercase tracking-tighter hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-black/10"
        >
          {isAuthenticated ? 'Dashboard' : 'Consultation'}
        </Link>
      </div>
    </nav>
  );
}

function NavButton({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        px-5 py-2 rounded-full text-[11px] font-bold tracking-tight transition-all uppercase
        ${isActive
          ? 'bg-white/90 dark:bg-white/10 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-black/5' 
          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
        }
      `}
    >
      {label}
    </NavLink>
  );
}