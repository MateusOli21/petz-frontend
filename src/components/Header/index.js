import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Wrapper, Nav, NavOption } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const { provider } = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <img src={logo} alt="logo" />

      <Nav>
        {provider ? (
          <>
            <Link to="/establishments">
              <NavOption fixed>Início</NavOption>
            </Link>

            <Link to="/services">
              <NavOption>Meus serviços</NavOption>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <NavOption fixed>Início</NavOption>
            </Link>
            <Link to="/pets">
              <NavOption>Pets</NavOption>
            </Link>
            <Link to="/petshops">
              <NavOption fixed>Petshops</NavOption>
            </Link>
            <Link to="/profile">
              <NavOption fixed>Perfil</NavOption>
            </Link>
          </>
        )}

        <button onClick={handleSignOut}>Sair</button>
      </Nav>
    </Wrapper>
  );
}
