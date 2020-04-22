import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { CLOSE_ALERT } from 'src/redux/actions/alert';

function AlertComponent(props) {
	let toggleAlert = props.alert.toggle;

	useEffect(
		() => {
			let timeout = setTimeout(function() {
				if (toggleAlert) {
					// console.log('Alert useEffect');
					props.closeAlert();
				}
			}, 5000);
			return () => {
				// console.log('Clear Alert useEffect');
				clearTimeout(timeout);
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props.alert.toggle ]
	);

	return (
		<div>
			{toggleAlert ? (
				<Alert variant="success" bsPrefix="alert alert-custom alert-success" onClose={() => props.closeAlert()} dismissible>
					{props.alert.context}
				</Alert>
			) : (
				''
			)}
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		alert: state.alert
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		closeAlert: () => {
			dispatch({ type: CLOSE_ALERT });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
