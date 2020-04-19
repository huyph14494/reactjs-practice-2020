const initialState = {
	context: '',
	user: ''
};

export default (state = initialState, { type, item }) => {
	switch (type) {
		case 'CHANGE_NOTE':
			state.context = item.context;
			state.user = item.user;
			return state;
		// return {...state, context: item.context, user: item.user }

		default:
			return state;
	}
};
