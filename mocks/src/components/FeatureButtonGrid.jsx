import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';
import DashboardCard from './DashboardCard';

class FeatureButtonGrid extends Component {
  render() {
    return (
      <div>
        <Card.Group centered itemsPerRow="2" stackable>
          <DashboardCard
            icon="calendar"
            color="orange"
            header="Today"
            meta="6 Remaining Today"
          />
          <DashboardCard
            icon="users"
            color="green"
            header="People"
            meta="5 Care Circle Members"
          />
          <DashboardCard
            icon="sticky note"
            color="teal"
            header="Notes"
            meta="Last Updated Yesterday"
          />
          <DashboardCard
            icon="clock"
            color="purple"
            header="Shifts"
            meta="2 Shifts Today"
          />
          <DashboardCard
            icon="checkmark box"
            color="pink"
            header="Care Tasks"
            meta="2 Remaining Today"
          />
          <DashboardCard
            icon="pie chart"
            color="violet"
            header="Med Tracking"
            meta="1 Remaining Today"
          />
        </Card.Group>
      </div>
    );
  }
}

export default FeatureButtonGrid;
