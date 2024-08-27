import { useSelector} from 'react-redux';
import styles from '../../styles/Header.module.scss';


export default function DynamicCartNumber ({ name }){    
    const cart = useSelector(state=>state.user.cart)
        
    return <span className={styles.count}>{cart.length}</span>
}