const { GET_PAINT_BY_ID } = require('../actions/productActionsTest');

const initialState = {
    products: [],
    allProducts: [],
    isLoading: true,
    paintDetail: [],
    getAnArtist: []
}

export default function testReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
        return {
            ...state,
            products: action.payload,
            allProducts: [...action.payload],
            isLoading: false,
        };
        case "ART_FILTER":
        return {
            ...state,
            allProducts: action.payload,
            isLoading: false,
        };
        case "ACTIVE_LOADING":
        return {
            ...state,
            isLoading: true,
        };
        case "GET_PRODUCT_SEARCHBAR":
        return {
            ...state,
            products: action.payload,
            allProducts: action.payload,
        };
        case "GET_AN_ARTIST":
        return {
            ...state,
            getAnArtist: action.payload,
            isLoading: true,
        };
        case "REMOVE_ARTIST_SELECTED":
        return {
            ...state,
            getAnArtist: [],
        };
        case GET_PAINT_BY_ID:
        return {
            ...state,
            paintDetail: action.payload,
        }
        default:
            return state;
    }
}
