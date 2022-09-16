import React from 'react'
import './card.css'
import { GrFavorite } from 'react-icons/gr'
import { AiFillShopping } from 'react-icons/ai'
import { AiFillPushpin } from 'react-icons/ai';
import { addToFav, addToCart } from './FavAndCart';
import { useState } from 'react';



function Card({ userName, userImage, title, img, _id, price, rating, handleAdded, handleNotAdded }) {
  const [likes, setLikes] = useState(0)
  const [likeActive, setLikeActive] = useState(false)

  return (
    <div className='container' key={_id}>
      <div className='img-container' >
        <img src={img} alt="" />
        <div className='user-info'>
          <button onClick={() => setLikes(likes + 1)}   >
            <GrFavorite
              onClick={() => { setLikeActive(true) }}
              color={likeActive === true ? '#F44336' : 'rgb(50, 50, 50)'}
            />
          </button>
          <h6>{likes}</h6>
          <h2 >{title}</h2>
          <img src={userImage} alt="" />
          <h5 >{userName}</h5>
          <span>{price}</span>
        </div>
      </div>
      <ul className='social-media'>
        <li><a href="#"><i className="gr gr-pin" ><AiFillPushpin onClick={() => addToFav(userName, userImage, title, img, _id, price, handleAdded, handleNotAdded)} /></i></a></li>
        <li><a href="#"><i className="gr gr-bag"><AiFillShopping onClick={() => addToCart(userName, userImage, title, img, _id, price, handleAdded, handleNotAdded)} /></i></a></li>
      </ul>
      <div>
      </div>
    </div>

  )
};
export default Card;

