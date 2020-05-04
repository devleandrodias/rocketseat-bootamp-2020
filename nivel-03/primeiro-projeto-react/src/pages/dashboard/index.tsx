import React from 'react';
import { FiChevronsRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Repository: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/47450207?s=460&u=f7d8f046a838177217e7b0350e0e374ffeb270f8&v=4.jpg"
            alt="Leandro Dias"
          />
          <div className="">
            <strong>balta.io-cqrs-dotnetcode-ef</strong>
            <p>
              Curso realizado com propósito de aprender novas tecnologias em
              .net core
            </p>
          </div>

          <FiChevronsRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/47450207?s=460&u=f7d8f046a838177217e7b0350e0e374ffeb270f8&v=4.jpg"
            alt="Leandro Dias"
          />
          <div className="">
            <strong>balta.io-cqrs-dotnetcode-ef</strong>
            <p>
              Curso realizado com propósito de aprender novas tecnologias em
              .net core
            </p>
          </div>

          <FiChevronsRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/47450207?s=460&u=f7d8f046a838177217e7b0350e0e374ffeb270f8&v=4.jpg"
            alt="Leandro Dias"
          />
          <div className="">
            <strong>balta.io-cqrs-dotnetcode-ef</strong>
            <p>
              Curso realizado com propósito de aprender novas tecnologias em
              .net core
            </p>
          </div>

          <FiChevronsRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Repository;
