import * as actions from 'src/redux/actions/photoModal';

const initialState = { toggle: false, item: null };

export default (state = initialState, { type, item }) => {
	switch (type) {
		case actions.CLOSE_PHOTO_MODAL:
			return { ...state, toggle: false, item: null };
		case actions.SHOW_PHOTO_MODAL:
			return { ...state, toggle: true, item };
		default:
			return state;
	}
};
