import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../../components/InputText';

import { Container } from './styles';

function EditEstablishent() {
  const id = 1;

  return (
    <Container>
      <h1>Editar estabelecimento</h1>

      <Form>
        <Input name="name" placeholder="Nome do estabelecimento" />
        <Input name="email" placeholder="E-mal para contato" />
        <Input name="contact" placeholder="Telefone para contato" />
        <Input name="location" placeholder="Bairro e cidade" />
        <button>Editar</button>
      </Form>
      <Link to={`/establishments/${id}/schedule`}>Cancelar</Link>
    </Container>
  );
}

export default EditEstablishent;
