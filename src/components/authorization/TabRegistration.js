import React, {Component} from 'react';
import $ from "jquery";
import "jquery-validation";
import Api from "../../api/Api";
import * as Materialize from "materialize-css";
import InputData from "./InputData";
import Link from "react-router-dom/es/Link";

/**
 * Use for registration user;
 */
class TabRegistration extends Component {

	constructor(props) {
		super(props);
		this.onRegistration = this.onRegistration.bind(this);
		this.state = {
			fullName: "",
			login: "",
			password: "",
			rePassword: "",
			isRegistrationComplete: false,
			isLoading: false,
		};
	}

	onRegistration = () => {
		const {fullName, login, password} = this.state;
		let registration = Api.registration(fullName, login, password);
		registration.then(
			result => {
				this.setState({isRegistrationComplete: true, isLoading: false});
				result.map((messages) => {
					Materialize.toast(messages, 3000, 'green');
				});
			},
			error => {
				error.map((messages) => {
					Materialize.toast(messages, 5000, 'red');
				});
				this.setState({isLoading: false});
			}
		);
		this.setState({isLoading: true});
	};

	registrationTabContent = () => {
		if (this.state.isLoading) {
			return (
				<div className="container center">
					<div className="row center-align">
						<div className='col s12'>
							<h3 className='header teal-text'>Регистрация...</h3>
						</div>
						<div className='col s12'>
							<div className="progress">
								<div className="indeterminate"/>
							</div>
						</div>
					</div>
				</div>
			)
		} else if (this.state.isRegistrationComplete) {
			return (
				<div className="container center">
					<div className="row">
						<div className="col s12">
							<h5 className='header teal-text'>Регистрация завершена!</h5>
						</div>
						<div className="col s12">
							<a onClick={() =>{
								this.props.closeModalRegistration();
								this.props.history.push("/");
							}}
							   className="waves-effect waves-light btn-large">Продолжить</a>
						</div>
					</div>
				</div>
			)
		} else {
			return (<form id="registration-form" ref={instance => this.validation(instance)}
						  className="col s12 egistration-tab__form">
				<div className="row">
					<div className="input-field col s6">
						<InputData value={this.state.fullName} onChangeValue={value => this.setState({fullName: value})}
								   id="registration-tab__full_name" labelText="Как вас зовут (ФИО)"/>
					</div>
					<div className="input-field col s6">
						<InputData value={this.state.login} onChangeValue={value => this.setState({login: value})}
								   id="registration-tab__login" labelText="Придумайте логин"/>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s6">
						<InputData value={this.state.password} type="password"
								   onChangeValue={value => this.setState({password: value})}
								   id="registration-tab__password" labelText="Придумайте пароль"/>
					</div>
					<div className="input-field col s6">
						<InputData value={this.state.rePassword} type="password"
								   onChangeValue={value => this.setState({rePassword: value})}
								   id="registration-tab__re-password" labelText="Подтвердите пароль"/>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12 center">
						<button type="submit" form="registration-form" value="Submit"
								className="registration-tab__btn-registration waves-effect waves-light btn">Регистрация
						</button>
					</div>
				</div>
			</form>)
		}
	};

	render() {
		return (
			<div id="registration-tab" className="col s12">
				<div className="row">
					<div className='col s12'>
						{this.registrationTabContent()}
					</div>
				</div>
			</div>
		);
	}

	validation(registrationForm) {
		// noinspection JSUnusedGlobalSymbols
		$.validator.setDefaults({
			errorClass: "invalid",
			validClass: "valid",
			errorPlacement: function (error, element) {
				$(element)
					.closest("form")
					.find("label[form='" + element.attr("id") + "']")
					.attr("data-error", error.text());
			},
			submitHandler: this.onRegistration,
		});

		$.extend($.validator.messages, {
			required: 'Это поле должно быть заполнено.',
			minlength: $.validator.format("Поле должно содержать больше {0} символов."),
		});

		$(registrationForm).validate({
			rules: {
				"registration-tab__full_name": {
					required: true,
					minlength: 5
				},
				"registration-tab__login": {
					required: true,
					minlength: 5
				},
				"registration-tab__password": {
					required: true,
					minlength: 5
				},
				"registration-tab__re-password": {
					required: true,
					minlength: 5,
					equalTo: "#registration-tab__password"
				},
			},
			messages: {
				"registration-tab__re-password": {
					equalTo: "Пароли не совпадают. Повторите попытку."
				},
			}
		});
	}
}

export default TabRegistration;
