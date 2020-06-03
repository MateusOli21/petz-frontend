import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { isBefore, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { toast } from 'react-toastify';

import InputSelect from '../../../components/Select';
import Input from '../../../components/InputText';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  Container,
  Card,
  InfoContent,
  Content,
  AppointmentsContent,
  BackPage,
} from './styles';

function EstablishmentDetail() {
  const { establishmentId } = useParams();
  const pet = useSelector((state) => state.pet.pets);
  const user_id = useSelector((state) => state.user.profile.id);

  const [establishment, setEstablishment] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchEstablishments = async () => {
      const response = await api.get('establishments');

      const findEstablishment = response.data.find(
        (establishment) =>
          establishment.profile.id === parseInt(establishmentId)
      );

      setEstablishment(findEstablishment.profile);
      setAvatar(findEstablishment.profile.avatar);
      setServices(findEstablishment.services);
    };
    fetchEstablishments();
  }, [establishmentId]);

  const servicesOptions = services.map((service) => {
    return { value: service.id, label: service.name };
  });

  const petsOptions = pet.map((pet) => {
    return { value: pet.id, label: pet.name };
  });

  async function handleSubmit(data) {
    const { service_id, pet_id, date: dateToFormat } = data;
    const establishment_id = parseInt(establishmentId);

    const isPast = isBefore(parseISO(dateToFormat), new Date());

    if (!isPast) {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezonedDate = zonedTimeToUtc(dateToFormat, timezone);
      const date = timezonedDate;

      const appointment = {
        date,
        user_id,
        pet_id,
        establishment_id,
        service_id,
      };

      await api.post('appointments', appointment);
      toast.success('Serviço agendado com sucesso.');
      history.push('/establishments/all');
    } else {
      return toast.error('Datas passadas não podem ser agendadas.');
    }
  }

  return (
    <Container>
      <h1>{establishment.name}</h1>

      <Card>
        <InfoContent>
          <img
            src={
              avatar === null
                ? 'https://empreendedor.com.br/wp-content/uploads/2020/04/unnamed-3-2-715x390.jpg'
                : avatar.url
            }
            alt="petshop"
          />
          <Content>
            <span>{establishment.location}</span>
            <span>{establishment.email}</span>
            <span>{establishment.contact}</span>
          </Content>
        </InfoContent>
        <AppointmentsContent>
          <h2>Agende um serviço</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              name="date"
              type="datetime-local"
              placeholder="Data e hora"
            />

            <InputSelect
              name="service_id"
              options={servicesOptions}
              placeholder="Serviços disponíveis"
            />
            <InputSelect
              name="pet_id"
              options={petsOptions}
              placeholder="Escolha o pet"
            />
            <button>Confirmar</button>
          </Form>
        </AppointmentsContent>
      </Card>
      <BackPage>
        <Link to="/establishments/all">Voltar</Link>
      </BackPage>
    </Container>
  );
}

export default EstablishmentDetail;
