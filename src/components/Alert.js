import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { HIDDEN_ALERT, CLOSE_ALERT } from 'src/redux/actions/alert';

function showAlert(props) {
  let classCustom = '';
  if (props.alert.toggle === 1) {
		classCustom += ' run-animation-alert';
	} else {
		classCustom += ' run-animation-alert-hidden';
  }
  
	return (
		<Alert
			variant={props.alert.variant || 'success'}
			bsPrefix={'alert alert-custom alert-' + (props.alert.variant || 'success') + ' box-shadow-1 ' + classCustom}
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
			let timeout = null;
			if (props.alert.toggle === 1) {
        // console.log('Alert useEffect');

				timeout = setTimeout(function() {
						props.hiddenAlert();
				}, 3000);
			} else if (props.alert.toggle === 2) {
				setTimeout(function() {
					props.closeAlert();
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
		[ props.alert.toggle ]
	);

	return <div>{ [1,2].indexOf(props.alert.toggle) !== -1 ? showAlert(props) : ''}</div>;
}

const mapStateToProps = (state, ownProps) => {
	return {
		alert: state.alert
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
    hiddenAlert: () => {
			dispatch({ type: HIDDEN_ALERT });
		},
		closeAlert: () => {
			dispatch({ type: CLOSE_ALERT });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertComponent);
