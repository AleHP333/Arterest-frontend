import React, {useState} from "react";
import axios from "axios";
import { artRequest } from "../../redux/actions/artistActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//OTHERS
import PreviewImage from "../../components/CreateProduct/ReusableFunctions/PreviewImage";
import { handleErrors } from "./errorHandler";

//MUI
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

//ARRAYS
import { countries } from './countryList';
import { useNavigate } from "react-router-dom";

const technique = ["Oil", "Pastel", "Watercolor", "Digital-Art", "Microfiber", "Fiber", "Graphite", "Pen", "Color-pen", "Photography"]

const colors = ["Aquamarine", "Black", "Brown", "Crimson", "Fuscia", "Khaki", "Red", "Turquoise", "Violet", "White", "Yellow", "Green", "Blue", "Maroon", "Pink"]

export default function CreateProduct(){
  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const [touched, setTouched] = useState({
        title: false,
        description: false,
        img: false,
        origin: false,
        technique: false,
        style: false,
        colors: false,
        releaseDate: false,
        price: false,
        tags: false,
    })

    const [input, setInput] = useState({
        title: "",
        description: "",
        img: "",
        origin: "",
        technique: [],
        style: "",
        colors: [],
        releaseDate: "",
        price: "",
        tags: [],
    })

    const [tagHolder, setTagHolder] = useState("")

    useEffect(() => {
        setErrors(handleErrors(input, touched))
    }, [input])

    function deleteChip(name, thing){
        setInput({
            ...input,
            [name]: input[name].filter(cor => cor !== thing )
        })
    }


    function handleTouch(e){
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelect(e){
        if(e.target.name === "technique" && input[e.target.name] > 2){
            return
        }
        if(e.target.name === "colors" && input[e.target.name] > 3){
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

    function addTag(){
        if(input.tags > 3){
            return
        }
        setInput({
            ...input,
            tags: [...input.tags, tagHolder]
        })
        setTagHolder("")
    }

    function handleSubmit(e){
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("file", input.img);
            formData.append("upload_preset", "images");
            axios.post("https://api.cloudinary.com/v1_1/onlypan/upload", formData)
                .then((resAxios) => {
                    dispatch(artRequest({...input, img: resAxios.data.secure_url}))
                    .then((res) => {
                        console.log(res)
                        if(res === "success"){
                            navigate("/profile")
                        }
                    })
                })
                .catch(error=>console.log(error))
        } catch (error) {
            console.log(error);
        }
    }

    function imageChange(img, data){
        setInput({
          ...input,
          img: data
        })
    }

    console.log("este es el input", input)
    // onSubmit: async (input) => {    
    //   try {
    //     formData.append("file", img);

    //     formData.append("upload_preset", "images");
    //     axios
    //       .post("https://api.cloudinary.com/v1_1/onlypan/upload", formData)
    //       .then((resAxios) => {
    //         input.img = resAxios.data.secure_url;
    //         productPost(input);
    //       })
    //     .catch(error=>console.log(error))
    //   } catch (error) {
    //     console.log(error);
    //   }
    return (
        <div className="flex w-full min-h-screen justify-center items-center shadow-lg p-2 bg-gradient-to-r from-red-600 via-red-400 to-red-600">
            <div className="flex justify-between flex-col shadow-lg bg-gray-100 rounded-xl my-1">
                <form
                    onSubmit={() => handleSubmit()}
                    className="flex justify-between flex-col my-2 px-8 pb-5 max-w-3xl mx-auto space-y-3"
                >
                <h1 className="text-4xl font-bold text-gray-800">Post an artwork</h1>
                <div className="text-gray-500">
                    <label htmlFor="title">Artwork name</label>
                    <input
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="title"
                        name="title"
                        type="text"
                        onChange={(e) => {handleChange(e); handleTouch(e)}}
                        value={input.title}
                    />
                    {errors.title && (
                      <p className="text-sm text-red-500">{errors.title}</p>
                    )}
                </div>
                <div className=" text-gray-500">
                    <label className="block" htmlFor="price">Price USD</label>
                    <input
                        className="border w-1/4 border-gray-400 px-1 py-2 rounded  focus:border-teal-500"
                        id="price"
                        name="price"
                        type="text"
                        onChange={(e) => {handleChange(e); handleTouch(e)}}
                        value={input.price}
                    /> 
                    {errors.price && (
                        <p className="text-sm my-0 py-0 text-red-500">{errors.price}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="origin">Country Origin</label>
                    <select
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="origin"
                        name="origin"
                        type="text"
                        onChange={(e) => {handleChange(e); handleTouch(e)}}
                        value={input.origin}     
                    >
                        <option value="">Select</option>
                        {countries.sort().map((country, index) => <option key={index} value={country}>{country}</option>)}
                    </select>
                    {errors.origin && (
                      <p className="text-sm text-red-500">{errors.origin}</p>
                    )}
                </div>          
                <div className="text-gray-500">
                    <label htmlFor="style">Style</label>
                    <input
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="style"
                        name="style"
                        type="text"
                        onChange={(e) => {handleChange(e); handleTouch(e)}}
                        value={input.style}
                    />
                    {errors.style && (
                      <p className="text-sm text-red-500">{errors.style}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="colors">Main color</label>{input.colors && input.colors?.map((color) => <Chip sx={{height: "15px"}} label={color} onDelete={(e) => deleteChip("colors", color)} />)}
                    <select
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="colors"
                        name="colors"
                        type="text"
                        onChange={(e) => {handleSelect(e); handleTouch(e)}}
                        
                    >
                        <option defaultValue="Select">Select</option>
                        {colors.sort().map((tech, index) => <option key={index} value={tech}>{tech}</option>)}
                    </select> 
                    {errors.colors && (
                      <p className="text-sm text-red-500">{errors.colors}</p>)}        
                </div>
                <div className="flex space-x-4 text-gray-500">
                    <div>
                    <label htmlFor="img">Artwork image</label>
                    <input
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="img"
                        name="img"
                        type="file"
                        onChange={(e) => {
                          imageChange("img", e.target.files[0]);
                        }}
                        // value={formik.input.image}
                    />
                    {errors.img && (
                      <p className="text-sm text-red-500">{errors.img}</p>
                    )}
                    </div>
                </div>
                <div>
                    {input.img && <PreviewImage file={input.img} />}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="description">Description</label>
                    <input
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="description"
                        name="description"
                        type="text"
                        onChange={(e) => {handleChange(e); handleTouch(e)}}
                        value={input.description}
                    />
                    {errors.description && (
                        <p className="text-sm text-red-500">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label className="block" htmlFor="tags">Tags {input.tags && input.tags?.map((tag) => <Chip sx={{height: "15px"}} label={tag} onDelete={(e) => deleteChip("tags", tag)} />)}</label>
                    <input
                        className="border border-gray-400 px-1 py-2 w-3/4 rounded focus:border-teal-500"
                        id="tags"
                        name="tags"
                        type="text"
                        onChange={(e) => {setTagHolder(e.target.value); handleTouch(e)}}
                    ></input>
                    <IconButton onClick={() => {addTag()}}><AddCircleIcon /></IconButton>
                    {errors.tags && (
                      <p className="text-sm text-red-500">{errors.tags}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="technique">Technique {input.technique && input.technique?.map((tech) => <Chip sx={{height: "15px"}} label={tech} onDelete={(e) => deleteChip("technique", tech)} />)}</label>
                    <select
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="technique"
                        name="technique"
                        type="text"
                        onChange={(e) => {handleSelect(e); handleTouch(e)}}                        
                    >
                        <option defaultValue="Select">Select</option>
                        {technique.sort().map((tech, index) => <option key={index} value={tech}>{tech}</option>)}
                        <option value="Other">Other</option>
                    </select> 
                    {errors.technique && (
                      <p className="text-sm text-red-500">{errors.technique}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="releaseDate">Release Year</label>
                    <input
                        className="border border-gray-400 block px-1 py-2 w-full rounded focus:border-teal-500"
                        id="releaseDate"
                        name="releaseDate"
                        type="text"
                        onChange={(e) => {handleChange(e); handleTouch(e)}}
                        value={input.releaseDate}
                    />
                    {errors.releaseDate && (<p className="text-sm text-red-500">{errors.releaseDate}</p>)}
                </div>
                <button onClick={(e) => {handleSubmit(e)}} type="Submit" className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-pink-700 text-gray-100">
                    Submit
                </button>
                <button
                  type="button"
                  onClick={() => {}}
                  className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100"
                >
                  Clear form
                </button>
            </form>
        </div>
        {/* {formik.input.img && <PreviewImage file={formik.input.img} />} */}
    </div>
)};