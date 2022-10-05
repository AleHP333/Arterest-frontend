import {Link} from 'react-router-dom'
import './404.css'
import c from "../Assets/404.png"
export default function CuatroOCuatro(){

  return (
    <div className="div">
      <h1 className="h1">Page not found</h1>
      <img className="img" src = {c} ></img>
      <Link className="notFoundLink" to="/home">Back to <span className="span">Homepage</span></Link>
    </div>
  )
}