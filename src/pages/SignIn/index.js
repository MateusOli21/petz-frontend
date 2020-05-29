import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/InputText';

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    if (email === '') {
      toast.error('Preencha o campo de email');
    }
    if (password.length < 6) {
      toast.error('A senha deve conter no mínimo seis dígitos.');
    }

    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button>Entrar</button>
      </Form>
      <Link to="/signup">Anda não possuo conta</Link>
    </>
  );
}

export default SignIn;
