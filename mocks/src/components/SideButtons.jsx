import React from 'react';
import { Button } from 'semantic-ui-react';

const SideButtons = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '.7rem' }}>
      <Button className="sideMenu" icon="time" color="blue" circular />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '.7rem' }}>
      <Button className="sideMenu" icon="alarm" color="red" circular />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '.7rem' }}>
      <Button className="sideMenu" icon="phone" color="green" circular />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '.7rem' }}>
      <Button className="sideMenu" icon="user" color="teal" circular />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '.7rem' }}>
      <Button className="sideMenu" icon="help" color="yellow" circular />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '.7rem' }}>
      <Button className="sideMenu" icon="settings" circular />
    </div>
  </div>
);

export default SideButtons;
