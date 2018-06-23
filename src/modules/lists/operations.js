import actions from './actions';
import { API, Services } from '../utils';

const getAllLists = () => {
    return function (dispatch) {
        API.post(Services.getAllLists)
        .then( res => {
            dispatch(actions.fetchAllLists(res.data))
        })
    }
}

const getListById = (id) => {
    return function (dispatch) {
        API.post(Services.getListById, {id:id})
        .then(res => {
            dispatch(actions.getListById(res.data));
        })
    }
}

const createList = (list) => {
    list.tasks.map ((task) => delete(task.id));
    return function (dispatch) {
        API.post(Services.createNewList, list)
        .then( res => {
            list = res.data;
            dispatch(actions.createList(list))
        })
    }
}

const deleteList = (id) => {
    return function (dispatch){
        API.post(Services.deleteList, {id:id})
            .then(res => {
              dispatch(actions.deleteList(id))
            })
    }
}

const editList = (list) => {
    return function (dispatch){

    list.tasks.map ((task) => {if(task.id.toString().length<=3) delete(task.id); return task });
    API.post(Services.editList, list)
        .then( res => {
            dispatch(actions.updateList(res.data))
        })

    }
}

const searchLists = (text) => {
    return function (dispatch) {
        API.post(Services.searchLists, {text:text})
        .then( res => {
            dispatch(actions.searchLists(res.data))
        })
    }
}

const clearSearchLists = () => {
    return function (dispatch) {
        dispatch(actions.searchLists([]))
    }
}

export default {
    editList,
    deleteList,
    createList,
    getAllLists,
    getListById,
    searchLists,
    clearSearchLists
}