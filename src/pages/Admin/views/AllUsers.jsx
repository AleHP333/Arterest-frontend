import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BsFillPencilFill} from 'react-icons/bs'
import { getAllUsers } from '../../../redux/actions/productActionsTest';


const AllArtWork = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.testReducer.allUsers )

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch,]);

  function bannUser(){
    if(users.isBloked === false){
      return users.isBloked === true
    } 
  }

  return (
    <>

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
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        All Users
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
                          User Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Is Banned
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Modify
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length ? users.map((us, _id) => {
                        return (
                          <tr id={_id}>
                            <th  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                              {us.username}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {us.isBloked === false ? 'NO': 'YES'}
                            </td>
                            <td className="flex border-t-0 px-6 ml-4 text-xs whitespace-nowrap p-4 cursor-pointer">
                            <BsFillPencilFill onClick={bannUser}/>
                            </td>
                          </tr>
                        )
                      }) : 'hola'}
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

export default AllArtWork;
