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

export const BackPage = styled.div`
  width: 100%;
  max-width: 420px;
  text-align: right;
  a {
    margin-top: 1rem;
    color: ${theme.primary};
    font-weight: 700;
  }
`;

export const Cards = styled.div`
  width: 100%;
  max-width: 420px;
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};

  img {
    max-width: 150px;
    margin-right: 0.75rem;
    padding-right: 0.75rem;
    border-right: 1px solid #999;
  }

  @media (min-width: 720px) {
    img {
      max-width: 190px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${theme.primary};
    font-size: 1.2rem;
    margin-bottom: 3px;
  }

  span {
    font-size: 0.65rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    a {
      font-size: 0.8rem;
      color: ${theme.secondary};
    }
  }
`;
