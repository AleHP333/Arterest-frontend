import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sendOrder } from '../../redux/actions/CartActions';
import { useDispatch } from 'react-redux';


export default function Buy() {
    const navigate = useNavigate();
    const { cartItem} = useSelector((state) => state.CartReducer.cart);
    const userState = useSelector((state) => state.userReducer.user);
    const SingleCart = useSelector((state) => state.CartReducer.SingleCart);
    const state = useSelector((state) => state.CartReducer.cart.cartItem);
    const totalPrice = JSON.stringify(
        state.reduce((prev, next) => prev + next.price * next.quantity, 0)
      );
    const dispatch = useDispatch();

    
    JSON.parse(localStorage.getItem('cart'));
    const buyHandler = async () => {
        dispatch(sendOrder)
      let res = await axios.post(
        `/payment/create-order/` + userState?._id,
        { totalPrice, cartItem, userState }
      );
      window.location.href = res.data;
      console.log(window.location.href);
    }

    return(
        <div>
            <div>
                <h1>Buy Order</h1>
            </div>
            <div>

                <div>
                <h1>Buyer dates</h1>
                </div>

                <strong>Name:</strong> {userState?.userName} <br />
                <strong>Email: </strong> {userState?.email} <br />
                <strong>Country:</strong> {userState?.country} <br />
                <strong>Profile:</strong> {userState?.userImage} <br />

                <div>
                <Link to="/editProfile">Editar</Link>
                </div>
           </div>


           <div>
            <div>
                <h1>Items</h1>
            </div>


            <div>
            {SingleCart?.CartItem?.title !== undefined ? (
                      <div>
                        <div className="align-items-center">
                          <div>
                            <img
                              src={SingleCart?.CartItem?.img}
                              alt={SingleCart?.CartItem?.title}
                            ></img>{' '}
                            <Link to={`/${SingleCart?.CartItem.product}`}>
                              {SingleCart?.CartItem?.title}
                            </Link>
                          </div>

                          <div md={3}>
                            <span>{SingleCart?.CartItem?.quantity}</span>
                          </div>

                          <div md={3}>
                            $
                            {Math.round(
                              SingleCart?.CartItem?.quantity *
                                SingleCart?.CartItem?.price
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      cartItem?.map((item) => (
                        <div>
                          <div className="align-items-center">
                            <div md={6}>
                              {
                                item.img ? 
                                <img
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
                      ))
                    )}
            </div>
            <div>
            <div>
                  <h1>Resumen de Orden</h1>
                  <div variant="flush">
                    <div>
                      <div>
                        <h2>Items</h2>
                        <span>
                          $
                          {SingleCart?.CartItem?.price !== undefined
                            ? Math.round(
                                SingleCart?.CartItem?.quantity *
                                  SingleCart?.CartItem?.price
                              )
                            : Number(totalPrice).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div>
                        <h2>Valor Total</h2>
                        <span>
                          <strong>
                            $
                            {SingleCart?.CartItem?.price !== undefined
                              ? Math.round(
                                  SingleCart?.CartItem?.quantity *
                                    SingleCart?.CartItem?.price
                                )
                              : Number(totalPrice).toFixed(2)}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="d-grid">
                        <button
                          type="button"
                          onClick={buyHandler}
                          disabled={
                            cartItem.length === 0 &&
                            SingleCart?.CartItem?.price == undefined
                          }
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