import React, {Component} from 'react';
import background from './image/background.jpg';
import avatar from './image/avatar.png';

class SideNav extends Component {
	render() {
		return (
			<ul className="side-nav" id="side-menu">
				<li>
					<div className="user-view">
						<div className="background">
							<img src={background}/>
						</div>
						<a><img className="circle avatar" src={avatar}/></a>
						<a><span className="white-text name">John Doe</span></a>
						<a><span className="white-text email">jdandturk@gmail.com</span></a>
					</div>
				</li>
				<li><a href="#">Группы</a></li>
				<li><a href="#">Тесты</a></li>
				<li><a href="#">Отчеты</a></li>
				<li>
					<div className="divider"/>
				</li>
				<li><a data-target="modal-registration" className="btn modal-trigger">Авторизация</a></li>
			</ul>
		);
	}
}

export default SideNav;
