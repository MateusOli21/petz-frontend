import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashboardUser from '../pages/DashboardUser';
import DashboardProvider from '../pages/DashboardProvider';
import UnauthorizedPage from '../pages/Unauthorized';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/403" component={UnauthorizedPage} isPrivate />
      <Route
        path="/dashboard_user"
        component={DashboardUser}
        isPrivate
        isUser
      />
      <Route
        path="/dashboard_provider"
        component={DashboardProvider}
        isPrivate
        isProvider
      />
    </Switch>
  );
}
