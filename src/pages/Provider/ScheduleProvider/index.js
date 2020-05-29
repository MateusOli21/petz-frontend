import React from 'react';
import { Link } from 'react-router-dom';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  Container,
  PageTitle,
  ControlDay,
  Schedule,
  Card,
  EditSection,
} from './styles';
import { theme } from '../../../styles/global';

export default function index() {
  return (
    <Container>
      <PageTitle>
        <h1>Minha agenda</h1>
        <ControlDay>
          <button>
            <MdChevronLeft size={26} color={theme.secondary} />
          </button>

          <strong>28/05</strong>

          <button>
            <MdChevronRight size={26} color={theme.secondary} />
          </button>
        </ControlDay>
      </PageTitle>

      <EditSection>
        <Link to="/establishments/edit">Ver loja</Link>
        <Link to="/services">Ver serviços</Link>
      </EditSection>

      <Schedule>
        <Card>
          <h1>09h00</h1>
          <div>
            <h2>Woody</h2>
            <h3>Banho</h3>
            <span>Mateus Oliveira</span>
          </div>
        </Card>

        <Card>
          <h1>10h00</h1>
          <div>
            <h2>Horario livre</h2>
          </div>
        </Card>

        <Card>
          <h1>11h00</h1>
          <div>
            <h2>Horario livre</h2>
          </div>
        </Card>

        <Card>
          <h1>12h00</h1>
          <div>
            <h2>Maximus</h2>
            <h3>Vacina</h3>
            <span>João Oliveira</span>
          </div>
        </Card>
      </Schedule>
    </Container>
  );
}
