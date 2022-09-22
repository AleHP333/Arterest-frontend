
import axios from "axios";



export function signIn(emailAndPass){
    return async function(dispatch){
        console.log(emailAndPass)
        const response = await axios.post("http://localhost:3001/userSign/signIn", emailAndPass)
        if(response.status === 200){
            localStorage.setItem("token", response.data.token);

            dispatch({type: "USER_STATUS", payload: { userData: response.data.userData, msgData: { msg:`Welcome ${response.data.userData.name}`, success: "success" }}})
        } else {
            dispatch({type: "MESSAGE", payload: {msgData: { msg: response.data.msg, success: "error" }}})
        }
    }
}


export function verifyToken(token){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/userSign/signInToken", {
            headers: { Authorization: "Bearer " + token }
        });
        if(response.status === 200){
            localStorage.setItem("token", response.data.token);

            dispatch({type: "USER_STATUS", payload: { userData: response.data.userData, msgData: { msg: `Welcome ${response.data.userData.name}`, success: "success" }}});
        } else {
            localStorage.removeItem("token");
            dispatch({type: "MESSAGE", payload: { msgData: { msg: "Session has expired", success: "error" }}});
        }
    }
}

export function verifyEmail(id){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/userSign/verifyEmail/${id}`)

        if(response.status === 201){
            dispatch({type: "MESSAGE", payload: { msgData: { msg: response.data.msg, success: "success"}}})
        } else {
            dispatch({type: "MESSAGE", payload: { msgData: { msg: response.data.msg, success: "error" }}})
        }
    }
}

//password, email, userName
export function singUp(userData){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/userSign/signUp", userData);
        if(response.status === 201){
            dispatch({type: "MESSAGE", payload: { msgData: { msg: "User created", success: "success" }}})
        } else {
            dispatch({type: "MESSAGE", payload: { msgData: { msg: response.data.msg, success: "error" }}})
        }
    }
}