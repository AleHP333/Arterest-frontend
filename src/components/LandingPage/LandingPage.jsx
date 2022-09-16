import {React} from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";


export default function LandingPage() {
    return(
        <div class='w-full min-h-screen flex flex-col bg-gray-900'>
            <main class='flex-1 text-center'>
                <p class='text-gray-100'>holasdasdads</p>
                <Slider/>   
            </main>
            <footer class='flex flex-col md:flex-row justify-between mb-4 mt-4 sticky'>
                <button class='bg-red-800  rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150 text-gray-900'>sign up</button>
                <button class='bg-red-800  rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150 text-gray-900'>log in</button>
                <button class='bg-red-800  rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150 text-gray-900'><Link to='/home'>
                     enter as guest
                    </Link>
                     </button>
            </footer>
        </div>
    )
}