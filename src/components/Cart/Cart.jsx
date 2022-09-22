// React utilities
import React, { useEffect, useState } from "react";
// Actions
import { getPrice } from "../Card/FavAndCart";
// Components
import CartCard from "./CartCard";
// Styles

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
    <div className="py-1 px-2 flex flex-col bg-white rounded shadow-sm">
      <h1 className="border-solid border-b-2 m-0 w-3/5">Sopping Cart</h1>
      <div className="flex gap-7">
        <div className="w-2/3">
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
        <div className="w-1/5 mx-auto flex flex-col items-center gap-6">
          <p>
            Subtotal: <span>${parseInt(totalPrice)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
