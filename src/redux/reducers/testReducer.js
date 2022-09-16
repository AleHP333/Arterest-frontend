const initialState = {
    products: [],
    allProducts:[],
    seachedProducts: []
}

export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts:[ ...action.payload]
            }
        case 'GET_PRODUCT_SEARCHBAR':
                return {
                    ...state,
                    products: action.payload,
                    allProducts: action.payload
                }
        default: return state
    }
}
