import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdViewHeadline, MdArrowBack } from 'react-icons/md';

import api from '../../../services/api';

import { Container, Cards, Card, Content, BackPage } from './styles';

function ListEstablishments() {
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    const fetchEstablishments = async () => {
      const response = await api.get('establishments');
      setEstablishments(response.data);
    };
    fetchEstablishments();
  }, []);

  return (
    <Container>
      <h1>Petshops</h1>
      <Cards>
        {establishments.map((establishment) => (
          <Card key={establishment.profile.id}>
            <img
              src={
                establishment.profile.avatar === null
                  ? 'https://empreendedor.com.br/wp-content/uploads/2020/04/unnamed-3-2-715x390.jpg'
                  : establishment.profile.avatar.url
              }
              alt=""
            />
            <Content>
              <h2>{establishment.profile.name}</h2>
              <span>{establishment.profile.location}</span>
              <div>
                <Link to={`/establishments/${establishment.profile.id}`}>
                  <MdViewHeadline size={20} />
                </Link>
              </div>
            </Content>
          </Card>
        ))}
      </Cards>
      <BackPage>
        <Link to="/dashboard">
          <MdArrowBack size={24} />
        </Link>
      </BackPage>
    </Container>
  );
}

export default ListEstablishments;
