import * as actions from 'src/redux/actions/alertAnimation';

const initialState = {
	context: '',
	toggle: false
};

export default (state = initialState, { type, context, variant, classTransition }) => {
	switch (type) {
		case actions.SHOW_ALERT_ANIMATION:
			return { ...state, context, variant, classTransition, toggle: true };

		case actions.CLOSE_ALERT_ANIMATION:
			return { ...state, toggle: false };

		default:
			return state;
	}
};
