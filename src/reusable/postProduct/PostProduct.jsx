import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleErrors } from './errorHandler';
// import { productPost } from '../../redux/actions/adminActions';
import "./PostProduct.css"

//MATERIAL UI IMPORTS
import TextField from "@mui/material/TextField"

import Box from "@mui/material/Box"
import Autocomplete from "@mui/material/Autocomplete"

//OTHERS
import { countries } from './countryList';

export default function PostProduct() {

    const [formData, setFormData] = useState({
        userName: "",
        userImage: "",
        title: "",
        description: "",
        img: "",
        origin: "",
        technique: "",
        style: "",
        colors: "",
        releaseDate: "",
        price: "",
        tags: ""
    });

  
    const [errors, setErrors] = useState({})
    //const [autocompleteInput, setAutocompleteInput] = useState({})
    //const dispatch = useDispatch()
    

    //FUNCTIONS

    function handleChange(e){
     
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setErrors(handleErrors({...formData, [e.target.name]: e.target.value}))
    }
    
    // function handleSelect(e){
    //     console.log(e)
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.textContent
    //     })
    //     setErrors(handleErrors({...formData, [e.target.name]: e.target.value}))
    // }

    function handleAutocompleteSelect(e){
        console.log(e)
        setFormData({
            ...formData,
            origin: e.target.textContent
        })
        setErrors(handleErrors({...formData, origin: e.target.textContent}))
    }


    // function handleSubmit(e){
    //     e.preventDefault()

    //     setErrors(handleErrors({...formData}))
    //     if(Object.keys(errors).length > 0){
    //         alert("Fix all the input errors before upload");
    //     } else {
    //         dispatch(productPost(formData))
    //     }
    // }


    console.log(errors)

    return (
        <div className='postCreatorForm'>
            <form>
                <Box
                    sx={{

                      '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField error={errors.userName && true} helperText={errors.userName} variant="filled" 
                            name="userName" 
                            value={formData.userName} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Artist Name"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <TextField error={errors.userImage && true} helperText={errors.userImage} variant="filled" 
                            name="userImage" 
                            value={formData.userImage} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Artist Image"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <TextField error={errors.title && true} helperText={errors.title} variant="filled" 
                            name="title" 
                            value={formData.title} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Title"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <TextField error={errors.description && true} helperText={errors.description} variant="filled" 
                            name="description" 
                            value={formData.description} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Description"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <TextField error={errors.img && true} helperText={errors.img} variant="filled" 
                            name="img" 
                            value={formData.img} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Image"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <TextField type="number" error={errors.releaseDate && true} helperText={errors.releaseDate} variant="filled" 
                            name="releaseDate" 
                            value={formData.releaseDate} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Release Age"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <TextField type="number" error={errors.price && true} helperText={errors.price} variant="filled" 
                            name="price" 
                            value={formData.price} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Price"
                            sx={{ m: 1 }}>
                        </TextField>
                    </div>
                    <div>
                        <Autocomplete 
                            variant="filled"
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            label="Origin"
                            value={formData.origin} 
                            onChange={(e) => {handleAutocompleteSelect(e)}}
                            options={countries}
                            sx={{ width: 220 }}
                            renderInput={(params) => <TextField sx={{ m: 1, width: 220 }} variant="filled" {...params} label="Origin"/>}
                        >
                        </Autocomplete>
                    </div>
                    <div>
                        <div>
                            {formData.tags && <p></p>}
                        </div>
                        <TextField type="number" error={errors.price && true} helperText={errors.price} variant="filled" 
                            name="price" 
                            value={formData.price} onChange={(e) => {handleChange(e)}} id="filled-basic" 
                            label="Price"
                            sx={{ m: 1 }}>
                        </TextField>

                    </div>
                </Box>
                <div className='w-20 h-20 bg-red-400 hover:bg-red-800'>

                </div>
                <label className="label100">Technique:</label>
                <input name="technique" type="text" value={formData.technique}></input>
                <label className="label100">Colors:</label>
                <label className="label100">Style:</label>
                <input name="" type="text" value={formData.style}></input>
                <label className="label100">Tags:</label>
                <input name="tags" type="text" value={formData.tags}></input>
            </form>
        </div>
    )
}
