'use client'
import styles from '../../styles/Header.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const MobileMenu = ({menuIsOpen, setMenuIsOpen}) => {     
    const {list} = useSelector(({categories}) => categories)
    const handleClick =() =>{
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <>
        {menuIsOpen? <div className={menuIsOpen? `${styles.overlay} ${styles.active}`: styles.overlay} onClick={()=>setMenuIsOpen(false)}></div> : <></>}
            <nav className={menuIsOpen? `${styles.menu} ${styles.active}`: styles.menu}> 
                <ul className={styles.list}>
                    {list.map(({id, name})=>
                    <li key={id} className={styles.menuitem}>
                        <Link href={`/categories/${id}`} className={styles.link} onClick={handleClick}>{name}</Link>
                    </li>
                    )}
                </ul>
                {/* <div className={styles.menuitem}><a style="text-decoration:underline" className={styles.link} href="/terms">Terms &amp; Conditions</a></div>        */}
            </nav>        
    </>
    );
};

export default MobileMenu;