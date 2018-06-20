import axios from 'axios';
import {config} from '../config';

export default axios.create({
    baseURL: config.API_ENDPOINT
  });

export const Services = {
  createNewList : 'createCList',
  editList : 'updateCList',
  getAllLists : 'getAllCList',
  getListById : 'getCListById',
  deleteList : 'deleteCList'
}