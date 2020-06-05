import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { MdArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

import {
  updateServiceRequest,
  deleteServiceRequest,
} from '../../../store/modules/service/actions';

import Input from '../../../components/InputText';

import { Container } from './styles';

function EditService() {
  const dispatch = useDispatch();
  const { establishmentId, serviceId } = useParams();
  const services = useSelector((state) => state.service.services);

  const service = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  function handleSubmit(data) {
    const { value: valueStr, time: timeStr, name } = data;

    if (name === '' || valueStr === '' || timeStr === '') {
      return toast.error('Todos os campos devem ser preenchidos.');
    }

    const value = parseInt(valueStr);
    const time = parseInt(timeStr);
    dispatch(
      updateServiceRequest({ establishmentId, serviceId, name, value, time })
    );
  }

  function handleDelete() {
    dispatch(deleteServiceRequest({ serviceId, establishmentId }));
  }

  return (
    <Container>
      <h1>Editar serviço</h1>

      <Form initialData={service} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome do serviço" />
        <Input name="value" type="number" placeholder="Valor" />
        <Input name="time" type="number" placeholder="Tempo de duração" />

        <button>Editar</button>
      </Form>
      <button onClick={handleDelete}>Excluir</button>
      <Link to={`/establishments/${establishmentId}/services`}>
        <MdArrowBack size={24} />
      </Link>
    </Container>
  );
}

export default EditService;
