import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductSearchbar } from "../../redux/actions/productActionsTest";

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
        <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="search" value={input} 
                placeholder="Search..." onChange={handleStateChanges} required/>
                <button type="submit">Search</button>
        </form>
    )
}