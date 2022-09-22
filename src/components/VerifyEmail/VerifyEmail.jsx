import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../redux/actions/userSignActions";

export default function VerifyEmail(params) {

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(id);
        dispatch(verifyEmail(id))
    }, [])

    return (
        <div>VERIFICASTE TU EMAIL</div>
    )
}