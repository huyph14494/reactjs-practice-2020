import React from 'react';
import 'src/containers/NotFound/meteor-shower.scss';

export default function NotFound() {
	return (
		<div className="container-meteor">
			<div className="space">
				<div className="planet">
					<div className="planet_shadow" />
					<div className="crater1" />
					<div className="crater2" />
					<div className="crater3" />
					<div className="crater4" />
				</div>
				<div className="stars">
					<div className="star" />
					<div className="star pink" />
					<div className="star blue" />
					<div className="star yellow" />
				</div>
			</div>
		</div>
	);
}
