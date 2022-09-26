import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { activeLoading, artFilterByBack, getAllProducts } from '../../redux/actions/productActionsTest';
import  Card  from '../Card/Card';
import FilterBar from '../FilterBar/FilterBar';
import './home.css'

//MUI COMPONENTS
import Chip from "@mui/material/Chip"

function tagPrice(tagPrices){
    return tagPrices.split("/").map(tag => "$" + tag).join("/")
}

export const Home = ({ handleAdded, handleNotAdded }) => {

    //HOOKS
    const [currentPage, setCurrentPage] = useState(1)
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allPaints = useSelector((state) => state.testReducer.allProducts);
    console.log(allPaints)
    //SEARCH PARAMS
    const [searchParams] = useSearchParams();
    const searchName = searchParams.get('name');
    const filters = []
    searchParams.forEach((value, key) => {
        filters.push([key, value]);
    });
    useEffect(() =>{
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
        dispatch(activeLoading());
    }, [dispatch, searchParams])
    //Clear filters
    function clearFilter(filter) {
        if(filter === "price"){
            dispatch(activeLoading)
        }
        searchParams.delete(filter);
        location.search = `?${searchParams.toString()}`;
        setCurrentPage(1)
        navigate(location);
    }


  //Paginate functions---------------------------------------------------------------------------------------
  const itemsToRender = () => {
    const start = currentPage * 12 - 12;
    let end = start + 12;
    if (start + 12 > allPaints.length) end = allPaints.length;
    return allPaints.slice(start, end);
  };
  const listOfNumbers = () => {
    let list = [];
    let done = Math.ceil(allPaints.length / 12);
    for (let i = 0; i < done; i++) {
      list.push(i + 1);
    }
    return list;
  };

  function nextPage() {
    if (
      listOfNumbers().length !== currentPage &&
      listOfNumbers().length > currentPage
    ) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo(0, 0);
  }
  function prevPage() {
    if (currentPage !== 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  }
  const changePage = (e) => {
    setCurrentPage(Number(e.target.value));
    window.scrollTo(0, 0);
  };

  return (
    <div>
        <div>
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
                                        <Chip label={filter && (filter[0] === "price" ? tagPrice(filter[1]) : filter[1])} onDelete={() => {clearFilter(filter[0])}} />
                                    </div>
                                    )
                                })
                            }
                            </>: null
                        }
                </div> : null
                }
            </div>
        {/* CARLOS-------------------------------------------------------------------------------------------- */}
            
            <div className="flex justify-center my-3">
                <div>
                    <button
                        onClick={prevPage}
                        className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    >
                        <span>&laquo;</span>
                    </button>
                </div>
                {listOfNumbers().map((number, i) => {
                    return (
                    <button id={i} value={number} onClick={(e) => changePage(e)} className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-100  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${currentPage===number? 'bg-red-600' : ""}`}>
                        {number}
                    </button>
                );
                })}
                <div>
                    <button onClick={nextPage} className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">
                        <span>&raquo;</span>
                    </button>
                </div>
            </div>
            <div className='pin_container'>
                {typeof itemsToRender()[0]==="string"? <div >ERROR</div>:
                itemsToRender().map((e) => {
                return (
                <div key={e._id}>
                    <Card  className='img'
                        img={e.img}
                        userName={e.userName}
                        userImage={e.userImage}
                        stock={e.stock}
                        title={e.title}
                        price={e.price}
                        _id={e._id}
                        handleAdded={handleAdded}
                        handleNotAdded={handleNotAdded}
                        >                     
                    </Card>
                </div>
                );
                })}
            </div>
            <div className="flex justify-center my-3">
                <div>
                    <button
                        onClick={prevPage}
                        className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    >
                        <span>&laquo;</span>
                    </button>
                </div>
                {listOfNumbers().map((number, i) => {
                    return (
                    <button id={i} value={number} onClick={(e) => changePage(e)} className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-100  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${currentPage===number? 'bg-red-600' : ""}`}>
                        {number}
                    </button>
                );
                })}
                <div>
                    <button onClick={nextPage} className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">
                        <span>&raquo;</span>
                    </button>
                </div>
            </div>
            {/* <div className='pin_container' >
                {allPaints.length ? allPaints?.map((e, index) => {
                    return (
                        <div  key={index}>
                            
                                <Card  className='img'
                                    img={e.img}
                                    userName={e.userName}
                                    userImage={e.userImage}
                                    title={e.title}
                                    price={e.price}
                                    key={e._id}>
                                </Card>
                            
                        </div>
                    );
                }) : <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                }
            </div> */}
      </div>
    </div>
  );
};