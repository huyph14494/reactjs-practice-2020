import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import MenuSidebar from './components/MenuSidebar';
import { Switch } from 'react-router-dom';
import routes from './routers/router';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import uuid from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
	return (
		<div className="App">
			<Header />
			<MenuSidebar />

			<TransitionGroup>
				<CSSTransition key={uuid()} classNames="fade" timeout={300}>
					<Switch>{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}</Switch>
				</CSSTransition>
			</TransitionGroup>
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
