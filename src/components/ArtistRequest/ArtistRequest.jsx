import React from 'react'
import { useState } from 'react'
//MUI
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { sendRequest } from '../../redux/actions/userActions';
import { useEffect } from 'react';

function handleErrors(message, url1, url2, url3){
    let errors = {}
    if(message.length < 20){
        errors.message = "Short description"
    }
    return errors
}

export default function ArtistRequest() {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [errors, setErrors] = useState({})

    const [inputMessage, setInputMessage] = useState("")
    const [inputUrl1, setInputUrl1] = useState("")
    const [inputUrl2, setInputUrl2] = useState("")
    const [inputUrl3, setInputUrl3] = useState("")
    console.log(inputMessage)
    useEffect(() => {
        setErrors(handleErrors(inputMessage, inputUrl1, inputUrl2, inputUrl3))
    }, [inputMessage, inputUrl1, inputUrl2, inputUrl3])

    function handleClose(){
        setOpen(false);
        setInputMessage("")
        setInputUrl1("")
        setInputUrl2("")
        setInputUrl3("")
    }

    function handleSubmit(){
        if(inputMessage.length < 20 || !inputUrl1.length || !inputUrl2.length || !inputUrl3.length ){
            return console.log("debes completar campos")
        } else if (errors.length){
            return console.log("arregla los errores")
        } else {
            dispatch(sendRequest({
                message: inputMessage,
                url1: inputUrl1,
                url2: inputUrl2,
                url3: inputUrl3
            }))
            setOpen(false);
            setInputMessage("")
            setInputUrl1("")
            setInputUrl2("")
            setInputUrl3("")
        }
    }

    return (
        <div>
            {open ? 
            <div className='py-4 px-4 my-50% mx-50%  bg-gray-100  border-t-2 bg-opacity-5 border-red-400 rounded-t'> 
                    <IconButton onClick={() => {handleClose()}} sx={{ width: 20, height: 20, ml: "30rem", color: 'rgba(239, 68, 68)'}} aria-label="send">
                        <CloseIcon sx={{ width: 20, height: 20}}/>
                    </IconButton>
                    <div className='flex mb-4'>
                    <p>Become an Artist!</p>
                    </div>
                    <p className='mb-4'>Complete the form with a descriptive message of you and your works, you can leave 3 paint URLS, that will let us know what kind of artist you are. You should know that if you don't meet the necessary requirements to be an artist on our website, your application will be denied. But don't give up, keep trying. We will be happy to see your progress! Thank you for choosing us! </p>
                    <h2 className='mb-4'>Message:</h2>
                    <TextField
                            sx={{ mx: 2, width: "60vh"}}
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            value={inputMessage}
                            size="small"
                            helperText={errors.message}
                            onChange={(e) => setInputMessage(e.target.value)}
                    />
                    <h3>URL-1</h3>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="title"
                        type="text"
                        onChange={(e) => setInputUrl1(e.target.value)}
                        value={inputUrl1}
                    />
                    <h3>URL-2</h3>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="title"
                        type="text"
                        onChange={(e) => setInputUrl2(e.target.value)}
                        value={inputUrl2}
                    />
                    <h3>URL-3</h3>
                    <input
                        className="border border-gray-400  block py-2 w-full rounded focus:border-teal-500"
                        id="title"
                        type="text"
                        onChange={(e) => setInputUrl3(e.target.value)}
                        value={inputUrl3}
                    />
                <button 
                 className="text-white text-center rounded-md mt-2 bg-red-500  hover:bg-red-600 py-2 px-4 inline-flex items-center focus:outline-none "
                onClick={() => {handleSubmit()}} >Send</button>
                </div> 
            : <button 
            className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-red-500  hover:bg-red-600 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
            onClick={() => {setOpen(true)}} >Become An Artist</button> }
        </div>
    )
}

