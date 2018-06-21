import types from './types';

const createList = (list) => ({
    type:types.CREATE_LIST,
    payload:list
})

const fetchAllLists = () => ({
    type:types.FETCH_ALL
})

const updateList = (list) => ({
    type:types.UPDATE_LIST,
    payload:list
})

const deleteList = (id) => ({
    type:types.DELETE_LIST,
    payload:id
})

export default {
    createList,
    fetchAllLists,
    updateList,
    deleteList
}