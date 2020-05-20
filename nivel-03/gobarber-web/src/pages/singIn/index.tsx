import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="gobarber-logo" />
      <form action="">
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="E-Mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="aa">Esqueci minha senha</a>
      </form>

      <a href="aaa">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SingIn;
