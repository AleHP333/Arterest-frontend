import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
//MUI
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { cleanMsg } from '../../redux/actions/userActions';

export default function Alert() {
    const dispatch = useDispatch()
    const message = useSelector((state) => state.userSignReducer.message)
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if(message !== undefined){
            setOpen(true)
        }
    }, [message])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            dispatch(cleanMsg())
            return;
        }
        setOpen(false);
        dispatch(cleanMsg())
    };
    return (
        <div>
            {message !== undefined ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal:"center" }}>
                <Alert onClose={handleClose} severity={message.status} sx={{ width: '100%' }}>
                    {message.msg}
                </Alert>
            </Snackbar> : null}
        </div>
    )
}
