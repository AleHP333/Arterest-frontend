// React Utilities
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import Searchbar from "../Searchbar/Searchbar";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import AccountMenu from "../AccountMenu/AccountMenu";
// Material UI
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// Icons
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import HomeIcon from '@mui/icons-material/Home';
// Arterest Logo
import art_logo from '../../pages/Assets/logoArterest.png'
// Custom Styles
import './NavBar.css';

export default function NavBar() {
  
  const loggedUser = useSelector((state) => state.userSignReducer.userData)

  useEffect(() => {

  }, [loggedUser])

  return (
    <nav className="flex flex-row sticky top-0 items-center w-full py-3 bg-white z-50">
      <div className="flex flex-row items-center mr-auto">
        <Link to="/" className="navbar-brand flex flex-row ml-8 gap-1 items-center">
          <div className="flex w-8 h-8">
            <img alt="" src={art_logo}/>
          </div>
          <span className="text-red-500">Arterest</span>
        </Link>

        <Link to="/home" className="ml-6">
          <Tooltip title="Home">
            <IconButton>
              <HomeIcon fontSize="large" className="text-black"/>
            </IconButton>
          </Tooltip>
        </Link>
      </div>

      <Searchbar />

      <div className="flex gap-8 ml-auto items-center mr-8">
        <Link to="/favorites">
          <Tooltip title="Pinned Favorites">
            <IconButton>
              <AiFillPushpin className="text-2xl text-black"/>
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/cart">
          <Tooltip title="Shopping Cart">
            <IconButton>
              <AiFillShopping className="text-2xl text-black"/>
            </IconButton>
          </Tooltip>
        </Link>

        { 
          loggedUser ?
          <AccountMenu img={loggedUser.userImage} userName={loggedUser.userName}/> : 
          <Link to="/signIn">
            <button type="button" className="text-white bg-red-500 hover:bg-red-600 focus:outline-none rounded-full text-center w-max px-4 py-2 font-bold">Log in</button>
          </Link>
        }

      </div>
    </nav>
  );
}
