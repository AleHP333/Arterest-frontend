import axios from "axios";

export function productPost(formData) {
  console.log(formData, "form en el action");
  async function a(dispatch) {
    console.log(formData, "form en el action despues del return");
    const post = await axios
      .post("/paints/createProducts", formData)
      .then((response) => response.data)
      .catch();
    return dispatch({ type: "POST_ACTIVITY", payload: post });
  }
  try {
    return a();
  } catch (error) {
    console.log(error);
  }
}
