import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// El compose se usa en composeEnhancers
import { authReducer } from "../components/reducers/authReducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
});
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);