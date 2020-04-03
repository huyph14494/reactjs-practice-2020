import React from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Header from './components/Header';

function App() {
	console.log("Render List");

	return (
		<div className="App bg-light">
			<Header></Header>
			<List></List>
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
