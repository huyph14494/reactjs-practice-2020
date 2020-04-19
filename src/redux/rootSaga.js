import { all } from 'redux-saga/effects';
import hello from './sagas/hello.js'
import authBackend from './sagas/authBackend.js';

export default function* rootSaga() {
  yield all([
    ...hello,
    ...authBackend
  ])
}