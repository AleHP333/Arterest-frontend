const { GET_PAINT_BY_ID } = require("../actions/productActionsTest");

const initialState = {
  products: [],
  allProducts: [],
  isLoading: true,
  paintDetail: undefined,
  getAnArtist: [],
  getUser: [],
  allUsers: [],
  paintComments: [],
  orders: [],
};

function epicSliceXD(data){
  const array = []
  const sliceRounds = Math.floor(data.length / 4);
  for (let i = 0; i < sliceRounds.length; i++) {
      const element = array[i];
      const indexOfLastPaint = i * 4
      const indexOfFirstPaint = indexOfLastPaint - 4
      array.push(data.slice(indexOfFirstPaint, indexOfLastPaint))
  }
  // wip xd
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
      console.log(action)
      function filterPaints(state, action) {
        let paints = [...state.products];
        if (action.payload === "minValue") {
          paints = paints.sort((a, b) => a.price - b.price);
        }
        if (action.payload === "maxValue") {
          paints = paints.sort((a, b) => a.price - b.price).reverse();
        }
        if (action.payload === "minLikes") {
          paints = paints.sort((a, b) => a.likes.length - b.likes.length)
        }
        if (action.payload === "maxLikes") {
          paints = paints.sort((a, b) => a.likes.length - b.likes.length).reverse()
        }
        return paints
      }
      return {
        ...state,
        allProducts: filterPaints(state, action),
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
      };
    case "CLEAN_GET_ONE_PAINT":
      return {
        ...state,
        paintDetail: action.payload,
      };
    case "GET_USER_BY_ID":
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
      case 'UPDATE_PROFILE':
        const allUserUpdated = state.allUsers.map(item =>
            item._id === action.payload._id ? action.payload : item);
        return {
            ...state,
            allUsers: allUserUpdated,
            getUser: action.payload
        }
    case "GET_ALL_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}
