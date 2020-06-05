import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  updateEstablishmentRequest,
  deleteEstablishmentRequest,
} from '../../../store/modules/establishment/actions';

import Input from '../../../components/InputText';
import InputAvatar from '../../../components/InputAvatar';

import { Container } from './styles';

function EditEstablishent() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const establishments = useSelector(
    (state) => state.establishment.establishments
  );

  const establishmentInfo = establishments.find(
    (establishment) => establishment.id === parseInt(id)
  );

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
    const establishment = { id, avatar_id, name, email, contact, location };

    dispatch(updateEstablishmentRequest(establishment));
  }

  function handleDelete() {
    dispatch(deleteEstablishmentRequest(parseInt(id)));
  }

  return (
    <Container>
      <h1>Editar estabelecimento</h1>

      <Form initialData={establishmentInfo} onSubmit={handleSubmit}>
        <InputAvatar name="avatar_id" />
        <Input name="name" placeholder="Nome do estabelecimento" />
        <Input name="email" placeholder="E-mal para contato" />
        <Input name="contact" placeholder="Telefone para contato" />
        <Input name="location" placeholder="Bairro e cidade" />
        <button>Editar</button>
      </Form>
      <button onClick={handleDelete}>Excluir</button>
      <Link to={`/establishments/${id}/schedule`}>
        <MdArrowBack size={24} />
      </Link>
    </Container>
  );
}

export default EditEstablishent;
