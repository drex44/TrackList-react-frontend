import actions from './actions';
import types from './types';
import { API } from '../utils';

const editList = actions.updateList;
const deleteList = actions.deleteList;
const createList = actions.createList;

const getAllLists = () => (dispatch) => {
    API.post(API.Services.getAllLists)
    .then(res => {
        dispatch(actions.fetchAllLists(res.data));
    })
}

export default {
    editList,
    deleteList,
    createList
}