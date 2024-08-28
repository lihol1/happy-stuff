
import styles from '../../styles/Home.module.scss';
import bannerImg from '../../images/banner.jpg';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.sale}>
                <p className={styles.content}>
                    Holiday
                   
                </p> 
            </div>
            
            <div className={styles.bannerimg} >
                <Image 
                src ={bannerImg}
                alt='banner'
                width={1310}
                height={838}
                sizes='100vw'
                />
            </div>
            <div className={styles.discount}>
                <p> save up to <span>40%</span> off </p>               
            </div>
        </section>
    );
};

export default Banner;