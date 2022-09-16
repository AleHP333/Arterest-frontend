const initialState = {
    products: [],
    allProducts: [],
    isLoading: true,
    getAnArtist: []
}

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts: [...action.payload],
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
        case "GET_AN_ARTIST":
            return {
                ...state,
                getAnArtist: action.payload,
                isLoading: true
            }
        default: return state
    }
}