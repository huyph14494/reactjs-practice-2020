import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { CLOSE_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';
import { CSSTransition } from 'react-transition-group';

function AlertAnimation(props) {
	useEffect(
		() => {
			let timeout = setTimeout(function() {
				if (props.alertAnimation.toggle) {
					// console.log('Alert useEffect');
					props.closeAlert();
				}
			}, 2200);
			return () => {
				// console.log('Clear Alert useEffect');
				clearTimeout(timeout);
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props.alertAnimation.toggle ]
  );
  
	return (
		<div>
			<CSSTransition
				in={props.alertAnimation.toggle}
				timeout={300}
				classNames={props.alertAnimation.classTransition}
				unmountOnExit
			>
				<Alert
					variant={props.alertAnimation.variant || 'success'}
					bsPrefix={'alert alert-custom alert-' + (props.alertAnimation.variant || 'success') + ' box-shadow-1'}
					onClose={() => props.closeAlert()}
					dismissible
				>
					{props.alertAnimation.context}
				</Alert>
			</CSSTransition>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		alertAnimation: state.alertAnimation
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		closeAlert: () => {
			dispatch({ type: CLOSE_ALERT_ANIMATION });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertAnimation);
