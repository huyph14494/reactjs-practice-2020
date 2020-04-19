import { combineReducers } from 'redux';
import status from 'src/redux/reducers/status';
import num from 'src/redux/reducers/num';
import note from 'src/redux/reducers/note';
import news from 'src/redux/reducers/news';
import authBackend from './reducers/authBackend';

let allReducers = combineReducers({
	status,
	num,
	note,
  news,
  authBackend
});

export default allReducers;