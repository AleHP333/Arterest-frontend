import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav class="flex flex-row justify-between w-full py-3 bg-gray-300">
      <div class="flex w-1/3 justify-start">
        <Link to="/home" class="ml-10 text-2xl">
          <AiFillHome />
        </Link>
        <Link to="/favorites" class="ml-20 text-2xl">
          <AiFillPushpin />
        </Link>
      </div>
      <div class="w-1/3 h-full">
        <Searchbar />
      </div>
      <div class="flex w-1/3 justify-end">
        <Link to="/login" class="mr-20 text-2xl">
          <AiOutlineUser />
        </Link>
        <Link to="/cart" class="mr-5 text-2xl">
          <AiFillShopping />
        </Link>
      </div>
    </nav>
  );
}
