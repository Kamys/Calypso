import React, {Component} from 'react';
import $ from "jquery";

class ModalAuthorization extends Component {

	componentDidMount() {
		$('.modal').modal();
	}

	render() {
		return (
			<div id="modal-registration" className="modal">
				<div className="modal-content">
					<ul className="tabs">
						<li className="tab col s3"><a className="active" href="#login-tab">Войти</a></li>
						<li className="tab col s3"><a href="#registration-tab">Регистрация</a></li>
					</ul>
					<div id="login-tab" className="col s12">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<input id="login-tab__login" type="text" className="validate"/>
										<label form="login-tab__login">Логин</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12">
										<input id="login-tab__password" type="password" className="validate"/>
										<label form="login-tab__password">Пароль</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12 right-align">
										<a className="login-tab__btn-login waves-effect waves-light btn">Войти</a>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div id="registration-tab" className="col s12">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s6">
										<input id="registration-tab__last_name" type="text" className="validate"/>
										<label form="registration-tab__last_name">ФИО</label>
									</div>
									<div className="input-field col s6">
										<input id="registration-tab__login" type="text" className="validate"/>
										<label form="registration-tab__login">Логин</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s6">
										<input id="registration-tab__password" type="password" className="validate"/>
										<label form="registration-tab__password">Пароль</label>
									</div>
									<div className="input-field col s6">
										<input id="registration-tab__re-password" type="password" className="validate"/>
										<label form="registration-tab__re-password">Повторите пароль</label>
									</div>
								</div>
								<div className="row">
									<div className="input-field col s12 right-align">
										<a className="registration-tab__btn-registration waves-effect waves-light btn">Регистрация</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalAuthorization;