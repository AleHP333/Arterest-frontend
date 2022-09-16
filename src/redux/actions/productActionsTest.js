import axios from 'axios'


export function getAllProducts(){
    return async function(dispatch){

        const res = await axios.get('http://localhost:3001/paints/allpaints')
        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: res.data
        })
    }}

export function artFilterByBack(payload) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/searchFilters?${payload}`)
        dispatch({
            type: "ART_FILTER",
            payload: response.data
        });
    };
};

export function activeLoading(){
    return {type: "ACTIVE_LOADING"}
};

export function getAnArtist(userName){
    return async function(dispatch){
        const res = await axios.get(`http://localhost:3001/paints/allpaints?art=${userName}`)
        console.log(res.data, 'SOY EL USERNAME');
        dispatch({
            type: 'GET_AN_ARTIST',
            payload: res.data
        })
    }}