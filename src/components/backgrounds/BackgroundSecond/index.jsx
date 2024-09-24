import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useGlobalContext } from '../../../context/GlobalContext';

export default function BackgroundSecond() {
    const { background2Status, setBackground2Status } = useGlobalContext();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (background2Status) {
                document.getElementById('video').classList.add(styles.fullscreenAnimation);
                setTimeout(() => {
                    videoRef.current.playbackRate = 2;
                    videoRef.current.play().catch(error => {
                        console.error('Autoplay failed:', error);
                    });
                }, 200);
            }
        }
    }, [background2Status]);

    return(
        <>
            <div className={styles.page}>
                <div className={styles.presentation}>
                    <h1>Trevis Forecast</h1>
                    <video ref={videoRef} muted loop id='video'>
                        <source src='/trevis_forecast5.mp4' type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}