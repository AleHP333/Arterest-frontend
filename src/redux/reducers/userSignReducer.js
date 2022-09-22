const initialState = {
    userData: {},
    message: {}
}


const userSignReducer = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default userSignReducer;