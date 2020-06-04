import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import 'src/css/Overlay.scss';

export default function Overlay() {
	const [ status, setStatus ] = useState(false);
	const onToggleOverlay = () => {
		setStatus(!status);
	};

	return (
		<div>
			<Button variant="outline-danger" onClick={onToggleOverlay}>
				Overlay
			</Button>
			{status ? (
				<div className='my-overlay' onClick={onToggleOverlay}>
					<div className="container-div">
						<div className="div1">1</div>
						<div className="div2">2</div>
						<div className="div3">3</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}
