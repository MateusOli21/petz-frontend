import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MdArrowBack, MdAssignment, MdStore } from 'react-icons/md';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { pt } from 'date-fns/locale';
import {
  subDays,
  addDays,
  format,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
} from 'date-fns';

import api from '../../../services/api';

import {
  Container,
  PageTitle,
  ControlDay,
  Schedule,
  Card,
  EditSection,
  BackPage,
} from './styles';
import { theme } from '../../../styles/global';

const range = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export default function ScheduleProvider() {
  const { id } = useParams();

  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const formattedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePreviousDate() {
    setDate(subDays(date, 1));
  }

  function handleNexDate() {
    setDate(addDays(date, 1));
  }

  useEffect(() => {
    async function fetchSchedule() {
      const response = await api.get(`schedule/${id}`, {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const formatOfDisplay = 'ppp';
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);

        const formattedScheduleHour = format(checkDate, formatOfDisplay);
        const compareDate = utcToZonedTime(checkDate, timezone);

        const appointments = response.data.map((appointment) => {
          const appointmentDateZoned = zonedTimeToUtc(
            appointment.date,
            timezone
          );
          const formattedAppointmentHour = format(
            appointmentDateZoned,
            formatOfDisplay
          );

          return {
            past: appointment.past,
            cancelable: appointment.cancelable,
            id: appointment.id,
            date: formattedAppointmentHour,
            canceled_at: appointment.canceled_at,
            user: appointment.user,
            pet: appointment.pet,
            service: appointment.service,
          };
        });

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: appointments.find(
            (appointment) => appointment.date === formattedScheduleHour
          ),
        };
      });

      setSchedule(data);
    }

    fetchSchedule();
  }, [date, id]);

  return (
    <Container>
      <PageTitle>
        <h1>Minha agenda</h1>
        <ControlDay>
          <button onClick={handlePreviousDate}>
            <MdChevronLeft size={26} color={theme.secondary} />
          </button>

          <strong>{formattedDate}</strong>

          <button>
            <MdChevronRight
              size={26}
              color={theme.secondary}
              onClick={handleNexDate}
            />
          </button>
        </ControlDay>
      </PageTitle>

      <EditSection>
        <Link to={`/establishments/${id}/edit`}>
          <MdStore size={24} />
        </Link>
        <Link to={`/establishments/${id}/services`}>
          <MdAssignment size={24} />
        </Link>
      </EditSection>

      <Schedule>
        {schedule.map((hour) => (
          <Card key={hour.time} past={hour.past} available={!hour.appointment}>
            <h1>{hour.time}</h1>
            <div>
              {hour.appointment ? (
                <>
                  <h2>
                    {`
                    ${hour.appointment.service.name} com
                    ${hour.appointment.pet.name}`}
                  </h2>

                  <span>{hour.appointment.user.name}</span>
                </>
              ) : (
                <h2>Em aberto</h2>
              )}
            </div>
          </Card>
        ))}
      </Schedule>
      <BackPage>
        <Link to="/establishments">
          <MdArrowBack size={24} />
        </Link>
      </BackPage>
    </Container>
  );
}
