import axios from "axios";

const url = "https://arterest-back.herokuapp.com"

export function productPost(formData) {
  console.log(formData, "form en el action");
  try {
    async function a(dispatch) {
      console.log(formData, "form en el action despues del return");
      const post = await axios
        .post(`${url}/paints/createProducts`, formData)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    }

    return a();
  } catch (error) {
    console.log(error);
  }
}
