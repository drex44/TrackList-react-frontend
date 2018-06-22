import types from './types';
import { defaultState, findListIndexFromId, setSelectedList } from './utils';

const listReducer = (state = defaultState, action) => {
    switch (action.type){

        case types.FETCH_ALL:
        return {lists:action.payload};

        case types.GET_LIST_BY_ID:
        return setSelectedList(state, action.payload);

        case types.CREATE_LIST:
        var lists = [ ...state.lists ];
        lists.push(action.payload);
        return Object.assign ({}, state, {lists : lists});

        case types.DELETE_LIST:
        var lists = [ ...state.lists];
        var index = findListIndexFromId(lists, action.payload);
        lists.splice(index, 1);
        return {lists: lists } ;

        case types.UPDATE_LIST:
        var lists = [ ...state.lists ];
        var index = findListIndexFromId(lists, action.payload.id);
        lists[index] = action.payload
        return Object.assign ({}, state, {lists : lists});

        default:
            return state;
    }
}

export default listReducer;