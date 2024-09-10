
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../../styles/Sidebar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ROUTES } from '@/utils/routes';
import { useEffect } from 'react';
import { getCategories } from "@/store/categories/categoriesSlice";


const Sidebar = () => {
    const pathname = usePathname(); 
    const dispatch = useDispatch();    
    const {list} = useSelector(({categories}) => categories)

    useEffect(()=>{
        dispatch(getCategories());       
    }, [dispatch]);     
    
    return (
        <aside className={styles.sidebar}>
            <div className={styles.wrapper}>
                <div className={styles.title}>CATEGORIES</div>
                <nav className={styles.menu}>
                    <ul className={styles.menu}>
                        
                        {list.map(({id, name})=>
                            <li key={id}>
                                <Link href={`/categories/${id}`} className={`${styles.link} ${pathname === `/categories/${id}` ? styles.active : ""}`}>
                                    {name}
                                 </Link>
                            </li>
                        )}

                    </ul>
                </nav>

                <div className={styles.footer}>                    
                    <Link href={ROUTES.TERMS} style={{textDecoration:'underline'}}  className={`${styles.link} ${pathname === '/terms' ? styles.active : ""}`}>Terms & Conditions</Link>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;





