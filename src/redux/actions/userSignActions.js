
import axios from "axios";

const url = "http://localhost:3001"  

export function signIn(emailAndPass){
    return async function(dispatch){
        const response = await axios.post(`${url}/userSign/signIn`, emailAndPass, { validateStatus: false })
        if(response.status === 200){
            localStorage.setItem("token", response.data.token);

            dispatch({type: "USER_STATUS", payload: { userData: response.data.userData, msgData: response.data.msgData}})
            return "success"
        } else {
            dispatch({type: "MESSAGE", payload: { msgData: response.data.msgData }})
            return "error"
        }
    }
}


export function verifyToken(token){
    return async function(dispatch){
        const response = await axios.get(`${url}/userSign/signInToken`, {
            headers: { Authorization: "Bearer " + token }
        });
        if(response.status === 200){
            dispatch({type: "USER_STATUS", payload: { userData: response.data.userData, msgData: undefined }});
        } else {
            localStorage.removeItem("token");
            dispatch({type: "MESSAGE", payload: { msgData: response.data.msgData }});
        }
    }
}

export function verifyEmail(id){
    return async function(dispatch){
        const response = await axios.get(`${url}/userSign/verifyEmail/${id}`)

        if(response.status === 201){
            dispatch({type: "MESSAGE", payload: { msgData: response.data.msgData }})
        } else {
            dispatch({type: "MESSAGE", payload: { msgData: response.data.msgData }})
        }
    }
}

//password, email, userName
export function singUp(userData){
    return async function(dispatch){
        const response = await axios.post(`${url}/userSign/signUp`, userData, { validateStatus: false })
        if(response.status === 201){
            dispatch({type: "MESSAGE", payload: { msgData: response.data.msgData }})
            return "success"
        } else {
            dispatch({type: "MESSAGE", payload: { msgData: response.data.msgData }})
            return "error"
        }
    }
}

export function unLog(){
    localStorage.removeItem("token")
    return {type: "USER_UNLOG", payload: { userData: {}, msgData: { msg: "Unlogged successfully", status: "info"}} }
}