import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getUnchecked } from "../../../redux/actions/adminActions.js";
import NotificationDropdown from "./NotificationDropdown.jsx";
import UserDropdown from "./UserDropdown.jsx";


export default function Sidebar() {
  const location = useLocation()
  console.log(location.pathname)
  const dispatch = useDispatch()
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const toCheck = useSelector((state) => state.adminReducer.unChecked)

  useEffect(() => {
    dispatch(getUnchecked())
  }, [])

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Arterest
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Arterest
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12  border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={`text-red-500 hover:text-red-600 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin" ? "underline" : null}`}
                  to="/admin"
                >
                  <i className={`fas fa-tv opacity-75 mr-2 text-sm`}></i> Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin/artworks" ? "underline" : null} `}
                  to="/admin/artworks"
                >
                  <i className={`fas fa-newspaper text-blueGray-400 mr-2 text-sm`}></i> All Artwork
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin/users" ? "underline" : null}`}
                  to="/admin/users"
                >
                  <i className={`fas fa-user-circle text-blueGray-400 mr-2 text-sm ${location.pathname == "/admin/orders" ? "underline" : null}`}></i> All Users
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin/orders" ? "underline" : null}`}
                  to="/admin/orders"
                >
                  <i className={`fas fa-fingerprint text-blueGray-400 mr-2 text-sm`}></i> All Orders
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={`text-blueGray-300 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin/requests" ? "underline" : null}`}
                  to="/admin/requests"
                  
                >
                  <i className={`fas fa-clipboard-list text-blueGray-300 mr-2 text-sm`}></i> Artist Requests
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={`text-blueGray-300 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin/sellRequests" ? "underline" : null}`}
                  to="/admin/sellRequests"                
                >
                  <i className={`fas fa-clipboard-list text-blueGray-300 mr-2 text-sm`}></i> Sell Requests
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={`text-blueGray-300 text-xs uppercase py-3 font-bold block ${location.pathname === "/admin/allUnchecked" ? "underline" : null}`}
                  to="/admin/allUnchecked"                
                >
                  <i className={`fas fa-clipboard-list text-blueGray-300 mr-2 text-sm`}></i> Art Last Check {toCheck && toCheck.length && <div className="text-white ml-2 py-1 px-2 inline-block rounded-full bg-red-600 font-semibold">{toCheck.length}</div>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
