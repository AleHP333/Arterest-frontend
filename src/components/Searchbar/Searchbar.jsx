// From React
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Actions
import { getProductSearchbar, getProductAutocomplete } from "../../redux/actions/productActionsTest";
// Icons
import { AiOutlineSearch} from 'react-icons/ai'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// Custom Styles
import './Searchbar.css';

export default function Searchbar() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const autocomplete = useSelector((state) => state.testReducer.productAutocomplete)

    function handleStateChanges(e){
        e.preventDefault()
        setInput(e.target.value);
    }

    useEffect(() => {
      dispatch(getProductAutocomplete(input))
    }, [input, autocomplete])
    

    function handleSubmit(e) {
        e.preventDefault();
        if (input) {
            dispatch(getProductSearchbar(input))
            navigate(`/home?art=${input}`)
        }
        setInput('');
    }

    function deleteActualSearch() {
        setInput('');
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='searchBar flex justify-start w-full overflow-hidden border-2 border-gray-300 rounded-full text-gray-500 items-center gap-2 px-4 py-1 mx-6 '>
                <button className='my-1 text-2xl' type="submit"><AiOutlineSearch /></button>
                <input className='self-center focus:outline-none w-full' type="text" name="search" value={input} 
                placeholder="Search..." onChange={handleStateChanges} autocomplete="off"/>
                {
                    (input.length > 0) ?
                    <IconButton onClick={() => deleteActualSearch()} size="small" aria-label="delete">
                        <CloseIcon className="text-white p-0.5" fontSize="small"/>
                    </IconButton>
                    : null
                }
        </form>
    )
}