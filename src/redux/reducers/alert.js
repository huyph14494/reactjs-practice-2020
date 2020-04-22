import * as actions from 'src/redux/actions/alert';

const initialState = {
	context: '',
	toggle: false
};

export default (state = initialState, { type, context }) => {
	switch (type) {
		case actions.SHOW_ALERT:
			return { ...state, context, toggle: true };

		case actions.CLOSE_ALERT:
			return { ...state, context: '', toggle: false };

		default:
			return state;
	}
};
