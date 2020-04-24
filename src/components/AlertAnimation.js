import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { CLOSE_ALERT_ANIMATION, DELETE_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';

function AlertAnimation(props) {
	useEffect(
		() => {
			let timeout = null;
			if (props.toggle) {
        // console.log('Alert useEffect');

				timeout = setTimeout(function() {
					if (props.toggle) {
						props.closeAlert(props.id);
					}
				}, 3000);
			} else {
				setTimeout(function() {
					props.deleteAlert(props.id);
				}, 1500);
			}

			return () => {
				if (timeout) {
          // console.log('Clear Alert useEffect');

					clearTimeout(timeout);
				}
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props.toggle ]
	);

	// console.log('AlertAnimation');

	let classCustom = 'top-' + (props.index * 65 + 20);
	if (props.toggle) {
		classCustom += ' run-animation-alert';
	} else {
		classCustom += ' run-animation-alert-hidden';
	}

	return (
		<div>
			<Alert
				variant={props.variant || 'success'}
				bsPrefix={'alert alert-custom alert-' + (props.variant || 'success') + ' box-shadow-1 ' + classCustom}
				onClose={() => props.closeAlert(props.id)}
				dismissible
			>
				{props.context}
			</Alert>
		</div>
	);
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		closeAlert: (alertId) => {
			dispatch({ type: CLOSE_ALERT_ANIMATION, alertId });
		},
		deleteAlert: (alertId) => {
			dispatch({ type: DELETE_ALERT_ANIMATION, alertId });
		}
	};
};

export default connect(null, mapDispatchToProps)(AlertAnimation);
