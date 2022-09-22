import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PreviewImage from "../../../components/CreateProduct/ReusableFunctions/PreviewImage";
import { getPaintById, updateProduct } from "../../../redux/actions/productActionsTest";


const EditProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const artDetail = useSelector((state) => state.testReducer.paintDetail)
      useEffect(() => {
        dispatch(getPaintById(id))
    }, [dispatch, id])
    
    const formik = useFormik({
    initialValues: {
      userName: artDetail.userName,
      userImage: artDetail.userImage,
      title: artDetail.title,
      description: artDetail.description,
      img: artDetail.img,
      origin: artDetail.origin,
      technique: artDetail.technique,
      style: artDetail.style,
      colors: artDetail.colors,
      releaseDate: artDetail.releaseDate,
      price: artDetail.price,
      tags: artDetail.tags,
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      userImage: Yup.mixed()
        .required("required!")
        .test(
          "FILE_SIZE",
          "Too big",
          (value) => value && value.size < 1000024 * 10024
        )
        .test(
          "FILE_TYPE",
          "Select png or jpeg only",
          (value) => value && ["image/png", "image/jpeg"].includes(value.type)
        ),
      title: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      description: Yup.string().required("Required"),

      img: Yup.mixed()
        .required("required!")
        .test(
          "FILE_SIZE",
          "Too big",
          (value) => value && value.size < 1000024 * 10024
        )
        .test(
          "FILE_TYPE",
          "Select png or jpeg only",
          (value) => value && ["image/png", "image/jpeg"].includes(value.type)
        ),
      origin: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      technique: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      style: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      colors: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      releaseDate: Yup.number()
        .max(2022, "Escoge un año real pendejo")
        .required("Required"),
      price: Yup.number().min(1, "Must be more than 1").required("Required"),
      tags: Yup.string()
        .oneOf(["other"], "Invalid Category")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const { img, userImage } = formik.values;

      const formData = new FormData();
      
      try {
        formData.append("file", img);

        formData.append("upload_preset", "images");
        axios
          .post("https://api.cloudinary.com/v1_1/onlypan/upload", formData)
          .then((resAxios) => {
            values.img = resAxios.data.secure_url;
            // productPost(values);
          })
        .catch(error=>console.log(error))
      } catch (error) {
        console.log(error);
      }
      // postCLoud del userProfile---------------------------------------------------------
      try {
        const formUserImage = new FormData();
        formUserImage.append("file", userImage);

        formUserImage.append("upload_preset", "images");
        axios
          .post("https://api.cloudinary.com/v1_1/onlypan/upload", formUserImage)
          .then((resAxios) => {
            values.userImage = resAxios.data.secure_url;
            updateProduct(values)
            console.log(values, "values luego del userImage post");
          })
          .catch(error => console.log(error))
      } catch (error) {
        console.log(error);
      }
      formik.handleReset();
    },
  });
  return (
    <div className="flex w-full min-h-screen justify-center items-center shadow-lg p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex justify-between flex-col shadow-lg bg-gray-100 rounded-xl my-1">
        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-between flex-col px-4 my-32 max-w-3xl mx-auto space-y-3"
        >
          <h1 className="text-4xl font-bold text-gray-800">Crea un producto</h1>
          <div className="">
            <label htmlFor="userName" className="text-gray-500">Name</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded outline hover:outline-white"
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.errors.name && (
              <p className="text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>
          
          <div className="flex space-x-4 text-gray-500">
            <div>
              <label htmlFor="userImage">User Profile</label>
              <input
                className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                id="userImage"
                name="userImage"
                type="file"
                onChange={(e) => {
                  
                  formik.setFieldValue("userImage", e.target.files[0]);
                }}
                // value={formik.values.image}
              />
              {formik.errors.userImage && (
                <p className="text-sm text-red-500">{formik.errors.userImage}</p>
              )}
            </div>
            <div>
              {formik.values.userImage && <PreviewImage file={formik.values.userImage} />}
            </div>
          </div>

          <div className="text-gray-500">
            <label htmlFor="title">Title</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title && (
              <p className="text-sm text-red-500">{formik.errors.title}</p>
            )}
          </div>

          <div className="w-1/4 text-gray-500">
            <label htmlFor="price">Price</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded  focus:border-teal-500"
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            {formik.errors.price && (
              <p className="text-sm text-red-500">{formik.errors.price}</p>
            )}
          </div>

          <div className="text-gray-500">
            <label htmlFor="origin">Origin Country</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="origin"
              name="origin"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.origin}
            />
            {formik.errors.origin && (
              <p className="text-sm text-red-500">{formik.errors.origin}</p>
            )}
          </div>
          
          <div className="text-gray-500">
            <label htmlFor="style">Style</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="style"
              name="style"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.style}
            />
            {formik.errors.style && (
              <p className="text-sm text-red-500">{formik.errors.style}</p>
            )}
          </div>

          <div className="text-gray-500">
            <label htmlFor="colors">Colors</label>
            <input
              className="colors border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="colors"
              name="colors"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.colors}
            />
            {formik.errors.colors && (
              <p className="text-sm text-red-500">{formik.errors.colors}</p>
            )}
          </div>

          <div className="flex space-x-4 text-gray-500">
            <div>
              <label htmlFor="img">Image</label>
              <input
                className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
                id="img"
                name="img"
                type="file"
                onChange={(e) => {
                  console.log("formik", formik);
                  formik.setFieldValue("img", e.target.files[0]);
                }}
                // value={formik.values.image}
              />
              {formik.errors.img && (
                <p className="text-sm text-red-500">{formik.errors.img}</p>
              )}
            </div>
            <div>
              {formik.values.img && <PreviewImage file={formik.values.img} />}
            </div>
          </div>

          <div className="text-gray-500">
            <label htmlFor="description">Description</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.errors.description && (
              <p className="text-sm text-red-500">
                {formik.errors.description}
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
              onChange={formik.handleChange}
              value={formik.values.tags}
            />
            {formik.errors.tags && (
              <p className="text-sm text-red-500">{formik.errors.tags}</p>
            )}
          </div>
          
          <div className="text-gray-500">
            <label htmlFor="technique">Technique</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="technique"
              name="technique"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.technique}
            />
            {formik.errors.technique && (
              <p className="text-sm text-red-500">{formik.errors.technique}</p>
            )}
          </div>
          <div className="text-gray-500">
            <label htmlFor="releaseDate">Release Date</label>
            <input
              className="border border-gray-400 block py-2 w-full rounded focus:border-teal-500"
              id="releaseDate"
              name="releaseDate"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.releaseDate}
            />
            {formik.errors.releaseDate && (
              <p className="text-sm text-red-500">
                {formik.errors.releaseDate}
              </p>
            )}
          </div>
          <button type="Submit" className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-pink-700 text-gray-100">
            Submit
          </button>
          <button
            type="button"
            onClick={formik.handleReset}
            className="rounded-full py-2 px3 uppercase text-xs font-bold tracking-wider bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100"
          >
            Clear form
          </button>
        </form>
      </div>
      {/* {formik.values.img && <PreviewImage file={formik.values.img} />} */}
    </div>
  );
};

export default EditProduct;

