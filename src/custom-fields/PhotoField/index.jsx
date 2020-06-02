import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Form, Image } from 'react-bootstrap';

PhotoField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
	disabled: PropTypes.bool
};

PhotoField.defaultProps = {
	label: '',
	disabled: false
};

function PhotoField(props) {
	const { field, form, label } = props;
	const { name, value } = field;
	const { errors, touched } = form;
  const showError = errors[name] && touched[name];

	const handleInputFileChange = (event) => {
		const target = event.target;
		const value = target.value;

		if (value) {
			if (
				target.files &&
				target.files[0] &&
				target.files[0].type &&
				String(target.files[0].type).toLowerCase().indexOf('image') !== -1
			) {
				form.setFieldValue(name, URL.createObjectURL(event.target.files[0]));
			} else {
				form.setFieldValue(name, '');
			}
		}
	};

	return (
		<Form.Group md="12">
			{label && (
				<Form.Label htmlFor={name}>
					<b>{label}</b>
				</Form.Label>
			)}
			<Form.File
				disabled={props.disabled}
				label={value}
				data-browse="Upload"
				custom
				onChange={handleInputFileChange}
				isInvalid={showError}
			/>
			<p />
			{value && <Image src={value} height={'200px'} className={'img-thumbnail-custom'} />}
      <div className={showError ? 'is-invalid' : ''}></div>
			<ErrorMessage
				name={name}
				render={(msg) => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>}
			/>{' '}
		</Form.Group>
	);
}

export default PhotoField;
