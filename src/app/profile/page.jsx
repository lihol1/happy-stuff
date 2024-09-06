'use client'
import React, { useEffect, useState } from 'react';
import styles from "../../styles/Profile.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, resetUpdate } from "../../store/user/userSlice";
import RegisterConfirmation from '@/components/User/RegisterConfirmation';
import Link from 'next/link';
import ErrorMessage from '@/components/User/ErrorMessage';

const ProfilePage = () => {
    const dispatch = useDispatch();    
    const { currentUser, update, error } = useSelector(({ user }) => user);
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        // avatar: "",
    });
    const text='Successfully updated'
   

    useEffect(()=>{
        dispatch(resetUpdate());
    }, [dispatch]);

    useEffect(()=>{
        if (!currentUser) return;
        setValues(currentUser);
    }, [currentUser]);
    
    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value });
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        //проверяем все ли значения вписаны в форму, все ли дают true
        const isNotEmpty = Object.values(values).every((val) => val);
        
        if (!isNotEmpty) return;
        dispatch(updateUser(values));        
    };

   

    return (
        <section className={styles.profile}>
            {update && <RegisterConfirmation text={text}/>}
            {error && <ErrorMessage />}
            {!currentUser ? <span>You need to log in</span> : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <input 
                            type="email"  
                            name="email"  
                            placeholder='Your email'   
                            value={values.email}   
                            autoComplete='off'  
                            onChange={handleChange} 
                            required/>
                    </div>                  
                    <div className={styles.group}>
                        <input 
                        type="text" 
                        name="name"  
                        placeholder='Your name' 
                        value={values.name}  
                        autoComplete='off' 
                        onChange={handleChange} 
                        required />
                    </div>
                    <div className={styles.group}>
                        <input 
                            type="password" 
                            name="password"  
                            placeholder='Your password' 
                            value={values.password}  
                            autoComplete='off' 
                            onChange={handleChange} 
                            required />
                    </div>                
                  
                
                    <button type="submit" className={styles.submit}>Update</button>
                </form>
            )}
            <Link href={'./'} className={styles.link}>return to main page</Link>
           
        </section>
    );
};

export default ProfilePage;