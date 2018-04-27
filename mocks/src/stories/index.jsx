import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../../semantic-ui/semantic/dist/semantic.min.css';

import CaregiverDashboard from '../layouts/CaregiverDashboard';
import DeviceClock from '../layouts/DeviceClock';
import Home from '../layouts/Home';
import NonStaffDashboard from '../layouts/NonStaffDashboard';
import { organization1, organization2 } from './testData';

storiesOf('DeviceClock', module)
  .add('Phone Enabled', () => (<DeviceClock organization={organization1} />))
  .add('Phone Disabled', () => (<DeviceClock organization={organization2} />));

storiesOf('Home', module)
  .add('All Features Enabled', () => (<Home />));

storiesOf('CaregiverDashboard', module)
  .add('Shifts Enabled', () => (<CaregiverDashboard />));

storiesOf('NonStaffDashboard', module)
  .add('All Features Enabled', () => (<NonStaffDashboard />));
