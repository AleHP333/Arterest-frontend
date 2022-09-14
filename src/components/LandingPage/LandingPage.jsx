import {React} from "react";
import { Link } from "react-router-dom";


export default function LandingPage(){
    return(
        <div>
            <Link to='/signup'>
                <div>Sign up</div>
            </Link>
            <Link to='/login'>
                <div>Log in</div>
            </Link>
            <Link to='/home'>
                <div>Enter as a Guest</div>
            </Link>
        </div>
    )
}