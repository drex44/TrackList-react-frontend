import axios from "axios";
import { config } from "../../config";

export const API = axios.create({
  baseURL: config.API_ENDPOINT
});

export const Services = {
  createNewList: "createList",
  editList: "updateList",
  getAllPublicList: "getAllPublicList",
  getListById: "getListById",
  deleteList: "deleteList",
  searchLists: "search",
  authenticate: "authenticate",
  getAllPrivateLists: "getAllPrivateLists"
};

export const prepareHeaders = sessionToken => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + sessionToken
  };
  return headers;
};
