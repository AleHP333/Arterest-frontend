// React Utilities
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import art_logo from "../../pages/Assets/logoArterest.png";
import "./NavBar.css";
import { useSelector } from "react-redux";
// Components
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import AccountMenu from "../AccountMenu/AccountMenu";
// Material UI
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// Icons

import HomeIcon from "@mui/icons-material/Home";
// Arterest Logo

// Custom Styles
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  const loggedUser = useSelector((state) => state.userSignReducer.userData);
  const booleano = useSelector((state) => state.testReducer.booleano);
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartList"))
  );

  console.log(location.pathname);

  useEffect(() => {
    setCartItem(JSON.parse(localStorage.getItem("cartList")));
  }, [loggedUser, booleano]);

  if (location.pathname === "/signUp" || location.pathname === "/signIn") {
    return <></>;
  }

  return (
    <nav className="flex md:flex-row flex-col sticky top-0 items-center w-full py-3 bg-white z-50">
      <div className="flex flex-row justify-around items-center md:justify-start w-full md:w-1/3 gap-8 md:pl-5">
        <Link to="/" className="navbar-brand flex flex-row gap-1 items-center">
          <div className="flex w-8 h-8">
            <img alt="" src={art_logo} />
          </div>
          <span className="text-red-500">Arterest</span>
        </Link>

        <Link to="/home" className="">
          <Tooltip title="Home">
            <IconButton>
              <HomeIcon fontSize="large" className="text-black" />
            </IconButton>
          </Tooltip>
        </Link>
      </div>

      <Searchbar />

      <div className="flex gap-8 md:ml-auto items-center md:w-1/3 w-full md:justify-end justify-around md:pr-5">
        <Link to="/favorites">
          <Tooltip title="Pinned Favorites">
            <IconButton>
              <AiFillPushpin className="text-3xl text-black" />
            </IconButton>
          </Tooltip>
        </Link>

        <Link to="/cart" className="relative">
          <Tooltip title="Shopping Cart">
            <IconButton>
              <AiFillShopping className="text-3xl text-black" />
              <span className="absolute text-xs bg-rojo text-white rounded-full top-2 right-1 py-0 px-1">
                {cartItem?.length}
              </span>
            </IconButton>
          </Tooltip>
        </Link>

        {loggedUser ? (
          <AccountMenu
            img={loggedUser.userImage}
            userName={loggedUser.userName}
            isAdmin={loggedUser.isAdmin}
          />
        ) : (
          <Link to="/signIn">
            <button
              type="button"
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none rounded-full text-center w-max px-4 py-2 font-bold"
            >
              Log in
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}
