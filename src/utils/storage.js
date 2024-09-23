
export const getState = (id=null)=>{   
    try {       
        return JSON.parse(localStorage.getItem(`userState-${id}`)); 
    } catch (error) { 
        console.error(`Error getting userState from localStorage:`, error); 
    } 
}


export const saveState = (value, id=null)=>{  
        try {           
            localStorage.setItem(`userState-${id}`, JSON.stringify(value))            
        } catch (error) {
            console.error(`Error setting userState in localStorage:`, error); 
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