import React, {Component} from 'react';
import $ from "jquery";

class Parallax extends Component {
	componentDidMount() {
		$(document).ready(function () {
			$('.parallax').parallax();
		});
	}

	render() {
		return (
			<div className="parallax-container">
				<div className="parallax"><img src={this.props.image}/></div>
				{this.props.children}
			</div>
		);
	}
}

export default Parallax;
