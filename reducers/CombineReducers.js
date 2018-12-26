import { combineReducers } from "redux";

import * as dataReducers from "./DataReducers";
import { uiReducers } from "./UiReducers";

const CombineReducers = combineReducers({
    ui: uiReducers,

    products: dataReducers.products,
    cart: dataReducers.cart
});

export default CombineReducers;
