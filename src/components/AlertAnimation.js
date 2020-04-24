import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { CLOSE_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';

function closeAlert(props) {
	props.closeAlert(props.id);
}

function AlertAnimation(props) {
	useEffect(
		() => {
			let timeout = setTimeout(function() {
				if (props.toggle) {
					// console.log('Alert useEffect');
					closeAlert(props);
				}
			}, 3000);
			return () => {
				// console.log('Clear Alert useEffect');
				clearTimeout(timeout);
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props.toggle ]
	);

	let classTop = 'top-' + (props.index * 65 + 20);
	return (
		<div>
			{props.toggle ? (
				<Alert
					variant={props.variant || 'success'}
					bsPrefix={'alert alert-custom alert-' + (props.variant || 'success') + ' box-shadow-1 run-animation-alert ' + classTop}
					onClose={() => closeAlert(props)}
					dismissible
				>
					{props.context}
				</Alert>
			) : (
				''
			)}
		</div>
	);
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		closeAlert: (alertId) => {
			dispatch({ type: CLOSE_ALERT_ANIMATION, alertId });
		}
	};
};

export default connect(null, mapDispatchToProps)(AlertAnimation);
