import React, {Component} from 'react';
import $ from "jquery";
import "jquery-validation";

class TabRegistration extends Component {

	constructor(props) {
		super(props);
		this.onRegistration = this.onRegistration.bind(this);
	}

	onRegistration = () => {

	};

	render() {
		return (
			<div id="registration-tab" className="col s12">
				<div className="row">
					<form ref={instance => this.validation(instance)} className="col s12 egistration-tab__form">
						<div className="row">
							<div className="input-field col s6">
								<input name="registration-tab__full_name"
									   id="registration-tab__full_name"
									   type="text"/>
								<label form="registration-tab__full_name">Как вас зовут (ФИО)</label>
							</div>
							<div className="input-field col s6">
								<input
									name="registration-tab__login"
									id="registration-tab__login"
									type="text"/>
								<label form="registration-tab__login">Придумайте имя пользователя</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									name="registration-tab__password"
									id="registration-tab__password"
									type="password"/>
								<label form="registration-tab__password">Придумайте пароль</label>
							</div>
							<div className="input-field col s6">
								<input
									name="registration-tab__re-password"
									id="registration-tab__re-password"
									type="password"/>
								<label form="registration-tab__re-password">Подтвердите пароль</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12 center">
								<a onClick={this.onRegistration}
								   className="registration-tab__btn-registration waves-effect waves-light btn">Регистрация</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}

	validation(instance) {
		// noinspection JSUnusedGlobalSymbols
		$.validator.setDefaults({
			errorClass: "invalid",
			validClass: "valid",
			errorPlacement: function (error, element) {
				$(element)
					.closest("form")
					.find("label[form='" + element.attr("id") + "']")
					.attr("data-error", error.text());
			}
		});

		$.extend($.validator.messages, {
			required: 'Это поле должно быть заполнено.',
			minlength: $.validator.format("Поле должно содержать больше {0} символов."),
		});

		$(instance).validate({
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
