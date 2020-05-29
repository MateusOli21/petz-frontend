import styled from 'styled-components';
import { theme } from '../../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1.5rem;

  h1 {
    color: ${theme.primary};
  }
`;

export const Cards = styled.div`
  min-width: 350px;
  margin: 1.75rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  a {
    font-size: 0.8rem;
    color: ${theme.secondary};
    border: 1px solid ${theme.secondary};
    border-radius: 5px;
    padding: 5px 8px;

    &:hover {
      color: ${theme.white};
      background: ${theme.secondary};
    }
  }

  @media (min-width: 720px) {
    min-width: 420px;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.75rem 0;
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};

  div {
    display: flex;
    flex-direction: column;

    h2 {
      color: ${theme.primary};
      margin-bottom: 2px;
    }

    span {
      margin: 2px 0;
    }
  }

  @media (min-width: 720px) {
  }
`;
