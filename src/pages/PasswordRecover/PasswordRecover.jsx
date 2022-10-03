import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';

//MUI
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import { lightGreen } from '@mui/material/colors';
import { passwordRecoverEmail } from '../../redux/actions/userSignActions';
import CircularProgress from '@mui/material/CircularProgress';

const regEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

export default function PasswordRecover() {
    const dispatch = useDispatch();
    //STATE
    //EMAIL
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    //CODE
    const [disabled, setDisabled] = useState(false)
    const [code, setCode] = useState("");
    //PASS
    
    function sendEmail(){
        setLoading(true)
        dispatch(passwordRecoverEmail(email))
            .then((res) => {
                if(res === "success"){
                    setCheck(true)
                }
                setLoading(false)
            })
    }

    return (
        <div className='w-full pt-5 pl-10'>
            <h1 className='text-5xl mb-5'>Forgot your Password?</h1>
            <p className="pl-5 text-2xl">Write you email below and press the "send" button.</p>
            <p className="pl-5 text-2xl mb-5">After that, we sent you an e-mail to the written e-mail</p>
            <input 
                className='ml-5 border my-4 w-72 border-gray-400 mr-3 px-1 py-2 rounded focus:border-teal-500' 
                type="text" 
                value={email} 
                onChange={(e) => {setEmail(e.target.value)}} 
                placeholder='Your Email' 
            />
            {loading === false ? 
            <>{ check === false ? 
            <IconButton onClick={() => sendEmail()}><SendIcon /></IconButton> 
            : <IconButton sx={{ width: 60, height: 60, mr: "2rem", bgcolor: lightGreen[300], ":hover": { bgcolor: lightGreen[500] } }} aria-label="send">
            <CheckIcon sx={{ width: 40, height: 40}}/>
            </IconButton>}</> 
            : <CircularProgress />}
        </div>
    )
}
