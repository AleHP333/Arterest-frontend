import {Link} from 'react-router-dom'
import './empC.css'
import s from "../Assets/hstry.png"
export default function EmptyShopH(){

  return (
    <div className="div">
      <h1 className="h1">The Shopping history is empty!</h1>
      <img className="imgC" src = {s} ></img>
      <Link className="notFoundLink" to="/home">Back to <span className="span">Homepage</span></Link>
    </div> 
  )
}