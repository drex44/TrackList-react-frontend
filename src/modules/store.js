import listReducer from "./lists";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
// Logger with default options
import logger from "redux-logger";

// import * as reducers from "./ducks";

export default function configureStore(initialState) {
  // const rootReducer = combineReducers( listReducer );

  const store = createStore(
    listReducer,
    initialState,
    applyMiddleware(ReduxThunk, logger)
  );

  return store;
}
