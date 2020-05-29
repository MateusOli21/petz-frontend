import styled from 'styled-components';

import { theme } from '../../../styles/global';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.75rem;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.75rem 0;

  h1 {
    color: ${theme.primary};
    margin-bottom: 1.25rem;
  }
`;

export const ControlDay = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: ${theme.secondary};
    margin: 0 1rem;
    font-size: 1.65rem;
  }

  button {
    border: 1px solid ${theme.secondary};
    border-radius: 5px;
    background: transparent;

    &:hover {
      background: ${theme.bgHeaderAndCard};
    }
  }
`;

export const Schedule = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.primary};
  border-radius: 5px;
  background: ${theme.bgHeaderAndCard};

  h1 {
    color: ${theme.secondary};
    border-right: 1px solid #999;
    margin-right: 0.7rem;
    padding-right: 0.7rem;
  }

  div {
    width: 100%;
    display: block;

    h2 {
      font-size: 1.25rem;
      color: ${theme.primary};
      margin-bottom: 2px;
    }

    h3 {
      font-weight: bold;
      font-size: 1rem;
    }

    span {
      font-weight: 100;
      font-size: 0.85rem;
    }
  }

  @media (min-width: 840px) {
    max-width: 360px;
  }
`;
