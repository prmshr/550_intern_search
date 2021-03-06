import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class DashboardResultRow extends React.Component {

	render() {
		return (
			<div className="item">
				<div className="company">{this.props.company}</div>
				<div className="position">{this.props.position}</div>
				<div className="location">{this.props.location}</div>
				<div className="industry">{this.props.industry}</div>
			</div>
		);
	};
};
