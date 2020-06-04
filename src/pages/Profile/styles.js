import styled from 'styled-components';
import { darken } from 'polished';

import { theme } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 4rem;

  h1 {
    margin: 2rem 0;
    font-size: 1.5rem;
    color: ${theme.primary};
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

  a {
    width: 100%;
    max-width: 420px;
    padding: 0.75rem 0;
    border: 0;
    text-align: center;
    border-radius: 5px;
    background: ${theme.primary};
    color: ${theme.white};
    font-weight: 700;

    &:hover {
      background: ${darken(0.05, theme.primary)};
    }
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
