import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../../components/InputText';

import { Container } from './styles';

function AddEstablishent() {
  return (
    <Container>
      <h1>Criar novo estabelecimento</h1>

      <Form>
        <Input name="name" placeholder="Nome do estabelecimento" />
        <Input name="email" placeholder="E-mal para contato" />
        <Input name="contact" placeholder="Telefone para contato" />
        <Input name="location" placeholder="Bairro e cidade" />
        <button>Criar</button>
      </Form>
      <Link to="/establishments">Cancelar</Link>
    </Container>
  );
}

export default AddEstablishent;
