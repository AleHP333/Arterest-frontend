import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions/productActionsTest';
import  Card  from '../Card/Card';
import NavBar from '../NavBar/NavBar';
import './home.css'

export const Home = () => {
 const dispatch = useDispatch();
 const allPaints = useSelector((state) => state.testReducer.allProducts);

 useEffect(() =>{
    dispatch(getAllProducts())
 }, [dispatch])

  return (
    <div>
        {/* <NavBar /> */}
        <div className='pin_container' >
                {allPaints.length ? allPaints?.map((e, index) => {
                    return (
                        <div  key={index}>
                            {/* <Link> */}
                                <Card  className='img'
                                    img={e.img}
                                    userName={e.userName}
                                    userImage={e.userImage}
                                    title={e.title}
                                    price={e.price}
                                    key={e._id}>
                                </Card>
                            {/* </Link> */}
                        </div>
                    );
                }) : <p>Loading...</p>

                }
            </div>
    </div>
  )
}

