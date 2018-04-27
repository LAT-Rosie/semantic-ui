import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import ClockTopMenuButtons from '../components/ClockTopMenuButtons';

class DeviceClock extends Component {
  // static propTypes = {
  //   organization: PropTypes.object.isRequired,
  // };
  render() {
    const { phoneEnabled } = this.props.organization;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '100vh' }}>
        <ClockTopMenuButtons phoneEnabled={phoneEnabled} />
        <Grid centered>
          <Grid.Row>
            <div style={{ height: '8rem' }} />
          </Grid.Row>
          <Grid.Row>
            <Header className="mainClockTime" inverted>12:00</Header>
            <Header className="mainClockAMPM" inverted>AM</Header>
          </Grid.Row>
          <Grid.Row>
            <Header className="mainClockDate" textAlign="center" color="yellow" content="Monday | September 23, 2018" />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default DeviceClock;