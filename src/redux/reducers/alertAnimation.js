import * as actions from 'src/redux/actions/alertAnimation';

// const initialState = [{
// 	context: '',
//   toggle: false,
//   variant: 'danger',
//   classTransition: 'alert'
// }];

export default (state = { listAlert: [] }, { type, alert, alertId }) => {
	let listAlertNew = [];

	switch (type) {
		case actions.SHOW_ALERT_ANIMATION:
      listAlertNew = [ ...state.listAlert ];
      listAlertNew.push(alert);
			return { ...state, listAlert: listAlertNew };

		case actions.CLOSE_ALERT_ANIMATION:
			listAlertNew = state.listAlert.filter((x) => x.id !== alertId);
			return { ...state, listAlert: listAlertNew };

		default:
			return state;
	}
};
