import React, { useEffect, useState } from 'react';
import styles from '../../styles/Products.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '@/store/user/userSlice';
import { saveData, getData } from '@/utils/storage';

// let favData=[];

export default function Favicon ({ item }) {
    const dispatch = useDispatch();
    const fav = useSelector(state=>state.user.favourite)
    // const currentUser = useSelector(state=>state.user.currentUser)
    const id= item.id; 
    let found = fav.find(( el )=> el.id === id);  
    
    // useEffect(()=>{
    //     saveData('favourite', [])
    
    //    },[])

//    useEffect(()=>{
//     favData = getData('favourite') ? getData('favourite') : []

//    },[])

    //проверяем есть ли товар в избранном и приводим его статус к булевому типу
    const [isFav, setIsFav] = useState(!!found);

    // const [favourite, setFavourite] = useState(favData)  

    // function addToFavourite(item){
    //     // console.log('+')
    //     saveData('favourite',favData = [...favData, item])        
    // }

    // function deleteFromFavourite(id){
    //     // console.log('-')
    //     saveData('favourite', favData = favData.filter( elem => elem.id !== id));        
    // }

    function handleClick (){ 
        // if(currentUser){
            // console.log(currentUser)
            isFav ? dispatch(removeFromFav({ id }))  :  dispatch(addToFav({ item }));        
            setIsFav(!isFav);  
        // } else {
        //     console.log('no currentUser')
        //     isFav ? deleteFromFavourite(id): addToFavourite(item);
        // } 
        // saveData(fav)
        
    }
    

    return (
        <svg onClick={handleClick} className={isFav ? styles.active : styles.icon}>
            <use xlinkHref="/sprite.svg#heart"></use>
        </svg>
    )
}