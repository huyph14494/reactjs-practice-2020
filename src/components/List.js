import React from 'react';
import News from 'src/data_json/news.json';
import Item from './Item';

function showList() {
	let data = shuffle(News);
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

function List() {
	return (
		<div className="col-xs-12 mt-5">
			<table className="table table-hover bg-light">{showList()}</table>
		</div>
	);
}

export default List;
