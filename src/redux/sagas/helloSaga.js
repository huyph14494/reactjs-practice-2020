import { put, takeEvery } from 'redux-saga/effects';

const delay = (ms) => new Promise((res) => {
  setTimeout(function(){
    console.log("in delay 1000");
    res();
  }, ms)
});

// function* helloSaga() {
// 	console.log('Hello Sagas!', yield);
// }

function* incrementAsync() {
  console.log("call incrementAsync");
  yield delay(1000);
  console.log("after delay 1000");
  yield put({ type: 'INCREMENT' }); // rerender
  console.log("after Effect put");
}

function* watchIncrementAsync() {
  console.log("call watchIncrementAsync");
  yield takeEvery('INCREMENT_ASYNC', incrementAsync); // rerender
  console.log("after takeEvery");
}

export default [ watchIncrementAsync() ];
