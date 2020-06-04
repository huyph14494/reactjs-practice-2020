import React from 'react';
import Header from '../components/Header';
import MenuSidebar from '../components/MenuSidebar';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routers';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';
import ListAlertAnimation from '../components/ListAlertAnimation';
import { BrowserRouter as Router } from 'react-router-dom';
import config from '../config/default';
import NotFound from './NotFound';
import TopButton from 'src/components/TopButton';
import Overlay from 'src/components/Overlay ';

function App(props) {
	console.log('App');

	return (
		<div className="App">
			<Router basename={'/' + config.prefix_web}>
				<Alert />
				<ListAlertAnimation />
				<Navbar />
				<Header />
				<MenuSidebar />
        <Overlay />
				<TopButton />

				<Switch location={props.location}>
					{routes.map((route, i) => <Route exact key={i} {...route} />)}
					<Redirect exact from="/" to="Sign-in V1" />

					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
