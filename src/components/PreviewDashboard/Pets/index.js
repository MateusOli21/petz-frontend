import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Container,
  TitleContainer,
  Content,
  Cards,
  Card,
  Footer,
} from './styles';

export default function Pets({ isDashboard }) {
  var pets = useSelector((state) => state.pet.pets);

  if (isDashboard) {
    pets = pets.slice(0, 3);
  }

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
        {pets.map((pet) => (
          <Card key={pet.id}>
            <img
              src={
                pet.avatar === null
                  ? 'https://api.adorable.io/avatars/285/abott@adorable.png'
                  : pet.avatar.url
              }
              alt="pet"
            />

            <Content>
              <h2>{pet.name}</h2>
              <ul>
                <li>{pet.sex === 'male' ? 'Macho' : 'Fêmea'}</li>
                <li>
                  {pet.castred === true ? (
                    'Castrado'
                  ) : (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </li>
                <li>{pet.age} anos</li>
                <li>{pet.weight} Kg</li>
              </ul>
              <p>{pet.comments}</p>
              <div>
                <Link to={`/pets/edit/${pet.id}`}>Ver mais</Link>
              </div>
            </Content>
          </Card>
        ))}
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
