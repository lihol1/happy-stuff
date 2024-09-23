import styles from '../../styles/Header.module.scss';

export default function DynamicCartNumber ({ num }){
    return <span className={styles.count}>{num}</span>
}