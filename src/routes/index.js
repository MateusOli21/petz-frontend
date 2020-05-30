import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UnauthorizedPage from '../pages/Unauthorized';
import ScheduleProvider from '../pages/Provider/ScheduleProvider';
import Establishments from '../pages/Provider/Establishments';
import EstablishmentServices from '../pages/Provider/EstablishmentServices';
import AddEstablishment from '../pages/Provider/AddEstablishent';
import AddService from '../pages/Provider/AddService';
import EditEstablishment from '../pages/Provider/EditEstablishment';
import EditService from '../pages/Provider/EditService';

import DashboardUser from '../pages/User/DashboardUser';
import Pets from '../pages/User/Pets';
import Appointments from '../pages/User/Appointments';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/403" component={UnauthorizedPage} isPrivate />
      <Route path="/dashboard" component={DashboardUser} isPrivate isUser />

      <Route exact path="/pets" component={Pets} isPrivate isUser />
      <Route
        exact
        path="/appointments"
        component={Appointments}
        isPrivate
        isUser
      />

      <Route
        exact
        path="/establishments/:id/services"
        component={EstablishmentServices}
        isPrivate
        isProvider
      />
      <Route
        exact
        path="/establishments/:id/services/add"
        component={AddService}
        isPrivate
        isProvider
      />
      <Route
        exact
        path="/establishments/:id/services/edit"
        component={EditService}
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
        exact
        path="/establishments/add"
        component={AddEstablishment}
        isPrivate
        isProvider
      />
      <Route
        path="/establishments/:id/edit"
        component={EditEstablishment}
        isPrivate
        isProvider
      />

      <Route
        path="/establishments/:id/schedule"
        component={ScheduleProvider}
        isPrivate
        isProvider
      />
    </Switch>
  );
}
