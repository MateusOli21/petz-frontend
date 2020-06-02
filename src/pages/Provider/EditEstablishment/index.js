import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';

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
    const { avatar_id: avatarId, ...rest } = data;
    const avatar_id = parseInt(avatarId);
    const establishment = { id, avatar_id, ...rest };

    dispatch(updateEstablishmentRequest(establishment));
  }

  function handleDelete() {
    console.log(id);
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
      <button onClick={handleDelete}>Excluit</button>
      <Link to={`/establishments/${id}/schedule`}>Cancelar</Link>
    </Container>
  );
}

export default EditEstablishent;
