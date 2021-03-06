import styled from 'styled-components';
import { theme } from '../../../styles/global';

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
    display: flex;
    align-items: center;
    color: ${theme.secondary};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    color: ${theme.primary};
    text-transform: uppercase;
  }

  p {
    font-size: 0.8rem;
    margin: 3px 0;
  }

  ul {
    display: flex;
    margin: 0.3rem 0;

    li {
      font-size: 0.8rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15%;
      padding: 3px 0;
    }
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (min-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 1.15rem 1.15rem;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};

  img {
    display: none;
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #999;
  }

  a {
    width: 100%;
    border: 0;
    color: ${theme.secondary};
  }

  @media (min-width: 860px) {
    max-width: 520px;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;

    img {
      display: inline;
      max-width: 140px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0;

  a {
    font-weight: 600;
    color: ${theme.primary};
  }
`;
