import React, {Component} from 'react';
import $ from "jquery";
import TabLogin from "./TabLogin";
import TabRegistration from "./TabRegistration";

class ModalAuthorization extends Component {

	componentDidMount() {
		$('.modal').modal();
	}

	render() {
		return (
			<div id="modal-registration" className="modal">
				<div className="modal-content">
					<ul className="tabs">
						<li className="tab col s3">
							<a className="active teal-text" href={"#login-tab"}>Войти</a></li>
						<li className="tab col s3">
							<a className="teal-text" href={"#registration-tab"}>Регистрация</a>
						</li>
					</ul>
					<TabLogin/>
					<TabRegistration/>
				</div>
			</div>
		);
	}
}

export default ModalAuthorization;