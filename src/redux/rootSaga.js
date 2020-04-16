import { all } from 'redux-saga/effects';
import helloSaga from './sagas/helloSaga.js'

export default function* rootSaga() {
  yield all([
    ...helloSaga
  ])
}