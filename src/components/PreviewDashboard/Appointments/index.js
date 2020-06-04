import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pt } from 'date-fns/locale';
import { format, isBefore } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import {
  MdAddBox,
  MdEventBusy,
  MdEventNote,
  MdArrowBack,
} from 'react-icons/md';
import { toast } from 'react-toastify';

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

      const data = response.data.map((appointment) => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatOfDisplay = 'Pp';

        const appointmentDateZoned = utcToZonedTime(appointment.date, timezone);

        const formattedAppointmentHour = format(
          appointmentDateZoned,
          formatOfDisplay,
          { locale: pt }
        );

        const past = isBefore(appointmentDateZoned, new Date());

        return {
          id: appointment.id,
          date: formattedAppointmentHour,
          canceled_at: appointment.canceled_at,
          past: past,
          user: appointment.user,
          pet: appointment.pet,
          service: appointment.service,
          establishment: appointment.establishment,
        };
      });

      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  if (isDashboard) {
    appointments = appointments.slice(0, 3);
  }

  async function handleCancel(e) {
    try {
      const appointmentId = e.currentTarget.value;
      await api.delete(`appointments/${appointmentId}`);
      toast.success('Agendamento cancelado com sucesso');
    } catch (err) {
      toast.error('Agendamento já cancelado.');
    }
  }

  return (
    <Container>
      <TitleContainer>
        <h1>Agendamentos</h1>

        {isDashboard ? (
          <Link to="/appointments">Ver mais</Link>
        ) : (
          <Link to="/establishments/all">
            <MdAddBox size={26} />
          </Link>
        )}
      </TitleContainer>
      <Cards>
        {appointments.map((appointment) => (
          <Card
            key={appointment.id}
            past={appointment.past}
            canceled={appointment.canceled_at}
          >
            <Content>
              <h2>{appointment.establishment.name}</h2>
              <span>Pet: {appointment.pet.name}</span>
              <span>Serviço: {appointment.service.name}</span>
              <span>
                {appointment.canceled_at ? 'Cancelado' : appointment.date}
              </span>
            </Content>
            <button
              value={appointment.id}
              onClick={handleCancel}
              disabled={appointment.past ? true : false}
            >
              {appointment.past || appointment.canceled_at ? (
                <MdEventNote size={24} />
              ) : (
                <MdEventBusy size={24} />
              )}
            </button>
          </Card>
        ))}
      </Cards>
      {isDashboard ? (
        <></>
      ) : (
        <Footer>
          <Link to="/dashboard">
            <MdArrowBack size={24} />
          </Link>
        </Footer>
      )}
    </Container>
  );
}
