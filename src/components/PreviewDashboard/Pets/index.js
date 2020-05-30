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

export default function Pets({ isDashboard }) {
  const id = 1;

  return (
    <Container>
      <TitleContainer>
        <h1>Meu pets</h1>
        {isDashboard ? (
          <Link to="/pets">Ver todos</Link>
        ) : (
          <Link to="/pets/add">Adicionar</Link>
        )}
      </TitleContainer>
      <Cards>
        <Card>
          <img
            src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
            alt=""
          />

          <Content>
            <h2>Maximus</h2>
            <ul>
              <li>macho</li>
              <li>castrado</li>
              <li>12 anos</li>
              <li>11 Kg</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              mi ultrices, finibus libero sed, ullamcorper orci. Sed laoreet
              gravida pellentesque.
            </p>
            <div>
              <Link to={`/pet/${id}`}>Ver mais</Link>
            </div>
          </Content>
        </Card>

        <Card>
          <img
            src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
            alt=""
          />

          <Content>
            <h2>Woody</h2>
            <ul>
              <li>macho</li>
              <li>castrado</li>
              <li>05 anos</li>
              <li>09 Kg</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              mi ultrices, finibus libero sed, ullamcorper orci. Sed laoreet
              gravida pellentesque.
            </p>
            <div>
              <Link to={`/pet/${id}`}>Ver mais</Link>
            </div>
          </Content>
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
