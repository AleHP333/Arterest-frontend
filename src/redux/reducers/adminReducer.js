const initialState = {
    postMsg: {},
    unChecked: []
}

export default function adminReducer(state = initialState, action){
    switch(action.type){
        case "POST_ACTIVITY":
            return {
                ...state,
                postMsg: action.payload
            }
        case "GET_UNCHECKED":
            return {
                ...state,
                unChecked: action.payload
            }
        default: return state
    }
}