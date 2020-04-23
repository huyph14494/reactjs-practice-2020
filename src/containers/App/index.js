import React from 'react';
import Header from '../../components/Header';
import MenuSidebar from '../../components/MenuSidebar';
import { Route, Switch } from 'react-router-dom';
import routes from '../routers';
import Navbar from '../../components/Navbar';
import Alert from '../../components/Alert';
import AlertAnimation from '../../components/AlertAnimation';
import { BrowserRouter as Router } from 'react-router-dom';
import config from '../../config/default';

function App(props) {
  console.log("App");
  
	return (
		<div className="App">
			<Router basename={'/' + config.prefix_web}>
        <Alert />
        <AlertAnimation />
				<Navbar />
				<Header />
				<MenuSidebar />

				<Switch location={props.location}>{routes.map((route, i) => <Route exact key={i} {...route} />)}</Switch>
			</Router>
		</div>
	);
}

export default App;
