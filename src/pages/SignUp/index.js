import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/InputText';

// import { Container } from './styles';

function SignUp() {
  return (
    <>
      <>
        <Form>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" placeholder="Seu email" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <button>Entrar</button>
        </Form>
        <Link to="/">Já possuo conta</Link>
      </>
    </>
  );
}

export default SignUp;
