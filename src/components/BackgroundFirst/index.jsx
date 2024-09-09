import styles from './styles.module.scss';

export default function BackgroundFirst() {
    return(
        <>
            <div className={styles.page}>
                <img className={styles.palm_painting} src='/palm tree.png'/>
            </div>
        </>
    )
}