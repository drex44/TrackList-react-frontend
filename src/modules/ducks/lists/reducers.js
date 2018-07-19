import types from "./types";
import _ from "lodash";
import { defaultState, findListIndexFromId } from "./utils";

const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ALL_PUBLIC_LISTS: {
      let lists = action.payload;
      return Object.assign({}, state, { publicLists: lists });
    }

    case types.GET_ALL_PRIVATE_LISTS: {
      let lists = action.payload;
      return Object.assign({}, state, { privateLists: lists });
    }

    case types.SEARCH_LISTS: {
      let lists = action.payload ? action.payload : [];
      return Object.assign({}, state, { searchResult: lists });
    }

    case types.GET_LIST_BY_ID: {
      let newState = { ...state };
      newState.selectedList = action.payload;
      return newState;
    }

    case types.CREATE_LIST: {
      let lists = state.publicLists ? [...state.publicLists] : [];
      lists.push(action.payload);
      return Object.assign({}, state, { publicLists: lists });
    }

    case types.DELETE_LIST: {
      let lists = [...state.publicLists];
      let index = findListIndexFromId(lists, action.payload);
      lists.splice(index, 1);
      return Object.assign({}, state, { publicLists: lists });
    }

    case types.UPDATE_LIST: {
      let publicLists = [...state.publicLists];
      let privateLists = [...state.privateLists];
      let index1 = findListIndexFromId(publicLists, action.payload.id);
      publicLists[index1] = action.payload;
      let index2 = findListIndexFromId(privateLists, action.payload.id);
      privateLists[index2] = action.payload;
      let newState = _.cloneDeep(state);
      return Object.assign(
        {},
        newState,
        { publicLists: publicLists },
        { privateLists: privateLists }
      );
    }

    default:
      return state;
  }
};

export default listReducer;
