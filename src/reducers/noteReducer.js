const initialState = {
    context: '',
    user: ''
};

export default (state = initialState, { type, item }) => {
    switch (type) {

    case 'CHANGE_NOTE':
        return {...state, context: item.context, user: item.user }

    default:
        return state
    }
}

