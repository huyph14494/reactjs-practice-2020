// import { put, fork, call } from 'redux-saga/effects';

// const delay = (ms) => new Promise((res) => {
//   setTimeout(function(){
//     console.log("in delay 1000");
//     res();
//   }, ms)
// });

// function* helloSaga() {
// 	console.log('Hello Sagas!', yield);
// }

// function* incrementAsync(action) {
//   console.log("action", action);

//   console.log("call incrementAsync");
//   yield delay(2000);
//   console.log("after delay 1000");
//   yield put({ type: 'INCREMENT' }); // rerender
//   console.log("after Effect put");
// }

// function* watchIncrementAsync() {
//   console.log("call watchIncrementAsync");
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync); // rerender
//   console.log("after takeEvery");
// }


// function* incrementAsync(args) {
//   console.log("call incrementAsync", args[0]);
//   yield delay(args[1]);
//   console.log("after delay 1000" , args[0]);
//   yield put({ type: 'INCREMENT' }); // rerender
//   console.log("after Effect put", args[0]);
// }

function* watchIncrementAsync() {
  // console.log("call watchIncrementAsync");
  // let action = yield take('INCREMENT_ASYNC'); // nhu trigger, khi dispatch action thi moi next line con lai

   // thuc hien khi take (dispatch action)
  // let resultFork = yield fork(incrementAsync, ["fork", 1005]); // van chay dung thu tu ben trong incrementAsync, khi dung Promise se tu thoat ra ngoai
  // let resultCall = yield call(incrementAsync, ["call", 1000]); // van chay dung thu tu ben trong incrementAsync, khi dung Promise van cho xu ly  xong

  // console.log('resultFork', resultFork);
  // console.log('resultCall', resultCall);

  // // console.log("action", action);
  // console.log("after takeEvery");
}

export default [ watchIncrementAsync() ];
