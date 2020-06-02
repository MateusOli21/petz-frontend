import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { updateProfileRequest } from '../../store/modules/user/actions';

import Input from '../../components/InputText';
import InputAvatar from '../../components/InputAvatar';

import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const {
      avatar_id: avatarId,
      name,
      email,
      newPassword,
      oldPassword,
      confirmPassword,
    } = data;
    const avatar_id = parseInt(avatarId);

    dispatch(
      updateProfileRequest({
        avatar_id,
        name,
        email,
        oldPassword,
        newPassword,
        confirmPassword,
      })
    );
  }

  return (
    <Container>
      <h1>Edite o seu perfil</h1>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <InputAvatar name="avatar_id" />
        <Input name="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="oldPassword" placeholder="Senha atual" />
        <Input name="newPassword" placeholder="Nova senha" />
        <Input name="confirmPassword" placeholder="Confirme nova senha" />

        <button type="submit">Confirmar</button>
      </Form>
      <Link to="/dashboard">Cancelar</Link>
    </Container>
  );
}

export default Profile;
