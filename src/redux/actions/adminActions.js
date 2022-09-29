import axios from "axios";

const url = "http://localhost:3001";

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

export function banUser(user) {
  console.log(user, "user antes del return");
  const token = localStorage.getItem("token");
  try {
    return async () => {
      const response = await axios.put(`${url}/adminActions/banUser`, user, {
        headers: { Authorization: "Bearer " + token },
      });
    };
  } catch (error) {
    console.error(error);
  }
}

export function turnArtist(user){
  const token = localStorage.getItem("token");
  try {
    return async (dispatch) => {
      const response = await axios.put(`${url}/adminActions/artistUser`, user, {
        headers: { Authorization: "Bearer " + token },
      });
      return dispatch({type: "MESSAGE", payload: response.data})
    };
    
  } catch (error) {
    
  }
}

export function getRequests(){
  const token = localStorage.getItem("token");
  try {
    return async () => {
      const response = await axios.get(`${url}/adminActions/getArtistRequest`, {
        headers: { Authorization: "Bearer " + token },
      });
      return response.data
    };
  } catch (error) {
    console.error(error);
  }
}




// export function getAllUsers() {
//   console.log("getAllUsers", "antes del return");
//   return async function (dispatch) {
//     console.log("getAllUsers");
//     const allUsers = await axios.get(`${url}/adminActions/getAllUsers`);
//     dispatch({ type: "GET_ALL_USERS", payload: allUsers.data });
//   };
// }
