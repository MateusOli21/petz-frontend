import React from 'react';

import Pets from '../../components/PreviewDashboard/Pets';
import Appointments from '../../components/PreviewDashboard/Appointments';

function Dashboard() {
  return (
    <div>
      <Pets />
      <Appointments />
    </div>
  );
}

export default Dashboard;
