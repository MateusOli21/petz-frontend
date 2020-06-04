import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdNotInterested } from 'react-icons/md';
import { pt } from 'date-fns/locale';
import { parseISO, format } from 'date-fns';

import api from '../../../services/api';

import {
  Container,
  TitleContainer,
  Content,
  Cards,
  Card,
  Footer,
} from './styles';
import { theme } from '../../../styles/global';

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
    appointments = appointments.slice(0, 2);
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Agendamentos</h1>

        {isDashboard ? (
          <Link to="/appointments">Ver todos</Link>
        ) : (
          <Link to="/appointments/add">Adicionar</Link>
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
              <MdNotInterested size={22} color={theme.red} />
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
