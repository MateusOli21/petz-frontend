import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { pt } from 'date-fns/locale';
import { parseISO, format } from 'date-fns';
import { MdAddBox, MdEventBusy } from 'react-icons/md';

import api from '../../../services/api';

import {
  Container,
  TitleContainer,
  Content,
  Cards,
  Card,
  Footer,
} from './styles';

export default function Appointments({ isDashboard }) {
  var [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await api.get('appointments');
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  if (isDashboard) {
    appointments = appointments.slice(0, 3);
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Agendamentos</h1>

        {isDashboard ? (
          <Link to="/appointments">Ver mais</Link>
        ) : (
          <Link to="/appointments/add">
            <MdAddBox size={26} />
          </Link>
        )}
      </TitleContainer>
      <Cards>
        {appointments.map((appointment) => (
          <Card key={appointment.id}>
            <Content>
              <h2>{appointment.establishment.name}</h2>
              <span>Pet: {appointment.pet.name}</span>
              <span>Serviço: {appointment.service.name}</span>
              <span>
                {format(parseISO(appointment.date), 'Pp', { locale: pt })}
              </span>
            </Content>
            <button>
              <MdEventBusy size={24} />
            </button>
          </Card>
        ))}
      </Cards>
      {isDashboard ? (
        <></>
      ) : (
        <Footer>
          <Link to="/dashboard">Voltar</Link>
        </Footer>
      )}
    </Container>
  );
}
