import { useSelector, useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import styles from "../../styles/User.module.scss";
import { resetError } from '@/store/user/userSlice';


const ErrorMessage = () => {
    const dispatch = useDispatch();
    const error = useSelector(state=> state.user.error)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
       setIsVisible(false)   
    },[])

    useEffect(()=>{
        error && setIsVisible(true)     
    },[error])


    const handleClick = ()=>{
        setIsVisible(false);
        dispatch(resetError());
    }

    return (
    <>
        {isVisible && (
        <div className={styles.regwrapper}>
            <div className={styles.close} onClick={()=>handleClick()}>
                <svg className="icon">
                    <use xlinkHref='/sprite.svg#close' />
                </svg>
            </div>
            <div className={styles.message}>
                <img className={styles.checkmark} src="/cross-circle.svg" alt="cross-circle" width={24} height={24}/>
                <span className={styles.text}>{error}</span>
            </div>
        </div>
    )}
   </>
    ) 
};

export default ErrorMessage;