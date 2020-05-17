import React from 'react';
import Item from '../../components/Item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function showList(news) {
	let data = shuffle(news);
	return data.map((value, key) => <Item data={value} key={key} id={key} />);
}

function shuffle(arra1) {
	var ctr = arra1.length,
		temp,
		index;

	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = arra1[ctr];
		arra1[ctr] = arra1[index];
		arra1[index] = temp;
	}
	return arra1;
}

function List(props) {
	return (
		<section className="container max-width-800">
			<div className="col-xs-12">
				<table className="table table-hover table-borderless border-collapse-separate">{showList(props.news)}</table>
			</div>
		</section>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		news: state.news
	};
};

export default withRouter(connect(mapStateToProps)(List));
