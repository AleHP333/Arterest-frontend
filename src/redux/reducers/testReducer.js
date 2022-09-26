const { GET_PAINT_BY_ID } = require('../actions/productActionsTest');

const initialState = {
  products: [],
  allProducts: [],
  isLoading: true,
  paintDetail: undefined,
  getAnArtist: [],
  getUser: [],
  allUsers: [],
  paintComments: []
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
    case "ART_FILTER_BY_BACK":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        isLoading: false,
      };
    case "ART_FILTER":
      function filterPaints(state, action) {
        let paints = [...state.products]
        if (action.payload === "minValue") {
          paints = paints.sort((a, b) => a.price - b.price)
        }
        if (action.payload === "maxValue") {
          paints = paints.sort((a, b) => a.price - b.price).reverse()
        }
        return paints
      }
      return {
        ...state,
        allProducts: filterPaints(state, action)
      }
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
    case "CLEAN_GET_ONE_PAINT": 
      return {
        ...state,
        paintDetail: action.payload
      }
    case 'GET_USER_BY_ID':
      return {
        ...state,
        getUser: action.payload,
      }
      case 'GET_ALL_USERS':
        return {
          ...state,
          allUsers: action.payload,
        }
        case 'UPDATE_PRODUCT':
          const allArtworkUpdated = state.allProducts.map(item =>
              item._id === action.payload._id ? action.payload : item);

          const artworkUpdated = state.products.map(item =>
              item._id === action.payload._id ? action.payload : item);

          return {
              ...state,
              allProducts: allArtworkUpdated,
              products: artworkUpdated,
              paintDetail: action.payload
          }
    case "GET_COMMENTS":
      return {
        ...state,
        paintComments: action.payload
      }
    default:
      return state;
  }
}
