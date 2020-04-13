const initialState = [1,2,3,4,5];

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'ADD_NUM':
        return [...state, 10]

    case 'GET_NUM':
        return [...state]

    default:
        return [...state]
    }
}

