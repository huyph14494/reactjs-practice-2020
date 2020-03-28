const initialState = false;

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'CHANGE_STATUS':
        return !state

    default:
        return state
    }
}

