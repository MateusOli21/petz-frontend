import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isUser,
  isProvider,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const { provider } = store.getState().user.profile;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate && !provider) {
    return <Redirect to="/dashboard" />;
  }

  if (signed && !isPrivate && provider) {
    return <Redirect to="/establishments" />;
  }

  if (provider && isUser) {
    return <Redirect to="/403" />;
  }

  if (!provider && isProvider) {
    return <Redirect to="/403" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
