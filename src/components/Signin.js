import React from 'react';
const PUBLIC_URL = process.env.PUBLIC_URL;

function Signin(props) {
	return (
		<div className="container max-width-420 mt-3">
			<form className="form-signin">
				<div className="text-center mb-4">
					<img
						className="mb-4"
						src={PUBLIC_URL + '/images/logo.png'}
						alt=""
						width={72}
						height={72}
					/>
					<h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
				</div>
				<div className="form-label-group mb-3">
					<input
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
					/>
				</div>
				<div className="form-label-group mb-3">
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
					/>
				</div>
				<div className="checkbox mb-3 text-left">
					<label>
						<input type="checkbox" defaultValue="remember-me" /> Remember me
					</label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">
					Sign in
				</button>
				<p className="mt-5 mb-3 text-muted text-center">© 2017-2019</p>
			</form>
		</div>
	);
}

export default Signin;
