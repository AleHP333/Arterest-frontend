import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { changePassword, verifyCode } from '../../redux/actions/userSignActions';
import { useNavigate, useParams } from 'react-router-dom';

//MUI
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button"
import CircularProgress from '@mui/material/CircularProgress';

const regEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

export default function SetPass() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useParams()
    const [sended, setSended] = useState(false)
    const [loading, setLoading] = useState(false)
    //PASS
    const [success, setSuccess] = useState(false)
    const [seePass, setSeepass] = useState(false)
    const [password, setPassword] = useState(undefined);
    const [password1, setPassword1] = useState(undefined);
    const [error, setError] = useState(undefined);
    
    console.log("soy la token", token)
    
    useEffect(() => {
        if(password !== undefined || password1 !== undefined){
            if(password1 !== password){
                setError("Passwords are different")
            } else if (!regEx.test(password)){
                setError("Passwords needs: 8 characters, one especial character and one number at least")
            } else {
                setError(undefined)
            }
        }
        if(token && sended === false){
            dispatch(verifyCode(token))
            .then((res) => {
                if(res === "success"){
                    setSuccess(true)
                }
                setSended(true)
                setLoading(true)
            })
        }
    }, [password, password1])


    function submitPassword(){
        if(password !== password1){
            return setError("Passwords are different")
        } else if (!regEx.test(password)){
            return setError("Passwords needs: 8 characters, one especial character and one number at least")
        } else {
            setError(undefined)
            dispatch(changePassword({code: token, password: password}))
                .then((res) => {
                    if(res === "success"){
                        return navigate("/signIn")
                    }
                })
        }
    }
    return (
        <div className='w-full pt-5 pl-10'>
            <h1 className='text-5xl mb-5'>CHANGE YOUR PASSWORD:</h1>
            {loading ? <>{success ? 
                <>
                    <div className='flex items-center'>
                        <div>
                            <input 
                                className='ml-5 border my-4 w-72 block border-gray-400 mr-3 px-1 py-2 rounded focus:border-teal-500'
                                type={seePass ? "text" : "password"} 
                                value={password} 
                                onChange={(e) => {setPassword(e.target.value)}} 
                                placeholder='Your Password' 
                            />
                            <input 
                                className='ml-5 border my-4 w-72 block border-gray-400 mr-3 px-1 py-2 rounded focus:border-teal-500'
                                type={seePass ? "text" : "password"} 
                                value={password1} 
                                onChange={(e) => {setPassword1(e.target.value)}} 
                                placeholder='Password again'
                            />
                        </div>
                        {seePass ? <IconButton onClick={() => setSeepass(false)}><VisibilityIcon/></IconButton> : <IconButton onClick={() => setSeepass(true)}><VisibilityOffIcon/></IconButton>}
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <Button variant='contained' sx={{width: "280px", mx:"20px", my:"20px"}} onClick={() => {submitPassword()}}>CHANGE PASSWORD!</Button>
                </>
            : <p className='text-5xl mb-5'>INVALID TOKEN</p>}</> : <><CircularProgress /></>}
        </div>
    )
}
