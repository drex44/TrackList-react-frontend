import types from "./types";

const createList = list => ({
  type: types.CREATE_LIST,
  payload: list
});

const getAllPublicLists = lists => ({
  type: types.GET_ALL_PUBLIC_LISTS,
  payload: lists
});

const getAllPrivateLists = lists => ({
  type: types.GET_ALL_PRIVATE_LISTS,
  payload: lists
});

const getListById = list => ({
  type: types.GET_LIST_BY_ID,
  payload: list
});

const searchLists = lists => ({
  type: types.SEARCH_LISTS,
  payload: lists
});

const updateList = list => ({
  type: types.UPDATE_LIST,
  payload: list
});

const deleteList = id => ({
  type: types.DELETE_LIST,
  payload: id
});

export default {
  createList,
  getAllPublicLists,
  getAllPrivateLists,
  getListById,
  updateList,
  deleteList,
  searchLists
};
