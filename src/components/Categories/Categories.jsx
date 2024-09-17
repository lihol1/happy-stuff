import React from 'react';
import styles from '../../styles/Categories.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '@/images/categories/clothes.jpg';
import img2 from '@/images/categories/caps.jpg';
import img3 from '@/images/categories/t-shirts.jpg';
import img4 from '@/images/categories/accessoires.jpg';
import img5 from '@/images/categories/shoes.jpg';

const Categories = ({ title, products=[], amount }) => {
    // const list = products.filter((_, i)=> i<amount)

    // function moveUp(){
    //     window.scrollTo({
    //         top: 0,
    //         // behavior: "smooth",
    //     })  
    // }
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.list}>               
                <Link href={`/categories/1`} className={styles.item} area-label="Go to Clothes category" 
                // onClick={moveUp}
                >                       
                    <Image className={styles.image} src={img1} alt={'Clothes'} width={189} height={189}/>
                    <h3 className={styles.catname}>Clothes</h3>
                </Link>
                <Link href={`/categories/2`} className={styles.item} area-label="Go to Caps category" 
                // onClick={moveUp}
                >                       
                    <Image className={styles.image} src={img2} alt={'Cap'} width={189} height={189}/>
                    <h3 className={styles.catname}>Caps</h3>
                </Link>
                <Link href={`/categories/3`} className={styles.item} area-label="Go to T-shirts category" 
                // onClick={moveUp}
                >                       
                    <Image className={styles.image} src={img3} alt={'T-shirts'} width={189} height={189}/>
                    <h3 className={styles.catname}>T-shirts</h3>
                </Link>
                <Link href={`/categories/4`} className={styles.item} area-label="Go to Shoes category" 
                // onClick={moveUp}
                >                       
                    <Image className={styles.image} src={img5} alt={'Sneakers'} width={189} height={189}/>
                    <h3 className={styles.catname}>Shoes</h3>
                </Link>
                <Link href={`/categories/6`} className={styles.item} area-label="Go to Accessoires category" 
                // onClick={moveUp}
                >                       
                    <Image className={styles.image} src={img4} alt={'Bag'} width={189} height={189} />
                    <h3 className={styles.catname}>Accessoires</h3>
                </Link>
            </div>
            
        </section>
    );
};

export default Categories;