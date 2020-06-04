import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import 'src/css/Overlay.scss';

export default function Overlay() {
	const [ status, setStatus ] = useState(false);
	const onToggleOverlay = () => {
    setStatus(true);
    setTimeout(function() {
      setStatus(false);
    }, 5400);
	};

	return (
		<div>
			<Button variant="outline-danger" className="mt-2 mb-3" onClick={onToggleOverlay}>
				Overlay
			</Button>
      {status ? (
				<div className='my-overlay'>
					<div className="container-div">
						<div className="div1">1</div>
						<div className="div2">2</div>
						<div className="div3">3</div>
            <div className="div4">GO!!!</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}
