import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.svg';
import getValidationErros from '../../utils/getValidationsErros';

const SingUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
        email: Yup.string()
          .required('E-mail é obrigatório')
          .email('Digite um email válido'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErros(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="gobarber-logo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-Mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="aaa">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SingUp;
