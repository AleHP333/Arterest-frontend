import axios from "axios";

const url = "https://arterest-back.herokuapp.com"


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

            return res.data.response.comments.reverse()
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
        dispatch({type: "MESSAGE", payload: res.data})
    }
}

export function likeDisplike(id){
    const token = localStorage.getItem("token")
    return async function(dispatch){
        const res = await axios.get(`${url}/likeComments/likeDislike/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return res.data.response
    }
}

export function cleanMsg(){
    return {type: "CLEAN_MSG", payload: undefined}
}

export function sendRequest(request){
    const token = localStorage.getItem("token")
    return async function(dispatch){
        const res = await axios.post(`${url}/artist/artistRequest`, request, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch({type: "MESSAGE", payload: res.data})
    }
}


//GUEST AND USER
export function contactUs(data){
    return async function(dispatch){
        const res = await axios.post(`${url}/users/contactUs`, data, { validateStatus: false })
        dispatch({type: "MESSAGE", payload: res.data})
    }
}

