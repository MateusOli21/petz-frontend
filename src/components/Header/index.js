import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdPowerSettingsNew } from 'react-icons/md';

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
      <Link to={profile.provider ? '/establishments' : '/dashboard'}>
        <img src={logo} alt="logo" />
      </Link>

      <Nav>
        <Link to={profile.provider ? '/establishments' : '/dashboard'}>
          <NavOption fixed>Início</NavOption>
        </Link>
        {profile.provider ? (
          <></>
        ) : (
          <>
            <Link to="/pets">
              <NavOption>Pets</NavOption>
            </Link>
            <Link to="/establishments/all">
              <NavOption fixed>Petshops</NavOption>
            </Link>
          </>
        )}

        <Profile>
          <div>
            <strong>{profile.name}</strong>

            <button onClick={handleSignOut}>
              <MdPowerSettingsNew size={16} />
            </button>
          </div>
          <Link to="/profile">
            <img
              src={
                profile.avatar === null
                  ? 'https://api.adorable.io/avatars/285/abott@adorab.png'
                  : profile.avatar.url
              }
              alt="profile"
            />
          </Link>
        </Profile>
      </Nav>
    </Wrapper>
  );
}
