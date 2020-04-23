import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { SHOW_ALERT } from 'src/redux/actions/alert';
import { connect } from 'react-redux';
import { randomVariant, createSentence } from 'src/helpers/common/random-alert';

function AlertAnimation(props) {
	const [ showButton, setShowButton ] = useState(true);
	const [ showMessage, setShowMessage ] = useState(false);

	return (
		<Container style={{ marginTop: '2rem' }}>
			<Container style={{ marginTop: '2rem' }}>
				<Button onClick={() => props.showAlert(createSentence(), randomVariant(), 'toggen')} size="lg" variant="success">
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
		showAlert: (context, variant, classTransition) => {
			dispatch({ type: SHOW_ALERT, context, variant, classTransition });
		}
	};
};

export default connect(null, mapDispatchToProps)(AlertAnimation);
