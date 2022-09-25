import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearFromCart, DeleteFromCart, IncreaseCart, DecreaseCart, AddToCart } from '../../redux/actions/CartActions';
//import { CartDiv,ItemsContainer,ItemsContainer_SingleItem,ItemsInCart,Cart_Checkout,Checkout_total, EmptyCartContainer,Buttons,EliminarItem, container} from '../Cart/Cart.module.css';
import { useNavigate } from 'react-router-dom';
// import EmptyCart from '../../assets/img/emptycart.png';
import {ToastContainer, toast} from 'react-toastify'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Cart() {
  const [count,setcount] = useState(1)
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const state = useSelector((state) => state.CartReducer.cart.cartItem);
  const userState = useSelector((state) => state.userReducerPay.user)

  
  
    JSON.parse(localStorage.getItem('cartList'));
    


  function handleClear() {
    dispatch(ClearFromCart());
    toast.info('Carrito vacío', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
      setTimeout(()=>{
           navigate(-1);
      },1300)
  }

  function handleAddtoCart(e){
    const hasProduct = state.find(x => x.product === state?._id)
    if(hasProduct){
      if(hasProduct.quantity>=hasProduct?.stock.stockTotal || hasProduct.stock.stockTotal - hasProduct.quantity - count < 0){
        toast.error('Se ha superado el limite de Stock disponible', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      return
    }
    else if(hasProduct.quantity>=hasProduct?.stock.stockTotal === false){
       toast.warning(`Ya se encuentra en su carrito, se agrego la cantidad seleccionada: ${count}`, {
         position: 'top-right',
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       })
       dispatch(AddToCart( count))
     }
  }
  else {
    toast.success('Item Agregado Correctamente', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(AddToCart(e.product, count))}
  }


  function handleDelete(e){
    dispatch(DeleteFromCart(e))
    toast.error('Item borrado de su carrito', {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    if(state.length === 1 || state.length === 0){
      toast.info('Carrito vacío', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }
  }
  
  const totalPrice = JSON.stringify(state.reduce((prev, next)=> prev + next.price*next.quantity, 0))
  return (
    <div >
      <div >
        <h1>Tu carrito de compras</h1>
        <hr />
        <div>
          {state.length > 0 ? (
            <div >
              <div >
              <h3>Productos</h3>
              {state.map((e, i) => (
                <div  key={i}>
                  <img src={e.img}/>
                  <h1>{e.title}</h1>
                  <h2>Total: US$ {Math.round(e.price*e.quantity)}</h2>
                  <div>
                    <button onClick={() =>{
                      if(e.quantity>1){
                        dispatch(DecreaseCart(e.product))
                      }
                      else 
                       handleDelete(e.product)}
                       }>-</button>
                    <h1>{e.quantity}</h1>
                    <button onClick={() => {
                      if(e.stock.stockTotal > e.quantity){
                        dispatch(IncreaseCart(e.product))
                      }
                      else {
                       return
                      }}
                      }>+</button>
                  </div>
                  <button  onClick={() => 
                    handleDelete(e.product)}>
                    Eliminar
                  </button>
                </div>
              ))}
              </div>
              <div>
                <div>
                <h1>Total:US$ {Math.ceil(totalPrice)}</h1>
              </div>
              {
                
                 userState ? 
                 <button onClick={()=>navigate('/shipping')}>Checkout</button>
                :
                <Button variant="secondary" disabled>Checkout</Button>
              }
              <button onClick={() => handleClear()}>Borrar carrito</button>
             </div> 
            </div>
          ) : (
            <div>
              <h1>Tu carrito está vacío!</h1>
              <a onClick={()=> navigate("/")}>
                <h2>Regresar a la tienda</h2>
              </a>
            </div>
          )}
        </div>
      </div>
      
              
    
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />
    </div>
  );
}

export default Cart;
