import React from 'react';
import { connect } from 'react-redux';
import List from './components/List';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<List></List>
			</header>
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
