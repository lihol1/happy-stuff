'use client'

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from "../../styles/Favourite.module.scss";
import Products from '@/components/Products/Products';
import { getProducts} from '../../store/products/productsSlice';

const FavouritePage = () => {   
    const { favourite } = useSelector(state => state.user)
    const { list } = useSelector(({  products }) => products)

    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(getProducts());
    // }, [dispatch]);

    return (
        <div className={styles.favourite}>
            {!favourite.length ? (                
                <div className={styles.empty}>Favourite section is empty</div> 
                ) : (
                    <Products products={favourite} amount={100} title="Favourite" />
                )
            }
    
            <Products products={list} amount={6} title="Trending" />
        </div>
    )
};

export default FavouritePage;