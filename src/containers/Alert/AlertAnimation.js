import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { SHOW_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';
import { connect } from 'react-redux';
import { randomVariant, createSentence } from 'src/helpers/common/random-alert';
import { v1 as uuidv1 } from 'uuid';

function showAlertAnimation(props) {
	let alert = {
		context: createSentence(),
		variant: randomVariant(),
		classTransition: 'toggen',
		toggle: true,
		id: uuidv1()
	};

	props.showAlertAnimation(alert);
}

function AlertAnimation(props) {
	const [ showButton, setShowButton ] = useState(true);
	const [ showMessage, setShowMessage ] = useState(false);

	return (
		<Container style={{ marginTop: '2rem' }}>
			<Container style={{ marginTop: '2rem' }}>
				<h1 id="logo" className="run-animation">
					Fancy Text
				</h1>
			</Container>
			<Container style={{ marginTop: '2rem' }}>
				<Button onClick={() => showAlertAnimation(props)} size="lg" variant="success">
					Add Message
				</Button>
			</Container>

			<Container style={{ marginTop: '2rem' }}>
				{showButton && (
					<Button onClick={() => setShowMessage(true)} size="lg" variant="danger">
						Show Message
					</Button>
				)}
				<CSSTransition
					in={showMessage}
					timeout={300}
					classNames="alert"
					unmountOnExit
					onEnter={() => setShowButton(false)}
					onExited={() => setShowButton(true)}
				>
					<Alert variant="danger" dismissible onClose={() => setShowMessage(false)}>
						<Alert.Heading>Animated alert message</Alert.Heading>
						<p>This alert message is being transitioned in and out of the DOM.</p>
						<Button variant="danger" onClick={() => setShowMessage(false)}>
							Close
						</Button>
					</Alert>
				</CSSTransition>
			</Container>
		</Container>
	);
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showAlertAnimation: (alert) => {
			dispatch({ type: SHOW_ALERT_ANIMATION, alert });
		}
	};
};

export default connect(null, mapDispatchToProps)(AlertAnimation);
