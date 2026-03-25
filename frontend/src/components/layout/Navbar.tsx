import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/packages';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const links = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    // { path: '/packages', label: 'Packages' }, // Handled separately for dropdown
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[80] bg-surface/60 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-colors duration-500 border-b border-text/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 w-full mx-auto">
        <Link to="/" className="text-xl md:text-2xl font-serif italic text-text tracking-widest relative group">
          M<span className="text-primary group-hover:text-accent transition-colors duration-300">.</span>C<span className="text-primary group-hover:text-accent transition-colors duration-300">.</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          {links.slice(0, 2).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative px-1 py-2 font-label text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-text/60 hover:text-text'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-underline" 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_rgba(var(--brand-primary),0.6)] rounded-full" 
                  />
                )}
              </Link>
            );
          })}

          {/* Packages Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link 
              to="/packages"
              onMouseEnter={() => setIsDropdownOpen(true)}
              className={`relative px-1 py-2 font-label text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 flex items-center gap-1 ${location.pathname.startsWith('/packages') ? 'text-primary font-bold' : 'text-text/60 hover:text-text'}`}
            >
              Packages
              <motion.span 
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                className="material-symbols-outlined text-[14px]"
              >
                expand_more
              </motion.span>
              {location.pathname.startsWith('/packages') && (
                <motion.div 
                  layoutId="navbar-underline" 
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_rgba(var(--brand-primary),0.6)] rounded-full" 
                />
              )}
            </Link>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-4 min-w-[320px] will-change-transform"
                >
                  <div className="bg-surface-low dark:bg-[#1A1A1A] border border-text/10 rounded-2xl shadow-2xl overflow-hidden midnight-glow beveled-edge backdrop-blur-xl">
                    <div className="grid grid-cols-1 p-3">
                      <div className="px-5 py-3 border-b border-text/5 mb-2">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-text/40 font-bold">Discover Collections</span>
                      </div>
                      <div className="max-h-[60vh] overflow-y-auto custom-scrollbar grid grid-cols-1 gap-1">
                        {categories.map((cat, idx) => (
                          <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                          >
                            <Link
                              to={`/packages/${cat.slug}`}
                              onClick={() => setIsDropdownOpen(false)}
                              className="group relative px-5 py-3 flex items-center justify-between rounded-xl transition-all duration-300 hover:bg-surface dark:hover:bg-[#252525] border border-transparent hover:border-accent/20"
                            >
                              <div className="flex flex-col">
                                <span className="text-text font-bold text-[11px] uppercase tracking-widest group-hover:text-primary transition-colors">{cat.name}</span>
                                <span className="text-[9px] text-text/40 line-clamp-1 mt-0.5">{cat.description}</span>
                              </div>
                              <span className="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 text-lg">
                                chevron_right
                              </span>
                              <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <Link 
                        to="/packages" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="mt-2 text-center py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors border-t border-text/5"
                      >
                        All Travel Collections
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.slice(2).map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative px-1 py-2 font-label text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? 'text-primary font-bold' : 'text-text/60 hover:text-text'}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-underline" 
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_rgba(var(--brand-primary),0.6)] rounded-full" 
                  />
                )}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <button onClick={toggleTheme} className="text-accent hover:text-primary transition-colors">
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          
          {isAuthenticated ? (
            <Link to="/dashboard" className="gold-gradient text-text-on-accent px-8 py-3 font-semibold uppercase tracking-widest text-xs rounded-md shadow-lg beveled-edge hover:scale-105 transition-transform duration-300 ease-out">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="border border-text/30 text-text px-8 py-3 font-semibold uppercase tracking-widest text-xs rounded-md shadow-lg hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 ease-out">
              Client Portal
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
