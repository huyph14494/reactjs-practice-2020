import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

const SignupSchema = Yup.object().shape({
  inputPassword: Yup.string()
    .required('Password không được để trống!!!'),
  inputEmail: Yup.string()
    .email('Email không hợp lệ!!!')
    .required('Email không được để trống!!!'),
});

const SigininV2 = withFormik({
	mapPropsToValues: () => ({ inputEmail: '', inputPassword: '' }),

  validateOnChange: false,
  validateOnBlur: false,

	// Custom sync validation
	// validate: (values) => {
	// 	let errors = {};
	// 	if (!values.inputEmail) {
	// 		errors.inputEmail = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.inputEmail)) {
	// 		errors.inputEmail = 'Email không hợp lệ';
	// 	}
	// 	return errors;
  // },
  
  validationSchema: SignupSchema,

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
      console.log('values', values);
			setSubmitting(false);
		}, 1000);
	},

	displayName: 'BasicForm' // helps with React DevTools
})(MyForm);

function MyForm(props) {
	const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;

	return (
		<div className="container max-width-450 padding-30">
			<form className="form-signin border-radius-10 background-white padding-30 siginin__form" onSubmit={handleSubmit}>
				<div className="text-center mb-4">
					<img className="mb-4" src={PUBLIC_URL + '/images/logo.png'} alt="" width={72} height={72} />
					<h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
				</div>
				<div className="form-label-group mb-3">
					<input
						type="email"
						id="inputEmail"
						placeholder="Email address"
						value={values.inputEmail}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.inputEmail && touched.inputEmail ? 'form-control is-invalid' : 'form-control'}
					/>
          {errors.inputEmail && touched.inputEmail && (
            <div className="input-feedback">{errors.inputEmail}</div>
          )}
				</div>
				<div className="form-label-group mb-3">
					<input
						type="password"
						id="inputPassword"
						placeholder="Password"
						value={values.inputPassword}
						onChange={handleChange}
						onBlur={handleBlur}
						className={errors.inputPassword && touched.inputPassword ? 'form-control is-invalid' : 'form-control'}
					/>
          
          {errors.inputPassword && touched.inputPassword && (
            <div className="input-feedback">{errors.inputPassword}</div>
          )}
				</div>
				<div className="checkbox mb-3 text-left">
					<label>
						<input type="checkbox" defaultValue="remember-me" /> Remember me
					</label>
				</div>

				<div className="siginin__button__container">
					<div className="siginin__button__div" />
					{isSubmitting ? (
						<button className="btn btn-lg btn-block siginin__button" type="submit" disabled>
							<span
								style={{ verticalAlign: 'middle', marginRight: 7 }}
								className="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
							/>
							Loading...
						</button>
					) : (
						<button className="btn btn-lg btn-block siginin__button" type="submit">
							Sign in
						</button>
					)}
				</div>

				<p className="mt-5 mb-3 text-muted text-center">© 2017-2020</p>
			</form>
		</div>
	);
}

export default SigininV2;
