const initialState = {
    postMsg: {}
}

export default function adminReducer(state = initialState, action){
    switch(action.type){
        case "POST_ACTIVITY":
            return {
                ...state,
                postMsg: action.payload
            }
        default: return state
    }
}