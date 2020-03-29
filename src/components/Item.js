import React from 'react';
const PUBLIC_URL = process.env.PUBLIC_URL;

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
								src={PUBLIC_URL + '/images/' + props.data.image}
								alt={props.data.image}
								className="img-thumbnail img-fluid"
							/>
						</picture>
					</div>
				</td>
				<td className="text-left vertical-align-middle">
					<p className="font-100-per">
						<b>{props.data.name}</b>
					</p>
					<p className="font-80-per">{props.data.descriptions}</p>
					<p className="font-80-per">{props.data.dateNow}</p>
				</td>
			</tr>
		</tbody>
	);
}

export default Item;
