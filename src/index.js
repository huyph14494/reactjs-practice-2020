import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store1 from './stores/store1';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store1}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
