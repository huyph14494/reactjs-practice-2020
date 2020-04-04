import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import MenuSidebar from './components/MenuSidebar';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import routes from './routers/routers';

function App(props) {
	return (
			<div className="App">
				<Header />
				<MenuSidebar />
				<Link to="/">Home</Link>
				<Link to="/sign-in">Sign-in</Link>
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
