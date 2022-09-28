import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getUserById, updateProfile } from '../../redux/actions/productActionsTest';

export default function EditUserProfile() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.testReducer.getUser)
    const { id } = useParams()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        userName: '',
        userImage: '',
        names: '',
        surnames: '',
        country: '',
        city: '',
    })

    useEffect(() => {
        if (!user) {
            dispatch(getUserById(id))
        }
        if (user){
            setInput({
                userName: user.userName,
                userImage: user.userImage,
                names: user.names,
                surnames: user.surnames,
                country: user.country,
                city: user.city,
            })
        }
    }, [user])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await dispatch(updateProfile({ ...input, _id: user._id }))
        navigate(`/profile`)
    }

}