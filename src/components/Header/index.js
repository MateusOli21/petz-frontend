import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Wrapper, Nav, NavOption, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper>
      <Link to="/dashboard">
        <img src={logo} alt="logo" />
      </Link>

      <Nav>
        {profile.provider ? (
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
          </>
        )}

        <Profile>
          <div>
            <strong>{profile.name}</strong>

            <button onClick={handleSignOut}>Sair</button>
          </div>
          <Link to="/profile">
            <img src={profile.avatar.url} alt="profile" />
          </Link>
        </Profile>
      </Nav>
    </Wrapper>
  );
}
