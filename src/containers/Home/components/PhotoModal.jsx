import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_PHOTO_MODAL } from 'src/redux/actions/photoModal';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from 'src/custom-fields/InputField';
import PhotoField from 'src/custom-fields/PhotoField';

function PhotoModal(props) {
	const initialValues = {
		name: props.photoModal.item?.name ?? '',
		descriptions: props.photoModal.item?.descriptions || '',
		photo: props.photoModal.item?.image || ''
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('This name field is required.'),
    descriptions: Yup.string().required('This descriptions field is required.'),
    photo: Yup.string().required('This photo field is required.'),
	});

	const handleClose = () => props.onCloseModal();

	return (
		<Modal
			show={props.photoModal.toggle}
			onHide={handleClose}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
		>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log('Submit: ', values)}
			>
				{(formikProps) => {
					// do something here ...
					const { values, errors, touched } = formikProps;
					console.log({ values, errors, touched });

					return (
						<Form>
							<Modal.Header closeButton>
								<Modal.Title>{props.photoModal.item ? props.photoModal.item.name : null}</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Container>
									<FastField name="name" component={InputField} label="Name" placeholder="" />
									<FastField name="descriptions" component={InputField} label="Descriptions" placeholder="" />
									<FastField name="photo" component={PhotoField} label="Photo" />
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
					);
				}}
			</Formik>
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
