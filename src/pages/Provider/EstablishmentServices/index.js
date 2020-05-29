import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Cards } from './styles';

export default function EstablishmentServices() {
  const id = 1;

  return (
    <Container>
      <h1>Serviços</h1>

      <Cards>
        <Link to="/services/add"> Adicionar</Link>
        <Card>
          <div>
            <h2>Banho</h2>
            <h4>R$25,00</h4>
            <span>45 minuto</span>
          </div>
          <Link to={`services/${id}`}>Editar</Link>
        </Card>

        <Card>
          <div>
            <h2>Banho e tosa</h2>
            <h4>R$25,00</h4>
            <span>45 minuto</span>
          </div>
          <Link to={`services/${id}`}>Editar</Link>
        </Card>
      </Cards>
    </Container>
  );
}
