import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import { Link, useParams } from 'react-router-dom';

import {
  updatePetRequest,
  deletePetRequest,
} from '../../../store/modules/pet/actions';

import Input from '../../../components/InputText';
import InputAvatar from '../../../components/InputAvatar';
import Select from '../../../components/Select';

import { Container } from './styles';

export default function EditPet() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const sexOptions = [
    { value: 'male', label: 'Macho' },
    { value: 'female', label: 'Fêmea' },
  ];

  const castredOptions = [
    { value: true, label: 'Sim' },
    { value: false, label: 'Não' },
  ];

  const pets = useSelector((state) => state.pet.pets);
  const pet = pets.find((pet) => pet.id === parseInt(id));

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
    const petId = parseInt(id);
    const petEdited = { petId, avatar_id, age, weight, ...rest };

    dispatch(updatePetRequest(petEdited));
  }

  function handleDelete() {
    dispatch(deletePetRequest(id));
  }

  return (
    <Container>
      <h1>Edite seu pet</h1>

      <Form initialData={pet} onSubmit={handleSubmit}>
        <InputAvatar name="avatar_id" />
        <Input name="name" placeholder="Nome" />
        <Input name="age" placeholder="Idade" />
        <Input name="weight" placeholder="Peso" />
        <Input name="comments" placeholder="Comentários" />
        <Select
          name="castred"
          options={castredOptions}
          placeholder="Castrado"
        />
        <Select name="sex" options={sexOptions} placeholder="Sexo" />

        <button type="submit">Confirmar</button>
      </Form>
      <button onClick={handleDelete}>Excluir</button>
      <Link to="/pets">Cancelar</Link>
    </Container>
  );
}
