import React from "react";
import "./card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { addToFav, addToCart } from "./FavAndCart";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({
  userName,
  userImage,
  title,
  img,
  _id,
  price,
  cardLikes,
  handleAdded,
  handleNotAdded,
  setFavProducts,
}) {
 
  return (
    <div className="container" key={_id}>
      <div className="img-container">
        <Link to={`/detail/${_id}`}>
          <img src={img} alt="" />
        </Link>
        <div className="user-info">
          <button >
            <FavoriteIcon/>
          </button>
          <h6>{cardLikes}</h6>
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
                  addToCart(
                    userName,
                    userImage,
                    title,
                    img,
                    _id,
                    price,
                    handleAdded,
                    handleNotAdded,
                    e
                  )
                }
              />
            </i>
          </a>
        </li>
      </ul>
      <div></div>
    </div>
  );
}
