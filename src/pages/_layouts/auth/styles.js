import styled from 'styled-components';
import { darken } from 'polished';

const theme = {
  primary: '#f05a28',
  secondary: '#31cbff',
  bgHeaderAndCard: '#f8f8f8',
  white: '#fff',
  black: '#333',
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    margin-bottom: 1.75rem;
  }

  a {
    margin-top: 0.5rem;
    color: ${theme.black};
    font-weight: 600;

    &:hover {
      color: ${theme.primary};
    }
  }

  form {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      width: 100%;
      padding: 0.75rem 0.5rem;
      margin: 0.6rem 0;
      border: 0;
      border-bottom: 1px solid ${theme.primary};
      color: ${theme.primary};

      &::placeholder {
        color: ${theme.primary};
      }
    }

    button {
      width: 100%;
      padding: 0.75rem 0;
      margin: 0.65rem 0;
      border: 0;
      border-radius: 5px;
      background: ${theme.secondary};
      color: ${theme.white};
      font-weight: 700;

      &:hover {
        background: ${darken(0.1, theme.secondary)};
      }
    }
  }
`;

export const SloganContainer = styled.div`
  display: none;
  background: ${theme.primary};

  h1 {
    color: ${theme.white};
    margin-bottom: 1.5rem;
  }

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
