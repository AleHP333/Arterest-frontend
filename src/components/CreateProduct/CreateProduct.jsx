import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import PreviewImage from './ReusableFunctions/PreviewImage';
import { productPost } from '../../redux/actions/productActionsTest';



const CreateProduct = () => {
  const formik = useFormik({
    initialValues: {
        name: '',
        price: 1,
        image: "",
        description: "", 
        category: "",
    },
    validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          price: Yup.number()
            .max(20, 'Must be 20 or less')
            .required('Required'),
          image: Yup.mixed()
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
          description: Yup.string()
            .required('Required'),
          category: Yup.string()
            .oneOf(
              ['other'],
              'Invalid Category'
            )
            .required('Required'),
        }),
    onSubmit: async (values) => {
      const { image } = formik.values;

      const formData = new FormData();

      try {
        formData.append("file", image);
        
        formData.append("upload_preset", "images");
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/onlypan/upload",
          formData
        )
        .then(resAxios => {
          values.image = resAxios.data.secure_url
          productPost(values)
          console.log(values, "values luego del post");
          })
        // console.log(formData, "formData");
        // console.log(response.data, "response.data");
        // console.log(response.data.secure_url);
      } catch (error) {
        console.log(error);
      }
      formik.handleReset()
    }
  });
    return (
      <div>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name && <p>{formik.errors.name}</p>}
      
      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && <p>{formik.errors.price}</p>}
      
      <label htmlFor="image">Image</label>
        <input
        id="image"
        name="image"
        type="file"
        onChange={(e) => {
            console.log("formik", formik);
            formik.setFieldValue("image", e.target.files[0])}}
        // value={formik.values.image}
        />
        {formik.errors.image && <p>{formik.errors.image}</p>}
        
        <label htmlFor="description">Description</label>
        <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        />
        {formik.errors.description && <p>{formik.errors.description}</p>}
        
        <label htmlFor="category">Category</label>
        <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
        />
        {formik.errors.category && <p>{formik.errors.category}</p>}
        
      <button type="Submit">Submit</button>
      <button type="button" onClick={formik.handleReset}>Clear form</button>
    </form>
    {formik.values.image && <PreviewImage file={formik.values.image} />}
    </div>
  );
};

export default CreateProduct