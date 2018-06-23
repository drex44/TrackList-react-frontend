import axios from 'axios';
import {config} from '../../config';

export const API = axios.create({
    baseURL: config.API_ENDPOINT
  });

export const Services = {
  createNewList : 'createCList',
  editList : 'updateCList',
  getAllLists : 'getAllCList',
  getListById : 'getCListById',
  deleteList : 'deleteCList',
  searchLists : 'search'
}