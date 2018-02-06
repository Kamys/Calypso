import React, {Component} from 'react';

class TabLogin extends Component {
	render() {
		return (
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
							<div className="input-field col s12 center">
								<a className="login-tab__btn-login waves-effect waves-light btn">Войти</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default TabLogin;
