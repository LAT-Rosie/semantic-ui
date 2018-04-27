import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Header, Icon } from 'semantic-ui-react';

export default class DashboardCard extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Card raised fluid>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', padding: '1.2rem' }}>
          <Icon name={this.props.icon} color={this.props.color} size="huge" />
        </div>
        <Card.Content>
          <div style={{ padding: '1.2rem' }}>
            <Card.Header textAlign="center">
              <Header className="dashboardCard">
                {this.props.header}
              </Header>
            </Card.Header>
            <Card.Description textAlign="center">
              <div style={{ fontSize: '1.5rem' }}>
                {this.props.meta}
              </div>
            </Card.Description>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
