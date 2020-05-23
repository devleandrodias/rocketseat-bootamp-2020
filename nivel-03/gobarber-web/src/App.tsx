import React from 'react';

import GlobalStyle from './styles/global';

import SingIn from './pages/singIn';
// import SingUp from './pages/singUp';

import AuthContext from './context/auth.context';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthContext.Provider value={{ name: 'Leandro' }}>
      <SingIn />
    </AuthContext.Provider>
  </>
);

export default App;
