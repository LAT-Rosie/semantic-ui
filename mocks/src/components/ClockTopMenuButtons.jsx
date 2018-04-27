import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { filter } from 'lodash';

class ClockTopMenuButtons extends Component {
  // static propTypes = {
  //   phoneEnabled: PropTypes.boolean.isRequired,
  // };
  render() {
    const buttonConfig = [
      { name: 'home', icon: 'home', color: 'teal' },
      { name: 'missedReminders', icon: 'alarm', color: 'red' },
      { name: 'mute', icon: 'volume off', color: 'grey' },
      { name: 'phone', icon: 'phone', color: 'green' },
      { name: 'login', icon: 'user', color: 'blue' },
    ];
    if (this.props.phoneEnabled !== true) {
      const modifiedButtons = filter(buttonConfig, (b) => {
        return b.name !== 'phone';
      });
      return (
        <div>
          <Menu className="clockTop" widths="four" fixed="top" fluid inverted borderless>
            {modifiedButtons.map(button => (
              <Menu.Item>
                <Button className="topMenu" icon={button.icon} color={button.color} circular/>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      );
    }
    return (
      <div>
        <Menu className="clockTop" widths="five" fixed="top" fluid inverted borderless>
          {buttonConfig.map(button => (
            <Menu.Item>
              <Button className="topMenu" icon={button.icon} color={button.color} circular/>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default ClockTopMenuButtons;
