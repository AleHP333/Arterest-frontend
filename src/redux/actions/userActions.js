import axios from "axios";

const url = "http://localhost:3001"

export function addComment(paintId, comment){
    const token = localStorage.getItem("token")
    return async function(dispatch){
        if(comment !== ""){
            const res = await axios.post(`${url}/likeComments/addComment`, {paintId: paintId, comment: comment}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            dispatch({type: "MESSAGE" , payload: res.data })
        } else {
            dispatch({type: "MESSAGE" , payload: {msg: "Please write a message", success: "error"} })
        }
    }
}

export function modifyComment(commentId, comment){
    const token = localStorage.getItem("token")
    return async function(dispatch){
        const res = await axios.put(`${url}/likeComments/modifyComment`, {commentId: commentId, comment: comment}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch({type: "MESSAGE", payload: res.data})
        //Con esto se va a poder manipular la respuesta forma inmediana
        return res
    }
}

export function deleteComment(){
    const token = localStorage.getItem("token")
    return async function(dispatch){
        const res = await axios.delete(`${url}/likeComments/deleteComment`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch({type: "MESSAGE", payload: res.data})

        return res
    }
}
