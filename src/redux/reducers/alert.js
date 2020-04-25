import * as actions from 'src/redux/actions/alert';

const initialState = {
  context: '',
  variant: 'danger',
	toggle: 0
};

export default (state = initialState, { type, context, variant }) => {
	switch (type) {
		case actions.SHOW_ALERT:
      return { ...state, context, variant, toggle: 1 };
      
      case actions.HIDDEN_ALERT:
        return { ...state, toggle: 2 };

		case actions.CLOSE_ALERT:
			return { ...state, context: '', toggle: 0 };

		default:
			return state;
	}
};
