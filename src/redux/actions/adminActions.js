import axios from "axios";

export function productPost(formData) {
  console.log(formData, "form en el action");
  try {
    async function a(dispatch) {
      console.log(formData, "form en el action despues del return");
      const post = await axios
        .post("http://localhost:3001/paints/createProducts", formData)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    }

    return a();
  } catch (error) {
    console.log(error);
  }
}
