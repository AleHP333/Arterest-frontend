import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getAllProducts, getPaintById, updateProduct } from '../../../redux/actions/productActionsTest';
import '../../../components/DetailProduct/DetailProduct.css'
import Button from '@mui/material/Button';



export default function ProductDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.allProducts);
    const [thisPaint, setThisPaint] = useState({})
    const navigate = useNavigate()

    const artDetail = useSelector((state) => state.testReducer.paintDetail)

    console.log(paint);

    useEffect(() => {
        if (!paint) {
            dispatch(getAllProducts());
        }
        setThisPaint(paint.length ? paint.find(e => e._id === id) : {})

    }, [paint]);


    useEffect(() => {
        if (!artDetail.userName) {
            dispatch(getPaintById(id))
        }
        setInput({
            ...input,
            userName: artDetail.userName,
            userImage: artDetail.userImage,
            title: artDetail.title,
            description: artDetail.description,
            img: artDetail.img,
            origin: artDetail.origin,
            technique: artDetail.technique,
            style: artDetail.style,
            colors: artDetail.colors,
            releaseDate: artDetail.releaseDate,
            price: artDetail.price,
            stock: artDetail.stock,
            tags: artDetail.tags,
            likes: artDetail.likes,
            comments: artDetail.comments,

        })
    }, [artDetail])

    const [input, setInput] = useState({
        userName: '',
        userImage: '',
        title: '',
        description: '',
        img: '',
        origin: '',
        technique: '',
        style: '',
        colors: '',
        releaseDate: '',
        price: '',
        stock: '',
        tags: '',
        likes: '',
        comments: ''

    })

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateProduct({ _id: artDetail._id, ...input }));
        navigate(`/admin/artworks`)
        dispatch(getPaintById())
    }

    async function handleDelete(e) {
        e.preventDefault();
        // dispatch(deleteProduct())
        navigate(`/admin/artworks`)

    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    if (!artDetail) {
        return 'Loading...'
    }


    return (
        <div className="containerDetail mt-3 bg-white">
            <form
                onSubmit={(e) => handleSubmit(e)} className="min-h-screen px-8 text-gray-600" >
                <div className="flex md:gap-6 lg:justify-center lg:gap-14">
                    <img
                        className="rounded-lg md:w-6/12 lg:w-4/12"
                        id="myimage"
                        src={thisPaint.img}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col lg:w-6/12">
                    <div className="containerPrincipalData">
                        <div className="text-gray-900 text-4xl font-medium title-font mb-2">
                            <input
                                id="title"
                                type='text'
                                placeholder={thisPaint.title}
                                name='title'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='flex m-2 gap-2'>
                            <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src={`${thisPaint.userImage}`}
                                alt=""
                            />
                            <Link
                                className="self-center text-black-600 hover:text-black"
                                to={`/artistprofile/${thisPaint.userName}`}
                            > {thisPaint.userName}</Link>
                        </div>
                        <div
                            className="my-4 leading-relaxed"
                            id="description">
                            <input
                                type='text'
                                placeholder={thisPaint.description}
                                name='description'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="border-b border-gray-200 mb-6 pb-0.5">
                            <div className="flex flex-col w-full">
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Colour/s</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            id="colors"
                                            type='text'
                                            placeholder={thisPaint.colors}
                                            name='colors'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Style</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            id="style"
                                            type='text'
                                            placeholder={thisPaint.style}
                                            name='style'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Technique</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            id="technique"
                                            type='text'
                                            placeholder={thisPaint.technique}
                                            name='technique'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Country of origin</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            id="origin"
                                            type='text'
                                            placeholder={thisPaint.origin}
                                            name='origin'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>

                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Price</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            id="price"
                                            type='text'
                                            placeholder={thisPaint.price}
                                            name='price'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>

                                <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800">Stock</p>
                                    <div className="items-center justify-center text-sm leading-none text-gray-600">
                                        <input
                                            id="stock"
                                            type='text'
                                            placeholder={thisPaint.stock}
                                            name='stock'
                                            onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-6 mt-6 '>
                            <Button
                                onClick={handleSubmit}
                                type="Submit"
                                variant="contained">
                                Edit
                            </Button>
                        </div>
                        <div className='flex gap-6 mt-6 '>
                            <Button
                                onClick={handleDelete}
                                type="Submit"
                                variant="contained">
                                Delete
                            </Button>
                        </div>
                    </div>

                </div>

            </form>
        </div>


    )
}