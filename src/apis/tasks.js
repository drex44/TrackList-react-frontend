import API, { Services } from './api';

export async function getListById(id){
    
    const response = await API.post(Services.getListById, {id:id})
        .then(res => {
          return res.data;
        })

    return response;

}