import * as actions from 'src/redux/actions/authBackend'

const initialState = {
	user: null,
	loading: false
};

export default (state = initialState, { type, user }) => {
	switch (type) {
		case actions.LOGIN_BACKEND:
			return { ...state, loading: true };
		case actions.LOGIN_BACKEND_SUCCESS:
			return { ...state, user, loading: false };
		default:
			return state;
	}
};
