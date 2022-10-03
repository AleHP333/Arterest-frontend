import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BsFillPencilFill} from 'react-icons/bs'
import { getAllUsers } from '../../../redux/actions/productActionsTest';
import { banUser, giveAdmin, giveArtist } from '../../../redux/actions/adminActions';
import Sidebar from '../components/Sidebar';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import IconButton from "@mui/material/IconButton"
import Avatar from '@mui/material/Avatar';

const AllArtWork = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.testReducer.allUsers)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    dispatch(getAllUsers());
  }, [reload]);

  function bannUser(e) {
    const user = {
        _id: e._id, isBanned: !e.isBanned
    }
    dispatch(banUser(user))
      .then(res=>setReload(!reload))
  }

  function userArtist(e){
    const user = {
      _id: e._id, isArtist: !e.isArtist
    }
    dispatch(giveArtist(user))
      .then(res=>setReload(!reload))
  }

  function userAdmin(e){
    const user = {
      _id: e._id, isAdmin: !e.isAdmin
    }
    dispatch(giveAdmin(user))
      .then(res=>setReload(!reload))
  }

  return (
    <>
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">

        {/* Header */}
        <div className="relative center pl-0 bg-red-600 rounded md:pt-32 pb-32 pt-12 z-0">

        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24 z-1 ">
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 xl:mb-0 px-4">
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
                        <th className="px-6 bg-blueGray-50 w-0 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
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
                      {users ? users?.map((us, index) => {
                        return (
                          <tr id={index}>
                            <th  className="border-t-0 px-6 align-middle flex flex-col justify-center items-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                { us.userImage ? <Avatar src={us.userImage} sx={{ width: 40, height: 40 }} /> : <Avatar sx={{ width: 40, height: 40 }}>{us.userName.substring(0, 1).toUpperCase()}</Avatar>}{us.userName}                       
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className={`${us.isArtist ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.isArtist === false ? 'NO': 'YES'}</span>
                            <IconButton>
                              <ChangeCircleIcon onClick={()=>{userArtist(us)}}/>
                            </IconButton>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className={`${us.isAdmin ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.isAdmin === false ? 'NO': 'YES'}</span>
                            <IconButton>
                              <ChangeCircleIcon onClick={()=>{userAdmin(us)}}/>
                            </IconButton>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <span className={`${us.isBanned ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.isBanned === false ? 'NO': 'YES'}</span>
                            <IconButton>
                              <ChangeCircleIcon onClick={()=>{bannUser(us)}}/>
                            </IconButton>
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <span className={`${us.verification ? "text-green-500" : "text-red-600"} font-semibold text-base`}>{us.verification === false ? 'NO': 'YES'}</span>
                            </td>
                          </tr>
                        )
                      }) : null}
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
