'use client'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Product.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, toggleForm, addToFav } from '../../store/user/userSlice';
import Popup from '@/components/Popup/Popup';
import Favicon from './Favicon';

const SIZES = [48, 50, 52];

const Product = (item) => {
    
    const currentUser = useSelector(state=>state.user.currentUser)
    const { title, price, images, description } = item;     
    const [currentImage, setCurrentImage] = useState(); 
    const [currentSize, setCurrentSize] = useState(); 
    const [popupState, setPopupState] = useState(false); 

    const dispatch = useDispatch();     

    function correctUrl(images){
        // Корректируем ссылки, проверяем расширения 
        const imgs = images.slice()
        const data = String((imgs).toString());
        let res = data.match(/http[^'"]+?(\.(jpeg|jpg|gif|png|webp|avif))/g); 
        return res; 
    }

    useEffect(()=>{       
        if (!images.length) return;          
        setCurrentImage(correctUrl(images)[0])         
    },[images])      

    function getRandomNumber (min, max){
       return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const addToCart =()=>{
        if(!currentUser) {
            dispatch(toggleForm(true))
        } else {
            dispatch(addItemToCart(item));
            setPopupState(true)           
            setTimeout(()=>{setPopupState(false)},2000)
        }
    } 

    return (
        <section className={styles.product}>
            
            <div className={styles.images}>
                <div className={styles.current}>
                               
                <Image
                    src={currentImage}
                    alt={title} 
                    width={375}
                    height={375}                    
                />
                </div>  
                <div className={styles["images-list"]}>
                    {correctUrl(images) && correctUrl(images).map((image, i) =>(
                        
                        <Image key={i} className={styles.image} onClick={()=>setCurrentImage(image)}
                            src={image}
                            alt={title} 
                            width={90}
                            height={90}                    
                        />
                    ))}
                </div>
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>${price}</div>
                <div className={styles.color}>
                    <span>Color:</span> Green
                </div>
                <div className={styles.sizes}>
                    <span>Sizes:</span>
                    <div className={styles.list}>
                        {SIZES.map((size) => (
                            <div className={`${styles.size} ${currentSize === size? styles.active : ""}`}
                            onClick={()=>setCurrentSize(size)}                             
                            key={size}>
                                {size}    
                            </div>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.actions}>
                    <Popup popupState={popupState}/> 
                    <button className={styles.add} disabled={!currentSize} title={!currentSize && "Choose your size"} onClick={addToCart}>Add to cart</button>
                   
                    <Favicon item={item}/>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.purchase}>{getRandomNumber(10, 1000)} people purchased
                    </div>
                    <Link href={ROUTES.HOME}>Return to store</Link>
                </div>
            </div>
        </section>
    );
};

export default Product;

