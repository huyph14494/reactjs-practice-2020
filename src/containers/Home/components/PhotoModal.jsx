import React from 'react';
import { Container, Image, Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_PHOTO_MODAL } from 'src/redux/actions/photoModal';

function PhotoModal(props) {
	const handleClose = () => props.onCloseModal();

	return (
		<Modal
			show={props.photoModal.toggle}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
		>
			<Modal.Header closeButton>
				<Modal.Title>{props.photoModal.item ? props.photoModal.item.name : null}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Descriptions</Form.Label>
							<Form.Control type="text" value={props.photoModal.item ? props.photoModal.item.descriptions : ''} />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Photo</Form.Label>
							<p>
								{props.photoModal.item && props.photoModal.item.image ? (
									<Image src={props.photoModal.item.image} height={'200px'} className={'img-thumbnail-custom'} />
								) : null}
							</p>
						</Form.Group>
					</Form>
				</Container>
			</Modal.Body>
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
