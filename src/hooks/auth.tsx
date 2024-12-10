import { createContext, useCallback, useState, useContext, ReactNode } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie';

interface User {
  fullName: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
    children: ReactNode;
  }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
      const token = Cookies.get('token');
      const user = localStorage.getItem('@Apontatu:user');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, user: JSON.parse(user) };
      }
  
      return {} as AuthState;
    });
  
    const signIn = useCallback(async ({ login, password }: SignInCredentials) => {
      Cookies.remove('token');
      localStorage.removeItem('@Apontatu:user');

      const response = await api.post('api/Login/login', {
        login,
        password,
      });
  
      const { token, user } = response.data;
  
      Cookies.set('token', token, { expires: 7 });
      localStorage.setItem('@Apontatu:user', JSON.stringify(user));
  
      api.defaults.headers.authorization = `Bearer ${token}`;
  
      setData({ token, user });
    }, []);
  
    const signOut = useCallback(() => {
      Cookies.remove('token');
      localStorage.removeItem('@Apontatu:user');
  
      setData({} as AuthState);
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ user: data.user, token: data.token, signIn, signOut }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
