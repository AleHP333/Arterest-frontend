import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
//MUI
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function Alert() {
    const message = useSelector((state) => state.userSignReducer.message)
    const [reload, setReload] = useState(true)
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setReload(!reload)
        console.log("reload y msg", message.msg, reload)
        if(message.msg && reload){
            setOpen(true)
        }
    }, [message])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setReload(false)
        setOpen(false);
    };
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal:"center" }}>
                <Alert onClose={handleClose} severity={message.status} sx={{ width: '100%' }}>
                    {message.msg}
                </Alert>
            </Snackbar>
        </div>
    )
}
