import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
// Logger with default options
import logger from "redux-logger";

import * as reducers from "./ducks";

export default function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk, logger)
  );

  return store;
}
