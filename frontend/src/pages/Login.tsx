import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    addToast('Authenticating secure session...', 'info');

    // Mock API simulation
    setTimeout(() => {
      if (email && password && password.length >= 6) {
        // Authenticate as mock admin or user based on email
        const role = email.includes('admin') ? 'admin' : 'user';
        login('mock-jwt-token-123', {
          id: 'user_1',
          name: email.split('@')[0],
          email,
          role
        });
        
        addToast(`Welcome back, ${email.split('@')[0]}.`, 'success');
        const destination = location.state?.from?.pathname || '/dashboard';
        navigate(destination, { replace: true });
      } else {
        const msg = password.length < 6 ? 'Password must be at least 6 characters.' : 'Invalid credentials provided.';
        setError(msg);
        addToast(msg, 'error');
      }
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[420px] relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="font-outfit text-3xl font-light tracking-widest text-text uppercase mb-6 inline-block">
            M<span className="text-primary italic">.</span>C.
          </Link>
          <h1 className="font-headline text-3xl text-text mb-2 tracking-tight">Access Portal</h1>
          <p className="text-text/60 font-light text-sm">Enter your credentials to continue to your dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-surface-low dark:dark-depth dark-glow p-8 md:p-10 rounded-2xl shadow-2xl border border-text/5 space-y-6">
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

          {error && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-500 text-xs text-center font-light">
              {error}
            </motion.div>
          )}

          <div className="pt-4">
            <Button type="submit" fullWidth isLoading={isLoading}>
              Sign In
            </Button>
          </div>
          
          <div className="text-center pt-2">
            <p className="text-text/50 text-xs font-light">
              Don't have an account? <Link to="/register" className="text-primary hover:text-accent transition-colors font-semibold">Request Access</Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
