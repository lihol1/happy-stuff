'use client'
import styles from '../../styles/Header.module.scss';


const Burger = ({menuIsOpen, setMenuIsOpen}) => {    

   function handleClick (){    
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div onClick={handleClick}>
            <div className={menuIsOpen? `${styles.burger} ${styles.active}`: styles.burger}>
                <span></span>
            </div>            
        </div>
    );
};

export default Burger;