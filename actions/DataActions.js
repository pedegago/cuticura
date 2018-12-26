import ActionTypes from "./ActionTypes";

export const onFetchProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: [{namerk: "klsdjf"}]
        });
    };
};

export const onUpdateCart = (products) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.UPDATE_CART,
            payload: products
        });
    };
};
