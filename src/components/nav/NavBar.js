import React, {Component} from 'react';
import './NavBar.css'
import $ from "jquery";

class NavBarCalypso extends Component {

	componentDidMount() {
		$(".button-collapse").sideNav();
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper teal">
					<div className="container">
						<a href="#" className="brand-logo">Калипсо</a>
						<a href="#" data-activates="side-menu" className="button-collapse"><i
							className="material-icons md-48">menu</i></a>

						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="#">Группы</a></li>
							<li><a href="#">Тесты</a></li>
							<li><a href="#">Отчеты</a></li>
							<li><a data-target="modal-registration" className="btn-floating red avatar modal-trigger"/>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBarCalypso;
