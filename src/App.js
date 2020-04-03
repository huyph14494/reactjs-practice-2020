import React from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Header from './components/Header';
import Signin from './components/Signin';
import MenuSidebar from './components/MenuSidebar';

function App() {
	console.log('Render List');

	return (
		<div className="App">
			<Header />
			<MenuSidebar />
			{/* <Signin></Signin> */}
			{/* <List></List> */}
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
