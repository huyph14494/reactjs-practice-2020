import React from 'react';
const PUBLIC_URL = process.env.PUBLIC_URL;

function Item(props) {
	let dateNow = new Date();
	props.data.dateNow = dateNow.toLocaleString();
	console.log("Render Item");

	return (
		<tbody>
			<tr className="box-shadow-28">
				{/* <th scope="row" className="text-center vertical-align-middle">
					{props.id + 1}
				</th> */}
				<td className="p-r-l-none p-t-b-1-5rem">
					<div className="container">
						<div className="row">
							<div className="col-md-7 col-xs-12 flex-center">
								<div
									style={{ maxHeight: 180, maxWidth: 320, height: '45vw', width: '80vw' }}
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
							</div>
							<div className="col-md-5 col-xs-12 text-left p-r-l-10-vw">
								<p className="font-130-per mt-4">
									<b>{props.data.name}</b>
								</p>
								<p className="font-80-per">{props.data.descriptions}</p>
								<p className="font-80-per">{props.data.dateNow}</p>
								<p>
									<button type="button" className="btn btn-danger mr-3 font-80-per">
										Danger
									</button>
									<button type="button" className="btn btn-warning font-80-per">
										Warning
									</button>
								</p>
							</div>
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	);
}

export default Item;
