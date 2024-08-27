import React, { useState } from 'react';
import styles from '../../styles/Products.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '@/store/user/userSlice';

export default function Favicon ({ item }) {
    const dispatch = useDispatch();
    const fav = useSelector(state=>state.user.favourite)
    const id= item.id; 
    let found = fav.find(( el )=> el.id === id);  
    
    //проверяем есть ли товар в избранном и приводим его статус к булевому типу
    const [isFav, setIsFav] = useState(!!found);

    function handleClick (){ 
        isFav ? dispatch(removeFromFav({ id }))  :  dispatch(addToFav({ item }));        
        setIsFav(!isFav);    
    }
    

    return (
        <svg onClick={handleClick} className={isFav ? styles.active : styles.icon}>
            <use xlinkHref="/sprite.svg#heart"></use>
        </svg>
    )
}