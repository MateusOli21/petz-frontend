import styled from 'styled-components';

import { theme } from '../../../styles/global';

export const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;

  @media (min-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.75rem;
  }
`;

export const PageTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.75rem 0;

  h1 {
    color: ${theme.primary};
    margin-bottom: 1.25rem;
  }
`;

export const EditSection = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    padding: 4px 8px;
    color: ${theme.secondary};
  }
`;

export const ControlDay = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: ${theme.secondary};
    margin: 0 1rem;
    font-size: 1.65rem;
  }

  button {
    border: 1px solid ${theme.secondary};
    border-radius: 5px;
    background: transparent;

    &:hover {
      background: ${theme.bgHeaderAndCard};
    }
  }
`;

export const Schedule = styled.div`
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid ${theme.primary};
  background: ${theme.bgHeaderAndCard};
  opacity: ${(props) => (props.past ? 0.5 : 1)};

  h1 {
    color: ${theme.secondary};
    border-right: 1px solid #999;
    font-size: 1.25rem;
    margin-right: 0.7rem;
    padding-right: 0.7rem;
  }

  div {
    width: 100%;
    display: block;

    h2 {
      font-size: 1rem;
      color: ${theme.primary};
    }

    span {
      font-weight: 100;
      font-size: 0.85rem;
    }
  }

  @media (min-width: 840px) {
    max-width: 360px;
  }
`;

export const BackPage = styled.div`
  width: 100%;
  max-width: 580px;
  text-align: end;
  margin: 1rem 0 3rem;

  a {
    font-size: 1rem;
    border: none;
    font-weight: 700;
    color: ${theme.primary};
    margin-right: 4px;
  }
`;
