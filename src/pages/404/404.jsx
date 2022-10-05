import {Link} from 'react-router-dom'
import './404.css'
import c from "../Assets/404.png"
export default function CuatroOCuatro(){

  return (
    <div className="notFoundDiv">
      <h1 className="notFoundH1">404, Page not found</h1>
      <img src = {c} ></img>
      <Link className="notFoundLink" to="/home">Return <span className="notFoundSpan">/home</span></Link>
    </div>
  )
}