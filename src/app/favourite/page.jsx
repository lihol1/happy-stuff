'use client'

import { useSelector } from 'react-redux';
import styles from "../../styles/Favourite.module.scss";
import Products from '@/components/Products/Products';

const FavouritePage = () => {   
    const { favourite } = useSelector(state => state.user)
    const { list } = useSelector(({  products }) => products)

    return (
        <div className={styles.favourite}>
            {!favourite.length ? (                
                <div className={styles.empty}>Favourite section is empty</div> 
                ) : (
                    <Products products={favourite} amount={5} title="Favourite" />
                )
            }
    
            <Products products={list} amount={6} title="Trending" />
        </div>
    )
};

export default FavouritePage;