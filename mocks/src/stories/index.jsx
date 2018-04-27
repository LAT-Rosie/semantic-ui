import React from 'react';
import { storiesOf } from '@storybook/react';


import '../../../semantic-ui/semantic/dist/semantic.min.css';

import CaregiverDashboard from '../layouts/CaregiverDashboard';
import DeviceClock from '../layouts/DeviceClock';
import Home from '../layouts/Home';
import NonStaffDashboard from '../layouts/NonStaffDashboard';

storiesOf('DeviceClock', module)
  .add('Phone Enabled', () => (<DeviceClock />));

storiesOf('Home', module)
  .add('All Features Enabled', () => (<Home />));

storiesOf('CaregiverDashboard', module)
  .add('Shifts Enabled', () => (<CaregiverDashboard />));

storiesOf('NonStaffDashboard', module)
  .add('All Features Enabled', () => (<NonStaffDashboard />));
