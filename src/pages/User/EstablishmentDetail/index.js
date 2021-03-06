import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { isBefore, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { toast } from 'react-toastify';
import { MdEmail, MdPhone, MdLocationOn, MdArrowBack } from 'react-icons/md';

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
import { theme } from '../../../styles/global';

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

    if (!dateToFormat) {
      return toast.error('Escolha um dia e horário.');
    }

    const isPast = isBefore(parseISO(dateToFormat), new Date());
    if (isPast) {
      return toast.error('Datas passadas não podem ser agendadas.');
    }

    if (!service_id) {
      return toast.error('Escolha um serviço.');
    }

    if (!pet_id) {
      return toast.error('Escolha um pet.');
    }

    try {
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
    } catch (err) {
      toast.error('Este horário não está disponível');
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
            <span>
              <MdLocationOn
                size={16}
                style={{ marginRight: '8px', color: theme.primary }}
              />
              {establishment.location}
            </span>
            <span>
              <MdEmail
                size={16}
                style={{ marginRight: '8px', color: theme.primary }}
              />
              {establishment.email}
            </span>
            <span>
              <MdPhone
                size={16}
                style={{ marginRight: '8px', color: theme.primary }}
              />{' '}
              {establishment.contact}
            </span>
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
        <Link to="/establishments/all">
          <MdArrowBack size={24} />
        </Link>
      </BackPage>
    </Container>
  );
}

export default EstablishmentDetail;
