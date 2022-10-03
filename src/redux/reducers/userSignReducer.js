const initialState = {
    userData: undefined,
    message: undefined
}

const userSignReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "USER_STATUS":
            return {
                ...state,
                userData: action.payload.userData,
                message: action.payload.msgData
            }  
        case "MESSAGE":
            console.log("entro aca")
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
        case "USER_UNLOG_FROM_APP":
            return {
                ...state,
                userData: undefined
            }
        case "CLEAN_MSG":
            return {
                ...state,
                message: undefined
            }
        default:
            return state
    }
}

export default userSignReducer;