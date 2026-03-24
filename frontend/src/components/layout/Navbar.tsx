import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
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
    { path: '/packages', label: 'Packages' },
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
          {links.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
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
