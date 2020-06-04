import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdAddBox, MdModeEdit, MdArrowBack } from 'react-icons/md';

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
          <Link to="/pets">Ver mais</Link>
        ) : (
          <Link to="/pets/add">
            <MdAddBox size={26} />
          </Link>
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
                <Link to={`/pets/edit/${pet.id}`}>
                  <MdModeEdit size={20} />
                </Link>
              </div>
            </Content>
          </Card>
        ))}
      </Cards>
      {isDashboard ? (
        <></>
      ) : (
        <Footer>
          <Link to="/dashboard">
            <MdArrowBack size={24} />
          </Link>
        </Footer>
      )}
    </Container>
  );
}
