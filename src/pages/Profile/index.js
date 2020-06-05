import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
      oldPassword,
      newPassword,
      confirmPassword,
    } = data;
    const avatar_id = parseInt(avatarId);

    if (name || email === '') {
      return toast.error('Os campos nome e e-mail são obrigatórios.');
    }

    if (newPassword && !oldPassword) {
      return toast.error(
        'Para criar nova senha você deve fornecer a senha atual.'
      );
    }

    if (newPassword !== confirmPassword) {
      return toast.error('Erro ao confirmar nova senha.');
    }

    if (newPassword.length < 6) {
      return toast.error('A nova senha deve possuir no mínimo seis dígitos.');
    }

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
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="newPassword" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme nova senha"
        />

        <button type="submit">Confirmar</button>
      </Form>
      <Link to={profile.provider ? '/establishments' : '/dashboard'}>
        Cancelar
      </Link>
    </Container>
  );
}

export default Profile;
