import React, {Component} from 'react';
import $ from "jquery";
import TabLogin from "./TabLogin";
import TabRegistration from "./TabRegistration";
import './ModalWindowAuthorization.css'

class ModalAuthorization extends Component {

	constructor(props) {
		super(props);

		this.state = {
			modalRegistration: () =>{},
		}
	}

	componentDidMount() {
		$('.modal').modal();
	}

	closeModalRegistration = () => {
		$(this.state.modalRegistration).modal('close');
	};

	render() {
		return (
			<div ref={(modalRegistration) => {
				this.state.modalRegistration = modalRegistration
			}} id="modal-registration" className="modal">
				<div className="modal-content">
					<ul className="tabs">
						<li className="tab col s3">
							<a className="active teal-text" href={"#login-tab"}>Войти</a></li>
						<li className="tab col s3">
							<a className="teal-text" href={"#registration-tab"}>Регистрация</a>
						</li>
					</ul>
					<TabLogin/>
					<TabRegistration closeModalRegistration={this.closeModalRegistration}/>
				</div>
			</div>
		);
	}
}

export default ModalAuthorization;