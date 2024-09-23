
export const getState = (id=null)=>{   
    try {
        console.log(`userState-${id}`) 
        console.log('getState - ',JSON.parse(localStorage.getItem(`userState-${id}`)))
        return JSON.parse(localStorage.getItem(`userState-${id}`)); 
    } catch (error) { 
        console.error(`Error getting userState from localStorage:`, error); 
    } 
}


export const saveState = (value, id=null)=>{    
    // if(id) {
        try {
            console.log('saveState - ',value)
            localStorage.setItem(`userState-${id}`, JSON.stringify(value))            
        } catch (error) {
            console.error(`Error setting userState in localStorage:`, error); 
        } 
    // }
}

export function saveLastUser(value) {
    try {
        console.log('savelastUser -',value)
        // if (value) {
            localStorage.setItem('lastUser', JSON.stringify(value))   
        // } else {
            // localStorage.setItem('lastUser', JSON.stringify('userState-unauth'))  
        // }        
    } catch (error) {
        console.error(`Error setting userId in localStorage:`, error); 
    }     
}

export const getLastUser = ()=>{   
    try { 
        console.log('getlastUser - ',JSON.parse(localStorage.getItem('lastUser')))
        return JSON.parse(localStorage.getItem('lastUser')); 
    } catch (error) { 
        console.error(`Error getting userId from localStorage:`, error); 
    } 
}

export function saveData (name, value) {   
    try {
        localStorage.setItem(name, JSON.stringify(value))        
    } catch(error) {
        console.log(`Error setting data in localStorage:`, error)
    }
}
export function getData (name) {
    try {
        return JSON.parse(localStorage.getItem(name))
    } catch(error) {
        console.log(`Error getting data in localStorage:`, error)
    }
}