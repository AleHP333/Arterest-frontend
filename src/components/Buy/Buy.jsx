//import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {getPrice} from "../Card/FavAndCart";




export default function Buy() {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.userSignReducer.userData)
    const totalPrice = getPrice()
    const CartItem = JSON.parse(localStorage.getItem('cartList'))
    
    const url = "http://localhost:3001";
  

    console.log(CartItem)
   


    
    JSON.parse(localStorage.getItem('cartList'));
    const buyHandler = async () => {
      let res = await axios.post( `${url}/create-order/` + userState?._id,
        { cartItem: CartItem }
      );
      window.location.href = res.data;
      console.log(window.location.href);
    }

    return(
        <div className="flex items-center lg:flex-row flex-col justify-center">
            <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white lg:h-screen h-auto gap-1">
                <h1 className="lg:text-4xl text-3xl font-black leading-10  mb-2 pt-3">Buy Order</h1>
            </div>
            <div className="lg:w-96 md:w-8/12 w-full h-full">

                <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <h2>Buyer dates</h2>

                <strong>Name:</strong> {userState?.userName} <br />
                <strong>Email: </strong> {userState?.email} <br />
                <strong>Country:</strong> {userState?.country} <br />
                <strong>Profile:</strong> {userState?.userImage} <br />
                
                <div>
                <Link to="/editProfile">Editar</Link>
                </div>
                </div>
                

           </div>


           <div >
            <div>
                <h1>Items</h1>
            </div>


            <div  >
                         {
                      CartItem?.map((item) => (
                        <div>
                          <div className="align-items-center">
                            <div md={6}>
                              {
                                item.img ? 
                                <img width= '400px'height='400px'
                                src={item.img}
                                alt={item.title}
                              />
                              : null
                              }
                              {' '}
                              <Link to={`/products/${item.product}`}>
                                {item.title}
                              </Link>
                            </div>

                            <div md={3}>
                              <span>{item.quantity}</span>
                            </div>

                            <div md={3}>
                              ${Math.round(item.quantity * item.price)}
                            </div>
                          </div>
                        </div>
                      ))}
                   
            </div>
            <div>
            <div>
                  <h1>Resumen de Orden</h1>
                  <div variant="flush">
                  

                    <div>
                      <div>
                        <h2>Valor Total</h2>
                        <span>
                          <strong>
                            ${Number(totalPrice).toFixed(2)}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div className="lg:w-96 md:w-8/12 w-full h-full">
                      <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <button className='rounded px-4 text-base leading-none w-full py-3 bg-black border-black border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white '
                          type="button"
                          onClick={buyHandler}
                          //disabled={CartItem.length === 0 }
                          >
                          Comprar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

           </div>


        </div>

    );


}