import React from 'react';

import GlobalStyle from './styles/global';

import SingIn from './pages/singIn';
// import SingUp from './pages/singUp';

import { AuthProvider } from './context/auth.context';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SingIn />
    </AuthProvider>
  </>
);

export default App;
