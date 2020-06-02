import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/InputText';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <h1>Edite o seu perfil</h1>
      <Form initialData={profile}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="oldPassword" placeholder="Senha atual" />
        <Input name="newPassword" placeholder="Nova senha" />
        <Input name="confirmPassword" placeholder="Confirme nova senha" />

        <button>Confirmar</button>
      </Form>
      <Link to="/dashboard">Cancelar</Link>
    </Container>
  );
}

export default Profile;
