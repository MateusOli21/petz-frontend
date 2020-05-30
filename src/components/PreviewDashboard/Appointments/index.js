import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TitleContainer,
  Content,
  Cards,
  Card,
  Footer,
} from './styles';

export default function Appointments({ isDashboard }) {
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
        <Card>
          <Content>
            <h2>Petshop Legal</h2>
            <span>29/05/2020</span>
            <span>Confirmado</span>
          </Content>
          <Link to="/appointment">Ver mais</Link>
        </Card>

        <Card past>
          <Content past>
            <h2>Petshop teste</h2>
            <span>28/05/2020</span>
            <span>Passado</span>
          </Content>
          <Link to="/appointment">Ver mais</Link>
        </Card>
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
