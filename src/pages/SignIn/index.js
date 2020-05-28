import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/InputText';
// import { Container } from './styles';

function SignIn() {
  return (
    <>
      <Form>
        <Input name="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button>Entrar</button>
      </Form>
      <Link to="/signup">Anda não possuo conta</Link>
    </>
  );
}

export default SignIn;
