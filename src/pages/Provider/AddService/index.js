import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { createServiceRequest } from '../../../store/modules/service/actions';

import Input from '../../../components/InputText';

import { Container } from './styles';

function AddService() {
  const { establishmentId } = useParams();
  const dispatch = useDispatch();

  function handleSubmit(data) {
    const { value: valueStr, time: timeStr, name } = data;

    if (name === '' || valueStr === '' || timeStr === '') {
      return toast.error('Todos os campos devem ser preenchidos.');
    }

    const value = parseInt(valueStr);
    const time = parseInt(timeStr);

    dispatch(createServiceRequest({ establishmentId, name, value, time }));
  }

  return (
    <Container>
      <h1>Criar novo serviço</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do serviço" />
        <Input name="value" type="number" placeholder="Valor" />
        <Input
          name="time"
          type="number"
          placeholder="Tempo de duração em minutos"
        />

        <button>Criar</button>
      </Form>
      <Link to={`/establishments/${establishmentId}/services`}>Cancelar</Link>
    </Container>
  );
}

export default AddService;
