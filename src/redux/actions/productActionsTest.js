import axios from "axios";

const url = "http://localhost:3001"


export const GET_PAINT_BY_ID = "GET_PAINT_BY_ID";

export function getAllProducts() {
  return async function (dispatch) {
    const res = await axios.get(`${url}/paints/allpaints`);
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: res.data,
    });
  };
}

export function getPaintById(id) {
  return async function (dispatch) {
    const res = await axios.get(`${url}/paints/getOnePaint/${id}`);
    dispatch({
      type: GET_PAINT_BY_ID,
      payload: res.data
    })
  }
}

export const getProductSearchbar = (input) => (dispatch) => {
  console.log("hola entre a la accion");
  async function search(dispatch) {
    console.log("hola entre al dispatch");
    const { data } = await axios.get(
      `${url}/paints/allpaints?art=${input}`
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
      `${url}/searchFilters?${payload}`
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
      `${url}/paints/allpaints?art=${userName}`
    );
    console.log(res.data, "SOY EL USERNAME");
    dispatch({
      type: "GET_AN_ARTIST",
      payload: res.data,
    });
  };
}

export function getComments(paintId){
  return async function(dispatch){
      const comments = await axios.get(`${url}/likeComments/getPaintComments/${paintId}`)
      dispatch({type: "GET_COMMENTS", payload: comments.data.response.comments })
      return comments.data.response.comments.reverse()
  }
}

export function artFilter(price){
  return {type: "ART_FILTER", payload: price}
}

export function getUserById(id) {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/user/${id}`);
    dispatch({
      type: 'GET_USER_BY_ID',
      payload: res.data
    })
  }
}

export function getAllUsers(id) {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/user/`);
    dispatch({
      type: 'GET_ALL_USERS',
      payload: res.data
    })
  }
}

export const updateProduct = (artwork) => {
  return async function (dispatch) {
      const response = await axios.put(`http://localhost:3001/paints/allpaints?art=${artwork._id}`,
          artwork);
          console.log(response)
      return dispatch({
          type: 'UPDATE_PRODUCT',
          payload: response.data
      });
  };
};