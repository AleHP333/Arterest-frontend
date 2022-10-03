import axios from "axios";

const url = "http://localhost:3001";

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
      payload: res.data,
    });
  };
}

export const getProductAutocomplete = (input) => (dispatch) => {
  console.log("hola entre a la accion");
  async function search(dispatch) {
    console.log("hola entre al dispatch");
    const { data } = await axios.get(`${url}/paints/autocomplete?art=${input}`);
    console.log(data);
    dispatch({
      type: "GET_PRODUCT_AUTOCOMPLETE",
      payload: data,
    });
  }
  return search(dispatch);
};
export function cleanStateGetOnePaint() {
  console.log("ENTRO EN CLEAN");
  return { type: "CLEAN_GET_ONE_PAINT", payload: undefined };
}

export const getProductSearchbar = (input) => (dispatch) => {
  async function search(dispatch) {
    const { data } = await axios.get(`${url}/paints/allpaints?art=${input}`);
    dispatch({
      type: "GET_PRODUCT_SEARCHBAR",
      payload: data,
    });
  }
  return search(dispatch);
};

export function artFilterByBack(payload) {
  return async function (dispatch) {
    const response = await axios.get(`${url}/searchFilters?${payload}`);
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
    const res = await axios.get(`${url}/paints/allpaints?art=${userName}`);
    dispatch({
      type: "GET_AN_ARTIST",
      payload: res.data,
    });
  };
}

export function getComments(paintId) {
  return async function (dispatch) {
    const comments = await axios.get(
      `${url}/likeComments/getPaintComments/${paintId}`
    );
    dispatch({
      type: "GET_COMMENTS",
      payload: comments.data.response.comments,
    });
    return comments.data.response.comments.reverse();
  };
}

export function artFilter(price) {
  return { type: "ART_FILTER", payload: price };
}

export function getUserById() {
  const token = localStorage.getItem("token")
  return async function (dispatch) {
    const res = await axios.get(`${url}/users/`, {
      headers: { Authorization: "Bearer " + token }
  });
    dispatch({
      type: "GET_USER_BY_ID",
      payload: res.data,
    });
  };
}

export function getAllUsers(id) {
  const token = localStorage.getItem("token");
  return async function (dispatch) {
    const res = await axios.get(`${url}/adminActions/getAllUsers`, {
      headers: { Authorization: "Bearer " + token },
    });
    dispatch({
      type: "GET_ALL_USERS",
      payload: res.data,
    });
  };
}

export const updateProduct = (artwork) => {
  const token = localStorage.getItem("token");
  return async function (dispatch) {
    const response = await axios.put(
      `${url}/adminActions/modifyProduct/`,
      artwork,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    return dispatch({
      type: "MESSAGE",
      payload: response.data
    });
  };
};

export const updateProfile = (user) => {
  console.log('entré a la action')
  const token = localStorage.getItem("token")
  return async function (dispatch) {
      const response = await axios.put(`${url}/users/modifyUserProfile/`, user, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response, 'HOLA')
      dispatch({type: "USER_STATUS", payload: { userData: response.data.userData, msgData: undefined }});
  };
};

export function getOrders() {
  const token = localStorage.getItem("token");
    return async (dispatch) => {
      const response = await axios.get(`${url}/adminActions/getAllOrders`, {
        headers: { Authorization: "Bearer " + token },
      });
      dispatch({ type: "GET_ALL_ORDERS", payload: response.data });
    };
}
