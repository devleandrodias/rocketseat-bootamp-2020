import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

import logoImg from '../../assets/logo.png';

const singIn: React.FC = () => {
  return <Image source={logoImg} />;
};

export default singIn;
