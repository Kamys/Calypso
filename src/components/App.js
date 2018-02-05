import React, {Component} from 'react';
import NavBar from "./nav/NavBar";
import SideNav from "./nav/SideNav";
import ModalAuthorization from "./nav/ModalAuthorization";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<SideNav/>
				<ModalAuthorization show={true}/>
			</div>
		);
	}
}

export default App;
