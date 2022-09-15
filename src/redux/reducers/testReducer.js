const initialState = {
    products: [],
    allProducts:[]
}

export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts:[ ...action.payload]
            }
        default: return state
    }
}