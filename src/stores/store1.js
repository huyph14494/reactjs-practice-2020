import { createStore, combineReducers } from "redux";
import statusReducer from "src/reducers/statusReducer";
import numReducer from "src/reducers/numReducer";
import noteReducer from "src/reducers/noteReducer";

let allReducers = combineReducers({
    status: statusReducer, 
    num: numReducer, 
    note: noteReducer
});

let store1 = createStore(allReducers);

store1.subscribe(() => {
    console.log(store1.getState());
});

export default store1;
