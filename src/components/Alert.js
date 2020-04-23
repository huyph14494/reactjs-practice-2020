import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { CLOSE_ALERT } from 'src/redux/actions/alert';

function showAlert(props) {
	return (
		<Alert
			variant={props.alert.variant || 'success'}
			bsPrefix={'alert alert-custom alert-' + (props.alert.variant || 'success') + ' box-shadow-1'}
			onClose={() => props.closeAlert()}
			dismissible
		>
			{props.alert.context}
		</Alert>
	);
}

function AlertComponent(props) {
	useEffect(
		() => {
			let timeout = setTimeout(function() {
				if (props.alert.toggle) {
					// console.log('Alert useEffect');
					props.closeAlert();
				}
			}, 2000);
			return () => {
				// console.log('Clear Alert useEffect');
				clearTimeout(timeout);
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props.alert.toggle ]
	);

	return <div>{props.alert.toggle ? showAlert(props) : ''}</div>;
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
