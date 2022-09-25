import React, { useEffect } from "react";
import "./card.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addToFav} from "./FavAndCart";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Card({
  userName,
  userImage,
  title,
  img,
  _id,
  price,
  ADDtoCart,
  rating,
  handleAdded,
  handleNotAdded,
  setFavProducts,
}) {
  const [likes, setLikes] = useState(0);
  const [count, setcount] = useState(1);
  const [likeActive, setLikeActive] = useState(false);
  const selector = useSelector((state) => state.CartReducer.cart.cartItem);


  function handleAddtoCart() {
    
    const hasProduct = selector.find(x => x.product === _id)

    if(hasProduct){
      if(hasProduct.quantity>=hasProduct.stock.stockTotal){
        toast.error('Se ha superado el limite de Stock disponible', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
    else if(hasProduct.quantity>=hasProduct.stock.stockTotal === false){
       toast.warning('El item ya se encuentra en su carrito', {
         position: 'top-right',
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       })
       ADDtoCart(_id,count)
     }
  }
  else {
      toast.success('Item Agregado Correctamente', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    ADDtoCart(_id,count)
  }}
  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(selector));
    //console.log(localStorage);
  }, [selector])

 
  return (
    <div className="container" key={_id}>
      <div className="img-container">
        <Link to={`/detail/${_id}`}>
          <img src={img} alt="" />
        </Link>
        <div className="user-info">
          <button onClick={() => setLikes(likes + 1)}>
            <AiOutlineHeart
              onClick={() => {
                setLikeActive(true);
              }}
              fill={likeActive === true ? "red" : ""}
            />
          </button>
          <h6>{likes}</h6>
          <h2>{title}</h2>
          <img src={userImage} alt="" />
          <Link to={"/artistprofile/" + userName}>
            <h5>{userName}</h5>
          </Link>
          <span>{price}</span>
        </div>
      </div>
      <ul className="social-media">
        <li>
          <a href="#">
            <i className="gr gr-pin">
              <AiFillPushpin
                onClick={(e) =>
                  addToFav(
                    userName,
                    userImage,
                    title,
                    img,
                    _id,
                    price,
                    handleAdded,
                    handleNotAdded,
                    e,
                    setFavProducts
                  )
                }
              />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="gr gr-bag">
              <AiFillShopping
                onClick={(e) =>
                  handleAddtoCart(_id,count,
                    userName,
                    userImage,
                    title,
                    img,
                
                    price,
                    handleAdded,
                    handleNotAdded,
                    e,)}
                
              />
            </i>
          </a>
        </li>
      </ul>
      <div></div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
