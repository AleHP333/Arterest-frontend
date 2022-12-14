import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from '../../redux/actions/userSignActions';

export default function GoogleSignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleResponse(response){
        let userObject = jwt_decode(response.credential);
        let res = await dispatch( signIn({
            email: userObject.email,
            password: userObject.sub,
            from: "google"
        }))

        
        if(res === "error"){
            //EN TEORIA ESTO SIRVE PARA DEVOLVER UN MENSAJE XD
        } else {
            navigate("/signIn")
        }
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "561045653442-a2i50ijo1f86a3g692l9ag9ou1a27q4a.apps.googleusercontent.com",
            callback: handleResponse,
        });

        google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
            theme: "outline", 
            size: "large", 
            locale: "en",
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark'
        })
    }, [])

    return (
        <div className="flex justify-center transition-opacity w-full">
            <div id="buttonDiv"></div>
        </div>
    )
}