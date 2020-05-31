import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_ITEM_MODAL } from 'src/redux/actions/itemModal';

function ItemModal(props) {
	const handleClose = () => props.onCloseModal();

	return (
		<Modal show={props.itemModal.toggle} onHide={handleClose}>
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

ItemModal.displayName = 'ItemModal';

const mapStateToProps = (state, ownProps) => {
	return {
		itemModal: state.itemModal
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCloseModal: () => {
			dispatch({ type: CLOSE_ITEM_MODAL });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
