import React from 'react';

import logo from '../../../assets/logo.svg';
import loginImage from '../../../assets/login-image.svg';

import { Wrapper, FormContainer, SloganContainer } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <FormContainer>
        <img src={logo} alt="logo" />
        {children}
      </FormContainer>
      <SloganContainer>
        <h1>Todo o cuidado que seu pet merece</h1>
        <img src={loginImage} alt="logo" />
      </SloganContainer>
    </Wrapper>
  );
}
