import React from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../../components/InputText';

import { Container } from './styles';

function AddAppointment() {
  return (
    <Container>
      <h1>Agende um serviço</h1>
      <Form>
        <Input name="date" placeholder="Data" />
        <Input name="pet_id" placeholder="Id animal" />
        <Input name="establishment_id" placeholder="Id petshop" />
        <Input name="service_id" placeholder="Id serviço" />

        <button>Confirmar</button>
      </Form>
      <Link to="/appointments">Cancelar</Link>
    </Container>
  );
}

export default AddAppointment;
