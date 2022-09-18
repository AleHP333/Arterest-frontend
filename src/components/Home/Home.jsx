import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { activeLoading, artFilterByBack, getAllProducts } from '../../redux/actions/productActionsTest';
import  Card  from '../Card/Card';
import FilterBar from '../FilterBar/FilterBar';
import NavBar from '../NavBar/NavBar';
import Footer from '../../pages/Footer/Footer.jsx';
import './home.css'

//MUI COMPONENTS
import Chip from "@mui/material/Chip"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function tagPrice(tagPrices){
    return tagPrices.split("/").map(tag => "$" + tag).join("/")
}

export const Home = () => {

    //HOOKS
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.testReducer.isLoading)
    const [reload, setReload] = useState(false)
    const allPaints = useSelector((state) => state.testReducer.allProducts);
    //SEARCH PARAMS
    const [searchParams] = useSearchParams();
    const searchName = searchParams.get('name');
    const filters = []
    searchParams.forEach((value, key) => {
        filters.push([key, value]);
    });
    useEffect(() =>{
        if (searchParams.toString()) {
                dispatch(artFilterByBack(searchParams.toString()));
            } else {
                dispatch(getAllProducts());
            }
        dispatch(activeLoading());
    }, [dispatch, searchParams])
    //Clear filters
    function clearFilter(filter) {
        if(filter === "price"){
            dispatch(activeLoading)
        }
        searchParams.delete(filter);
        location.search = `?${searchParams.toString()}`;
        navigate(location);
    }


  return (
    <div>
        {/* <NavBar /> */}
        <div>
            <div className='w-full bg-red-300 mb-5 shadow-md'>
                <FilterBar></FilterBar>
                <div className="w-full h-10 bg-red-200 flex flex-initial items-center ">
                {filters.length ? searchName && filters.length === 1 ?
                null :
                <>
                {
                    filters.map(filter => {
                        return filter[0] === 'name' ?
                        null :
                        (
                        <div className='inline-block ml-2' key={filter[0]} >
                            <Chip label={filter && (filter[0] === "price" ? tagPrice(filter[1]) : filter[1])} onDelete={() => {clearFilter(filter[0])}} />
                        </div>
                        )
                    })
                }
                </>
                : null}
                </div>
            </div>
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
                }) : <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }
            </div>
        </div>
            <Footer className="foo"/>
    </div>
  )
}

