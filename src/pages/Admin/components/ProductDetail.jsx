import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getAllProducts } from '../../../redux/actions/productActionsTest';
import '../../../components/DetailProduct/DetailProduct.css'



export default function ProductDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.allProducts);
    const [thisPaint, setThisPaint] = useState({})

    useEffect(() => {
        if (!paint) {
            dispatch(getAllProducts());
        }
        setThisPaint(paint.length ? paint.find(e => e._id === id) : {})

    }, [paint]);


    return (
            <div className="containerDetail bg-white">
                <div className="p-8 text-gray-600 md:px-12 xl:px-8">
                    <div className="md:flex md:gap-6 lg:justify-center lg:gap-12">
                        <img
                           className="md:w-6/12 lg:w-4/12"
                            id="myimage"
                            src={thisPaint.img}
                            alt=""
                            loading="lazy"
                        />
                        <div className="mt-2 lg:flex lg:flex-col md:7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{thisPaint.title}</h2>
                            <p className="mt-6 text-gray-600">{thisPaint.description}</p>
                            <div className='flex mt-6 gap-3'>
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`${thisPaint.userImage}`} alt=""></img>
                                <p className="self-center text-gray-400">By
                                    {thisPaint.userName}
                                </p>
                            </div>
                            <div className='flex gap-6 mt-6 self-center'>
                                <Link to={`/admin/editproduct/${id}`}>
                                <button  >
                                    Edit
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}