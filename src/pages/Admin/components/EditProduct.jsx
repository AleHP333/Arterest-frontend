import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { cleanStateGetOnePaint, getPaintById, updateProduct } from "../../../redux/actions/productActionsTest";


const EditProduct = () => {

    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate()

    const artDetail = useSelector((state) => state.testReducer.paintDetail)
  
    console.log(artDetail, 'OBRAAA');


    useEffect(() => {
       
    dispatch(getPaintById(id)).then(() => {
        setInput({
          ...input,
        userName: artDetail.user.userName,
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
        likes: artDetail.likes,
        comments: artDetail.comments,
        })
    })


      return () => {
        dispatch(cleanStateGetOnePaint())
      }
    }, [artDetail])
    
    const [input, setInput] = useState({
      userName: '',
      userImage: '',
      title: '',
      description: '',
      img: '',
      origin: '',
      technique:'',
      style:'',
      colors: '',
      releaseDate:'',
      price: '',
      stock: '',
      tags:'',
      likes: '',
      comments: ''

    })
    
    async function handleSubmit(e) {
      e.preventDefault();
      dispatch(updateProduct({_id: artDetail._id, ...input}));
      navigate(`/admin/artworks/artworkDetail/${artDetail._id}`)
      dispatch(getPaintById())
    }
    
    function handleChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      })
    }
    if(!artDetail){
      return 'Loading...'
  }

    // const uploadImage = async (e) => {
    //     const files = e.target.files;
    //     const data = new FormData();
    //     data.append("file", files[0]);
    //     data.append("upload_preset", "vmbr1os6");
    //     const res = await fetch(
    //       "https://api.cloudinary.com/v1_1/onlypan/upload",
    //         {
    //             method: "POST",
    //             body: data,
    //         }
    //     );
    //     const file = await res.json();
    //     const aux = file.secure_url;
    //     setInputForm({
    //         ...inputForm,
    //         image: aux,
    //     });
    //     console.log("cloudinary")
    // }
 
  return (
    <>
        <div className="flex w-full min-h-screen justify-center items-center shadow-lg p-2 bg-white"> 
        <div className="flex justify-between flex-col shadow-lg bg-gray-100 rounded-xl my-1">
        
            {/* <Snackbar elevation={6} open={warning} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="error" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Warning</strong></AlertTitle>
                    <strong>must be loged to submit a product</strong>
                </Alert>
            </Snackbar>
            <Snackbar elevation={6} autoHideDuration={1500} open={success} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="success" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Success</strong></AlertTitle>
                    <strong>You've post a product</strong>
                </Alert>
            </Snackbar>
            <Snackbar elevation={6} autoHideDuration={1500} open={fail} onClose={handleClose}>
                <Alert onClose={handleClose} variant='filled' severity="warning" sx={{ width: '100%' }}>
                    <AlertTitle><strong>Fail</strong></AlertTitle>
                    <strong>Some fields may be wrong</strong>
                </Alert>
            </Snackbar> */}
            <div>
                <div className="text-4xl font-bold text-gray-800" >
                    <h1>Edit Product</h1>
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className="flex justify-between flex-col px-4 max-w-3xl mx-auto space-y-3" >
                    <div>
                        <div id='input-name' >
                            <label htmlFor="userName" className="text-gray-500">* Artist Name:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
                                id="userName"
                                type='text'
                                value={input.userName}
                                name='userName'
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        {/* <div className="flex space-x-4 text-gray-500" id='userImage' >
                            <label htmlFor="userImage" className="text-gray-500">* Artist photo:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                                type='file'
                                name='userImage'
                                id="userImage"
                                value={input.userImage}
                                 />
                        </div> */}
                        
                        <div className="text-gray-500" id='title' >
                            <label htmlFor="title" className="text-gray-500">Title:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                                type='text'
                                name='title'
                                value={input.title}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        <div className="text-gray-500" id='Price' >
                            <label htmlFor="price" className="text-gray-500">Price:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                name='price'
                                value={input.price}
                                onChange={(e) => handleChange(e)}
                                />
                        </div>

                        <div className="text-gray-500" id='origin' >
                            <label htmlFor="origin" className="text-gray-500">Origin Country:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                name='origin'
                                value={input.origin}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        <div className="text-gray-500" id='style' >
                            <label htmlFor="style" className="text-gray-500">Style:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                name='style'
                                value={input.style}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        <div className="text-gray-500" id='colors' >
                            <label htmlFor="colors" className="text-gray-500">Colors:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                value={input.colors}
                                name='colors'
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        {/* <div className="flex space-x-4 text-gray-500">
                            <label htmlFor="img">Artwork Image</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                                id="img"
                                name="img"
                                type="file"
                                value={input.title}
                                />
                         </div> */}

                         <div className="text-gray-500" id='description' >
                            <label htmlFor="description" className="text-gray-500">Description:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                name='description'
                                value={input.description}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        <div className="text-gray-500" id='tags' >
                            <label htmlFor="tags" className="text-gray-500">Tags:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                value={input.tags}
                                name='tags'
                                onChange={(e) => handleChange(e)}
                                 />
                         </div>

                        <div className="text-gray-500" id='technique' >
                            <label htmlFor="technique" className="text-gray-500">Technique:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                name='technique'
                                value={input.technique}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>

                        <div className="text-gray-500" id='releaseDate' >
                            <label htmlFor="releaseDate" className="text-gray-500">Release Year:</label>
                            <input
                                className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
                                type='text'
                                name='releaseDate'
                                value={input.releaseDate}
                                onChange={(e) => handleChange(e)}
                                 />
                        </div>
             
                        
                            <button 
                            onClick={handleSubmit}
                            type="Submit"
                            className="rounded py-2 px-3 uppercase text-xs font-bold tracking-wider bg-black text-gray-100">
                              Update Product</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </>
    )
};
  
  export default EditProduct;
  
  //   const editForm = useFormik({
      
  //   initialValues: {
  //     userName: `${artDetail.userName}`,
  //     // userImage: artDetail.userImage,
  //     title: artDetail.title,
  //     description: artDetail.description,
  //     // img: artDetail.img,
  //     origin: artDetail.origin,
  //     technique: artDetail.technique,
  //     style: artDetail.style,
  //     colors: artDetail.colors,
  //     releaseDate: artDetail.releaseDate,
  //     price: artDetail.price,
  //     tags: artDetail.tags,
  //   },
  //   validationSchema: Yup.object({
  //     userName: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     // userImage: Yup.mixed()
  //     //   .required("required!")
  //     //   .test(
  //     //     "FILE_SIZE",
  //     //     "Too big",
  //     //     (value) => value && value.size < 1000024 * 10024
  //     //   )
  //     //   .test(
  //     //     "FILE_TYPE",
  //     //     "Select png or jpeg only",
  //     //     (value) => value && ["image/png", "image/jpeg"].includes(value.type)
  //     //   ),
  //     title: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     description: Yup.string().required("Required"),

  //     // img: Yup.mixed()
  //     //   .required("required!")
  //     //   .test(
  //     //     "FILE_SIZE",
  //     //     "Too big",
  //     //     (value) => value && value.size < 1000024 * 10024
  //     //   )
  //     //   .test(
  //     //     "FILE_TYPE",
  //     //     "Select png or jpeg only",
  //     //     (value) => value && ["image/png", "image/jpeg"].includes(value.type)
  //     //   ),
  //     origin: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     technique: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     style: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     colors: Yup.string()
  //       .max(15, "Must be 15 characters or less")
  //       .required("Required"),
  //     releaseDate: Yup.number()
  //       .max(2022, "Escoge un año real pendejo")
  //       .required("Required"),
  //     price: Yup.number().min(1, "Must be more than 1").required("Required"),
  //     tags: Yup.string()
  //       .oneOf(["other"], "Invalid Category")
  //       .required("Required"),
  //   }),
  //   onSubmit: async (values) => {
  //     const { img, userImage } = editForm.values;

  //     const formData = new FormData();
      
  //     try {
  //       formData.append("file", img);

  //       formData.append("upload_preset", "images");
  //       axios
  //         .post("https://api.cloudinary.com/v1_1/onlypan/upload", formData)
  //         .then((resAxios) => {
  //           values.img = resAxios.data.secure_url;
  //           // productPost(values);
  //         })
  //       .catch(error=>console.log(error))
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     // postCLoud del userProfile---------------------------------------------------------
  //     try {
  //       const formUserImage = new FormData();
  //       formUserImage.append("file", userImage);

  //       formUserImage.append("upload_preset", "images");
  //       axios
  //         .post("https://api.cloudinary.com/v1_1/onlypan/upload", formUserImage)
  //         .then((resAxios) => {
  //           values.userImage = resAxios.data.secure_url;
  //           updateProduct(values)
  //           console.log(values, "values luego del userImage post");
  //         })
  //         .catch(error => console.log(error))
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     editForm.handleReset();
  //   },
  // });
  // console.log(editForm)
  // return (
  //   <div className="flex w-full min-h-screen justify-center items-center shadow-lg p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  //     <div className="flex justify-between flex-col shadow-lg bg-gray-100 rounded-xl my-1">
  //       <form
  //         onSubmit={editForm.handleSubmit}
  //         className="flex justify-between flex-col px-4 my-32 max-w-3xl mx-auto space-y-3"
  //       >
  //         <h1 className="text-4xl font-bold text-gray-800">Edit Product</h1>
  //         <div className="">
  //           <label htmlFor="userName" className="text-gray-500">Artist Name</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
  //             id="userName"
  //             name="userName"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.userName}
  //           />
  //           {editForm.errors.name && (
  //             <p className="text-sm text-red-500">{editForm.errors.name}</p>
  //           )}
  //         </div>
          
  //         {/* <div className="flex space-x-4 text-gray-500">
  //           <div>
  //             <label htmlFor="userImage">User Profile</label>
  //             <input
  //               className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //               id="userImage"
  //               name="userImage"
  //               type="file"
  //               onChange={(e) => {
                  
  //                 editForm.setFieldValue("userImage", e.target.files[0]);
  //               }}
  //               // value={formik.values.image}
  //             />
  //             {editForm.errors.userImage && (
  //               <p className="text-sm text-red-500">{editForm.errors.userImage}</p>
  //             )}
  //           </div>
  //           <div>
  //             {editForm.values.userImage && <PreviewImage file={editForm.values.userImage} />}
  //           </div>
  //         </div> */}

  //         <div className="text-gray-500">
  //           <label htmlFor="title">Title</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="title"
  //             name="title"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.title}
  //           />
  //           {editForm.errors.title && (
  //             <p className="text-sm text-red-500">{editForm.errors.title}</p>
  //           )}
  //         </div>

  //         <div className="w-1/4 text-gray-500">
  //           <label htmlFor="price">Price</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
  //             id="price"
  //             name="price"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.price}
  //           />
  //           {editForm.errors.price && (
  //             <p className="text-sm text-red-500">{editForm.errors.price}</p>
  //           )}
  //         </div>

  //         <div className="text-gray-500">
  //           <label htmlFor="origin">Origin Country</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="origin"
  //             name="origin"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.origin}
  //           />
  //           {editForm.errors.origin && (
  //             <p className="text-sm text-red-500">{editForm.errors.origin}</p>
  //           )}
  //         </div>
          
  //         <div className="text-gray-500">
  //           <label htmlFor="style">Style</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="style"
  //             name="style"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.style}
  //           />
  //           {editForm.errors.style && (
  //             <p className="text-sm text-red-500">{editForm.errors.style}</p>
  //           )}
  //         </div>

  //         <div className="text-gray-500">
  //           <label htmlFor="colors">Colors</label>
  //           <input
  //             className="colors border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="colors"
  //             name="colors"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.colors}
  //           />
  //           {editForm.errors.colors && (
  //             <p className="text-sm text-red-500">{editForm.errors.colors}</p>
  //           )}
  //         </div>

  //         <div className="flex space-x-4 text-gray-500">
  //           <div>
  //             <label htmlFor="img">Image</label>
  //             <input
  //               className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //               id="img"
  //               name="img"
  //               type="file"
  //               onChange={(e) => {
  //                 console.log("formik", editForm);
  //                 editForm.setFieldValue("img", e.target.files[0]);
  //               }}
  //               // value={formik.values.image}
  //             />
  //             {editForm.errors.img && (
  //               <p className="text-sm text-red-500">{editForm.errors.img}</p>
  //             )}
  //           </div>
  //           <div>
  //             {editForm.values.img && <PreviewImage file={editForm.values.img} />}
  //           </div>
  //         </div>

  //         <div className="text-gray-500">
  //           <label htmlFor="description">Description</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="description"
  //             name="description"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.description}
  //           />
  //           {editForm.errors.description && (
  //             <p className="text-sm text-red-500">
  //               {editForm.errors.description}
  //             </p>
  //           )}
  //         </div>

  //         <div className="text-gray-500">
  //           <label htmlFor="tags">Tags</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="tags"
  //             name="tags"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.tags}
  //           />
  //           {editForm.errors.tags && (
  //             <p className="text-sm text-red-500">{editForm.errors.tags}</p>
  //           )}
  //         </div>
          
  //         <div className="text-gray-500">
  //           <label htmlFor="technique">Technique</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="technique"
  //             name="technique"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.technique}
  //           />
  //           {editForm.errors.technique && (
  //             <p className="text-sm text-red-500">{editForm.errors.technique}</p>
  //           )}
  //         </div>
  //         <div className="text-gray-500">
  //           <label htmlFor="releaseDate">Release Date</label>
  //           <input
  //             className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
  //             id="releaseDate"
  //             name="releaseDate"
  //             type="text"
  //             onChange={editForm.handleChange}
  //             value={editForm.values.releaseDate}
  //           />
  //           {editForm.errors.releaseDate && (
  //             <p className="text-sm text-red-500">
  //               {editForm.errors.releaseDate}
  //             </p>
  //           )}
  //         </div>
  //         <button type="Submit" className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-pink-700 text-gray-100">
  //           Submit
  //         </button>
  //         <button
  //           type="button"
  //           onClick={editForm.handleReset}
  //           className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100"
  //         >
  //           Clear form
  //         </button>
  //       </form>
  //     </div>
  //     {/* {formik.values.img && <PreviewImage file={formik.values.img} />} */}
  //   </div>
