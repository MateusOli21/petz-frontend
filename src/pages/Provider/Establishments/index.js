import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Cards, Content } from './styles';

function Establishments() {
  const id = 1;

  return (
    <Container>
      <h1>Estabelecimentos</h1>

      <Cards>
        <Link to="establishments/add"> Adicionar</Link>
        <Card>
          <img
            src="https://empreendedor.com.br/wp-content/uploads/2020/04/unnamed-3-2-715x390.jpg"
            alt=""
          />
          <Content>
            <h2>Petshop azul</h2>
            <span>Ipiranga,São Paulo - Sp</span>
            <div>
              <Link to={`schedule/${id}`}>Ver mais</Link>
            </div>
          </Content>
        </Card>

        <Card>
          <img
            src="https://empreendedor.com.br/wp-content/uploads/2020/04/unnamed-3-2-715x390.jpg"
            alt=""
          />
          <Content>
            <h2>Loja de ração </h2>
            <span>Ipiranga,São Paulo - Sp</span>
            <div>
              <Link to={`schedule/${id}`}>Ver mais</Link>
            </div>
          </Content>
        </Card>
      </Cards>
    </Container>
  );
}

export default Establishments;
