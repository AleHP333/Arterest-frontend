import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// Actions
import { getPaintById } from '../../redux/actions/productActionsTest';
// Styles
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './DetailProduct.css'
import CommentsBox from '../CommentsBox/CommentsBox';

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
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };


    return (
        !paint || id !== paint._id ? <CircularProgress /> :
        <div className="containerDetail bg-white">  
            <div className="p-8 text-gray-600 md:px-12 xl:px-8">
                <div className="md:flex md:gap-6 lg:justify-center lg:gap-12">
                    {/* Esta parte es un image magnifier, se necesita mejorar su uso, asi que por ahora no esta habilitado 
                    <div className="md:5/12 lg:w-4/12" 
                    data-role="imagemagnifier"
                    data-magnifier-mode="glass"
                    data-lens-type="circle"
                    data-lens-size="200">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/800px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg" alt="productImage" loading="lazy" width="" height="100px" />
                    </div> */}
                    <div className="md:w-6/12 lg:w-4/12">
                        <img alt="" src={paint.img} loading="lazy" width="" height="" />
                    </div>
                    <div className="mt-2 lg:flex lg:flex-col md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{paint.title}</h2>
                        <p className="mt-6 text-gray-600">{paint.description}</p>
                        <div className='flex mt-6 gap-3'>
                            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`${paint.userImage}`} alt=""></img>
                            <p className="self-center text-gray-400">By {paint.userName}</p>
                        </div>
                        <div className='flex gap-6 mt-6 self-center'>
                            <CopyToClipboard text={window.location.href}>
                                <Button onClick={handleClick} variant="contained" startIcon={<ShareIcon />}>
                                        Share
                                </Button>
                            </CopyToClipboard>
                            <Button variant="contained" startIcon={<FavoriteIcon />}>
                                    Favorite
                            </Button>
                            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Link copied to clipboard 
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>
                </div>
            </div>
                <CommentsBox></CommentsBox>
        </div>                            
    )
}