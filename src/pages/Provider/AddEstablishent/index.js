import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { createEstablishmentRequest } from '../../../store/modules/establishment/actions';

import Input from '../../../components/InputText';
import InputAvatar from '../../../components/InputAvatar';

import { Container } from './styles';

function AddEstablishent() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { avatar_id: avatarId, name, email, contact, location } = data;

    if (
      avatarId === '' ||
      name === '' ||
      email === '' ||
      contact === '' ||
      location === ''
    ) {
      return toast.error('Todos os campos devem ser preenchidos.');
    }

    const avatar_id = parseInt(avatarId);
    const establishment = { avatar_id, name, email, contact, location };

    dispatch(createEstablishmentRequest(establishment));
  }

  return (
    <Container>
      <h1>Criar novo estabelecimento</h1>

      <Form onSubmit={handleSubmit}>
        <InputAvatar name="avatar_id" />
        <Input name="name" placeholder="Nome do estabelecimento" />
        <Input name="email" placeholder="E-mail para contato" />
        <Input
          name="contact"
          type="number"
          placeholder="Telefone para contato"
        />
        <Input name="location" placeholder="Bairro e cidade" />
        <button>Criar</button>
      </Form>
      <Link to="/establishments">Cancelar</Link>
    </Container>
  );
}

export default AddEstablishent;
