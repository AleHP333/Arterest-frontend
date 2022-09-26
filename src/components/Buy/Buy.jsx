//import React, { useEffect } from 'react';
//import axios from 'axios';
//import { Link, useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';
//import { sendOrder } from '../../redux/actions/CartActions';
//import { useDispatch } from 'react-redux';
import {getPrice} from "../Card/FavAndCart";



export default function Buy() {
    //const navigate = useNavigate();
    //const userState = useSelector((state) => state.userReducer.user);

   

    console.log(getPrice())
   

    
    // JSON.parse(localStorage.getItem('cart'));
    // const buyHandler = async () => {
    //     dispatch(sendOrder)
    //   let res = await axios.post(
    //     `/payment/create-order/` + userState?._id,
    //     { totalPrice, cartItem, userState }
    //   );
    //   window.location.href = res.data;
    //   console.log(window.location.href);
    // }

    return(
        <div>
            <div>
                <h1>Buy Order</h1>
            </div>
            </div>
              )


}