'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.scss';
import { ROUTES } from "../../utils/routes";
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm, loadState, addUser, resetState} from "../../store/user/userSlice";
import { useGetProductsQuery } from '../../store/api/apiSlice';
import {  getState, saveState, saveLastUser, getLastUser } from '@/utils/storage';
import dynamic from 'next/dynamic';

import Burger from '@/components/Header/BurgerMenu';
import MobileMenu from '@/components/Header/MobileMenu';
import { useSkipFirstRender } from '@/hooks/useSkipFirstRender'


//делаем этот компонент динамическим(не будет отрисовываться на сервере), чтобы  не было ошибки, что данные, приходящие с сервера не соответствуют данным на клиенте
const DynamicCartNumber = dynamic(() => import('./DynamicCartNumber'), {
    ssr: false,
  })
const DynamicAccount = dynamic(() => import('./DynamicAccount'), {
    ssr: false,
  })


const Header = () => {   
    const userState = useSelector(state=>state.user)
    const dispatch = useDispatch();    
    const { currentUser} = useSelector(({ user }) => user);
    const [values, setValues] = useState({ name: "Guest", avatar: "./avatar.svg"})
    const [searchValue, setSearchValue] = useState("");
    const [menuIsOpen, setMenuIsOpen] = useState(false);
        
    const { data, isLoading } = useGetProductsQuery({ title: searchValue}) 

    //достаем данные, загружаем в состояние 
    useEffect(()=>{
        const lastUser = getLastUser(); 
        if(lastUser !== null) dispatch(addUser(lastUser));

        if(currentUser !== null){            
            if(getState(currentUser.id)) {                      
               dispatch(loadState(getState(currentUser.id)));             
            }   
        } else {                
            if(getState()) {
               dispatch(loadState(getState()));                   
            }
        }         
        saveLastUser(currentUser); 
    },[dispatch])
     

    useEffect(()=>{       
        if(currentUser !== null){
            if(getState(currentUser.id)) {                      
                dispatch(loadState(getState(currentUser.id)));             
            } else {               
                saveState(userState, currentUser.id);               
            }   
        } else {
            if(getState()) {
                dispatch(loadState(getState()))
            } else {
                saveState(userState)
            }                 
        }        
        saveLastUser(currentUser); 
    }, [dispatch, currentUser])
   
    //сохраняем, если меняются корзина и избранное 
    useSkipFirstRender(save, [userState.cart, userState.favourite])
   
    function save() {       
        if(currentUser !== null){
            saveState(userState, currentUser.id)
        } else {                
            saveState(userState)
        }
    }            
       
    

    useEffect(()=>{    
            if(!currentUser) {setValues({name: "Guest", avatar: "./avatar.svg"})
        }else{
            setValues({...currentUser, avatar: "./avatar.svg"});           
        }
        
    }, [currentUser])
   
    const handleSearch = ({ target: { value } }) => {
        setSearchValue(value)
    };

    return (
        
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <Link href={ROUTES.HOME} className={styles.logolink}>
                            <Image className={styles.logoimg} src='/logo.svg' width={100} height={50} alt="logo" priority={true} />
                        </Link>
                    </div>
                    
                    <form className={styles.form}>
                            <div className={styles.icon}>
                                <svg>
                                    <use xlinkHref="/sprite.svg#search"></use>
                                </svg>
                            </div>

                            <div className={styles.input}>
                                <input type="search" name="search" placeholder="Search"  value={searchValue} onChange={handleSearch} />
                            </div>
                            
                            {searchValue && (
                                <div className={styles.box}>
                                {isLoading
                                    ? "Loading"
                                    : !data.length
                                    ? "No results"
                                    : data.map(({ title, images, id }) => {
                                        return (
                                        <Link
                                            key={id}
                                            onClick={() => setSearchValue("")}
                                            className={styles.item}
                                            href={`/products/${id}`}
                                            >
                                            <div
                                            className={styles.image}
                                            style={{ backgroundImage: `url(${images[0]})` }}
                                            />
                                            <div className={styles.title}>{title}</div>
                                        </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </form>
                    
                    
                    <div className={styles.info}>                      
                        
                            <Link href={ROUTES.FAVOURITE} className={styles.favourites} aria-label="Go to favourites">
                                <svg className={styles["icon-fav"]}>
                                    <use xlinkHref="/sprite.svg#heart"></use>
                                </svg>
                            </Link>

                            <Link href={ROUTES.CART} className={styles.cart} aria-label="Go to the cart">
                                <svg className={styles["icon-cart"]}>
                                    <use xlinkHref="/sprite.svg#bag"></use>
                                </svg>
                                <DynamicCartNumber />
                                
                            </Link> 

                    </div>
                    <div className={currentUser? `${styles.auth} ${styles.account}` : styles.account}>
                        <DynamicAccount name={values.name}/>
                    </div>

                    

                    <Burger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
                    <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
                </div>
            </div>
        </header>
    );
};

export default Header;