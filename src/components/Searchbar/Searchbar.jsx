import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductSearchbar } from "../../redux/actions/productActionsTest";
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
    // function handleSubmit(e){
    //     e.preventDefault();
    //     dispatch(getProductSearchbar(input));
    // }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)} class='flex justify-center h-full'>
                <input class='rounded-l w-1/2' type="text" name="search" value={input} 
                placeholder="  Search..." onChange={handleStateChanges} required/>
                <button class='rounded-r bg-white text-2xl' type="submit"><AiOutlineSearch /></button>
        </form>
    )
}