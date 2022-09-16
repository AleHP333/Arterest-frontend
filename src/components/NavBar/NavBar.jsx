import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";


export default function NavBar(){
    return(
        <nav class='flex w-full justify-between mb-10 pb-5 border-b border-gray-300 fixed top-0 z-10 bg-gray-100'>
            <Link to='/home'>
                <h1>Home</h1>
            </Link>
            <Searchbar />
            <Link to='/favorites'>
                <h1>fav</h1>
            </Link>
            <Link to='/login'>
                <h1>Log In</h1>
            </Link>
            <Link to='/signup'>
                <h1>Sign Up</h1>
            </Link>
            <Link to='/cart'>
                <h1>cart</h1>
            </Link>
        </nav>
    )
}