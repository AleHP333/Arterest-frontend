// React utilities
import React, { useEffect, useState } from "react";
// Actions
import { getPrice } from "../Card/FavAndCart";
// Components
import CartCard from "./CartCard";
// Styles
import { Link } from "react-router-dom";
export default function ShoppingCart() {
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cartList"))
  );
  const [totalPrice, setTotalPrice] = useState(getPrice());

  // useEffect(() => {
  // }, [setCartItem])

  const deleteItem = (_id) => {
    console.log(_id);
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
    <div className="flex items-center lg:flex-row flex-col justify-center">
      <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white lg:h-screen h-auto gap-1">
        <h1 className="lg:text-4xl text-3xl font-black leading-10  mb-2 pt-3">
          Sopping Cart
        </h1>
        {cartItem ? (
          cartItem?.map((prod) => (
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
            />
          ))
        ) : (
          <div>The CartItem list is empty</div>
        )}
      </div>
      <div className="lg:w-96 md:w-8/12 w-full h-full">
        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
          <div>
            <p className="lg:text-4xl text-3xl font-black leading-9 ">
              Checkout
            </p>
            <div>
              <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal ">Total</p>
                <p className="text-2xl font-bold leading-normal text-right ">${parseInt(totalPrice)}</p>
              </div>
                <Link to='/buy' className='rounded px-4 text-base leading-none w-full py-3 bg-black border-black border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white '>Continue shopping...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}