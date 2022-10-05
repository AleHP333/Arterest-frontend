import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateProfile,
} from "../../redux/actions/productActionsTest";
import Footer from "../Footer/Footer";
import UserPhoto from "./assets/NicePng_usuario-png_2022264.png";
import ArtistRequest from "../../components/ArtistRequest/ArtistRequest";
import axios from "axios"
import { Alert, IconButton, Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import PreviewImage2 from "./PreviewImage2";
import BrushIcon from '@mui/icons-material/Brush';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';


export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSignReducer.userData);
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    email: "",
    userName: "",
    userImage: "",
    names: "",
    surnames: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    setLoading(true)
    if (user !== undefined) {
      setInput({
        email: user.email,
        userName: user.userName,
        names: user.names,
        surnames: user.surnames,
        country: user.country,
        city: user.city,
      });
    }
    setLoading(false)
  }, [user]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (input.userImage) {
        handleClickShare()
        const formData = new FormData();
        formData.append("file", input.userImage);
        formData.append("upload_preset", "images");
        axios.post("https://api.cloudinary.com/v1_1/onlypan/upload", formData)
          .then((resAxios) => {
            console.log(resAxios.data.secure_url);
            dispatch(updateProfile({ ...input, userImage: resAxios.data.secure_url }))
          })
          .catch(error => console.log(error))
      } else {
        dispatch(updateProfile({ userName: input.userName, names: input.names, surnames: input.surnames, country: input.country, city: input.city, userImage: user.userImage }))
      }
    } catch (error) {
      console.log(error);
    }

  }

  function imageChange(userImage, data) {
    setInput({
      ...input,
      userImage: data
    })
  }
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert severity="warning" elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClickShare = () => {
    setOpen(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {!loading ? <><main className="profile-page">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="w-30 h-30 pt-4 flex items-center justify-center ">
              <label
                className='border-2 hover:shadow-xl hover:opacity-20 hover:border-red-500'
                style={{ backgroundImage: `url(${(user && user.userImage) || UserPhoto})`, width: '100px', height: '100px', backgroundSize: 'cover', borderRadius: '50%', cursor: 'pointer', opacity: '2', filter: 'alpha(opacity=100)' }}>
                <span class="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={(e) => {
                    imageChange("userImage", e.target.files[0]);
                  }}
                />
                {input.userImage && <PreviewImage2 file={input.userImage} />}
              </label>
            </div>

          </div>
          <div className="mt-4 text-center border-b pb-4">
            <input
              value={input.userName}
              name="userName"
              type="userName"
              className="text-4xl font-medium text-center text-gray-700 border"
              placeholder={input.userName}
              onChange={(e) => handleChange(e)}

            />
          <div className='mt-4'>
            {user.isArtist ? <BrushIcon className='text-green-400 ml-2' /> : null}
            {user.isAdmin ? <LocalPoliceIcon className='text-blue-500 ml-2' /> : null}
          </div>
          </div>
        </form>
        <div>
          <div className="p-4 bg-white mt-4">
            <section className="bg-gray-100  bg-opacity-50 h-screen">
              <div className="mx-auto max-w-xl md:w-3/4 shadow-md">
                <div className="bg-gray-100  border-t-2 bg-opacity-5 border-red-400 rounded-t">
                  <div className="max-w-sm mx-auto md:w-full md:mx-0">
                    <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                      <div className="inline-flex items-center space-x-4 md:mt-0 md:justify-center">
                        <Link to="/history">
                          <button className="text-white w-auto h-auto py-1.5 px-1.5 uppercase rounded bg-red-500 hover:bg-red-600 shadow hover:shadow-lg font-light">
                            Shop History
                          </button>
                        </Link>
                      </div>
                      <div className="inline-flex items-center ml-3 space-x-4 md:mt-0 md:justify-center">
                        <Link to="/artist/artRequest">
                          <button className="text-white w-auto h-auto py-1.5 px-1.5 uppercase rounded bg-red-500 hover:bg-red-600 shadow hover:shadow-lg font-light">
                            SELL ARTWORK
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white space-y-6">
                  <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                    <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                    <div className="md:w-2/3 max-w-sm mx-auto">
                      <label className="text-sm text-gray-400">Email</label>
                      <div className="w-full inline-flex border">
                        <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                          <svg
                            fill="none"
                            className="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          placeholder={input.email}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                      <h2 className="md:w-1/3 mx-auto max-w-sm">
                        Personal info
                      </h2>
                      <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                        <div>
                          <label className="text-sm text-gray-400">Name</label>
                          <div className="w-full inline-flex border">
                            <div className="w-1/12 pt-2 bg-gray-100">
                              <svg
                                fill="none"
                                className="w-6 text-gray-400 mx-auto"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <input
                              value={input.names}
                              name="names"
                              type="text"
                              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                              placeholder={input.names || "Name"}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <label className="text-sm text-gray-400">
                            Lastname
                          </label>
                          <div className="w-full inline-flex border">
                            <input
                              value={input.surnames}
                              name="surnames"
                              type="text"
                              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                              placeholder={input.surnames || "Lastname"}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <label className="text-sm text-gray-400">City</label>
                          <div className="w-full inline-flex border">
                            <input
                              value={input.city}
                              name="city"
                              type="text"
                              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                              placeholder={input.city || "City"}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <label className="text-sm text-gray-400">
                            Country
                          </label>
                          <div className="w-full inline-flex border">
                            <input
                              value={input.country}
                              name="country"
                              type="text"
                              className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                              placeholder={input.country || "Country"}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="flex items-center md:w-3/12 text-center md:pl-6">

                    <button
                      className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-red-500  hover:bg-red-600 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                      onClick={handleSubmit}
                    >

                      <svg
                        fill="none"
                        className="w-4 text-white mr-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      Update
                    </button>
                  </div>

                  <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                    <div className="md:inline-flex w-full  md:space-y-0 p-2 text-gray-500 items-center">
                      <div className="w-full inline-flex border-b">
                        <div>
                          {user !== undefined &&
                            user.isArtist ? null : (
                            <ArtistRequest />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
                  Await... - Updating Profile
                </Alert>
              </Snackbar>
            </section>
          </div>
        </div>
      </main>
        <Footer /></> : <div>Loading...</div>}
    </>
  );
}
