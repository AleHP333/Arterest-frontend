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
            dispatch({type: "aaaaaaaaa" , payload: res.data })

            return res.data.response.comments.reverse()
        } else {
            dispatch({type: "aaaaaaaaa" , payload: {msg: "Please write a message", success: "error"} })
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
        dispatch({type: "aaaaaaaaa", payload: res.data})

        return res.data.response.comments.reverse()
    }
}

export function deleteComment(id){
    const token = localStorage.getItem("token")
    return async function(dispatch){
        const res = await axios.put(`${url}/likeComments/deleteComment`, {commentId: id}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch({type: "aaaaaaaaa", payload: res.data})
    }
}
