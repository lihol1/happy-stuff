
export const getState = (id)=>{   
    try { 
        return JSON.parse(localStorage.getItem(`userState-${id}`)); 
    } catch (error) { 
        console.error(`Error getting userState from localStorage:`, error); 
    } 
}


export const saveState = (value, id)=>{    
    if(id) {
        try {
            localStorage.setItem(`userState-${id}`, JSON.stringify(value))            
        } catch (error) {
            console.error(`Error setting userState in localStorage:`, error); 
        } 
    }
}

export function saveLastUser(value) {
    try {
        localStorage.setItem('lastUser', JSON.stringify(value))            
    } catch (error) {
        console.error(`Error setting userId in localStorage:`, error); 
    }     
}

export const getLastUser = ()=>{   
    try { 
        return JSON.parse(localStorage.getItem('lastUser')); 
    } catch (error) { 
        console.error(`Error getting userId from localStorage:`, error); 
    } 
}