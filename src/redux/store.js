import { createStore, combineReducers } from "redux";
import statusReducer from "src/redux/reducers/statusReducer";
import numReducer from "src/redux/reducers/numReducer";
import noteReducer from "src/redux/reducers/noteReducer";
import newsReducer from "src/redux/reducers/newsReducer";

let allReducers = combineReducers({
    status: statusReducer, 
    num: numReducer, 
    note: noteReducer,
    news: newsReducer
});

let store = createStore(allReducers);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
