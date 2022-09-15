import axios from "axios";

export function productPost(formData){
    return async function(dispatch){
        const post = await axios.post("http://localhost:3001/paints/createProducts", formData).then(response => response.data).catch()
        return dispatch({type: "POST_ACTIVITY", payload: post})
    }
}