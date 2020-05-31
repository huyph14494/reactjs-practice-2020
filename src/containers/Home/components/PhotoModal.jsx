import React, { useState } from 'react';
import { Container, Image, Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_PHOTO_MODAL } from 'src/redux/actions/photoModal';

function PhotoModal(props) {
	const [ validated, setValidated ] = useState(false);

	const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    props.onCloseModal();

		// if (form.checkValidity() === false) {
		// 	event.preventDefault();
		// 	// event.stopPropagation();
		// }

		// setValidated(true);
	};

	const handleClose = () => props.onCloseModal();

	return (
		<Modal
			show={props.photoModal.toggle}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
		>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>{props.photoModal.item ? props.photoModal.item.name : null}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Form.Group controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" value={props.photoModal.item ? props.photoModal.item.name : ''} required />
							<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="formDescriptions">
							<Form.Label>Descriptions</Form.Label>
							<Form.Control
								type="text"
								value={props.photoModal.item ? props.photoModal.item.descriptions : ''}
								required
							/>
							<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="formPhoto">
							<Form.Label>Photo</Form.Label>
							<p>
								{props.photoModal.item && props.photoModal.item.image ? (
									<Image src={props.photoModal.item.image} height={'200px'} className={'img-thumbnail-custom'} />
								) : null}
							</p>
						</Form.Group>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" type="submit">
						Save Changes
					</Button>
				</Modal.Footer>
			</Form>
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
