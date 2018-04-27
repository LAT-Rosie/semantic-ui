import React, { Component } from 'react';
import { Button, Icon, Header, Grid } from 'semantic-ui-react';
import SideButtons from '../components/SideButtons';
import FeatureButtonGrid from '../components/FeatureButtonGrid';
import WeatherWidget from '../components/WeatherWidget';
import SettingsModal from '../components/SettingsModal';


class NonStaffDashboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className="dashDash">
        <Grid relaxed centered>
          <Grid.Row>
            <SettingsModal />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <SideButtons />
            </Grid.Column>
            <Grid.Column width={8} textAlign="center">
              <br />
              <FeatureButtonGrid />
            </Grid.Column>
            <Grid.Column width={5} centered>
              <Header size="clockName" textAlign="center" color="orange" content="Jane Carver" />
              <Header size="deviceDashboardTime" textAlign="center">12:00 PM | 01/01/18</Header>
              <WeatherWidget />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row />
        </Grid>
      </div>
    );
  }
}

export default NonStaffDashboard;
