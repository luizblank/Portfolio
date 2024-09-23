import styles from './styles.module.scss';

export default function BackgroundSecond() {
    return(
        <>
            <div className={styles.page}>
                <div className={styles.presentation}>
                    <h1>Trevis Forecast</h1>
                    <img src='/trevis_forecast1.png' alt='trevis_forecast1'/>
                </div>
            </div>
        </>
    )
}