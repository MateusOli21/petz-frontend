import styled from 'styled-components';
import { theme } from '../../../styles/global';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  margin: 1.5rem 0;

  @media (min-width: 720px) {
    padding: 0 2.75rem;
    margin-bottom: 3.5rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0.5rem;
  color: ${theme.primary};

  h1 {
    font-size: 1.5rem;
  }

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

  @media (min-width: 720px) {
    h1 {
      font-size: 2rem;
    }
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${(props) =>
      props.past ? lighten(0.2, theme.primary) : theme.primary};
  }

  span {
    color: ${(props) => (props.past ? theme.blackOpaque : theme.black)};
    margin-top: 4px;
    font-weight: 300;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 8px;
  padding: 1.15rem 1.15rem;
  border: 1px solid
    ${(props) => (props.past ? lighten(0.2, theme.primary) : theme.primary)};
  background: ${(props) =>
    props.past ? theme.bgOpague : theme.bgHeaderAndCard};

  button {
    border: 1px solid ${theme.primary};
    border-radius: 5px;
    padding: 4px 8px;
    font-weight: 600;
    background: ${(props) =>
      props.past ? lighten(0.2, theme.primary) : theme.primary};
    color: ${(props) => (props.past ? darken(0.2, theme.white) : theme.white)};

    &:hover {
      background: ${(props) =>
        props.past ? lighten(0.2, theme.primary) : darken(0.05, theme.primary)};
    }
  }

  @media (min-width: 840px) {
    max-width: 360px;
    margin: 0 0.5rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0;

  a {
    font-weight: 600;
    color: ${(props) =>
      props.past ? lighten(0.2, theme.secondary) : theme.secondary};

    &:hover {
      color: ${darken(0.05, theme.secondary)};
    }
  }
`;
