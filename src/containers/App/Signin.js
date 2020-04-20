import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { loginBackend } from 'src/redux/actions/authBackend';
import { useHistory } from 'react-router-dom';

const PUBLIC_URL = process.env.PUBLIC_URL;

const handleSubmit = ({ event, username, password, props, history }) => {
	event.preventDefault();

	if (String(username.current.value).trim() !== '' && String(password.current.value).trim() !== '') {
    props.loginBackend(history);
	}
};

function Signin(props) {
  let history = useHistory();
	const username = useRef('');
  const password = useRef('');
  
  console.log('Signin Signin'); // React.StrictMode call 2 time in dev, in production one time

  if(props.authBackend.user) {
    history.replace('/'); // call many time show warning
  }

	return (
		<div style={{ backgroundImage: 'url(' + PUBLIC_URL + '/images/background-login.jpg)' }}>
			<div className="container max-width-450 padding-30">
				<form
					onSubmit={(event) => handleSubmit({ event, username, password, props, history })}
					className="form-signin border-radius-10 background-white padding-30"
				>
					<div className="text-center mb-4">
						<img className="mb-4" src={PUBLIC_URL + '/images/logo.png'} alt="" width={72} height={72} />
						<h1 className="h3 mb-3 font-weight-normal">Floating labels</h1>
					</div>
					<div className="form-label-group mb-3">
						<input
							type="email"
							id="inputEmail"
							ref={username}
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
							ref={password}
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
					<p className="mt-5 mb-3 text-muted text-center">© 2017-2020</p>
				</form>
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		authBackend: state.authBackend
	};
};

const mapDispatchToProps = {
	loginBackend: loginBackend
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
