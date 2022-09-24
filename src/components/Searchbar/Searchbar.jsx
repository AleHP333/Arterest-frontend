// From React
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Actions
import { getProductSearchbar } from "../../redux/actions/productActionsTest";
// Icons
import { AiOutlineSearch} from 'react-icons/ai'

export default function Searchbar() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleStateChanges(e){
        e.preventDefault()
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input) {
            dispatch(getProductSearchbar(input))
            navigate(`/home?art=${input}`)
        }
        setInput('');
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='rounded-lg items-center gap-2 px-2 mx-6 border flex justify-center'>
                <button className='my-1 text-2xl' type="submit"><AiOutlineSearch /></button>
                <input className='self-center focus:outline-none' type="text" name="search" value={input} 
                placeholder="Search..." onChange={handleStateChanges} required/>
        </form>
    )
}