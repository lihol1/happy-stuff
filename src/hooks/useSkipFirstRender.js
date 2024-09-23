import { useEffect, useRef } from "react";

export const useSkipFirstRender = (fn, dependencies=[]) => {
    const isMounted = useRef(false);
  
    useEffect(() => {
      return ()=> {
        isMounted.current = false
      }
    }, [])

    useEffect(() => {
      if (!isMounted.current) {
          isMounted.current = true
       
      } else {
         return fn();
      }
      
    }, dependencies)  
   
  }