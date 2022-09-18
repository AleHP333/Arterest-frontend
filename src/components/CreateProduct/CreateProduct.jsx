import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PreviewImage from "./ReusableFunctions/PreviewImage";
import { productPost } from "../../redux/actions/adminActions";


const CreateProduct = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      title: "",
      description: "",
      img: "",
      technique: "",
      releaseDate: "",
      price: "",
      tags: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
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
      technique: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      releaseDate: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      price: Yup.number().min(1, "Must be more than 1").required("Required"),
      tags: Yup.string()
        .oneOf(["other"], "Invalid Category")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const { img } = formik.values;

      const formData = new FormData();

      try {
        formData.append("file", img);

        formData.append("upload_preset", "images");
        const response = await axios
          .post("https://api.cloudinary.com/v1_1/onlypan/upload", formData)
          .then((resAxios) => {
            values.img = resAxios.data.secure_url;
            productPost(values);
            console.log(values, "values luego del post");
          });
        // console.log(formData, "formData");
        // console.log(response.data, "response.data");
        // console.log(response.data.secure_url);
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

export default CreateProduct;
