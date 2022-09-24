import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { singUp } from "../../redux/actions/userSignActions";
import { Link } from "react-router-dom";
import GoogleSignUp from "../GoogleButtons/GoogleSignUp";


export default function SignUp() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Must be 6 characters or more").required("Required"), //string().matches^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$ //  8-16 may minus Puede tener otros símbolos.
        }),
        onSubmit: async (values) => {
            console.log(values, "values");
            dispatch(singUp({...values, from: "signUp"}))
            formik.handleReset();
        },
    });
    return (
        <div className="flex bg-gray-600 justify-center items-center shadow-lg">
            <div className="flex justify-between flex-col shadow-lg bg-gray-100 rounded-xl my-8 mx-8 py-8 px-5">
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="text-4xl font-bold text-gray-500 m-5"><h1>Sign Up</h1></div>
                    <div>
                        <label htmlFor="userName" className="text-gray-500">Name</label>
                        <input
                            className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
                            id="userName"
                            name="userName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.userName && formik.errors.userName ? (
                            <div className="text-sm text-red-500">{formik.errors.userName}</div>
                        ) : null}
                        {/* {formik.errors.name && (
                            <p className="text-sm text-red-500">{formik.errors.name}</p>
                        )} */}
                    </div>

                    <div>
                        <label htmlFor="email" className="text-gray-500">Email</label>
                        <input
                            className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-sm text-red-500">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="password" className="text-gray-500">Password</label>
                        <input
                            className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-sm text-red-500">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="m-6 px-3"><button type="submit" className="rounded-lg py-4 px6 uppercase text-xs font-bold tracking-wider bg-gray-500">Sign Up</button></div>
                    <div>Already have an account? <Link to={"/signIn"}>Login here</Link></div>
                </form>
                <GoogleSignUp />
            </div>
        </div>
    )
}