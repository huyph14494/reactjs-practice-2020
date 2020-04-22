import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackendApi from 'src/api/backend';
import * as actions from 'src/redux/actions/authBackend'

const PUBLIC_URL = process.env.PUBLIC_URL;
let isStatusLogin = false;

const handleSubmit = async ({ event, username, password, props, history }) => {
	event.preventDefault();

	if (String(username.current.value).trim() !== '' && String(password.current.value).trim() !== '') {
    try {
      let user = await BackendApi.get();
      props.loginBackend(user);
      history.replace('/');
      isStatusLogin = true;
    } catch (errorCatch) {
      console.log("handleSubmit", errorCatch);
    }
	}
};

function Signin(props) {
  let history = useHistory();
	const username = useRef('');
  const password = useRef('');
  
  console.log('Signin Signin'); // React.StrictMode call 2 time in dev, in production one time

  useEffect(() => {
    if(props.authBackend.user && isStatusLogin) {
      history.replace('/'); // call many time show warning
    } else if(!props.authBackend.user) {
      isStatusLogin = false;
    }

    return () => {
      console.log("Signin clear");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginBackend: (user) => {
      dispatch({ type: actions.LOGIN_BACKEND_SUCCESS, user })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
