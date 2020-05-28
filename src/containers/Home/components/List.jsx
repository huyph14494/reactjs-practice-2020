import React from 'react';
import Item from './Item';
import { Spinner } from 'react-bootstrap';

function showList(data) {
	if (data && data.length) {
		return data.map((value, key) => <Item data={value} key={key} id={key} />);
	} else {
		return (
			<tbody>
				<tr>
					<td>
						<Spinner animation="grow" variant="primary" />
						<Spinner animation="grow" variant="secondary" />
						<Spinner animation="grow" variant="success" />
						<Spinner animation="grow" variant="danger" />
						<Spinner animation="grow" variant="warning" />
						<Spinner animation="grow" variant="info" />
						{/* <Spinner animation="grow" variant="light" /> */}
						<Spinner animation="grow" variant="dark" />
					</td>
				</tr>
			</tbody>
		);
	}
}

// function shuffle(arra1) {
// 	var ctr = arra1.length,
// 		temp,
// 		index;

// 	// While there are elements in the array
// 	while (ctr > 0) {
// 		// Pick a random index
// 		index = Math.floor(Math.random() * ctr);
// 		// Decrease ctr by 1
// 		ctr--;
// 		// And swap the last element with it
// 		temp = arra1[ctr];
// 		arra1[ctr] = arra1[index];
// 		arra1[index] = temp;
// 	}
// 	return arra1;
// }

export default function List(props) {
	return (
		<section className="max-width-800">
			<table className="table table-hover table-borderless border-collapse-separate">{showList(props.news)}</table>
		</section>
	);
}
