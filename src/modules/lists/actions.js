import types from './types';

const createList = (list) => ({
    type: types.CREATE_LIST,
    payload: list
})

const fetchAllLists = (lists) => ({
    type: types.FETCH_ALL,
    payload: lists
})

const getListById = (list) => ({
    type: types.GET_LIST_BY_ID,
    payload: list
})

const searchLists = (lists) => ({
    type: types.SEARCH_LISTS,
    payload: lists
})

const updateList = (list) => ({
    type: types.UPDATE_LIST,
    payload: list
})

const deleteList = (id) => ({
    type: types.DELETE_LIST,
    payload: id
})

export default {
    createList,
    fetchAllLists,
    getListById,
    updateList,
    deleteList,
    searchLists
}