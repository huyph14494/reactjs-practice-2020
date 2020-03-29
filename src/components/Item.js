import React from 'react';

function Item(props) {
	let dateNow = new Date();
	props.data.dateNow = dateNow.toLocaleString();

	return (
		<tbody>
			<tr>
				{/* <th scope="row" className="text-center vertical-align-middle">
					{props.id + 1}
				</th> */}
				<td className="text-center vertical-align-middle">
					<div
						style={{ maxHeight: 180, maxWidth: 320, height: '27vw', width: '56vw' }}
						className="text-center frame"
					>
						<picture>
							<img
								style={{ height: '100%' }}
								src={'/images/' + props.data.image}
								alt={props.data.image}
								className="img-thumbnail img-fluid"
							/>
						</picture>
					</div>
				</td>
				<td className="text-left vertical-align-middle">
					<p className="font-4vw">
						<b>{props.data.name}</b>
					</p>
					<p className="font-2vw">{props.data.descriptions}</p>
					<p className="font-2vw">{props.data.dateNow}</p>
				</td>
			</tr>
		</tbody>
	);
}

export default Item;