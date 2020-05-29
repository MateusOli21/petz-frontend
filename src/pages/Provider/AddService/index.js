import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../../components/InputText';

import { Container } from './styles';

function AddService() {
  return (
    <Container>
      <h1>Criar novo serviço</h1>

      <Form>
        <Input name="name" placeholder="Nome do serviço" />
        <Input name="email" placeholder="Valor" />
        <Input name="contact" placeholder="Tempo de duração" />

        <button>Criar</button>
      </Form>
      <Link to="/services">Cancelar</Link>
    </Container>
  );
}

export default AddService;
