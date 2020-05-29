import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Wrapper, Nav, NavOption } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
        <button onClick={handleSignOut}>Sair</button>
      </Nav>
    </Wrapper>
  );
}
