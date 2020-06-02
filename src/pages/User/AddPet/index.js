import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import { createPetsRequest } from '../../../store/modules/pet/actions';

import Input from '../../../components/InputText';
import InputAvatar from '../../../components/InputAvatar';
import Select from '../../../components/Select';

import { Container } from './styles';

function AddPet() {
  const dispatch = useDispatch();

  const sexOptions = [
    { value: 'male', label: 'Macho' },
    { value: 'female', label: 'Fêmea' },
  ];

  const castredOptions = [
    { value: true, label: 'Sim' },
    { value: false, label: 'Não' },
  ];

  function handleSubmit(data) {
    const {
      avatar_id: avatarId,
      age: ageStr,
      weight: weightStr,
      ...rest
    } = data;
    const avatar_id = parseInt(avatarId);
    const age = parseInt(ageStr);
    const weight = parseInt(weightStr);

    const pet = { avatar_id, age, weight, ...rest };

    dispatch(createPetsRequest(pet));
  }

  return (
    <Container>
      <h1>Adicione seu pet</h1>
      <Form onSubmit={handleSubmit}>
        <InputAvatar name="avatar_id" />
        <Input name="name" placeholder="Nome" />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="comments" placeholder="Comentários" />
        <Select name="sex" options={sexOptions} placeholder="Sexo" />
        <Select
          name="castred"
          options={castredOptions}
          placeholder="Castrado"
        />

        <button>Confirmar</button>
      </Form>
      <Link to="/pets">Cancelar</Link>
    </Container>
  );
}

export default AddPet;
