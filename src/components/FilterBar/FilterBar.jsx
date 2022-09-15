import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

//MUI COMPONENTS
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function FilterBar() {

    //Hooks
    const location = useLocation();
    const navigate = useNavigate();
    const productsAll = useSelector((state) => state.testReducer.allProducts);
    const [searchParams, setSearchParams] = useSearchParams()
    const prices = searchParams.get('price');
    const colors = searchParams.get('colors');
    const countries = searchParams.get('countries');

    //Art properties
    const pricesAll = [];
    const colorsArrayAll = [];
    const countriesArrayAll = [];
    productsAll.map(product => {
        productsAll.colors.map((color) => colorsArrayAll.push(color));
        pricesAll.push(product.price);
        countriesArrayAll.push(product.origin);
        return null
    })
    //Delete duplicates
    const colorsAll = colorsArrayAll.filter((item, index) => {
        return colorsArrayAll.indexOf(item) === index;
    })
    //-------- const pricesAll = pricesArrayAll.filter((item, index) => {
    //--------     return pricesArrayAll.indexOf(item) === index;
    //-------- })
    const countriesAll = countriesArrayAll.filter((item, index) => {
        return countriesArrayAll.indexOf(item) === index;
    })
    //Alphabetize the arrays in alphabetical order
    colorsAll.sort();
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

    return (
        colors && prices && countries ? null : 
        <div>
            {
                !colors ? <>
                <b>Color: </b>
                <FormControl className='colorFilter'>
                    <Select
                        name="color"
                        variant="filled"
                        fullWidth
                        size='small'
                        onChange={(e) => handlerSubmit(e)}
                    >
                    {
                        colorsAll.map((color, i) => {
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
                </> : null
            }
        </div>
    )
}
