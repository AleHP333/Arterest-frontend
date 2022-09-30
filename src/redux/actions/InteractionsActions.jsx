import axios from 'axios';
const GET_TRANSACTION = 'GET_TRANSACTION';


export const getTransaction = (queries) => {
  return async (dispatch) => {
    dispatch({type: "SET_LOADING", payload: "spin"})
    axios(`http://localhost:3001/payment/capture-order` + queries).then(
      (res) => {
        dispatch({type: "SET_LOADING", payload: "none"})
        dispatch({ type: 'CLEAR_CART' });
        dispatch({ type: 'SET_TRANSACTION_DETAIL', payload: res.data.data});
      }
    )
    .catch(()=>{
      dispatch({type: "SET_LOADING", payload: "none"})
      dispatch({ type: 'CLEAR_CART' })})

  };
};
