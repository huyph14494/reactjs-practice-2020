import React from 'react';
import Photo from './Photo';
import Loading from 'src/components/Loading';

function showList(data) {
	if (data && data.length) {
		return data.map((value, key) => <Photo data={value} key={key} id={key} />);
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

function ListPhoto(props) {
	return (
		<section className="max-width-800">
			<table className="table table-hover table-borderless border-collapse-separate">{showList(props.photos)}</table>
  	</section>
	);
};

ListPhoto.displayName = 'ListPhoto';
export default React.memo(ListPhoto);
