import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import LineChart from "../components/LineChart.js";
// import BarChart from "../components/BarChart.js";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllUsers, getOrders } from "../../../redux/actions/productActionsTest";
import {BsFillPencilFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { getAllProductsAdmin } from "../../../redux/actions/adminActions";
import Avatar from '@mui/material/Avatar';

export default function Dashboard() {
const dispatch = useDispatch()
const users = useSelector((state) => state.testReducer.allUsers )
const artwork = useSelector((state) => state.testReducer.allProducts )
const orders = useSelector((state) => state.testReducer.orders )

useEffect(() =>{
  dispatch(getAllUsers());
  dispatch(getAllProductsAdmin())
  dispatch(getOrders())
}, [dispatch])

const getPrice = () => {
  let total = 0
  orders.forEach(e => {
    if(!!e.transaction.total_money) total += e.transaction.total_money
  })
  console.log('$ ' + total.toFixed(2), "getprice");
  return total.toFixed(2)
}

const getProfit = () => {
  return (getPrice() * 0.012).toFixed(2)
}

const toCheck = artwork.filter(art => art.lastCheck !== true)
console.log(toCheck)

  return (
    <>
      <Sidebar toCheck={toCheck && toCheck.length} />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <div className="relative bg-red-600 rounded md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  </div>
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Total Users
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            {users.length}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Sales
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                            $ {getPrice()}
                          </span>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                      <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                          <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Profit
                          </h5>
                          <span className="font-semibold text-xl text-blueGray-700">
                           $ {getProfit()}
                          </span>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            {/* <LineChart />
            <BarChart /> */}
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Users
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <Link to='/admin/users'>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        See all
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
                          User Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Is Artist
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Is Admin
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Is Banned
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Is Verified
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.length ? users?.map((us, index) => {
                      return (
                       <tr>
                        <th  className="border-t-0 px-6 align-middle flex flex-col justify-center items-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                { us.userImage ? <Avatar src={us.userImage} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{us.userName.substring(0, 1).toUpperCase()}</Avatar>}{us.userName}                       
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className={`${us.isArtist ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.isArtist === false ? 'NO': 'YES'}</span>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className={`${us.isAdmin ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.isAdmin === false ? 'NO': 'YES'}</span>                           
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className={`${us.isBanned ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.isBanned === false ? 'NO': 'YES'}</span>                            
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <span className={`${us.verification ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.verification === false ? 'NO': 'YES'}</span>
                            </td>
                      </tr>
                      )
                    }) : null }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Gains
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                   </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="thead-light">
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Day
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
                       <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          USD
                        </th>
                        <th
                          className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          style={{ minWidth: "140px" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length ? orders.map((art, index) => {
                        return (
                      <tr>
                        <th id={index} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          Day{art.dateOfBuy.substring(0, 10)}<br /> - {art.dateOfBuy.substring(11, 19)} H.S
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {art.transaction.status}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          $ {art.transaction.total_money? art.transaction.total_money: 0}
                        </td>
                      </tr>
                        )
                      }) : 'There are no orders'}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
