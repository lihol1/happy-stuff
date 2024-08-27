'use client'
import React, { useEffect, useState } from 'react';
import styles from "../../styles/User.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetError } from '../../store/user/userSlice';
import RegisterConfirmation from './RegisterConfirmation';
import ErrorMessage from '@/components/User/ErrorMessage';

const UserLoginForm = ({ toggleCurrentFormType, closeForm, formSubmit }) => {
    const {error, currentUser} = useSelector(state => state.user);    
    const dispatch = useDispatch();
    const [isError, setIsError] = useState(false);    
    const [values, setValues] = useState({        
        email: "",
        password: "",        
    })    
  
    useEffect(()=>{
           formSubmit(setIsError)  
           dispatch(resetError())
        },[dispatch])   
    
    const text = 'You logged in'  

    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value });
    }
    //Эта функция сразу для нескольких инпутов, заменяет конструкцию onChange={()=>setValue(e.target.value)}

    const handleSubmit = async (e)=>{
        e.preventDefault();
           
        // проверяем все ли значения вписаны в форму, все ли дают true
        const isNotEmpty = Object.values(values).every((val) => val);
        
        if (!isNotEmpty) return;
        
        dispatch(loginUser(values));    
        currentUser && closeForm();
        };
         
        // console.log(error)
    
    return (
        <div className={styles.wrapper}>
            <RegisterConfirmation text={text}/>
            {error && <ErrorMessage />}
            <div className={styles.close} onClick={closeForm}>
                <svg className="icon">
                    <use xlinkHref='/sprite.svg#close' />
                </svg>
            </div>

            <div className={styles.title}>
                Log In
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input 
                        type="email"  
                        name="email"  
                        placeholder='Your email'   
                        value={values.email}   
                        autoComplete='off'  
                        onChange={handleChange}                        
                        required                        
                        />
                     {isError && <p className='input-error'>Invalid email</p>}   
                </div>
                   
                
                <div className={styles.group}>
                    <input 
                        type="password" 
                        name="password"  
                        placeholder='Your password' 
                        value={values.password}  
                        autoComplete='off' 
                        minLength={8}
                        maxLength={30}
                        onChange={handleChange} 
                        required                        
                        />
                </div>                
                
                {error==='401' && <p className='auth-error'>Username or password is incorrect</p>}

                <div className={styles.link} onClick={()=> toggleCurrentFormType("signup")}>
                    Create an account
                </div>
                <button type="submit" className={styles.submit}>Login</button>
            </form>
            
        </div>
    );
};

export default UserLoginForm;