import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdAddBox, MdViewHeadline } from 'react-icons/md';

import { Container, Card, Cards, Content } from './styles';

function Establishments() {
  const establishments = useSelector(
    (state) => state.establishment.establishments
  );

  return (
    <Container>
      <h1>Estabelecimentos</h1>

      <Cards>
        <Link to="/establishments/create/one">
          <MdAddBox size={24} />
        </Link>

        {establishments.map((establishment) => (
          <Card key={establishment.id}>
            <img
              src={
                establishment.avatar === null
                  ? 'https://empreendedor.com.br/wp-content/uploads/2020/04/unnamed-3-2-715x390.jpg'
                  : establishment.avatar.url
              }
              alt=""
            />
            <Content>
              <h2>{establishment.name}</h2>
              <span>{establishment.location}</span>
              <div>
                <Link to={`establishments/${establishment.id}/schedule`}>
                  <MdViewHeadline size={20} />
                </Link>
              </div>
            </Content>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}

export default Establishments;
