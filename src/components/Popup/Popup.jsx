
import styles from '@/styles/Product.module.scss'

export default function Popup ({ popupState }) {

    return <div className={ popupState? styles.popup : `${styles.popup} ${styles.hidden}`}>
        <p>The product was added to cart</p>
    </div>

}