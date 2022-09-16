const initialState = {
    products: [],
    allProducts:[],
    seachedProducts: [],
    isLoading: true
}

export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts:[ ...action.payload],
                isLoading: false
            }
        case "ART_FILTER":
            return {
                ...state,
                allProducts: action.payload,
                isLoading: false
            }
        case "ACTIVE_LOADING":
            return {
                ...state,
                isLoading: true
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
