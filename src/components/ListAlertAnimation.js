import React from 'react';
import { connect } from 'react-redux';
import AlertAnimation from './AlertAnimation';

function ListAlertAnimation(props) {
	return (
		<div>
			{props.alertAnimation.listAlert.map((alert, index) => (
				<AlertAnimation
          index={index}
          key={alert.id}
          id={alert.id}
					toggle={alert.toggle}
					classTransition={alert.classTransition}
					variant={alert.variant}
					context={alert.context}
				/>
			))}
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		alertAnimation: state.alertAnimation
	};
};


export default connect(mapStateToProps)(ListAlertAnimation);
