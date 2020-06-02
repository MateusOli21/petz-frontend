import React from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../../components/InputText';

import { Container } from './styles';

export default function EditPet() {
  return (
    <Container>
      <h1>Edite seu pet</h1>
      <Form>
        <Input name="name" placeholder="Nome" />
        <Input name="age" placeholder="Idade" />
        <Input name="sex" placeholder="Sexo" />
        <Input name="weight" placeholder="Peso" />
        <Input name="castred" placeholder="Castrado" />
        <Input name="comments" placeholder="Comentários" />

        <button>Confirmar</button>
      </Form>
      <Link to="/pets">Cancelar</Link>
    </Container>
  );
}
