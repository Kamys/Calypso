import React, {Component} from 'react'
import Api from '../../../src/api/Api'
import Introductory from "../Introductory";
import Redirect from "react-router-dom/es/Redirect";

class RouteAuthorization extends Component {

	static checkUserAuthorization() {
		let authToken = Api.getAuthToken();
		return !!authToken;
	}

	render() {
		if (RouteAuthorization.checkUserAuthorization()) {
			return (
				<div>
					{this.props.page}
				</div>
			);
		} else {
			return <Redirect to={'/Introductory'}/>;
		}

	}
}

export default RouteAuthorization;
