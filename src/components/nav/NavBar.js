import React, {Component} from 'react';
import './NavBar.css'
import $ from "jquery";

class NavBarCalypso extends Component {

	componentDidMount() {
		$(".button-side-menu").sideNav();
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper teal">
					<div className="container">
						<div className="row">
							<div className="col s1">
								<a href="#" data-activates="side-menu" className="button-side-menu"><i
									className="material-icons md-48">menu</i></a>
							</div>
							<div className="col s10 left-align">
								<a href="#" className="brand-logo">Калипсо</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBarCalypso;
