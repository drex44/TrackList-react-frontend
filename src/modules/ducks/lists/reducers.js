import types from "./types";
import _ from "lodash";
import { defaultState, findListIndexFromId } from "./utils";

const listReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ALL_PUBLIC_LISTS: {
      let publicLists = action.payload;
      let newState = _.cloneDeep(state);
      newState.publicLists = publicLists;
      return newState;
    }

    case types.GET_ALL_PRIVATE_LISTS: {
      let privateLists = action.payload;
      let newState = _.cloneDeep(state);
      newState.privateLists = privateLists;
      return newState;
    }

    case types.SEARCH_LISTS: {
      let searchResult = action.payload ? action.payload : [];
      let newState = _.cloneDeep(state);
      newState.searchResult = searchResult;
      return newState;
    }

    case types.GET_LIST_BY_ID: {
      let newState = _.cloneDeep(state);
      newState.selectedList = action.payload;
      return newState;
    }

    case types.CREATE_LIST: {
      let searchResult = state.publicLists ? [...state.publicLists] : [];
      searchResult.push(action.payload);
      let newState = _.cloneDeep(state);
      newState.searchResult = searchResult;
      return newState;
    }

    case types.DELETE_LIST: {
      let publicLists = _.cloneDeep(state.publicLists);
      let index1 = findListIndexFromId(publicLists, action.payload);
      publicLists.splice(index1, 1);

      let privateLists = _.cloneDeep(state.privateLists);
      let index2 = findListIndexFromId(privateLists, action.payload);
      console.log(index2);
      privateLists.splice(index2, 1);

      let newState = _.cloneDeep(state);
      newState.publicLists = publicLists;
      newState.privateLists = privateLists;

      return newState;
    }

    case types.UPDATE_LIST: {
      let publicLists = _.cloneDeep(state.publicLists);
      let privateLists = _.cloneDeep(state.privateLists);
      let index1 = findListIndexFromId(publicLists, action.payload.id);
      publicLists[index1] = action.payload;
      let index2 = findListIndexFromId(privateLists, action.payload.id);
      privateLists[index2] = action.payload;
      let newState = _.cloneDeep(state);
      newState.publicLists = publicLists;
      newState.privateLists = privateLists;
      return newState;
    }

    default:
      return state;
  }
};

export default listReducer;
