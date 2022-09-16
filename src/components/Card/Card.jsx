import React from 'react'
import './card.css'
import { GrFavorite } from 'react-icons/gr'
import { BsBag } from 'react-icons/bs'

function Card({ userName, userImage, title, img, _id, price }) {
  return (
    <div className='container' key={_id}>
      <div className='img-container' >
        <img src={img} alt="" />
        <div className='user-info'>
          <h2 >{title}</h2>
          <img src={userImage} alt="" />
          <h5 >{userName}</h5>
          <span>{price}</span>
        </div>
      </div>
      <ul className='social-media'>
        <li><a href="#"><i className="gr gr-favorite" ><GrFavorite /></i></a></li>
        <li><a href="#"><i className="gr gr-bag"><BsBag /></i></a></li>
      </ul>
      <div>
      </div>
    </div>

  )
};
export default Card;

