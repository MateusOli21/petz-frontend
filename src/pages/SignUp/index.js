import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { SignUpRequest } from '../../store/modules/auth/actions';

import Input from '../../components/InputText';
import InputSelect from '../../components/Select';

function SignUp() {
  const options = [
    { value: false, label: 'Cliente' },
    { value: true, label: 'Provedor de serviços' },
  ];

  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (data.name === '') {
      toast.error('Preencha com seu nome completo.');
    }

    if (data.email === '') {
      toast.error('Preencha um e-mail válido');
    }

    if (data.password.length < 6) {
      toast.error('A senha deve conter pelo menos seis caracteres.');
    }

    dispatch(
      SignUpRequest(data.name, data.email, data.password, data.provider)
    );
  }

  return (
    <>
      <>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" placeholder="Seu email" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <div>
            <InputSelect
              name="provider"
              options={options}
              placeholder="Você é um..."
            />
          </div>
          <button>Criar conta</button>
        </Form>
        <Link to="/">Já possuo conta</Link>
      </>
    </>
  );
}

export default SignUp;
