import React, {Component} from 'react';
import Parallax from "./Parallax";
import parallaxImageOne from '../image/Parallax1.jpg'
import parallaxImageTwo from '../image/Parallax2.jpg'

class Introductory extends Component {
	render() {
		return (
			<div>
				<Parallax image={parallaxImageOne}>
					<div className="center">
						<h2 className="header teal-text">Сервис интернет-тестирования</h2>
						<h5 className="header teal-text">Оценка и мониторинг образовательных достижений студентов</h5>
						<a data-target="modal-registration" className="waves-effect waves-light btn-large modal-trigger">
							<i className="material-icons left">person</i>Войти в систему</a>
					</div>
				</Parallax>

				<div className="container">
					<h3 className="header center orange-text">Возможности сервиса</h3>
					<div className="row">
						<div className="col s4">
							<div className="center promo promo-example">
								<i className="material-icons">flash_on</i>
								<p className="promo-caption">Облегчает разработку</p>
								<p className="light center">We did most of the heavy lifting for you to provide a
									default stylings that incorporate our custom components.</p>
							</div>
						</div>
						<div className="col s4">
							<div className="center promo promo-example">
								<i className="material-icons">group</i>
								<p className="promo-caption">Ориентирована на пользователя</p>
								<p className="light center">By utilizing elements and principles of Material Design, we
									were
									able to create a framework that focuses on User Experience.</p>
							</div>
						</div>
						<div className="col s4">
							<div className="center promo promo-example">
								<i className="material-icons">settings</i>
								<p className="promo-caption">Проста в использовании</p>
								<p className="light center">We have provided detailed documentation as well as specific
									code
									examples to help new users get started.</p>
							</div>
						</div>
					</div>
				</div>
				<Parallax image={parallaxImageTwo}/>
			</div>
		);
	}
}

export default Introductory;
