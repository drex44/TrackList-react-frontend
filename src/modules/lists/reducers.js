import types from "./types";
import _ from "lodash";
import { defaultState, findListIndexFromId, setSelectedList } from "./utils";

const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_ALL:
      var lists = action.payload;
      return Object.assign({}, state, { lists: lists });

    case types.SEARCH_LISTS:
      var lists = action.payload ? action.payload : [];
      return Object.assign({}, state, { searchResult: lists });

    case types.GET_LIST_BY_ID:
      var newState = { ...state };
      newState.selectedList = action.payload;
      return newState;

    case types.CREATE_LIST:
      var lists = state.lists ? [...state.lists] : [];
      lists.push(action.payload);
      return Object.assign({}, state, { lists: lists });

    case types.DELETE_LIST:
      var lists = [...state.lists];
      var index = findListIndexFromId(lists, action.payload);
      lists.splice(index, 1);
      return Object.assign({}, state, { lists: lists });

    case types.UPDATE_LIST:
      var lists = [...state.lists];
      var index = findListIndexFromId(lists, action.payload.id);
      lists[index] = action.payload;
      var newState = _.cloneDeep(state);
      return Object.assign({}, newState, { lists: lists });

    default:
      return state;
  }
};

export default listReducer;
