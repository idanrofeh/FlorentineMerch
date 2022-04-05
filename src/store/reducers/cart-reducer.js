const initialState = {
    cart: []
};

export function cartReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case 'UPDATE_CART':
            newState = { ...state, cart: action.cart };
            break;
        default:
            newState = state;
    }
    return newState;
}