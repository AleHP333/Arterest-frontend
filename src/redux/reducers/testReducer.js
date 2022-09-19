const initialState = {
  products: [],
  allProducts: [],
  isLoading: true,
  getAnArtist: [],
};

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
      function filterPaints(state, action){
        console.log(action.payload)
        console.log(state.allProducts)
        let paints = [...state.products]
        if(action.payload === "minValue"){
          paints = paints.sort((a, b) => a.price - b.price)
        }
        if(action.payload === "maxValue"){
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
    default:
      return state;
  }
}
