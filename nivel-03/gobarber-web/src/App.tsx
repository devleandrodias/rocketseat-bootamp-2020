import React from 'react';

import GlobalStyle from './styles/global';

import SingIn from './pages/singIn';
import SingUp from './pages/singUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <SingUp />
  </>
);

export default App;
