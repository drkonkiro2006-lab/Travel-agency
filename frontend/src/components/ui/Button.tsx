import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

type ButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  isLoading?: boolean;
};

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  isLoading = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center font-label text-xs uppercase tracking-[0.15em] font-bold rounded overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transform-gpu";
  
  const variants = {
    primary: "gold-gradient text-text-on-accent shadow-lg shadow-primary/20",
    secondary: "bg-surface-low border border-text/10 hover:border-text/20 text-text",
    outline: "border border-text/20 text-text hover:border-primary/50 hover:bg-primary/5 hover:text-primary",
    ghost: "text-text/70 hover:text-text hover:bg-surface-low"
  };

  const widthStyle = fullWidth ? "w-full py-4 px-6" : "px-8 py-3 w-auto";

  return (
    <motion.button
      whileHover={variant === 'primary' ? { y: -2, boxShadow: '0 10px 25px -5px rgba(var(--brand-primary), 0.3)' } : { y: -1 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Subtle overlay for primary button hover */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out" />
      )}
      
      {isLoading ? (
        <span className="flex items-center gap-2 relative z-10">
          <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin"></span>
          Processing...
        </span>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </motion.button>
  );
}
