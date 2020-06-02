import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool
};

InputField.defaultProps = {
	type: 'text',
	label: '',
	placeholder: '',
	disabled: false
};

function InputField(props) {
	const { field, form, type, label, placeholder, disabled } = props;
	const { name } = field; // { name, value, onChange, onBlur }
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	return (
		<Form.Group md="12">
			{label && <Form.Label htmlFor={name}><b>{label}</b></Form.Label>}

			<Form.Control
				id={name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}

				type={type}
				disabled={disabled}
				placeholder={placeholder}
				isInvalid={showError}
			/>
			<ErrorMessage
				name={name}
				render={(msg) => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>}
			/>
		</Form.Group>
	);
}

export default InputField;
