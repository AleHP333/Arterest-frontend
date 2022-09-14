import axios from 'axios'


export function getAllProducts(){
    return async function(dispatch){

        const res = await axios.get('/')
        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: res.data
        })
    }}