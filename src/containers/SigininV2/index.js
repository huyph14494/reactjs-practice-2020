import React, { useState } from 'react';
import './style.scss';

const PUBLIC_URL = process.env.PUBLIC_URL;

export default function SigininV2() {
  const [ loading, setLoading ] = useState(false);

  return (
    <div className="container max-width-450 padding-30">
      <form
        className="form-signin border-radius-10 background-white padding-30 siginin__form"
      >
        <div className="text-center mb-4">
          <img className="mb-4" src={PUBLIC_URL + '/images/logo.png'} alt="" width={72} height={72} />
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

        <div className="siginin__button__container">
          <div className="siginin__button__div"></div>
          {loading ? (
            <button className="btn btn-lg btn-primary btn-block" type="submit" disabled>
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
  )
}
