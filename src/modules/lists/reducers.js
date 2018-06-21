import types from './types';
import { defaultState } from './utils';

const listReducer = (state = defaultState, action) => {
    switch (action.type){
        case types.CREATE_LIST:
        break;
        case types.DELETE_LIST:
        break;
        case types.FETCH_ALL:
        return {lists:action.payload};
        break;
        case types.UPDATE_LIST:
        break;
        default:
            return state;
    }
}

export default listReducer;