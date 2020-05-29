import styled from 'styled-components';
import { darken } from 'polished';

import { theme } from '../../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  padding: 0 1.5rem;

  h1 {
    font-size: 1.25rem;
    color: ${theme.primary};
  }

  a {
    width: 100%;
    max-width: 420px;
    text-align: center;
    padding: 0.75rem 0;
    border: 0;
    border-radius: 5px;
    font-weight: 700;
    background: ${theme.secondary};
    color: ${theme.white};

    &:hover {
      background: ${darken(0.1, theme.secondary)};
    }
  }

  form {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.5rem;

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
      max-width: 420px;
      padding: 0.75rem 0;
      margin: 0.65rem 0;
      border: 0;
      border-radius: 5px;
      font-weight: 700;
      background: ${theme.primary};
      color: ${theme.white};

      &:hover {
        background: ${darken(0.1, theme.primary)};
      }
    }
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
