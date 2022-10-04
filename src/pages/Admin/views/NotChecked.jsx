import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { getUnchecked } from '../../../redux/actions/adminActions';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const LastCheck = () => {

  const dispatch = useDispatch()
  const artwork = useSelector((state) => state.adminReducer.unChecked)

  useEffect(() => {
    dispatch(getUnchecked());
  }, [dispatch]);

  return (
    <>
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100" >
        {/* Header */}
        <div className="relative bg-red-600 rounded md:pt-32 pb-32 pt-12">

        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24 z-1">
          <div className="flex flex-wrap mt-4 shadow-lg">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full items-center px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold inline-block text-base text-blueGray-700">
                      All Unchecked Artworks
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link to='/admin'>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        BACK
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Artworks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <div className='flex justify-evenly flex-wrap'>
                    {artwork.length ? artwork.map((art) => {
                      return (
                        <ProductCard 
                        key={art._id}
                        userName={art.user.userName}
                        title={art.title}
                        _id={art._id}
                        img={art.img}
                        seen={art.seen}
                        lastCheck={art.lastCheck}                       
                        />
                      )
                    }) : <div className='ml-2 my-5 py-5 flex text-center items-center h-10 w-1/4 text-2xl'>All Artworks has checked <SentimentSatisfiedAltIcon sx={{height: "50px", width: "50px"}}/></div>}
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastCheck;