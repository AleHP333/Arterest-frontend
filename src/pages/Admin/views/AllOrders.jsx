import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BsFillPencilFill} from 'react-icons/bs'
import { getOrders } from '../../../redux/actions/productActionsTest';
import { banUser } from '../../../redux/actions/adminActions';
import Sidebar from '../components/Sidebar';
import Avatar from '@mui/material/Avatar';

const AllOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.testReducer.orders)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    dispatch(getOrders());
  }, [reload]);

  console.log(orders)

  function bannUser(e) {
    console.log(e._id, e.isBanned, "e");
    // if(users.isBloked === false){
    //   return users.isBloked === true
    // } 
    const user = {
        _id: e._id, isBanned: !e.isBanned
    }
    console.log("ESTE ES EL USUARIO QUE SE BANEA", user)
    
    dispatch(banUser(user))
    .then(res=>setReload(!reload))
  }

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">

        {/* Header */}
        <div className="relative center pl-0 bg-red-600 rounded md:pt-32 pb-32 pt-12">

        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            {/* <LineChart />
            <BarChart /> */}
          </div>
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        All Orders
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Id
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Buyer
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Quantity
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Date
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Gain
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length ? orders?.map((or, index) => {
                        return (
                          <tr id={index}>
                            <th  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {or._id}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            { or.buyer.userImage ? <Avatar src={or.buyer.userImage} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{or.buyer.userName.substring(0, 1).toUpperCase()}</Avatar>}{or.buyer.userName}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {or.transaction.quantity}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {or.dateOfBuy.substring(0, 10)} - {or.dateOfBuy.substring(11, 19)} H.S
                            </td>
                            <td className="fborder-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            USD: {or.transaction.total_money}
                            </td>
                            <td className="fborder-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {or.transaction.status}
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

export default AllOrders;