import styles from '../../styles/Products.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Favicon from '@/components/Products/Favicon'
import { useDispatch, useSelector } from 'react-redux';
import { toggleToFav } from '@/store/user/userSlice';
import { useEffect } from 'react';
import Preloader from '@/components/Preloader';

const Products = ({ title, style={}, products=[], amount }) => {
    //ограничиваем число отображаемых продуктов i-index
    const list = products.filter((_, i)=> i < amount ) 
    
    return (
        <section className={styles.products} style={style}>
            
            <>
                {title && <h2 className={styles.maintitle}>{title}</h2>}
                <div className={styles.list}>                               

                    {list.map(( item ) => 
                        <div key={item.id} className={styles.card}>
                            <Link href={`/products/${item.id}`} className={styles.product}>                           
                                <div className={styles.imageholder}>                              
                                    <Image className={styles.image} 
                                        src={`${item.images[0]}`}
                                        alt={item.title}
                                        width={1080}
                                        height={1080}
                                        sizes="(max-width: 591px) 87vw, (max-width: 874px) 44vw, (max-width: 991px) 30vw,25vw"                               
                                        quality={80}
                                    />                               
                                </div>
                                <div className={styles.wrapper}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <div className={styles.cat}>{item.category.name}</div> 
                                </div>
                            </Link>
                            <div className={styles.info}>
                                <div className={styles.prices}>
                                    <div className={styles.price}>${item.price}</div>
                                    <div className={styles.oldPrice}>${Math.floor(item.price * 0.8)}</div>
                                </div> 
                            
                                <Favicon item={item}/>
                            </div>

                        </div>                 
                    )}
                      
                </div> 
            </>
           
        </section>
    );
};

export default Products;

