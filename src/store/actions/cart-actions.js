export function updateCart(newCart) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_CART', cart: newCart })
    };
}