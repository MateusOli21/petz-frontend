import styled from 'styled-components';
import { theme } from '../../../styles/global';

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
    display: flex;
    align-items: center;
    color: ${theme.secondary};
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
  gap: 1.2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 3px;
    color: ${theme.primary};
  }

  span {
    color: ${theme.black};
    margin-top: 4px;
    font-size: 0.9rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 8px;
  padding: 1.15rem 1.15rem;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};
  opacity: ${(props) => (props.past || props.canceled ? 0.6 : 1)};

  button {
    display: flex;
    align-items: center;
    background: none;
    border: 0;
    color: ${theme.red};
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0;

  a {
    color: ${theme.primary};
  }
`;
