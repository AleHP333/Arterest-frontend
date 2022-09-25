import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getAllProducts } from '../../../redux/actions/productActionsTest';
import '../../../components/DetailProduct/DetailProduct.css'
import Button from '@mui/material/Button';



export default function ProductDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.allProducts);
    const [thisPaint, setThisPaint] = useState({})

    console.log(paint);

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
                            <h2 className="text-gray-900 text-4xl font-medium title-font mb-2">{thisPaint.title}</h2>
                            <p className="my-4 leading-relaxed">{thisPaint.description}</p>
                            <div className='flex m-2 gap-2'>
                                <img class="iinline-block h-8 w-8 rounded-full ring-2 ring-white" src={`${thisPaint.userImage}`} alt=""></img>
                                <p className="self-center text-black-600 hover:text-black">By
                                    {thisPaint.userName}
                                </p>
                                
                            </div>
                            <div className="border-b border-gray-200 mb-6 pb-0.5">
                                <div className="flex flex-col w-full">
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Colour/s</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{thisPaint.colors}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Style</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{thisPaint.style}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Technique</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{thisPaint.technique}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Country of origin</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{thisPaint.origin}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-6 mt-6 self-center'>
                                <Link to={`/admin/editproduct/${id}`}>
                                <Button variant="contained">
                                    Edit
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}