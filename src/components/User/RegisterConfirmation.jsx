import { resetUpdate } from '@/store/user/userSlice';
import styles from '@/styles/User.module.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm } from "@/store/user/userSlice";

const RegisterConfirmation = ({text, closeForm}) => {
    const currentUser = useSelector(state=> state.user.currentUser)
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
       setIsVisible(false)    
    },[])

    useEffect(()=>{
        currentUser && setIsVisible(true)       
    },[currentUser])


    const handleClick = ()=>{
        setIsVisible(false);
        dispatch(toggleForm(false));
        dispatch(resetUpdate());
        
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
            <div className={styles.reginner}>
                <img className={styles.checkmark} src="/checkmark.svg" alt="check-mark" width={24} height={24}/>
                <span className={styles.regtext}>{text}</span>
            </div>
        </div>
    )}
   </>
    ) 
};

export default RegisterConfirmation;