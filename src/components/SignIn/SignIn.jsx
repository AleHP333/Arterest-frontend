import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/userSignActions";
import { Link } from "react-router-dom";


export default function SignIn() {

    const dispatch = useDispatch()
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
            dispatch(signIn(values))
            signForm.handleReset();
        },
    });

    return (
        <div className="flex bg-gray-600 justify-center items-center shadow-lg">
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
            </div>
        </div>
    )
}