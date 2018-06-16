import API from './api';

export async function GetAllTasks(props){
    
    const response = await API.post('getAllCList')
        .then(res => {
          console.log(res);
          return res.data;
        })

    return response;
    
}
export async function GetAllCList(props){
    
    const response = await API.post('getAllCList')
        .then(res => {
          props.setState({
            clists:res.data
          });
          console.log(props.state);
          return res.data;
        })

    return response;
    
}