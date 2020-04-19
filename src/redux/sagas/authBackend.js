import { put, takeEvery } from 'redux-saga/effects';
import * as actions from 'src/redux/actions/authBackend'
import BackendApi from 'src/api/backend';

function* loginBackend(action) {
  const user = yield BackendApi.get();    
  yield put({ type: actions.LOGIN_BACKEND_SUCCESS, user: user });
}

function* actionWatcher() {
  yield takeEvery(actions.LOGIN_BACKEND, loginBackend);
}

export default [ actionWatcher() ];
