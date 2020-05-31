import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_PHOTO_MODAL } from 'src/redux/actions/photoModal';

function PhotoModal(props) {
	const handleClose = () => props.onCloseModal();

	return (
		<Modal show={props.photoModal.toggle} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

PhotoModal.displayName = 'PhotoModal';

const mapStateToProps = (state, ownProps) => {
	return {
		photoModal: state.photoModal
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCloseModal: () => {
			dispatch({ type: CLOSE_PHOTO_MODAL });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoModal);
