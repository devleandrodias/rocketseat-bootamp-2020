import React, { createContext, useCallback } from 'react';
import api from '../services/backend.api';

interface SingInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  singIn(credentials: SingInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email,
      password,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Leandro', singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
