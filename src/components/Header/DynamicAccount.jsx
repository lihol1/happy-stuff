import styles from '../../styles/Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from "../../utils/routes";
import { GoPerson } from "react-icons/go";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { toggleForm, resetState} from "../../store/user/userSlice";
import { useRouter } from 'next/navigation';



const DynamicAccount = ({ name }) => {
    const { currentUser } = useSelector(({ user }) => user);
    const router= useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {        
        if(!currentUser) dispatch(toggleForm(true))
            else router.push(ROUTES.PROFILE);
    }


    const exitHandleClick = ()=>{
        if(!currentUser) return; 
        dispatch(resetState())
    }
    return (
        <div onClick={handleClick} className={currentUser? `${styles.auth} ${styles.account}` : styles.account}>            
            {currentUser? <></> : <GoPerson className={styles.avatar}/>} 

            {currentUser? (
                <>
                    <div className={styles.user}>
                        <div className={styles.username} onClick={handleClick}>{name}</div>
                    </div>
                
                    <HiMiniArrowRightEndOnRectangle onClick={()=>exitHandleClick()} className={styles.logout}/>                       
                </>
                ):(<></>)
            }                     
            
        </div>
    );
};

export default DynamicAccount;