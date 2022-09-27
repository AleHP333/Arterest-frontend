import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getAnArtist } from "../../redux/actions/productActionsTest";
import Card from "../../components/Card/Card";
import Footer from "../Footer/Footer";
import { Box, CircularProgress } from "@mui/material";

export default function Profile() {
  const dispatch = useDispatch()
  const allPaints = useSelector((state) => state.testReducer.getAnArtist);
  const { userName } = useParams()

  useEffect(() => {
    dispatch(getAnArtist(userName))
    // dispatch(getAnArtist(userImage))
    return () => {
      dispatch({type:"REMOVE_ARTIST_SELECTED"})
    }
  }, [dispatch, userName])

  return (
    <>
      { Object.keys(allPaints).length !== 0 ? 
      <div className="py-3 px-16">
        <div className="p-8 bg-white shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p className="font-bold text-gray-700 text-xl">{allPaints.map(paint => paint.likes).flat().length}</p>
                <p className="text-gray-400">Likes</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">{allPaints.length}</p>
                <p className="text-gray-400">ArtWork</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 text-xl">{allPaints.map(paint => paint.comments).flat().length}</p>
                <p className="text-gray-400">Comments</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img src={allPaints[0].userImage} className="h-24 w-24 rounded-full" viewBox="0 0 20 20" fill="currentColor">
                </img>
              </div>
            </div>

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              {/* <button
                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Connect
              </button>
              <button
                className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Message
              </button> */}
            </div>
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">{allPaints[0].userName}</h1>
            <p className="font-light text-gray-600 mt-3">{allPaints[0].origin}</p>
          </div>

          <div className='pin_container' >
                {allPaints.length ? allPaints?.map((e, index) => {
                    return (
                        <div  key={index}>                         
                                <Card  className='img'
                                    img={e.img}
                                    userName={e.userName}
                                    userImage={e.userImage}
                                    title={e.title}
                                    price={e.price}
                                    cardLikes={e.likes.length}
                                    _id={e._id}
                                    key={e._id}>
                                </Card>       
                        </div>
                    );
                }) : <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }
            </div>

        </div>
      </div> : <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box> }
      <Footer/>
    </>
   );
}