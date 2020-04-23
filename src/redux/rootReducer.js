import { combineReducers } from 'redux';
import status from 'src/redux/reducers/status';
import num from 'src/redux/reducers/num';
import note from 'src/redux/reducers/note';
import news from 'src/redux/reducers/news';
import authBackend from './reducers/authBackend';
import alert from './reducers/alert';
import alertAnimation from './reducers/alertAnimation';

let allReducers = combineReducers({
	status,
	num,
	note,
  news,
  authBackend,
  alert,
  alertAnimation
});

export default allReducers;