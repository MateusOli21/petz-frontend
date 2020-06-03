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

export const Card = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 1rem 1rem;
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 5px;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};

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
`;

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  padding: 12px 0;

  img {
    max-width: 150px;
    margin-right: 1.15rem;
    padding-right: 1.15rem;
    border-right: 1px solid #999;
  }

  @media (min-width: 720px) {
    img {
      max-width: 220px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${theme.primary};
    margin-bottom: 3px;
  }

  span {
    font-size: 0.75rem;
    margin-bottom: 3px;
  }
  @media (min-width: 720px) {
    span {
      font-size: 1rem;
      margin-bottom: 8px;
    }
  }
`;

export const AppointmentsContent = styled.div`
  width: 100%;

  h2 {
    color: ${theme.secondary};
    border-bottom: 1px solid #999;
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
  }

  form {
    input {
      width: 100%;
      padding: 0.4rem 0.8rem;
      margin: 0.25rem 0;
      border: 0;
      border-bottom: 1px solid ${theme.primary};
      color: ${theme.primary};
      background: ${theme.bgHeaderAndCard};

      &::placeholder {
        color: ${theme.primary};
      }
    }
  }

  button {
    width: 100%;
    padding: 0.5rem 0;
    border: 0;
    border-radius: 5px;
    color: ${theme.white};
    background: ${theme.secondary};
    font-weight: 700;
  }
`;

export const BackPage = styled.div`
  width: 100%;
  max-width: 420px;
  text-align: right;
  margin-top: 1.2rem;

  a {
    color: ${theme.primary};
    font-weight: 700;
  }
`;
