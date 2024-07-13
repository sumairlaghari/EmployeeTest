import { API_BASED_URL } from './urls';
import {create} from 'apisauce';
import { errorMessage } from './notificationMessage';

export const errorHandler = err => {
  let msg = 'Network Request Failed.';

  if(err?.data?.message === 'Unauthenticated.'){
    //store?.dispatch({type:GlobalImports.types.Logout})
    return 'Unauthenticated';
  }

  if (parseInt(err?.status) === 422) {
    msg = String(Object.values(err?.data['errors'])[0][0]);
  } else {
    msg = err?.response?.data?.error;
  }
  return msg;
};

const API = create({
  baseURL:API_BASED_URL,
  timeout: 40000
});

export const getRequest = async (endpoint,token,param) =>{
    const response = await API.get(`${API_BASED_URL}${endpoint}`,param,{
      headers: {
        'Content-Type': 'application/json',
        //Authorization:` Bearer ${token}`,
      },
    });
    //console.log(response);
    if (response.ok) {
      return response;
    }else{
      response.data !== null && errorMessage(errorHandler(response))
      return null
    }
};

export const postRequest = async (endpoint,body,token) =>{
  const response = await API.post(`${API_BASED_URL}${endpoint}`,body,{
    headers: {
      'Content-Type': 'application/json',
      //Authorization:` Bearer ${token}`,
    },
  });
  //console.log(response)
    if (response.ok) {
      return response;
    }else{
      response.data !== null && errorMessage(errorHandler(response))
      return null
    }
};

export const deleteRequest = async (endpoint,body,token) =>{
  const response = await API.delete(`${API_BASED_URL}${endpoint}`,body,{
    headers: {
      'Content-Type': 'application/json',
      //Authorization:` Bearer ${token}`,
    },
  });
  //console.log(response)
    if (response.ok) {
      return response;
    }else{
      response.data !== null && errorMessage(errorHandler(response))
      return null
    }
};

export const updateRequest = async (endpoint,body,token) =>{
  const response = await API.put(`${API_BASED_URL}${endpoint}`,body,{
    headers: {
      'Content-Type': 'application/json',
      //Authorization:` Bearer ${token}`,
    },
  });
  //console.log(response)
    if (response.ok) {
      return response;
    }else{
      response.data !== null && errorMessage(errorHandler(response))
      return null
    }
};