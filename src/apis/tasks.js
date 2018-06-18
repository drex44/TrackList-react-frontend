import API, { Services } from './api';

export async function GetAllCList(props){
    
    const response = await API.post(Services.getAllLists)
        .then(res => {
            props.setState({
            clists:res.data
          });
          return res.data;
        })

    return response;

}

export async function createNewList(list){

    const response = await API.post(Services.createNewList, list)
        .then( res => {
            return res.data;
        })

}