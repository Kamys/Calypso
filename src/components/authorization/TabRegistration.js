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
								<input name='fullname'
									   id="registration-tab__full_name"
									   type="text"
									   data-error=".errorTxt1"
									   className="validate"/>
								<label form="registration-tab__full_name">ФИО</label>
							</div>
							<div className="input-field col s6">
								<input
									name='login'
									id="registration-tab__login"
									type="text"
									className='validate'/>
								<label form="registration-tab__login">Логин</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<input
									name='password'
									id="registration-tab__password"
									type="password"
									className="validate"/>
								<label form="registration-tab__password">Пароль</label>
							</div>
							<div className="input-field col s6">
								<input
									name='re-password'
									id="registration-tab__re-password"
									type="password"
									className="validate"/>
								<label form="registration-tab__re-password">Повторите пароль</label>
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
		$(instance).validate({
			rules: {
				fullname: {
					required: true,
					minlength: 5
				}
			},
			errorElement : 'div',
			errorPlacement: function(error, element) {
				var placement = $(element).data('error');
				if (placement) {
					$(placement).append(error)
				} else {
					error.insertAfter(element);
				}
			}
		});
	}
}

export default TabRegistration;
