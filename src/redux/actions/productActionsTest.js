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
