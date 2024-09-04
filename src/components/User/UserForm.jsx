'use client'
import UserSignUpForm from "./UserSignUpForm";
import UserLoginForm from "./UserLoginForm";
import { useSelector, useDispatch } from 'react-redux';
import styles from "../../styles/User.module.scss";
import { toggleForm, toggleFormType } from "../../store/user/userSlice";


const UserForm = () => {
    const { showForm, formType } = useSelector(({ user }) => user);
    const dispatch = useDispatch();

    const closeForm = () => dispatch(toggleForm(false));    
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

    function formSubmit (setIsError){       
        const inputs = document.getElementsByTagName('input'); 
       
        for (let input of inputs) {  
            input.addEventListener('blur', (e)=>{            
                if(e.target.getAttribute("type") === "email"){               
                    const test = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value);               
                    if(!test) {
                        e.target.classList.add('_error');                        
                        setIsError(true);                        
                    } else {
                        setIsError(false);  
                    }
                }                          
            }) 
            input.addEventListener('focus', (e)=>{                        
                e.target.classList.remove('_error')
            })
            input.addEventListener('invalid', ()=>{
                console.log('invalid', this)
            })
        }
    } 


    return showForm ? (
        <>
            <div className={styles.overlay} onClick={closeForm}></div>
            {formType === 'signup' ? (<UserSignUpForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} formSubmit={formSubmit}/>) : (<UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm} formSubmit={formSubmit}/>)} 
        </>
       ) : (
        <></>
       );
};

export default UserForm;