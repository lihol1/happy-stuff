
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Home.module.scss';
import BG from '../../images/bg-1.jpg';
import BG5 from '../../images/bg-5.jpg';
import BG6 from '../../images/bg-6.jpg';
import Image from 'next/image';


import { register } from "swiper/element/bundle";
register();
import "../../../node_modules/swiper/swiper.scss";
import '../../../node_modules/swiper/modules/navigation.scss'; 
import '../../../node_modules/swiper/modules/pagination.scss';
import '../../../node_modules/swiper/modules/effect-fade.scss';


const Slider = () => { 
    const [currentIndex, setCurrentIndex] = useState(0);   
    const swiperRef = useRef(null);
        
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const imgHolders = document.querySelectorAll('[class*="img-holder"]');
        const params = {
        //   navigation: true,
          pagination: {type: 'bullets', clickable: true},
          effect: "fade",
          speed: 1000,
          loop: true,
          injectStyles: [
            `.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
                margin: 0 7px;
            }        
              .swiper-pagination-bullet{
                width: 12px;
                height: 12px;
                margin: 0 6px;
                background-color: #272626;
                opacity: 0.5;
                border: 2px solid rgba(0, 0, 0, 0.8);
              }
              .swiper-pagination-bullet-active {
                background-color: #272626;
                opacity: 0.8;
                
              }
              @media (max-width: 767.98px) {
                .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                   
                }  
                .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
                 margin: 0 4px;
                } 
                
                        
              }              
          `,
          ],
          on: {
            init: function (){
                imgHolders.forEach((img)=>{
                    img.style.width = '100%';
                    img.style.height = "100%";
                    img.style.opacity = 1;
                })              
            }

            
          }
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();     

        // swiperContainer.addEventListener('swiperslidechangetransitionstart', (event) => {
        //     setCurrentIndex(swiperContainer.swiper.realIndex)           
        // })
        // swiperContainer.removeEventListener('swiperslidechangetransitionstart', (event) => {
        //     setCurrentIndex(swiperContainer.swiper.realIndex)           
        // })
        swiperContainer.addEventListener('swiperslidechange', (event) => {
            setCurrentIndex(swiperContainer.swiper.realIndex)           
        })
        swiperContainer.removeEventListener('swiperslidechange', (event) => {
            setCurrentIndex(swiperContainer.swiper.realIndex)           
        })
        

      }, []);
    
      
    return (
        <section className={styles.slider}>
            
            <swiper-container ref={swiperRef} init="false"> 
                
                <swiper-slide> 
                    <div className={styles['img-holder']}>
                        <div className={`${styles.info} ${styles['info-1']}`}>
                           
                            <h1 className={currentIndex == 0 ? `${styles.title} ${styles['title-anim']}` : styles.title}>New Summer Collection</h1>
                            <p className={currentIndex == 0 ? `${styles.desc} ${styles['desc-anim']}` : styles.desc}>For Him And Her</p>
                        </div>
                        <Image className={`${styles.image} ${styles['image-third']}`}
                            src={BG6}
                            width={1070}
                            height={650}
                            alt="BG"
                            priority={true} 
                            sizes="(max-width: 768px) 100vw, 78vw"
                        />
                    </div>
                </swiper-slide>

                <swiper-slide> 
                    <div className={styles['img-holder']}>
                        <div className={`${styles.info} ${styles['info-2']}`}>
                            
                            <h1 className={currentIndex == 1 ? `${styles.title} ${styles['title-anim']}` : styles.title} >Light Materials</h1>
                            <p className={currentIndex == 1 ? `${styles.desc} ${styles['desc-anim']}` : styles.desc}>For A Summer Holiday</p>
                        </div>
                        <Image className={`${styles.image} ${styles['image-third']}`}
                        src={BG5}
                        width={1070}
                        height={650}
                        alt="BG"
                        // priority={true} 
                        sizes="(max-width: 768px) 100vw, 78vw"
                        />
                    </div>
                </swiper-slide>

                <swiper-slide className='slide'>
                   
                    <div className={styles['img-holder']}>
                        <div className={`${styles.info} ${styles['info-3']}`}>
                            
                             <h1 className={currentIndex == 2 ? `${styles.title} ${styles['title-anim']}` : styles.title} >Casual Style</h1>
                            <p className={currentIndex == 2 ? `${styles.desc} ${styles['desc-anim']}` : styles.desc}>Up to 40% off selected Product</p>
                        </div>
                        <Image className={`${styles.image} ${styles['image-first']}`}
                        src={BG}
                        width={1070}
                        height={650}
                        sizes="(max-width: 768px) 100vw, 78vw"
                        // sizes="100vw"
                        alt="BG"
                        // priority={true} 
                        // fill={true}                        
                        quality={100}
                        
                        />
                    </div>
                </swiper-slide>

            </swiper-container>
            {/* ):<></>
            } */}
        </section>        
    );
};

export default Slider;