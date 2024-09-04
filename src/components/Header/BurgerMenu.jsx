'use client'
import styles from '../../styles/Header.module.scss';
import { useEffect } from 'react';

let rightPadding;

const Burger = ({menuIsOpen, setMenuIsOpen}) => { 
    
    useEffect(()=>{
        rightPadding = window.innerWidth - document.body.offsetWidth;
    }, [])
             

    function handleClick (){    
        setMenuIsOpen(!menuIsOpen);        
        document.body.classList.toggle('lock');
        changeRightPadding();       
        function changeRightPadding(){ 
            if (document.body.classList.contains('lock')){               
                document.body.style.paddingRight = `${rightPadding}px`;                
            }
            else {
                document.body.style.paddingRight = '0px';                 
            }
        }       
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