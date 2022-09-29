// React utilities
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { getPrice } from "../Card/FavAndCart";
import Tooltip from "@mui/material/Tooltip";
// userName,
// userImage,
// title,
// img,
// _id,
// price,
// rating,
// handleAdded,
// handleNotAdded,
// setFavProducts,

export default function CartCard({
  userName,
  title,
  img,
  _id,
  price,
  quantity,
  deleteItem,
  updateQuantity,
}) {
  const [qua, setQua] = useState(quantity);

  const plus = (_id) => {
    const cartList = JSON.parse(localStorage.getItem("cartList"));
    let found = cartList.find((e) => e._id === _id);
    found.quantity += 1;
    localStorage.setItem("cartList", JSON.stringify(cartList));
    setQua(qua + 1);
    updateQuantity();
  };

  const minus = (_id) => {
    if (qua > 1) {
      const cartList = JSON.parse(localStorage.getItem("cartList"));
      let found = cartList.find((e) => e._id === _id);
      found.quantity -= 1;
      localStorage.setItem("cartList", JSON.stringify(cartList));
      setQua(qua - 1);
      updateQuantity();
    }
  };

  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8  hover:bg-gray-100">
      <Link to={`/detail/${_id}`} className="md:w-4/12 2xl:w-1/4 w-full ml-2">
        <img
          className="h-full object-center object-cover md:block hidden"
          src={img}
          alt={title}
        />
        <img
          className="md:hidden w-full h-full object-center object-cover"
          src={img}
          alt={title}
        />
      </Link>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none ">{title}</p>
          <div className="py-2 px-1 border-none border-gray-200 mr-6 focus:outline-none">
            <Tooltip title="Remove">
              <button onClick={() => deleteItem(_id)}>
                <DeleteIcon />
              </button>
            </Tooltip>
          </div>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">by {userName}</p>
        <p className="text-xs leading-3 text-gray-600 py-4">
          $ {parseInt(price).toFixed(2)}
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex itemms-center">
            <Tooltip title="Decrease">
              <button
                className="mx-1"
                disabled={qua === 1}
                onClick={() => minus(_id)}
              >
                <RemoveCircleIcon />
              </button>
            </Tooltip>
            <p>{parseInt(qua)}</p>
            <Tooltip title="Increase">
              <button className="mx-1" onClick={() => plus(_id)}>
                <AddCircleIcon />
              </button>
            </Tooltip>
          </div>
          <p className="text-base font-black leading-none mr-2">
            {parseInt(qua * price).toFixed(2)} ({qua} Items)
          </p>
        </div>
      </div>
    </div>
  );
}