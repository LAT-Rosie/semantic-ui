import React, { Component } from 'react';
import { Button, Icon, Header, Grid } from 'semantic-ui-react';
import ShiftActivity from '../components/ShiftActivity';
import SideButtons from '../components/SideButtons';
import FeatureButtonGrid from '../components/FeatureButtonGrid';

const styles = {
};

class CaregiverDashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Grid relaxed centered>
					<Grid.Row>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={2}>
							<SideButtons />
						</Grid.Column>
							<Grid.Column width={8} textAlign={'center'}>
								<br />
								<FeatureButtonGrid/>
							</Grid.Column>
							<Grid.Column width={5} centered>
								<Header size={'clockName'} textAlign={'center'} color={'orange'}>
									Ricardo Cervantes
								</Header>
								<Header size={'deviceDashboardTime'} textAlign={'center'}>12:00 PM | 01/01/18</Header>
								<ShiftActivity/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default CaregiverDashboard;
