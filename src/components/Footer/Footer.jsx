import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Footer.module.scss';
import { ROUTES } from '../../utils/routes';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuMail } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.holder}>
                    <div className={styles.wrapper}>
                        <div className={styles.logo}>
                            <Link href={ROUTES.HOME}>
                                <img src={'/logo.svg'} alt="Stuff" />
                            </Link>
                        </div>

                        
                    </div>

                    <h3 className={styles.footertitle}>Contacts</h3>
                    
                    <div className={styles.items}>

                        <div className={styles.item} >                    
                            <div className={styles.icon}>
                                <FaMapMarkerAlt />
                            </div>                            
                            <div className={styles.address}>
                                <h4 className={styles.title}>Postal Address</h4>
                                <p className={styles.text}>PO Box 123456, Street/Road <br/>Country-State</p>
                            </div> 
                        </div>

                        <div className={styles.item}>                      
                            <div className={styles.icon}>
                                <MdOutlinePhoneIphone />
                            </div>
                            
                            <div className={styles.contacts}>
                                <h4 className={styles.title}>Contact Us Anytime</h4>
                                <a href="tel:012345678" className={styles.text}>Mobile: 012 345 678</a>
                            </div>
                        </div>

                        <div className={styles.item} >
                            <div className={styles.icon}>
                                <LuMail />
                            </div>    
                            <div className={styles.support}>
                                <h4 className={styles.title}>Support Overall</h4>
                                <p className={styles.text}><a href="mailto:support@happystuff.com">support@happystuff.com</a> <br/><a href="mailto:info@happystuff.com">info@happystuff.com</a></p>
                            </div>
                        </div>
                        
                        <div className={styles.item}>
                            <div className={styles.socials}>
                                <a href="http://instagram.com" target="_blank" rel="noreferrer" aria-label="Go to instagram">
                                    <svg className="icon">
                                        <use xlinkHref="/sprite.svg#instagram"></use>
                                    </svg>
                                </a>
                                <a href="http://facebook.com" target="_blank" rel="noreferrer" aria-label="Go to facebook">
                                    <svg className="icon">
                                        <use xlinkHref="/sprite.svg#facebook"></use>
                                    </svg>
                                </a>
                                <a href="http://youtube.com" target="_blank" rel="noreferrer" aria-label="Go to youtube">
                                    <svg className="icon">
                                        <use xlinkHref="/sprite.svg#youtube"></use>
                                    </svg>
                                </a>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.rights}>&copy;2024. Developed by RM.</div>
                </div>
               
            </div>    


        </footer>
    );
};

export default Footer;