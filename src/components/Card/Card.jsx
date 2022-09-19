import React from "react";
import "./card.css";
import { AiOutlineHeart } from "react-icons/ai";
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
    id,
    price,
    rating,
    handleAdded,
    handleNotAdded,
    setFavProducts
}) {

    const [likes, setLikes] = useState(0);
    const [likeActive, setLikeActive] = useState(false);

    return (
        <div className="container" key={id}>
        <div className="img-container">
            <Link to={`/detail/${id}`}>
                <img src={img} alt="" />
            </Link>
            <div className='user-info'>
            <button onClick={() => setLikes(likes + 1)}   >
                <AiOutlineHeart
                onClick={() => { setLikeActive(true) }}
                fill=
                {likeActive === true ? 'red' : ''}
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
                        id,
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
                    onClick={() =>
                    addToCart(
                        userName,
                        userImage,
                        title,
                        img,
                        id,
                        price,
                        handleAdded,
                        handleNotAdded
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