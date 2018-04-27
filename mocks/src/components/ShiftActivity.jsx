import React from 'react';
import { Button, Card, Divider, Feed, Grid, Header, Icon } from 'semantic-ui-react';

const alert = (input) => {
  window.alert('Event clicked!');
};


const ShiftActivity = () => (
  <Grid padded relaxed centered>
    <Grid.Column>
      <Button primary fluid size="addItem" compact>Add New Shift</Button>
      <Feed size="clock">
        <Feed.Event onClick={alert}>
          <Feed.Label>
            <Icon name="clock" color="yellow" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date>Ends in 45m</Feed.Date>
            <Feed.Summary>Shift In Progress</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Divider />
        <Feed.Event onClick={alert}>
          <Feed.Label>
            <Icon name="calendar" color="green" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date>Reminder in 1hr</Feed.Date>
            <Feed.Summary>Dinner @ 5:15 PM</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Divider />
        <Feed.Event onClick={alert}>
          <Feed.Label>
						<Icon name="pie chart" color="green" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date>Reminder in about 3hrs</Feed.Date>
            <Feed.Summary>Evening Pill Pack @ 8 PM</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Divider />
        <Feed.Event onClick={alert}>
          <Feed.Label>
            <Icon name="clock" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date>Starts Tomorrow 1/2/18</Feed.Date>
            <Feed.Summary>Shift Scheduled<br /> 8 AM-5 PM</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Divider />
        <Feed.Event onClick={alert}>
          <Feed.Label>
            <Icon name="clock" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Date>Wednesday 1/3/18</Feed.Date>
            <Feed.Summary>Shift Scheduled<br /> 8 AM-5 PM</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Grid.Column>
  </Grid>
);

export default ShiftActivity;
