import React, {useState} from "react";
import axios from "axios";
import PreviewImage from "../../components/CreateProduct/ReusableFunctions/PreviewImage";
import { productPost } from "../../redux/actions/adminActions";


const technique = ["Oil", "Pastel", "Watercolor", "Digital-Art", "Microfiber", "Fiber", "Graphite", "Pen", "Color-pen" ,"Other"]

export default function CreateProduct(){
  
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        title: "",
        description: "",
        img: "",
        origin: "",
        technique: "",
        style: "",
        colors: "",
        releaseDate: "",
        price: "",
        tags: "",
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(){

    }

    function imageChange(img, data){
        setInput({
          ...input,
          img: data
        })
    }
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
                    className="flex justify-between flex-col px-4 my-2 max-w-3xl mx-auto space-y-3"
                >
                <h1 className="text-4xl font-bold text-gray-800">Post an artwork</h1>
                <div className="text-gray-500">
                    <label htmlFor="title">Artwork name</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="title"
                        name="title"
                        type="text"
                        onChange={handleChange}
                        value={input.title}
                    />
                    {errors.title && (
                      <p className="text-sm text-red-500">{errors.title}</p>
                    )}
                </div>
                <div className="w-1/4 text-gray-500">
                    <label htmlFor="price">Price</label> <span>USD</span>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                        id="price"
                        name="price"
                        type="text"
                        onChange={handleChange}
                        value={input.price}
                    /> 
                    {errors.price && (
                      <p className="text-sm text-red-500">{errors.price}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="origin">Country Origin</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="origin"
                        name="origin"
                        type="text"
                        onChange={handleChange}
                        value={input.origin}
                    />
                    {errors.origin && (
                      <p className="text-sm text-red-500">{errors.origin}</p>
                    )}
                </div>          
                <div className="text-gray-500">
                    <label htmlFor="style">Style</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="style"
                        name="style"
                        type="text"
                        onChange={handleChange}
                        value={input.style}
                    />
                    {errors.style && (
                      <p className="text-sm text-red-500">{errors.style}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="colors">Main color</label>
                    <input
                        className="colors border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="colors"
                        name="colors"
                        type="text"
                        onChange={handleChange}
                        value={input.colors}
                    />
                    {errors.colors && (
                      <p className="text-sm text-red-500">{errors.colors}</p>)}        
                </div>
                <div className="flex space-x-4 text-gray-500">
                    <div>
                    <label htmlFor="img">Artwork image</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
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
                    <div>
                        {input.img && <PreviewImage file={input.img} />}
                    </div>
                </div>
                <div className="text-gray-500">
                    <label htmlFor="description">Description</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="description"
                        name="description"
                        type="text"
                        onChange={handleChange}
                        value={input.description}
                    />
                    {errors.description && (
                        <p className="text-sm text-red-500">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="tags">Tags</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="tags"
                        name="tags"
                        type="text"
                        onChange={handleChange}
                        value={input.tags}
                    />
                    {errors.tags && (
                      <p className="text-sm text-red-500">{errors.tags}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="technique">Technique</label>
                    <select
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="technique"
                        name="technique"
                        type="text"
                        onChange={() => {}}
                        
                    >
                        {technique.map((tech, index) => <option key={index} value={tech}>{tech}</option>)}
                    </select> 
                    {errors.technique && (
                      <p className="text-sm text-red-500">{errors.technique}</p>
                    )}
                </div>
                <div className="text-gray-500">
                    <label htmlFor="releaseDate">Release Year</label>
                    <input
                        className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                        id="releaseDate"
                        name="releaseDate"
                        type="text"
                        onChange={handleChange}
                        value={input.releaseDate}
                    />
                    {errors.releaseDate && (<p className="text-sm text-red-500">{errors.releaseDate}</p>)}
                </div>
                <button type="Submit" className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-pink-700 text-gray-100">
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