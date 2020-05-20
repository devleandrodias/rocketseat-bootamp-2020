import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.svg';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="gobarber-logo" />
      <form action="">
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} type="text" placeholder="E-Mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

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
