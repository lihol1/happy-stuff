'use client'
import React, { useEffect } from 'react';
import Slider from '../Slider/Slider';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import { useSelector, useDispatch } from 'react-redux';
import {  filterByPrice } from '../../store/products/productsSlice';
// import { getCategories } from '../../store/categories/categoriesSlice';
import { getProducts} from '../../store/products/productsSlice';

const Home = () => {    
    const dispatch = useDispatch();

  useEffect(()=>{
    //   dispatch(getCategories());
      dispatch(getProducts());
  }, [dispatch]);
    
    const categories  = useSelector((state) => state.categories); 
    const { list, filtered, isLoading }  = useSelector((state) => state.products); 
    useEffect(() => {
        if(!list.length) return;

        dispatch(filterByPrice(50))             
    }, [dispatch, list.length]);

    
    return (      
        <>        
            <Slider />           
            <Products products={list} amount={6} title="Trending" /> 
            <Banner />
            <Categories products={categories.list} amount={6} title="Worth seeing" />
            <Products products={filtered} amount={6} title="Less than $50" />           
        </> 
    );
};

export default Home;