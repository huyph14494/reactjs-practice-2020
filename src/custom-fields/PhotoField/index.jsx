import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Form, Image } from 'react-bootstrap';

PhotoField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string
};

PhotoField.defaultProps = {
	label: ''
};

function PhotoField(props) {
	const { field, form, label } = props;
	const { name, value } = field;
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	// const handleImageUrlChange = (newImageUrl) => {
	// 	form.setFieldValue(name, newImageUrl);
	// };

	return (
		<Form.Group md="12">
			{label && <Form.Label htmlFor={name}><b>{label}</b></Form.Label>}
			<br />
			{value && <Image src={value} height={'200px'} className={'img-thumbnail-custom'} />}
			<ErrorMessage
				name={name}
				render={(msg) => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>}
			/>{' '}
		</Form.Group>
	);
}

export default PhotoField;
