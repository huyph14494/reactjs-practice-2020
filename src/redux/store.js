import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer.js'
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

// test saga
// setTimeout(function(){
//   const action = type => store.dispatch({type})
//   action('INCREMENT_ASYNC');
// }, 2000);

store.subscribe(() => {
	console.log("subscribe", store.getState());
});

export default store;
