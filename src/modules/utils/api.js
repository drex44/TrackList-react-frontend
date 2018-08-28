import axios from "axios";
import Config from "../../config";

export const API = axios.create({
  baseURL: Config.API_ENDPOINT
});

export const Services = {
  getAllPublicList: "getAllPublicList",
  searchLists: "search",
  authenticate: "authenticate",
  createNewList: "user/createList",
  editList: "user/updateList",
  getListById: "user/getListById",
  deleteList: "user/deleteList",
  getAllPrivateLists: "user/getAllList",
  addPublicListToUserList: "user/addPublicListToUserList"
};

export const prepareHeaders = sessionToken => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + sessionToken
  };
  return headers;
};
