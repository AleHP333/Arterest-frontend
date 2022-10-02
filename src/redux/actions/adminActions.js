import axios from "axios";

const url = "http://localhost:3001";

export function productPost(formData) {
  console.log(formData, "form en el action");
    async function a(dispatch) {
      console.log(formData, "form en el action despues del return");
      const post = await axios
        .post(`${url}/paints/createProducts`, formData)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    }
    return a();
}

export function banUser(user) {
  const token = localStorage.getItem("token");
    return async (dispatch) => {
      const response = await axios.put(`${url}/adminActions/banUser`, user, {
        headers: { Authorization: "Bearer " + token },
      }, { validateStatus: false });
      return dispatch({type: "MESSAGE", payload: response.data})
    };
}

export function turnArtist(user){
  const token = localStorage.getItem("token");
    return async (dispatch) => {
      const response = await axios.put(`${url}/adminActions/artistUser`, user, {
        headers: { Authorization: "Bearer " + token },
      }, { validateStatus: false });
      return dispatch({type: "MESSAGE", payload: response.data})
    };
}

export function getRequests(){
  const token = localStorage.getItem("token");
    return async () => {
      const response = await axios.get(`${url}/adminActions/getArtistRequest`, {
        headers: { Authorization: "Bearer " + token },
      });
      return response.data
    };
}

export function getArtRequests(){
  const token = localStorage.getItem("token");
    return async () => {
      const response = await axios.get(`${url}/adminActions/getArtRequest`, {
        headers: { Authorization: "Bearer " + token },
      });
      return response.data
    };
}

export function approveArtRequest(object){
  const token = localStorage.getItem("token");
    return async (dispatch) => {
      const response = await axios.post(`${url}/adminActions/approveArt`, object, {
        headers: { Authorization: "Bearer " + token },
      }, { validateStatus: false });
      dispatch({type: "MESSAGE", payload: response.data})
    };
}

export function commentDeleteAdmin(id){
  const token = localStorage.getItem("token")
    return async function(dispatch){
        const res = await axios.put(`${url}/adminActions/deleteCommentAdmin`, {commentId: id}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }, { validateStatus: false })
        dispatch({type: "MESSAGE", payload: res.data})
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
