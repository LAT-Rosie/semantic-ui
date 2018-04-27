import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Popup, Button, Header, Image, Modal } from 'semantic-ui-react'

class SettingsModal extends Component {
  constructor(props) {
    super(props);
  }
  state = { open: true };
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    return (
      <Modal dimmer="blurring" open={open} onClose={this.close} size="fullscreen" closeIcon style={{marginTop: '0rem'}}>
        <Modal.Header>Device Settings</Modal.Header>
        <Modal.Content image>
          <Button content="Network Settings"/>
        </Modal.Content>
      </Modal>
    )
  }
}

export default SettingsModal;