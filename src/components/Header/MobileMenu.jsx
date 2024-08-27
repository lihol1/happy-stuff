'use client'
import styles from '../../styles/Header.module.scss';
import { useSelector } from 'react-redux';
import Link from 'next/link'

const MobileMenu = ({menuIsOpen, setMenuIsOpen}) => {
    const {list} = useSelector(({categories}) => categories)
    const handleClick =() =>{
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <nav className={menuIsOpen? `${styles.menu} ${styles.active}`: styles.menu}> 
            <ul className={styles.list}>
                {list.map(({id, name})=>
                <li key={id} className={styles.menuitem}>
                    <Link href={`/categories/${id}`} className={styles.link} onClick={handleClick}>{name}</Link>
                </li>
                )}
            </ul>       
        </nav>
    );
};

export default MobileMenu;