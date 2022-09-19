import axios from "axios";

export function getAllProducts() {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:3001/paints/allpaints");
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: res.data,
    });
  };
}

export const getProductSearchbar = (input) => (dispatch) => {
  console.log("hola entre a la accion");
  async function search(dispatch) {
    console.log("hola entre al dispatch");
    const { data } = await axios.get(
      `http://localhost:3001/paints/allpaints?art=${input}`
    );
    console.log(data);
    dispatch({
      type: "GET_PRODUCT_SEARCHBAR",
      payload: data,
    });
  }
  return search(dispatch);
};

export function artFilterByBack(payload) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/searchFilters?${payload}`
    );
    dispatch({
      type: "ART_FILTER_BY_BACK",
      payload: response.data,
    });
  };
}

export function activeLoading() {
  return { type: "ACTIVE_LOADING" };
}

export function getAnArtist(userName) {
  return async function (dispatch) {
    const res = await axios.get(
      `http://localhost:3001/paints/allpaints?art=${userName}`
    );
    console.log(res.data, "SOY EL USERNAME");
    dispatch({
      type: "GET_AN_ARTIST",
      payload: res.data,
    });
  };
}

export function artFilter(price){
  return {type: "ART_FILTER", payload: price}
}
