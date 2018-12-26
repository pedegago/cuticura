import ActionTypes from "./ActionTypes";

export const onToggleNavigation = (expanded) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.TOOGLE_NAVIGATION,
            payload: expanded
        });
    };
};

export const onSetBreadcrumb = (path) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.BREADCRUMB_PATH,
            payload: path
        });
    };
};

export const onToggleCart = (expanded) => {
    return async (dispatch) => {
        dispatch({
            type: ActionTypes.TOGGLE_CART,
            payload: expanded
        });
    };
};
