
import {Link} from 'react-router-dom'
import './empC.css'
import f from "../Assets/Fav.png"
export default function EmptyFav(){


  return (
    <div className="div">
      <h1 className="h1">The favs list is empty!</h1>
      <img className="imgC" src = {f}></img>
      <Link className="notFoundLink" to="/home">Back to <span className="span">Homepage</span></Link>
    </div>
  )
}