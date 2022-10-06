import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Favs and cart
import { addToFav, addToCart } from "../Card/FavAndCart";
// Actions
import { getPaintById, booleano } from '../../redux/actions/productActionsTest';
import { likeDisplike } from '../../redux/actions/userActions';
// Components
import CommentsBox from '../CommentsBox/CommentsBox';
// Styles
import './DetailProduct.css'
//Material UI
import ShareIcon from '@mui/icons-material/Share';
import PushPinIcon from '@mui/icons-material/PushPin';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Skeleton from '@mui/material/Skeleton';

export default function DetailProduct () {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.paintDetail);
    const loggedUser = useSelector((state) => state.userSignReducer.userData)
    const [likes, setLikes] = useState([])
    useEffect(() => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
        if (!paint || id !== paint._id) {
            dispatch(getPaintById(id))
        }
        if(paint){
            setLikes(paint.likes)
        }
    }, [dispatch, id, paint]);
    
    // Alert Logic 
    const [open, setOpen] = React.useState(false);
    const [messageAlert, setMessageAlert] = useState("");
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClickShare = (message) => {
        setMessageAlert(message);
        setOpen(true);
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    // Like
    function handleLike(paintId){
        dispatch(likeDisplike(paintId))
            .then((res) => setLikes(res))
    }

    // Image Zoom's Logic
    const lensRef = useRef();
    const imgRef = useRef();
    const resultRef = useRef();
    const [openZoom, setOpenZoom] = useState(false);
    const [styleResult, setStyleResult] = useState({
        backgroundImage: "",
        backgroundSize: "",
        backgroundPosition: ""
    })
    const [styleLens, setStyleLens] = useState({
        left: "",
        top: ""
    })

    function handleMouseEnter() {
        const { ejeX, ejeY } = findAxis();
        setStyleResult({
            ...styleResult,
            backgroundImage: "url('" + imgRef.current.currentSrc + "')",
            backgroundSize: `${imgRef.current.clientWidth * ejeX}px ${imgRef.current.clientHeight * ejeY}px`,
            left: `${imgRef.current.clientWidth + 16}px`
        })
        setOpenZoom(true);
    }
    
    function handlerMouseLeave() {
        setOpenZoom(false);
    }

    function findAxis() {
        const ejeX = (resultRef.current.clientWidth) / (lensRef.current.clientWidth);
        const ejeY = (resultRef.current.clientHeight) / (lensRef.current.clientHeight);
        return {ejeX, ejeY}
    }

    function handlerMouseMove(e) {
        e.preventDefault();
        const position = getCursorPos(e);
        let posX = position.coorX - ((lensRef.current.clientWidth) / 2);
        let posY = position.coorY - ((lensRef.current.clientHeight) / 2);

        if (posX > ((imgRef.current.clientWidth) - (lensRef.current.clientWidth))) {
            posX = imgRef.current.clientWidth - (lensRef.current.clientWidth);
        }
        if (posX < 0 ) {
            posX = 0;
        }
        if (posY > ((imgRef.current.clientHeight) - (lensRef.current.clientHeight))) {
            posY = imgRef.current.clientHeight - (lensRef.current.clientHeight);
        }
        if (posY < 0 ) {
            posY = 0;
        }

        setStyleLens({
            left: `${posX}px`,
            top: `${posY}px`
        })
        const { ejeX, ejeY } = findAxis();
        setStyleResult({
            ...styleResult,
            backgroundPosition: `-${posX * ejeX}px -${posY * ejeY}px`
        })
    }

    function getCursorPos(e) {
        const imagePosition = imgRef.current.getBoundingClientRect();

        let coorX = e.pageX - imagePosition.left;
        let coorY = e.pageY - imagePosition.top;
        coorX = coorX - window.scrollX;
        coorY = coorY - window.scrollY;

        return {
            coorX: coorX, 
            coorY: coorY
        };
    }

    // Placeholder Detail
    const PlaceholderDetail = () => (
        <div className='flex justify-center gap-12 pt-4'>
            {/* Image Skeleton */}
            <Skeleton
                variant="rounded" 
                width="30%" 
                height={380} 
            />
                
            <div className='w-5/12 flex flex-col mt-6'>
                {/* Buttons Skeleton */}
                <Skeleton 
                    className="flex ml-auto"
                    variant="text" 
                    sx={{ fontSize: '1.5rem' }} 
                    width="30%" 
                />
                {/* Title Skeleton */}
                <Skeleton 
                    variant="text" 
                    sx={{ fontSize: '2rem' }} 
                    width="70%"    
                />
                {/* Artist Skeleton */}
                <div className="flex gap-4 items-center">
                    <Skeleton 
                        variant="circular" 
                        width={40} 
                        height={40} 
                    />
                    <Skeleton 
                        variant="text" 
                        sx={{ fontSize: '1rem' }} 
                        width="30%"    
                    />
                </div>
                {/* Description Skeleton */}
                <Skeleton
                    className="my-3"
                    variant="rounded"
                    width="100%"
                    height={200}
                />
                {/* Payment Skeleton */}
                <Skeleton 
                    variant="text" 
                    sx={{ fontSize: '1.5rem' }} 
                />
            </div>
        </div>
    )

    // Favs and cart
    const [favProducts, setFavProducts] = useState(
        JSON.parse(localStorage.getItem("favList"))
    );

    const handleFavoritesState = () => {
        let favs = JSON.parse(localStorage.getItem("favList"));
        let answer = favs.map(fav => fav === paint._id);
        return answer;
    }

    const handleCartState = () => {
        let cart = JSON.parse(localStorage.getItem("cartList"));
        let answer = cart.map(cart => cart === paint._id);
        return answer;
    }

    return (
        !paint || id !== paint._id ? 
        PlaceholderDetail() :
        <div className="containerDetail mt-3 bg-white">  
            <div className="mb-5 px-8 text-gray-600">
                <div className="flex md:gap-6 lg:justify-center lg:gap-14 items-center">
                    <div className="img-zoom-container">
                        <div 
                            onMouseEnter={() => handleMouseEnter()} 
                            onMouseLeave={() => handlerMouseLeave()}
                            onMouseMove={(e) => handlerMouseMove(e)}
                            id="container" >
                            <div 
                                ref={lensRef} 
                                className={`${openZoom ? "zoom" : ""} img-zoom-lens`}
                                style={styleLens}
                            ></div>
                            <img
                                className='rounded-lg'
                                ref={imgRef}
                                id="myimage" 
                                src={paint.img} 
                                alt=""
                                loading="lazy" />
                            <div
                                onMouseEnter={() => handlerMouseLeave()}
                                style={styleResult}
                                ref={resultRef} 
                                id="myresult"
                                className={`${openZoom ? "zoom" : ""} img-zoom-result rounded-lg`}
                            ></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:w-6/12">
                        <div className='flex mr-4 ml-auto gap-5'>
                            {loggedUser && loggedUser.isAdmin ? <Link to={`/admin/artworks/artworkDetail/${paint._id}`}><Button variant="contained"><LocalPoliceIcon className='mr-3' /> EDIT </Button></Link> : null}
                            <div className='flex items-center gap-1'>
                                {likes !== undefined && <span className="text-black relative bottom-0.5">{likes.length}</span>}
                                <Tooltip title="Like">
                                    {
                                        loggedUser !== undefined ? 
                                        <IconButton onClick={() => handleLike(paint._id)}>
                                        {
                                            likes !== undefined && likes.find(user => user === loggedUser._id) ? 
                                            <FavoriteIcon className='text-red-500'/> :
                                            <FavoriteBorderOutlinedIcon className='text-red-500' />
                                        }
                                        </IconButton> : 
                                        <FavoriteIcon className='text-red-500'/>
                                    }
                                    {/* {
                                        loggedUser ? 
                                        <FavoriteIcon className='text-red-500' /> :
                                        <FavoriteBorderOutlinedIcon className='text-black hover:text-gray-500'/>
                                    } */}
                                </Tooltip>
                            </div>
                            <CopyToClipboard text={window.location.href}>
                                <Tooltip 
                                    onClick={() => {
                                        setOpen(false);
                                        setTimeout(() => {
                                            handleClickShare("Link copied to clipboard");
                                        }, open ? 100 : 0);
                                        
                                    }} 
                                    title="Share"
                                >
                                    <IconButton>
                                        <ShareIcon className='text-black'/>
                                    </IconButton>
                                </Tooltip>
                            </CopyToClipboard>
                            <Tooltip title="Pin to favorites">
                                <IconButton 
                                    onClick={(e) =>{
                                        setOpen(false);
                                        setTimeout(() => {
                                            addToFav(
                                                paint.userName,
                                                paint.userImage,
                                                paint.title,
                                                paint.img,
                                                paint._id,
                                                paint.price,
                                                null,
                                                null,
                                                e,
                                                setFavProducts,
                                                paint.stock
                                            );
                                            handleFavoritesState();
                                            handleClickShare(handleFavoritesState().length ? "Added to favorites": "Removed from favorites");
                                        }, open ? 100 : 0);
                                    }}>
                                    <PushPinIcon className='text-black' />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
                            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                                {messageAlert} 
                            </Alert>
                        </Snackbar>
                        <div className="containerPrincipalData">
                            <h1 
                                className="text-gray-900 text-4xl font-medium title-font mb-2"
                            >{paint.title}</h1>
                            
                            
                            <div className='flex m-2 gap-2'>
                                <img 
                                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
                                    src={`${paint.user.userImage}`} 
                                    alt=""
                                />
                                <Link 
                                    className="self-center text-black-600 hover:text-black"
                                    to={`/artistprofile/${paint.user.userName}`}
                                > {paint.user.userName}</Link>
                            </div>
                            <p className="my-4 leading-relaxed">{paint.description}</p>
                            <div className="border-b border-gray-200 mb-6 pb-0.5">
                                <div className="flex flex-col w-full">
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Colour/s</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{paint.colors}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Style</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{paint.style[0].toUpperCase() + paint.style.substring(1)}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Technique</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{paint.technique}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Stock</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{paint.stock}</p>
                                    </div>
                                    <div className="py-3 border-t border-gray-200 flex items-center justify-between">
                                        <p className="text-base leading-4 text-gray-800">Country of origin</p>
                                        <p className="items-center justify-center text-sm leading-none text-gray-600">{paint.origin}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="title-font font-medium text-2xl text-gray-900">${paint.price}</span>
                                <Button
                                    onClick={(e) => {
                                        setOpen(false);
                                        setTimeout(() => {
                                            addToCart(
                                                paint.userName,
                                                paint.userImage,
                                                paint.title,
                                                paint.img,
                                                paint.stock,
                                                paint._id,
                                                paint.price,
                                                null,
                                                null,
                                                e,
                                            );
                                            dispatch(booleano());
                                            handleClickShare(handleCartState().length ? "Added to shopping cart": "Removed from shopping cart");
                                        }, open ? 100 : 0);
                                    }}
                                    variant="contained" 
                                    startIcon={<ShoppingCartOutlinedIcon />}
                                    >Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <CommentsBox paintId={paint._id}></CommentsBox>
        </div>                            
    )
}