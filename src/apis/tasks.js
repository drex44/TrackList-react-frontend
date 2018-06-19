import API, { Services } from './api';

export async function getAllCList(props){
    
    const response = await API.post(Services.getAllLists)
        .then(res => {
            props.setState({
            clists:res.data
          });
          return res.data;
        })

    return response;

}

export async function getListById(id){
    
    const response = await API.post(Services.getListById, {id:id})
        .then(res => {
          return res.data;
        })

    return response;

}

export async function deleteList(id){
    
    const response = await API.post(Services.deleteList, {id:id})
        .then(res => {
          return res.data;
        })

    return response;

}

export async function createNewList(list){
    
    list.tasks.map ((task) => delete(task.id));

    const response = await API.post(Services.createNewList, list)
        .then( res => {
            return res.data;
        })
    return response;
}

export async function editList(list){

    list.tasks.map ((task) => {if(task.id.toString().length<=3) delete(task.id) });

    const response = await API.post(Services.editList, list)
        .then( res => {
            return res.data;
        })
    return response;
}