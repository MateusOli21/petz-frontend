import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Card, Cards, BackPage } from './styles';

export default function EstablishmentServices() {
  const { id } = useParams();

  return (
    <Container>
      <h1>Serviços</h1>

      <Cards>
        <Link to={`/establishments/${id}/services/add`}> Adicionar</Link>
        <Card>
          <div>
            <h2>Banho</h2>
            <h4>R$25,00</h4>
            <span>45 minuto</span>
          </div>
          <Link to={`/establishments/${id}/services/edit`}>Editar</Link>
        </Card>

        <Card>
          <div>
            <h2>Banho e tosa</h2>
            <h4>R$25,00</h4>
            <span>45 minuto</span>
          </div>
          <Link to={`/establishments/${id}/services/edit`}>Editar</Link>
        </Card>
        <BackPage>
          <Link to={`/establishments/${id}/schedule`}>Voltar</Link>
        </BackPage>
      </Cards>
    </Container>
  );
}
