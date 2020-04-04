import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import MenuSidebar from './components/MenuSidebar';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from './routers/routers';
import Navbar from './components/Navbar';

function App(props) {
	return (
			<div className="App">
				<Navbar />
				<Header />
				<MenuSidebar />
				<Switch location={props.location}>{routes.map((route, i) => <Route exact key={i} {...route} />)}</Switch>	
			</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	// console.log("state", state);
	return {
		num: state.num
	};
};

export default withRouter(connect(mapStateToProps)(App));
