import { cartReducer } from "./reducers/cart-reducer.js";
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cartModule: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));