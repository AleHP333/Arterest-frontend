import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getUserById,
  updateProfile,
} from "../../redux/actions/productActionsTest";
import Card from "../../components/Card/Card";
import Footer from "../Footer/Footer";
import { Box, CircularProgress } from "@mui/material";
import UserPhoto from "./assets/NicePng_usuario-png_2022264.png";
import ArtistRequest from "../../components/ArtistRequest/ArtistRequest";
import { BsPencil } from 'react-icons/bs'

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSignReducer.userData);
  // const { id } = useParams()
  // const navigate = useNavigate()
  console.log(user, "USER");

  const [input, setInput] = useState({
    userName: "",
    userImage: "",
    names: "",
    surnames: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    if (user !== undefined) {
      setInput({
        userName: user.userName,
        userImage: user.userImage,
        names: user.names,
        surnames: user.surnames,
        country: user.country,
        city: user.city,
      });
    }
  }, [user]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateProfile({ ...input }));
  }

  return (
    <>
      <main className="profile-page">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="w-30 h-30 pt-4 flex items-center justify-center ">
            <img
              name='userImage'
              type='file'
              className="w-20 h-20 rounded-full"
              alt="User avatar"
              src={user.userImage || UserPhoto}
            />
            <input
              className="text-sm font-small text-right text-gray-700"
              type="file"
              filename="userImage"
              // value={user.userImage}
              onChange={(e) => handleChange(e)}
              //   
            
            /><BsPencil/>
          </div>
          <div className="mt-4 text-center border-b pb-4">
            <input
              value={input.userName}
              name="userName"
              type="userName"
              className="text-4xl font-medium text-center text-gray-700 border"
              placeholder={user.userName || ""}
              onChange={(e) => handleChange(e)}

            />
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
                          placeholder={user.email}
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
                              placeholder={user.names || ""}
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
                              placeholder={user.surnames || "Lastname"}
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
                              placeholder={user.city || "City"}
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
                              placeholder={user.country || "Country"}
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
                          {user.isArtist !== undefined &&
                            user.isArtist ? null : (
                            <ArtistRequest />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
