import ActionTypes from "../actions/ActionTypes";

export const uiReducers = (
    state = {
        toggleNavigation: false,
        breadcrumbPath: [],
        toggleCart: false
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.TOOGLE_NAVIGATION: {
            return {
                ...state,
                toggleNavigation: action.payload
            };
        };

        case ActionTypes.BREADCRUMB_PATH: {
            return {
                ...state,
                breadcrumbPath: action.payload
            };
        };

        case ActionTypes.TOGGLE_CART: {
            return {
                ...state,
                toggleCart: action.payload
            };
        };
    }

    return state;
};
