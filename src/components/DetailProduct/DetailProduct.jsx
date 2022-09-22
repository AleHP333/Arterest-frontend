import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Actions
import { getPaintById } from '../../redux/actions/productActionsTest';
// Components
import CommentsBox from '../CommentsBox/CommentsBox';
// Styles
import './DetailProduct.css'
//Material UI
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function DetailProduct () {

    const dispatch = useDispatch();
    const { id } = useParams();
    const paint = useSelector((state) => state.testReducer.paintDetail);

    useEffect(() => {
        if (!paint || id !== paint._id) {
            dispatch(getPaintById(id));
        }
    }, [dispatch, id, paint]);

    // Alert Logic 
    const [open, setOpen] = React.useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClickShare = () => {
        setOpen(true);
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

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

    return (
        !paint || id !== paint._id ? 
        <div data-placeholder class="h-52 w-full overflow-hidden relative bg-gray-200"></div> :
        <div className="containerDetail bg-white">  
            <div className="p-8 text-gray-600 md:px-12 xl:px-8">
                <div className="md:flex md:gap-6 lg:justify-center lg:gap-12">
                    <div className="md:w-6/12 lg:w-4/12  img-zoom-container">
                        <div 
                            onMouseEnter={() => handleMouseEnter()} 
                            onMouseLeave={() => handlerMouseLeave()}
                            onMouseMove={(e) => handlerMouseMove(e)}
                            id="container"
                        >
                            <div 
                                ref={lensRef} 
                                className={`${openZoom ? "zoom" : ""} img-zoom-lens`}
                                style={styleLens}
                            ></div>
                            <img 
                                ref={imgRef}
                                id="myimage" 
                                src={paint.img} 
                                alt=""
                                loading="lazy"
                            />
                            <div 
                                style={styleResult}
                                ref={resultRef} 
                                id="myresult"
                                className={`${openZoom ? "zoom" : ""} img-zoom-result`}
                            ></div>
                        </div> 
                    </div>
                    <div className="mt-2 lg:flex lg:flex-col md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{paint.title}</h2>
                        <p className="mt-6 text-gray-600">{paint.description}</p>
                        <div className='flex mt-6 gap-3'>
                            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`${paint.userImage}`} alt=""></img>
                            <p className="self-center text-gray-400">By
                            <Link 
                                className="hover:text-gray-700"
                                to={`/artistprofile/${paint.userName}`}
                            > {paint.userName}
                            </Link>
                            </p>
                        </div>
                        <div className='flex gap-6 mt-6 self-center'>
                            <CopyToClipboard text={window.location.href}>
                                <Button onClick={handleClickShare} variant="contained" startIcon={<ShareIcon />}>
                                        Share
                                </Button>
                            </CopyToClipboard>
                            <Button variant="contained" startIcon={<FavoriteIcon />}>
                                    Favorite
                            </Button>
                            <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
                                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                                Link copied to clipboard 
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>
                </div>
            </div>
                <CommentsBox paintId={paint._id}></CommentsBox>
        </div>                            
    )
}