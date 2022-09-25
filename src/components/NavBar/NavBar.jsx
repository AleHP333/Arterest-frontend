import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import art_logo from '../../pages/Assets/logoArterest.png'
import './NavBar.css';
import { useSelector } from "react-redux";
import AccountMenu from "../AccountMenu/AccountMenu";





export default function NavBar() {
  
  const loggedUser = useSelector((state) => state.userSignReducer.userData)

  useEffect(() => {

  }, [loggedUser])

  console.log("EL LOGGED", loggedUser)
  return (
    <nav className=" box flex flex-row justify-between w-full py-3 bg-white">
      <div className="flex flex-row">
        <img className="navbarLogo w-8 h-8 mx-auto relative inset-x-0 top-0 rounded-full" src={art_logo} alt="Arterest" />
        <Link className="navbar-brand" to="/">
          Arterest
        </Link>
      </div>

      <div class="flex w-1/3 justify-start">
        <Link to="/home" class="ml-10 text-4xl">
          <AiFillHome />
        </Link>
      </div>

      <div class="w-1/3 h-full">
        <Searchbar />
      </div>

      <div class="flex space-x-9 justify-end">

        <Link to="/favorites" class="ml-20 text-2xl">
          <AiFillPushpin />
        </Link>

        <Link to="/login" class="mr-20 text-2xl">
          <AiOutlineUser />
        </Link>

        <Link to="/cart" class="mr-5 text-2xl">
          <AiFillShopping />
        </Link>

        { loggedUser ?
          <>
            <AccountMenu img={loggedUser.userImage} userName={loggedUser.userName}/>
          </>
          : null
          // (!isLoading && <Login />)
          }
      </div>
    </nav>
  );
}
