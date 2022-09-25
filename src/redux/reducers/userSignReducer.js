const initialState = {
    userData: undefined,
    message: {}
}


const userSignReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "USER_STATUS":
            return {
                ...state,
                userData: action.payload.userData,
                message: action.payload.msgData
            }  
        case "MESSAGE":
            return {
                ...state,
                message: action.payload.msgData
            }
        case "USER_UNLOG":
            return {
                ...state,
                userData: undefined,
                message: action.payload.msgData
            }
        default:
            return state
    }
}

export default userSignReducer;