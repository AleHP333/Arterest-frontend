import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { artFilter } from '../../redux/actions/productActionsTest';

//MUI COMPONENTS
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function FilterBar({setCurrentPage}) {

    //Hooks
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.testReducer.isLoading)
    const productsAll = useSelector((state) => state.testReducer.allProducts);
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterPrice, setFilterPrice] = useState("none");
    const colors = searchParams.get('colors');
    const countries = searchParams.get('origin');
    const styles = searchParams.get("style")

    //Art properties
    const pricesAll = [];
    const colorsArrayAll = [];
    const countriesArrayAll = [];
    const stylesArrayAll = [];
    
    productsAll.map(product => {
        product.colors.map((color) => colorsArrayAll.push(color));
        stylesArrayAll.push(product.style)
        pricesAll.push(product.price);
        countriesArrayAll.push(product.origin);
        return null
    })

    //Delete duplicates
    const colorsAll = colorsArrayAll.filter((item, index) => {
        return colorsArrayAll.indexOf(item) === index;
    })
    const countriesAll = countriesArrayAll.filter((item, index) => {
        return countriesArrayAll.indexOf(item) === index;
    })
    const stylesAll = stylesArrayAll.filter((item, index) => {
        return stylesArrayAll.indexOf(item) === index;
    })
    //Alphabetize the arrays in alphabetical order
    colorsAll.sort();
    stylesAll.sort();
    //-------- pricesAll.sort();
    countriesAll.sort();
    //Price slide
    const [priceSlide, setPriceSlide] = useState([Math.floor(Math.min(...pricesAll)), Math.ceil(Math.max(...pricesAll))]);
    // Save changes in the price slider
    function handlerChangePrice (e) {
        e.preventDefault();
        setPriceSlide(e.target.value);
    }
    //Send selected filters
    function handlerSubmit(e) {
        e.target.value ? e.target.name === 'price' ? 
        setSearchParams(searchParams.set( e.target.name, `${e.target.value[0]}/${e.target.value[1]}`)) :
        setSearchParams(searchParams.set( e.target.name, e.target.value )) :
        searchParams.delete(e.target.name);
        location.search = `?${searchParams.toString()}`;
        navigate(location);
    }
    // Send price filter data
    function handlerRangeSubmit() {
        const prices = {
            target: {}
        };
        prices.target.name = 'price';
        prices.target.value = priceSlide;
        handlerSubmit(prices)
    }
    // Set Filters
    
    useEffect(() => {
        setPriceSlide([Math.floor(Math.min(...pricesAll)), Math.ceil(Math.max(...pricesAll))])
    }, [loading])
    useEffect(() => {
        if(filterPrice){
            dispatch(artFilter(filterPrice))
        }
        setCurrentPage(1)
    }, [filterPrice])

    return (
        <div className="py-4 px-3 flex">
            {
            <>
                <FormControl className='colorFilter'>
                    <InputLabel id="selectColors">Color</InputLabel>
                    <Select
                        sx={{ width: 150, mr: "2rem" }}
                        id="selectColors"
                        name="colors"
                        variant="filled"
                        value={colors ? colors : ""}
                        fullWidth
                        size='small'
                        onChange={(e) => handlerSubmit(e)}
                    >
                    {
                        colorsAll?.map((color, i) => {
                            return (
                                <MenuItem 
                                    key={i} 
                                    value={color}
                                >
                                {color} </MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>
            </>
            }
            {
            <>
                <FormControl className='colorFilter'>
                    <InputLabel id="selectCountries">Country</InputLabel>
                    <Select
                        id="selectCountries"
                        sx={{ width: 150, mr: "2rem" }}
                        name="origin"
                        variant="filled"
                        value={countries ? countries : ""}
                        fullWidth
                        size='small'
                        onChange={(e) => handlerSubmit(e)}
                    >
                    {
                        countriesAll?.map((countrie, i) => {
                            return (
                                <MenuItem 
                                    key={i} 
                                    value={countrie}
                                >
                                {countrie} </MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>
            </>
            }
            {
            <>
                <FormControl className='colorFilter'>
                    <InputLabel id="selectStyles">Styles</InputLabel>
                    <Select
                        id="selectStyles"
                        sx={{ width: 150, mr: "3rem" }}
                        name="style"
                        variant="filled"
                        value={styles ? styles : ""}
                        fullWidth
                        size='small'
                        onChange={(e) => handlerSubmit(e)}
                    >
                    {
                        stylesAll?.map((style, i) => {
                            return (
                                <MenuItem 
                                    key={i} 
                                    value={style}
                                >
                                {style} </MenuItem>
                            )
                        })
                    }
                    </Select>
                </FormControl>
            </>
            }
            { loading === false ?
            <>
                <div className="flex">
                <Fade style={{ transitionDelay: true ? '200ms' : '0ms' }} in={true} >
                    <FormControl className='filterPrice'>
                        <Slider
                            sx={{ width: 150, mr: "2rem" }}
                            min={Math.floor(Math.min(...pricesAll))}
                            max={Math.ceil(Math.max(...pricesAll))}
                            valueLabelDisplay="auto"
                            value={priceSlide}
                            marks={[{value: Math.floor(Math.min(...pricesAll)), label: `$${priceSlide[0]}`}, 
                            {value: Math.ceil(Math.max(...pricesAll)), label: `$${priceSlide[1]}`}]}
                            onChange={(e) => handlerChangePrice(e)}
                        />
                    </FormControl>
                </Fade>
                    <Zoom in={true}>
                    <IconButton sx={{ width: 40, height: 40, mr: "2rem" }} onClick={() => handlerRangeSubmit()} aria-label="send">
                        <SearchIcon/>
                    </IconButton>
                    </Zoom>
                </div>
            </> : 
            <div className='my-5'>
                <Box sx={{ width: 190, height: 10, mr: "4rem" }}>
                    <LinearProgress />
                </Box>
            </div>
            }
            {
            <>
                <FormControl className='colorFilter'>
                    <InputLabel id="selectSort">Sort</InputLabel>
                    <Select
                        id="selectSort"
                        sx={{ width: 150, mr: "0.5rem", }}
                        name="filter"
                        variant="filled"
                        fullWidth
                        value={filterPrice !== "none" ? filterPrice : ""}
                        size='small'
                        onChange={(e) => {setFilterPrice(e.target.value)}}
                    >    
                    <MenuItem value="maxValue"><ArrowCircleUpIcon  sx={{ width: 25, height: 25,}} className="mr-2 text-red-400" /> Value</MenuItem>     
                    <MenuItem value="minValue"><ArrowCircleDownIcon  sx={{ width: 25, height: 25,}} className="mr-2 text-green-600" /> Min Value</MenuItem>
                    <MenuItem value="maxLikes"><ArrowCircleUpIcon  sx={{ width: 25, height: 25,}} className="mr-2 text-blue-500" /> Likes</MenuItem>     
                    <MenuItem value="minLikes"><ArrowCircleDownIcon  sx={{ width: 25, height: 25,}} className="mr-2 text-gray-500" /> Likes</MenuItem>
                    </Select>
                </FormControl>
                <IconButton sx={{ width: 40, height: 40,}} onClick={() => setFilterPrice("none")} aria-label="send">
                    <ClearIcon/>
                </IconButton>
            </>
            }
        </div>
    )
}
