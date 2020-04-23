import * as actions from 'src/redux/actions/alert';

const initialState = {
	context: '',
	toggle: false
};

export default (state = initialState, { type, context, variant, classTransition }) => {
	switch (type) {
		case actions.SHOW_ALERT:
			return { ...state, context, variant, classTransition, toggle: true };

		case actions.CLOSE_ALERT:
			return { ...state, context: '', variant: 'danger', classTransition: null, toggle: false };

		default:
			return state;
	}
};
