import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:4000/'
  });

export var Services = {
  createNewList : 'createCList',
  editList : 'updateCList',
  getAllLists : 'getAllCList',
  getListById : 'getCListById',
  deleteList : 'deleteCList'
}