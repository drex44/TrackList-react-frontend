import actions from "./actions";
import { API, Services } from "../../utils";
import { prepareHeaders } from "../../utils/api";

const getAllPublicLists = () => {
  return function(dispatch, getState) {
    let sessionToken = getState().profileReducer.sessionToken;
    let headers = prepareHeaders(sessionToken);
    API.post(Services.getAllPublicList, { headers: headers }).then(res => {
      dispatch(actions.getAllPublicLists(res.data));
    });
  };
};

const getAllPrivateLists = () => {
  return function(dispatch, getState) {
    let sessionToken = getState().profileReducer.sessionToken;
    let headers = prepareHeaders(sessionToken);
    API.post(Services.getAllPrivateLists, null, { headers: headers }).then(
      res => {
        dispatch(actions.getAllPrivateLists(res.data));
      }
    );
  };
};

async function getListById(id) {
  let response = await API.post(Services.getListById, {
    id: id
  }).then(res => {
    return res.data;
  });
  return response;
}

const clearSelectedList = () => {
  return function(dispatch) {
    dispatch(actions.getListById({}));
  };
};

const createList = list => {
  list.tasks.map(task => delete task.id);
  return function(dispatch, getState) {
    let sessionToken = getState().profileReducer.sessionToken;
    let headers = prepareHeaders(sessionToken);
    API.post(Services.createNewList, list, { headers: headers }).then(res => {
      list = res.data;
      dispatch(actions.createList(list));
    });
  };
};

const deleteList = id => {
  return function(dispatch, getState) {
    let sessionToken = getState().profileReducer.sessionToken;
    let headers = prepareHeaders(sessionToken);
    API.post(Services.deleteList, { id: id }, { headers: headers }).then(
      res => {
        dispatch(actions.deleteList(id));
      }
    );
  };
};

const editList = list => {
  return function(dispatch, getState) {
    let sessionToken = getState().profileReducer.sessionToken;
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionToken
    };
    list.tasks.map(task => {
      if (task.id.toString().length <= 3) delete task.id;
      return task;
    });
    API.post(Services.editList, list, { headers: headers }).then(res => {
      dispatch(actions.updateList(res.data));
    });
  };
};

const searchLists = text => {
  return function(dispatch) {
    API.post(Services.searchLists, { text: text }).then(res => {
      dispatch(actions.searchLists(res.data));
    });
  };
};

const clearSearchLists = () => {
  return function(dispatch) {
    dispatch(actions.searchLists([]));
  };
};

export default {
  editList,
  deleteList,
  createList,
  getAllPublicLists,
  getAllPrivateLists,
  getListById,
  searchLists,
  clearSearchLists,
  clearSelectedList
};
