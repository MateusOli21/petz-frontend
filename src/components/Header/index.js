import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Wrapper, Nav, NavOption } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />

      <Nav>
        <Link to="/dashboard_user">
          <NavOption fixed>Início</NavOption>
        </Link>
        <Link to="/pets">
          <NavOption>Pets</NavOption>
        </Link>
        <Link to="/establishments">
          <NavOption fixed>Petshops</NavOption>
        </Link>
        <button>Sair</button>
      </Nav>
    </Wrapper>
  );
}
