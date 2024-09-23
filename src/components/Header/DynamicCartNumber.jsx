import { useSelector} from 'react-redux';
import styles from '../../styles/Header.module.scss';


export default function DynamicCartNumber ({ num }){    
    // const cart = useSelector(state=>state.user.cart)
        console.log(num)
    return <span className={styles.count}>{num}</span>
}