// From React
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
// Components
import Card from '../Card/Card';
import FilterBar from '../FilterBar/FilterBar';
// Actions
import {
    activeLoading,
    artFilterByBack,
    getAllProducts
} from '../../redux/actions/productActionsTest';
import InfiniteScroll from "react-infinite-scroll-component";
// Custom Styles
import './home.css'
//MUI COMPONENTS
import Chip from "@mui/material/Chip";
import LinearProgress from '@mui/material/LinearProgress';

function tagPrice(tagPrices) {
    return tagPrices.split("/").map(tag => "$" + tag).join("/")
}

export const Home = ({ handleAdded, handleNotAdded }) => {

    //HOOKS
    const [currentPage, setCurrentPage] = useState(1)
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allPaints = useSelector((state) => state.testReducer.allProducts);

    const [paint, setPaint] = useState([])
    const [hasMore, setHasMore] = useState(true)
    console.log(currentPage, 'PAG')

    //SEARCH PARAMS
    const [searchParams] = useSearchParams();
    const searchName = searchParams.get('name');
    const filters = []
    searchParams.forEach((value, key) => {
        filters.push([key, value]);
    });

    useEffect(() => {
        dispatch(activeLoading());

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (searchParams.toString()) {
            dispatch(artFilterByBack(searchParams.toString()));
            setCurrentPage(1)
        } else {
            dispatch(getAllProducts());
        }
    }, [dispatch, searchParams])

    //Clear filters
    function clearFilter(filter) {
        if (filter === "price") {
            dispatch(activeLoading)
        }
        searchParams.delete(filter);
        location.search = `?${searchParams.toString()}`;
        setCurrentPage(1)
        navigate(location);
    }

    //Paginate functions----------------------------------------------------------------------------------
    const itemsToRender = () => {
        const start = 0;
        let end = currentPage * 15;
        if (start + 15 > allPaints.length) end = allPaints.length;
        return allPaints.slice(start, end);
    };

    return (
        <div className="min-h-full">
            <div className='w-full bg-white mb-5 shadow-md'>
                <FilterBar setCurrentPage={setCurrentPage}></FilterBar>
                {
                    filters.length ? searchName && filters.length === 1 ? null :
                        <div className="w-full h-10 bg-red-200 flex flex-initial items-center ">
                            {
                                filters.length ? searchName && filters.length === 1 ? null :
                                    <>
                                        {
                                            filters.map(filter => {
                                                return filter[0] === 'name' ?
                                                    null :
                                                    (
                                                        <div className='inline-block ml-2' key={filter[0]} >
                                                            <Chip label={filter && (filter[0] === "price" ? tagPrice(filter[1]) : filter[1])} onDelete={() => { clearFilter(filter[0]) }} />
                                                        </div>
                                                    )
                                            })
                                        }
                                    </> : null
                            }
                        </div> : null
                }
            </div>

            <div id='scrollableDiv'>
                <InfiniteScroll
                    className='mx-4'
                    dataLength={itemsToRender().length}
                    next={() => setCurrentPage((prevPage) => prevPage + 1)}
                    hasMore={hasMore}
                    loader={<LinearProgress className='flex mt-auto' />}
                    endMessage={
                        <p className='text-bold text-center text-lg'>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className='pin_container'>
                        {(itemsToRender()).map((e) => {
                                    return (
                                        <div className='inner2' key={e._id}>
                                            <Card
                                                className='img'
                                                img={e.img}
                                                userName={e.user.userName}
                                                userImage={e.user.userImage}
                                                stock={e.stock}
                                                title={e.title}
                                                price={e.price}
                                                _id={e._id}
                                                cardLikes={e.likes.length}
                                                handleAdded={handleAdded}
                                                handleNotAdded={handleNotAdded}
                                            >
                                            </Card>
                                        </div>
                                    );
                                })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};