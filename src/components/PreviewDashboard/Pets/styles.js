import styled from 'styled-components';
import { theme } from '../../../styles/global';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 1.5rem 0;

  @media (min-width: 720px) {
    padding: 0 2.75rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0.5rem;
  color: ${theme.primary};

  span {
    color: ${theme.black};
  }

  a {
    border: 1px solid ${theme.secondary};
    border-radius: 5px;
    padding: 5px 8px;

    font-weight: 600;
    color: ${theme.secondary};

    &:hover {
      color: ${theme.white};
      background: ${darken(0.08, theme.secondary)};
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 150px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (min-width: 720px) {
    display: flex;
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 1.15rem 1.15rem;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};

  button {
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 0;
    font-weight: 600;
    background: ${theme.secondary};
    color: ${theme.white};

    &:hover {
      background: ${darken(0.08, theme.secondary)};
    }
  }

  @media (min-width: 840px) {
    max-width: 360px;
    margin: 0 0.5rem;
  }
`;
