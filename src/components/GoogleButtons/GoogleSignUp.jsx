import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { signIn, singUp } from '../../redux/actions/userSignActions';
import { useNavigate } from 'react-router-dom';
//MUI


export default function GoogleSignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    async function handleResponse(response){
        let userObject = jwt_decode(response.credential);
        let res = await dispatch( singUp({
            userName: userObject.given_name,
            email: userObject.email,
            password: userObject.sub,
            userImage: userObject.picture,
            from: "google"
        }))
        
        if(res === "error"){
            //EN TEORIA ESTO SIRVE PARA DEVOLVER UN MENSAJE XD
        } else {
            await dispatch(signIn({
                email: userObject.email,
                password: userObject.sub,
                from: "google"
            }))
            navigate("/home")
          
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
        <div className='flex justify-center transition-opacity '>
            <div style={{display: "inline-block"}} id="buttonDiv"></div>
        </div>
    )
}
