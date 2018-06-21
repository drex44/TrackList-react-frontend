import listReducer from './lists';
import { createStore, combineReducers } from "redux";

// import * as reducers from "./ducks";

export default function configureStore( initialState ) {
    const rootReducer = combineReducers( listReducer );

    return createStore(
        rootReducer,
        initialState,
    );
}