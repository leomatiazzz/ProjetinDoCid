// Localização: src/contexts/AuthContext.tsx (ATUALIZADO)

"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null; // 1. Adicionamos o nome do utilizador ao contexto
  login: (username: string, pass: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null); // 2. Criamos um estado para o nome
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = sessionStorage.getItem('auth-token');
    const storedUser = sessionStorage.getItem('user-name'); // 3. Recuperamos o nome da sessão
    if (token && storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== '/login' && pathname !== '/register') {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, pathname, router]);

  const login = async (username: string, pass: string): Promise<boolean> => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: pass }),
    });

    if (res.ok) {
      sessionStorage.setItem('auth-token', 'simulated-jwt-token');
      sessionStorage.setItem('user-name', username); // 4. Guardamos o nome do utilizador na sessão
      setIsAuthenticated(true);
      setUser(username); // 5. Atualizamos o estado com o nome
      router.push('/');
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('user-name'); // 6. Removemos o nome ao sair
    setIsAuthenticated(false);
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
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
