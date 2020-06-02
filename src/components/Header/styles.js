import styled from 'styled-components';

import { theme } from '../../styles/global';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: ${theme.bgHeaderAndCard};

  @media (min-width: 720px) {
    padding: 1.5rem 3rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 40px;
    margin-left: 0.5rem;
    border: 1px solid ${theme.primary};
    border-radius: 50%;
  }

  div {
    display: none;
    border-left: 1px solid #999;
    padding-left: 0.7rem;
    margin-left: 0.7rem;
    text-align: right;
    align-items: flex-end;
    flex-direction: column;

    strong {
      font-size: 0.75rem;
    }

    a {
      font-size: 0.65rem;
      margin-top: 2px;
    }

    button {
      width: 50%;
      border: 1px solid ${theme.primary};
      border-radius: 5px;
      margin-top: 4px;
      padding: 3px 0;
      background: transparent;
      font-size: 0.75rem;
      color: ${theme.primary};
      font-weight: 600;

      &:hover {
        background: ${theme.primary};
        color: ${theme.white};
      }
    }
  }

  @media (min-width: 720px) {
    img {
      margin-left: 0.8rem;
    }
    div {
      display: flex;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavOption = styled.span`
  display: ${(props) => (props.fixed ? 'inline-block' : 'none')};
  margin-left: 0.4rem;
  color: ${theme.primary};
  font-weight: 600;

  @media (min-width: 720px) {
    display: inline;
    margin-left: 0.7rem;
  }
`;
