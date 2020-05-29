import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TitleContainer,
  ImageContainer,
  Cards,
  Card,
} from './styles';

export default function Pets() {
  return (
    <Container>
      <TitleContainer>
        <h1>Meu pets</h1>
        <Link to="/pets">Ver todos</Link>
      </TitleContainer>
      <Cards>
        <Card>
          <ImageContainer>
            <img
              src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
              alt=""
            />
          </ImageContainer>
          <TitleContainer>
            <h2>Maximus</h2>
            <span>macho</span>
          </TitleContainer>
          <button>Ver mais</button>
        </Card>

        <Card>
          <ImageContainer>
            <img
              src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
              alt=""
            />
          </ImageContainer>
          <TitleContainer>
            <h2>Maximus</h2>
            <span>macho</span>
          </TitleContainer>
          <button>Ver mais</button>
        </Card>

        <Card>
          <ImageContainer>
            <img
              src={'https://api.adorable.io/avatars/285/abott@adorable.png'}
              alt=""
            />
          </ImageContainer>
          <TitleContainer>
            <h2>Maximus</h2>
            <span>macho</span>
          </TitleContainer>
          <button>Ver mais</button>
        </Card>
      </Cards>
    </Container>
  );
}
