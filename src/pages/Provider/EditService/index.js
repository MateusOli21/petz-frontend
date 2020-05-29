import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../../components/InputText';

import { Container } from './styles';

function EditService() {
  const id = 1;
  return (
    <Container>
      <h1>Editar serviço</h1>

      <Form>
        <Input name="name" placeholder="Nome do serviço" />
        <Input name="email" placeholder="Valor" />
        <Input name="contact" placeholder="Tempo de duração" />

        <button>Editar</button>
      </Form>
      <Link to={`/establishments/${id}/services`}>Cancelar</Link>
    </Container>
  );
}

export default EditService;
