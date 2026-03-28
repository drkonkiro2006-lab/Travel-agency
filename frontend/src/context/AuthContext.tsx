import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
};

type Theme = 'light' | 'dark';

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  // --- Added Theme Types ---
  theme: Theme;
  toggleTheme: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('saas_user');
    if (!storedUser) return null;
    try {
      return JSON.parse(storedUser) as User;
    } catch {
      localStorage.removeItem('saas_user');
      localStorage.removeItem('saas_token');
      return null;
    }
  });

  // --- Theme Logic ---
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const login = (token: string, userData: User) => {
    localStorage.setItem('saas_token', token);
    localStorage.setItem('saas_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('saas_token');
    localStorage.removeItem('saas_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        login, 
        logout,
        theme,        // Exporting theme
        toggleTheme   // Exporting toggle function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}