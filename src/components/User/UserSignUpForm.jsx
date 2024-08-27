'use client'
import React, { useState, useEffect } from 'react';
import styles from "../../styles/User.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../store/user/userSlice';
import RegisterConfirmation from '@/components/User/RegisterConfirmation';
import ErrorMessage from '@/components/User/ErrorMessage';


const UserSignUpForm = ({ toggleCurrentFormType, closeForm, formSubmit }) => {
    const { error } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        // avatar: "",
    })
    const [isError, setIsError] = useState(false);    
        
    useEffect(()=>{
        formSubmit(setIsError)        
    },[])   
        
    const text = 'Congratulations, your account has been successfully created.'
    const handleChange = ({ target: {value, name} }) => {
        setValues({...values, [name]: value });
    }
    //Эта функция сразу для нескольких инпутов, заменяет конструкцию onChange={()=>setValue(e.target.value)}
console.log(error)
    const handleSubmit =(e)=>{
        e.preventDefault();
        //проверяем все ли значения вписаны в форму, все ли дают true
        const isNotEmpty = Object.values(values).every((val) => val);        
       
        if (!isNotEmpty) return;   
       dispatch(createUser(values));
        // closeForm();
    };
    
    return (
        
        <div className={styles.wrapper}>
            <RegisterConfirmation text={text} closeForm={closeForm} />
            {error && <ErrorMessage />}
            <div className={styles.close} onClick={closeForm}>
                <svg className="icon">
                    <use xlinkHref='/sprite.svg#close' />
                </svg>
            </div>

            <div className={styles.title}>
                Sign up
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
                        required/>
                        
                        {isError && <p className='input-error'>Invalid email</p>}   
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
                        minLength={8}
                        maxLength={30} 
                        onChange={handleChange} 
                        required />
                </div>                
                

                <div className={styles.link} onClick={()=> toggleCurrentFormType('login')}>
                    I already have an account
                </div>
                <button type="submit" className={styles.submit}>Create an account</button>
            </form>
            
        </div>
    );
};

export default UserSignUpForm;