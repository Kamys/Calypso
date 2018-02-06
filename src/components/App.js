import React, {Component} from 'react';
import NavBar from "./nav/NavBar";
import SideNav from "./nav/SideNav";
import ModalAuthorization from "./ModalAuthorization";
import Router from "react-router-dom/es/Router";
import Route from "react-router-dom/es/Route";
import Introductory from "./Introductory";
import createHistory from "history/createBrowserHistory"


const history = createHistory();
class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<Router history={history}>
					<div>
						<Route path="/" component={Introductory}/>
					</div>
				</Router>
				<ModalAuthorization/>
			</div>
		);
	}
}

export default App;
