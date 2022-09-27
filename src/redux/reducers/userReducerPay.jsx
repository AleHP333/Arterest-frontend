import { SET_USER, SET_PURCHASES} from '../actions/userAction.jsx'



const initialState={
    user:null,
    purchases: [],
    
};

function userReducer (state = initialState, { type, payload}) {
    switch(type){
        case SET_USER: return {...state, user: payload}
        case SET_PURCHASES: return {...state, purchases: payload}
        default: return state
    }
};

export default userReducer;