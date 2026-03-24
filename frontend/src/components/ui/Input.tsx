import { forwardRef, useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="flex flex-col space-y-2 w-full">
        <motion.label 
          initial={false}
          animate={{ color: isFocused ? 'var(--brand-primary)' : 'var(--text-primary)' }}
          className="font-label text-[10px] uppercase tracking-widest ml-1 transition-colors duration-300"
          style={{ 
            color: error ? 'rgb(239 68 68)' : isFocused ? 'hsl(var(--brand-primary))' : 'hsl(var(--text-primary) / 0.7)' 
          }}
        >
          {label}
        </motion.label>
        <motion.div
           animate={error ? { x: [-3, 3, -3, 3, 0] } : {}}
           transition={{ duration: 0.3, ease: 'easeInOut' }}
           className="relative"
        >
          <input
            ref={ref}
            onFocus={(e) => { setIsFocused(true); onFocus?.(e); }}
            onBlur={(e) => { setIsFocused(false); onBlur?.(e); }}
            className={`
              bg-surface-low border rounded px-4 py-3 
              text-text font-light w-full transition-all duration-300 ease-out
              outline-none
              ${error ? 'border-red-500/50 bg-red-500/5 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.15)]' : 'border-text/10 focus:border-primary/60 focus:bg-surface focus:shadow-[0_0_15px_rgba(var(--brand-primary),0.1)]'}
              ${className}
            `}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.span 
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} 
            className="text-red-500 text-xs ml-1 font-light"
          >
            {error}
          </motion.span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
