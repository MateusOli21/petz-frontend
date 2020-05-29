import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UnauthorizedPage from '../pages/Unauthorized';
import DashboardUser from '../pages/User/DashboardUser';
import ScheduleProvider from '../pages/Provider/ScheduleProvider';
import Establishments from '../pages/Provider/Establishments';
import EstablishmentServices from '../pages/Provider/EstablishmentServices';
import AddEstablishment from '../pages/Provider/AddEstablishent';
import AddService from '../pages/Provider/AddService';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/403" component={UnauthorizedPage} isPrivate />
      <Route path="/dashboard" component={DashboardUser} isPrivate isUser />
      <Route
        path="/schedule/:id"
        component={ScheduleProvider}
        isPrivate
        isProvider
      />
      <Route
        exact
        path="/services"
        component={EstablishmentServices}
        isPrivate
        isProvider
      />
      <Route
        exact
        path="/services/add"
        component={AddService}
        isPrivate
        isProvider
      />
      <Route
        exact
        path="/establishments"
        component={Establishments}
        isPrivate
        isProvider
      />
      <Route
        path="/establishments/add"
        component={AddEstablishment}
        isPrivate
        isProvider
      />
    </Switch>
  );
}
