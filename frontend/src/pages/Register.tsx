import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '../context/ToastContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    addToast('Submitting curator application...', 'info');

    // Mock API simulation
    setTimeout(() => {
      setIsLoading(false);
      addToast('Application received. Redirecting to login portal.', 'success');
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 dark:bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[420px] relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="font-outfit text-3xl font-light tracking-widest text-text uppercase mb-6 inline-block">
            M<span className="text-primary italic">.</span>C.
          </Link>
          <h1 className="font-headline text-3xl text-text mb-2 tracking-tight">Request Access</h1>
          <p className="text-text/60 font-light text-sm">Join the exclusive network of global curators.</p>
        </div>

        <form onSubmit={handleRegister} className="bg-surface-low dark:dark-depth dark-glow p-8 md:p-10 rounded-2xl shadow-2xl border border-text/5 space-y-5">
          <Input 
            label="Full Name" 
            type="text" 
            placeholder="Julian Vance"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="curator@midnight.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />

          <div className="pt-4">
            <Button type="submit" fullWidth isLoading={isLoading}>
              Submit Request
            </Button>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-text/50 text-xs font-light">
              Already a member? <Link to="/login" className="text-primary hover:text-accent transition-colors font-semibold">Sign In</Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
