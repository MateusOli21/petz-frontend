import styled from 'styled-components';

import { theme } from '../../styles/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: ${theme.bgHeaderAndCard};

  @media (min-width: 720px) {
    padding: 1.5rem 3rem;
  }
`;

export const Nav = styled.nav`
  button {
    border: 1px solid ${theme.primary};
    border-radius: 5px;
    background: transparent;
    padding: 5px 12px;
    color: ${theme.primary};
    font-weight: 600;

    &:hover {
      background: ${theme.primary};
      color: ${theme.white};
    }
  }
`;

export const NavOption = styled.span`
  display: ${(props) => (props.fixed ? 'inline-block' : 'none')};
  margin-right: 0.5rem;
  color: ${theme.primary};
  font-weight: 600;

  @media (min-width: 720px) {
    display: inline;
    margin: 0 0.75rem;
  }
`;
