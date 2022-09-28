import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../redux/actions/productActionsTest";
import Card from "../../components/Card/Card";
import Footer from "../Footer/Footer";
import { Box, CircularProgress } from "@mui/material";
import UserPhoto from './assets/NicePng_usuario-png_2022264.png'
import ArtistRequest from "../../components/ArtistRequest/ArtistRequest";




export default function Profile() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.userSignReducer.userData)
  const { userName } = useParams()

  useEffect(() => {
    dispatch(getUserById(userName))
  }, [dispatch, userName])
  console.log(user.userName, 'one user')

  return (
    <>
      <main className="profile-page">
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">22</p>
                <p className="text-gray-400">Likes</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">{allPaints.length}</p>
                <p className="text-gray-400">ArtWork</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">89</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div> */}
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img src={UserPhoto} className="h-24 w-24 rounded-full" viewBox="0 0 20 20" fill="currentColor">
                </img>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button
                className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-red-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Shop History
              </button>
              <button
                className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-red-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Edit Profile
              </button>
              <div>
              <ArtistRequest />
              </div>
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{userName}</h1>
            <p className="font-light text-gray-600 mt-3">Country</p>
          </div>

          <div className='pin_container' >
                {/* {allPaints.length ? allPaints?.map((e, index) => {
                    return (
                        <div  key={index}>
                           
                                <Card  className='img'
                                    img={e.img}
                                    userName={e.userName}
                                    userImage={e.userImage}
                                    title={e.title}
                                    price={e.price}
                                    key={e._id}>
                                </Card>
                            
                        </div>
                    );
                }) : <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                } */}
            </div>

        </div>
      </div>

      </main>
      <Footer />
    </>
  );
}