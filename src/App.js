import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import MenuSidebar from './components/MenuSidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routers/routers';
import { v1 as uuidv1 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<MenuSidebar />
				<Switch>{routes.map((route, i) => <Route exact className="fade" key={i} {...route} />)}</Switch>
			</div>
		</Router>
	);
}

const mapStateToProps = (state, ownProps) => {
	// console.log("state", state);
	return {
		num: state.num
	};
};

export default connect(mapStateToProps)(App);
