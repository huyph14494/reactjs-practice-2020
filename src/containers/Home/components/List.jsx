import React from 'react';
import Item from './Item';
import Loading from 'src/components/Loading';

function showList(data) {
	if (data && data.length) {
		return data.map((value, key) => <Item data={value} key={key} id={key} />);
	} else {
		return (
			<tbody>
				<tr>
					<td>
						<Loading />
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

export default React.memo(function List(props) {
	return (
		<section className="max-width-800">
			<table className="table table-hover table-borderless border-collapse-separate">{showList(props.news)}</table>
  	</section>
	);
});
