import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { CLOSE_PHOTO_MODAL } from 'src/redux/actions/photoModal';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from 'src/custom-fields/InputField';
import PhotoField from 'src/custom-fields/PhotoField';

const FILE_SIZE = 1 * 1024 * 1024; // 1MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

function PhotoModal(props) {
	const initialValues = {
		name: props.photoModal.item?.name ?? '',
		descriptions: props.photoModal.item?.descriptions || '',
    photo: props.photoModal.item?.image || '',
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('This name field is required.'),
    descriptions: Yup.string().required('This descriptions field is required.'),
    photo: Yup.mixed().required("A file image is required").test(
      "fileSize",
      "File too large",
      value => { 
        if(typeof value === 'object'){
          return value && value.size <= FILE_SIZE;
        } else {
          return true;
        }
       }
    ).test(
      "fileFormat",
      "Unsupported Format File",
      value => { 
        if(typeof value === 'object'){
          return value && SUPPORTED_FORMATS.includes(value.type);
        } else {
          return true;
        }
      }
    ),
	});

  const handleClose = () => props.onCloseModal();
  const handleSubmit = (values) => {
    let itemNew = {
      id: props.photoModal.item?.id ?? null,
      name: values.name,
      descriptions: values.descriptions,
      photo: values.photo,
    };

    if(typeof values.photo === 'object'){
      itemNew.photo = values.photo.previewUrl;
    }
    props.onUpdatePhoto(itemNew);
    props.onCloseModal();
  }

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
				onSubmit={(values) => handleSubmit(values)}
			>
				{(formikProps) => {
					// do something here ...
					// const { values, errors, touched } = formikProps;
					// console.log({ values, errors, touched });

					return (
						<Form>
							<Modal.Header closeButton>
								<Modal.Title>Photo Update</Modal.Title>
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
