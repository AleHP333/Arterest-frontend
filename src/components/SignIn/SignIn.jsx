import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/userSignActions";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleButtons/GoogleSignIn";
//MUI
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedUser = useSelector((state) => state.userSignReducer.userData)

    //ALERT LOGIC
    const message = useSelector((state) => state.userSignReducer.message)
    
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    //-----------

    useEffect(() => {
        if(loggedUser){
            navigate("/home")
        }
    }, [loggedUser, message])

    const signForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(4, "Must be 4 characters or more").required("Required"), //string().matches^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$ //  8-16 may minus Puede tener otros símbolos.
        }),
        onSubmit: async (values) => {
            console.log(values, "values");
            await dispatch(signIn({...values, from: "signIn"}))
            setOpen(true)
            signForm.handleReset();
        },
    });

    return (
        <div className="flex bg-gray-600 justify-center items-center shadow-lg">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.status} sx={{ width: '100%' }}>
                    {message.msg}
                </Alert>
            </Snackbar>
            <div className="flex justify-between flex-col shadow-lg bg-gray-100 rounded-xl my-8 mx-8 py-8 px-5">
                <form action="" onSubmit={signForm.handleSubmit}>
                    <div className="text-4xl font-bold text-gray-500 m-5"><h1>Sign In</h1></div>
                    
                    <div>
                        <label htmlFor="email" className="text-gray-500">Email</label>
                        <input
                            className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
                            id="email"
                            name="email"
                            type="email"
                            onChange={signForm.handleChange}
                            value={signForm.values.email}
                            onBlur={signForm.handleBlur}
                        />
                        {signForm.touched.email && signForm.errors.email ? (
                            <div className="text-sm text-red-500">{signForm.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="password" className="text-gray-500">Password</label>
                        <input
                            className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
                            id="password"
                            name="password"
                            type="password"
                            onChange={signForm.handleChange}
                            value={signForm.values.password}
                            onBlur={signForm.handleBlur}
                        />
                        {signForm.touched.password && signForm.errors.password ? (
                            <div className="text-sm text-red-500">{signForm.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="m-6 px-3"><button type="submit" className="rounded-lg py-4 px6 uppercase text-xs font-bold tracking-wider bg-gray-500">Sign Up</button></div>
                    <div>Not have an account yet? <Link to={"/signUp"}>Sign Up here</Link></div>
                </form>
                <GoogleSignIn setOpen={setOpen} />
            </div>
        </div>
    )
}