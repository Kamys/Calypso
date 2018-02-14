import React, {Component} from 'react';
import NavBar from "./navigation/NavBar";
import ModalAuthorization from "./authorization/ModalWindowAuthorization";
import Router from "react-router-dom/es/Router";
import Route from "react-router-dom/es/Route";
import Introductory from "./Introductory";
import createHistory from "history/createBrowserHistory"
import RouteAuthorization from "./authorization/RouteAuthorization";
import UserAccount from "./UserAccount";


const history = createHistory();
class App extends Component {
	render() {
		return (
			<div className="App">
				<Router history={history}>
					<div>
						<NavBar/>
						<Route exact path="/" component={RouteAuthorization} page={<UserAccount/>}/>
						<Route path="/Introductory" component={Introductory}/>
						<ModalAuthorization history={history}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
