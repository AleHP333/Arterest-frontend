// React utilities
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Actions
import { getPrice } from "../Card/FavAndCart";
// Components
import CartCard from "./CartCard";
import EmptyCart from '../../pages/Empty/emptyCart'
// Styles
import { Link } from "react-router-dom";
export default function ShoppingCart() {
  const loggedUser = useSelector((state) => state.userSignReducer.userData);
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartList"))
  );
  const [totalPrice, setTotalPrice] = useState(getPrice());

  // useEffect(() => {
  // }, [setCartItem])

  const deleteItem = (_id) => {
    let arr = cartItem.filter((product) => product._id !== _id);
    localStorage.setItem("cartList", JSON.stringify(arr));
    setCartItem(arr);
    setTotalPrice(getPrice());
  };

  const updateQuantity = () => {
    setTotalPrice(getPrice());
  };
  // userName, title, _id, price, image, quantity, deleteItem, updateQuantity

  return (
    (cartItem.length? (<div className="flex items-center lg:flex-row flex-col justify-center">
      <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white lg:h-screen h-auto gap-1">
        <h1 className="lg:text-4xl text-3xl font-black leading-10  mb-2 pt-3">
          Shopping Cart
        </h1>
        {cartItem
          ? cartItem?.map((prod) => (
              <CartCard
                key={prod._id}
                _id={prod._id}
                userName={prod.userName}
                title={prod.title}
                price={prod.price}
                img={prod.img}
                deleteItem={deleteItem}
                updateQuantity={updateQuantity}
                quantity={prod.quantity}
                stock={prod.stock}
              />
            ))
          : null}
      </div>
      <div className="lg:w-96 md:w-8/12 w-full h-full">
        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
          <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
              <p className="text-2xl leading-normal ">Total</p>
              <p className="text-2xl font-bold leading-normal text-right ">
                ${parseInt(totalPrice)}
              </p>
            </div>
            <Link
              to="/home"
              className="rounded px-4 text-base leading-none w-full py-3 bg-black border-black border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white "
            >
              Continue shopping...
            </Link>
            <br />
            <br />
            <br />

            {loggedUser ? (
              <button>
                <Link
                  to="/buy"
                  className="rounded px-4 text-base leading-none w-full py-3 bg-black border-black border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white "
                >
                  Buy now!
                </Link>
              </button>
            ) : (
              <span className="span">Login for buy</span>
            )}
          </div>
        </div>
      </div>
    </div>): <EmptyCart/>)
  );
}
