import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cleanStateGetOnePaint, getAllProducts, getPaintById, updateProduct } from '../../../redux/actions/productActionsTest';
import '../../../components/DetailProduct/DetailProduct.css'
import { checkArtwork, getPaintByIdAdmin } from '../../../redux/actions/adminActions';

//MUI
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

import { countries } from '../../ArtRequest/countryList';

const technique = ["Oil", "Pastel", "Drawing", "Watercolor", "Painting", "Digital-Art", "Microfiber", "Ink", "Fiber", "Graphite", "Pen", "Color-pen", "Photography"]

const colors = ["Aquamarine", "Black", "Brown", "Crimson", "Fuscia", "Khaki", "Red", "Turquoise", "Violet", "White", "Yellow", "Green", "Blue", "Maroon", "Pink"]

export default function ProductDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.allProducts);
    const navigate = useNavigate()
    const artDetail = useSelector((state) => state.testReducer.paintDetail)

    // useEffect(() => {
    //     if (!paint) {
    //         dispatch(getAllProducts());
    //     }
    //     setinput(paint.length ? paint.find(e => e._id === id) : {})
    // }, [paint]);

    useEffect(() => {
        if (!artDetail) {
            dispatch(getPaintByIdAdmin(id))
        }
        if (artDetail){
            setInput({
                userName: artDetail.user.userName || "unfined",
                userImage: artDetail.user.userImage,
                title: artDetail.title,
                description: artDetail.description,
                img: artDetail.img,
                origin: artDetail.origin,
                technique: artDetail.technique,
                style: artDetail.style,
                colors: artDetail.colors,
                releaseDate: artDetail.releaseDate,
                price: artDetail.price,
                stock: artDetail.stock,
                tags: artDetail.tags,
                seen: artDetail.seen
            })
        }
    }, [artDetail])

    const [input, setInput] = useState({
        userName: '',
        userImage: '',
        title: '',
        description: '',
        img: '',
        origin: '',
        technique: '',
        style: '',
        colors: '',
        releaseDate: '',
        price: '',
        stock: '',
        tags: '',
        seen: ''
    })

    console.log(input.description)
    //SELECT
    function handleSelect(e){
        if(e.target.name === "technique" && input[e.target.name].length >= 2){
            return
        }
        if(e.target.name === "colors" && input[e.target.name].length >= 3){
            return
        }
        const find = input[e.target.name].find(value => value === e.target.value)
        if(!find && e.target.value !== "Select"){
            setInput({
                ...input,
                [e.target.name]: [...input[e.target.name], e.target.value]
            })
        }
    }


    //TAG
    const [tagHolder, setTagHolder] = useState("")

    function deleteChip(name, thing){
        setInput({
            ...input,
            [name]: input[name].filter(cor => cor !== thing )
        })
    }
 
    function addTag(){
        if(input.tags.length >= 3){
            return
        }
        setInput({
            ...input,
            tags: [...input.tags, tagHolder]
        })
        setTagHolder("")
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await dispatch(updateProduct({ ...input, _id: artDetail._id }))
        navigate(`/admin/artworks`)
    }

    function handleDelete(e) {
        e.preventDefault();
        // dispatch(deleteProduct())
        navigate(`/admin/artworks`)
    }

    function handleChange(e) {
        console.log(e)
        if(e.target.id === "description"){
             setInput({
                ...input,
                [e.target.id]: e.target.innerText
            })
        } else if(e.target.name === "seen"){
            setInput({
                ...input,
                [e.target.name]: !e.target.value,
            })
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })
        }
    }

    function handleCheck(){
        dispatch(checkArtwork(artDetail._id))
    }
    return (
        !artDetail ? <p>'Loading...'</p> : 
        <div className="containerDetail mt-3 bg-white">
            <form
                onSubmit={(e) => handleSubmit(e)} className="min-h-screen px-8 pb-20 text-gray-600" >
                <div className="flex md:gap-6 lg:justify-center lg:gap-14 ">
                    <img
                        className="rounded-lg md:w-6/12 lg:w-4/12"
                        id="myimage"
                        src={input.img}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col lg:w-6/12">
                    <div className="containerPrincipalData">
                        <div className="text-gray-900 text-4xl font-medium title-font mb-2">
                            <input
                                id="title"
                                type='text'
                                placeholder={input.title}
                                value={input.title}
                                name='title'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='flex m-2 gap-2'>
                            <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src={`${input.userImage}`}
                                alt=""
                            />
                            <Link
                                className="self-center text-black-600 hover:text-black"
                                to={`/artistprofile/${input.userName}`}
                            > {input.userName}</Link>
                        </div>
                        <div
                            suppressContentEditableWarning={true}
                            name="description" 
                            contentEditable 
                            onBlur={(e) => handleChange(e)}
                            className="my-4leading-relaxed"
                            id="description">
                            {input.description}
                        </div>

                        <div className="border-b border-gray-200 mb-6 pb-0.5">
                            <div className="flex flex-col w-full">
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Style:</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            className='w-24'
                                            id="style"
                                            type='text'
                                            placeholder={input.style}
                                            value={input.style}
                                            name='style'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Release Age:</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            className='w-20'
                                            id="price"
                                            type='number'
                                            placeholder={input.releaseDate}
                                            value={input.releaseDate}
                                            name='price'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Country of origin:
                                        <select
                                            className="border ml-3 px-1 py-2 rounded focus:border-teal-500"
                                            id="origin"
                                            name="origin"
                                            type="text"
                                            onChange={(e) => {handleChange(e)}}
                                            value={input.origin}     
                                        >
                                            <option value="">Select</option>
                                            {countries.sort().map((country, index) => <option key={index} value={country}>{country}</option>)}
                                        </select>
                                    </p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                    
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Colour/s: <select
                                            className="border ml-3 px-1 py-2 rounded focus:border-teal-500"
                                            id="colors"
                                            name="colors"
                                            type="text"
                                            onChange={(e) => {handleSelect(e)}}
                                            
                                        >
                                            <option defaultValue="Select">Select</option>
                                            {colors.sort().map((tech, index) => <option key={index} value={tech}>{tech}</option>)}
                                        </select>
                                    </p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">                     
                                        {input.colors && input.colors?.map((color) => <Chip sx={{height: "15px"}} label={color} onDelete={(e) => deleteChip("colors", color)} />)}     
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Technique: 
                                        <select
                                            className="border ml-3 px-1 py-2 rounded focus:border-teal-500"
                                            id="technique"
                                            name="technique"
                                            type="text"
                                            onChange={(e) => {handleSelect(e)}}                        
                                        >
                                            <option defaultValue="Select">Select</option>
                                            {technique.sort().map((tech, index) => <option key={index} value={tech}>{tech}</option>)}
                                            <option value="Other">Other</option>
                                        </select> 
                                    </p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        {input.technique && input.technique?.map((tech) => <Chip sx={{height: "15px"}} label={tech} onDelete={(e) => deleteChip("technique", tech)} />)}
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <div className="text-base leading-4 text-gray-800">Tags:  
                                        <div className='ml-3 inline-block'>
                                            <input
                                                className="border inline-block px-1 py-2 w-3/4 rounded focus:border-teal-500"
                                                id="tags"
                                                name="tags"
                                                type="text"
                                                onChange={(e) => {setTagHolder(e.target.value)}}
                                                value={tagHolder}
                                            ></input>
                                            <IconButton onClick={() => {addTag()}}><AddCircleIcon /></IconButton> 
                                        </div>
                                    </div>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                    {input.tags && input.tags?.map((tag) => <Chip sx={{height: "15px"}} label={tag} onDelete={(e) => deleteChip("tags", tag)} />)}    
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Price:</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            className='w-20'
                                            id="price"
                                            type='number'
                                            placeholder={input.price}
                                            value={input.price}
                                            name='price'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>

                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Stock:</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            className='w-20'
                                            id="stock"
                                            type='number'
                                            placeholder={input.stock}
                                            value={input.stock}
                                            name='stock'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">REMOVED:</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        YES
                                    <Switch
                                        name="seen"
                                        value={input.seen}
                                        onChange={(e) => {handleChange(e)}}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        NO
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-3 mt-3 '>
                            <Button
                                onClick={() => {handleSubmit()}}
                                type="Submit"
                                variant="contained">
                                FINISH EDIT
                            </Button>
                        </div>
                        <div className='flex gap-3 mt-3 '>
                            {artDetail.lastCheck === false ? <Button
                                onClick={() => {handleCheck()}}
                                type="button"
                                variant="contained">
                                LAST CHECK
                            </Button> : null }
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}