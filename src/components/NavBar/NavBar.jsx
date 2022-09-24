// React Utilities
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import Searchbar from "../Searchbar/Searchbar";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import AccountMenu from "../AccountMenu/AccountMenu";
// Icons
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
// Arterest Logo
import art_logo from '../../pages/Assets/logoArterest.png'
// Custom Styles
import './NavBar.css';

export default function NavBar() {
  
  const loggedUser = useSelector((state) => state.userSignReducer.userData)

  useEffect(() => {

  }, [loggedUser])

  return (
    <nav className="mb-3 flex flex-row items-center w-full py-2 bg-white">
      <div className="flex flex-row items-center">
        <Link to="/" className="flex flex-row navbar-brand mr-6">
          <img className="navbarLogo w-8 h-8 mx-auto relative inset-x-0 top-0 rounded-full" src={art_logo} alt="Arterest" />
          <span>Arterest</span>
        </Link>

        <Link to="/home" className="text-2xl">
          <AiFillHome />
        </Link>
      </div>

      <Searchbar />

      <div className="flex gap-8 ml-auto items-center mr-8">
        <Link to="/favorites" className="text-2xl">
          <AiFillPushpin />
        </Link>

        <Link to="/cart" className="text-2xl">
          <AiFillShopping />
        </Link>

        <Link to="/login" className="text-2xl">
          <AiOutlineUser />
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
