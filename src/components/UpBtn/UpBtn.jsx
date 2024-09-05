"use client"
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const UpBtn = () => {
    const [isVisible, setIsVisible] = useState(false)
   
    useEffect(() => {        
        const toggleVisibility = () => { 
            const userAgent = window.navigator.userAgent;
            // let type = /Android|iPhone|iPad|IEMobile/i.test(userAgent) ? 'mobile' : 'desktop';

            //исключаем Яндекс браузер на мобильных устройствах
            if ((userAgent.search(/YaApp/) < 0) || (userAgent.search(/YaSearchBrowser/) < 0)) {
                window.scrollY > 1950 ? setIsVisible(true) : setIsVisible(false)  
            }        
        }
    
        window.addEventListener("scroll", toggleVisibility)
        
        return () => {
        window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

 
    function scrollToTop (){
        isVisible &&
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })  
    };

    return (
        <button className={isVisible? "upbtn" : "upbtn hidden"} onClick={scrollToTop} >
          <FaChevronUp />
        </button>
      )

};

export default UpBtn;