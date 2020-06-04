import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdModeEdit, MdAddBox, MdArrowBack } from 'react-icons/md';

import { priceFormatter } from '../../../utils/priceFormatter';

import { Container, Card, Cards, BackPage } from './styles';

export default function EstablishmentServices() {
  const { id } = useParams();
  const allServices = useSelector((state) => state.service.services);

  const establishmentServices = allServices.filter(
    (service) => service.establishment_id === parseInt(id)
  );

  return (
    <Container>
      <h1>Serviços</h1>

      <Cards>
        <Link to={`/establishments/${id}/services/add`}>
          <MdAddBox size={24} />
        </Link>

        {establishmentServices.map((service) => (
          <Card key={service.id}>
            <div>
              <h2>{service.name}</h2>
              <h4>{priceFormatter.format(service.value)}</h4>
              <span>{service.time} minutos</span>
            </div>
            <Link
              to={`/establishments/${service.establishment_id}/services/${service.id}/edit`}
            >
              <MdModeEdit size={18} />
            </Link>
          </Card>
        ))}

        <BackPage>
          <Link to={`/establishments/${id}/schedule`}>
            <MdArrowBack size={24} />
          </Link>
        </BackPage>
      </Cards>
    </Container>
  );
}
