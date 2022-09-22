// React utilities
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { getPrice } from "../Card/FavAndCart";

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
    <div className="flex flex-row w-full border-r-0 border-solid border-b-2 items-center gap-3">
      <div className="h-40 w-1/6">
        <img className="w-full h-40 object-contain" src={img} alt={title} />
      </div>
      <div className="w-2/3 flex flex-col gap-3">
        <h3 className="ml-4">{title}</h3>
        <p className="m-0">
          <span className="ml-4">{parseInt(price).toFixed(2)}</span>
        </p>
        <p className="m-0">
          <span className="ml-4">{parseInt(qua * price).toFixed(2)}</span> (
          {qua} Items)
        </p>
      </div>
      <div className="text-center h-full flex flex-col items-center w-1/6 gap-10 pl-4">
        <div className="flex gap-3">
          <button disabled={qua === 1} onClick={() => minus(_id)}>
            <RemoveCircleIcon />
          </button>
          <p>{parseInt(qua)}</p>
          <button onClick={() => plus(_id)}>
            <AddCircleIcon />
          </button>
        </div>
        <button onClick={() => deleteItem(_id)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
