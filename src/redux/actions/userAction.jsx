import axios from "axios"


export const SET_USER = "SET_USER"
export const SET_PURCHASES = "SET_PURCHASES"




export function setUser(data) {
    return async (dispatch) => {
      return axios.get(`http//localhost:3001/user/${data.email}`)
      .then(res => {
        dispatch({type:SET_USER, payload: res.data.data})
      })
      .catch(error=> console.log(error))
    }
  }
  
export function updateUser(data) {
  return async (dispatch) => {
    return axios.patch(`/user/updateUser`, data)
    .then(response=> console.log(response))
  }
}


export function getPurchases (user_id) {
  return async (dispatch) => {
    return axios(`/user/buyHistory/${user_id}`)
    .then(res =>  dispatch({type: SET_PURCHASES , payload: res.data.data.transaction }))
  }
}
