import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TitleContainer, Content, Cards, Card } from './styles';

export default function Appointments() {
  return (
    <Container>
      <TitleContainer>
        <h1>Meu pets</h1>
        <Link to="/pets">Ver todos</Link>
      </TitleContainer>
      <Cards>
        <Card>
          <Content>
            <h2>Petshop Legal</h2>
            <span>29/05/2020</span>
            <span>Confirmado</span>
          </Content>
          <Link>Ver mais</Link>
        </Card>

        <Card past>
          <Content past>
            <h2>Petshop teste</h2>
            <span>28/05/2020</span>
            <span>Passado</span>
          </Content>
          <Link>Ver mais</Link>
        </Card>
      </Cards>
    </Container>
  );
}
