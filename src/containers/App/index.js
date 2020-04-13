import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import MenuSidebar from '../../components/MenuSidebar';
import { Route, Switch } from 'react-router-dom';
import routes from '../routers';
import Navbar from '../../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import config from '../../config/default';

function App(props) {
	console.log('App');

	return (
		<div className="App">
			<Router basename={"/" + config.prefix_web }>
				<Navbar />
				<Header />
				<MenuSidebar />

				<Switch location={props.location}>
					{routes.map((route, i) => <Route exact key={i} {...route} />)}
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	// console.log("state", state);
	return {
		num: state.num
	};
};

export default connect(mapStateToProps)(App);
