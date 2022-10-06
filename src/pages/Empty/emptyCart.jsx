import {Link} from 'react-router-dom'
import './empC.css'
import e from "../Assets/shopp.png"
export default function EmptyCart(){

  return (
    <div className="div">
      <h1 className="h1">The cart list is empty!</h1>
      <img className="imgC" src = {e} ></img>
      <Link className="notFoundLink" to="/home">Back to <span className="span">Homepage</span></Link>
    </div>
  )
}