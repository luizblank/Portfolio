import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { useGlobalContext } from '../../../context/globalContext';
import { FaGithub } from 'react-icons/fa6';

export default function BackgroundSecond() {
    const { background2Status, setBackground2Status } = useGlobalContext();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (background2Status) {
                document.getElementById('video').classList.add(styles.fullscreenAnimation);
                setTimeout(() => {
                    videoRef.current.play().catch(error => {
                        console.error('Autoplay failed:', error);
                    });
                }, 200);
            }
        }
    }, [background2Status]);

    const videoEnd = () => {
        let video = document.getElementById('video');
        let link = document.getElementById('link')
        video.classList.add(styles.minimizeAnimation);
        setTimeout(() => {
            video.style.display = 'none';
            link.style.display = 'flex';
            link.classList.add(styles.openlinkAnimation);
        }, 400);
        setTimeout(() => {
            link.classList.add(styles.spinAnimation);
        }, 400);
    }

    return(
        <>
            <div className={styles.page}>
                <div className={styles.presentation}>
                    <h1>Trevis Forecast</h1>
                    <video ref={videoRef} muted id='video' onEnded={videoEnd}>
                        <source src='/trevis_forecast5.mp4' type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                    <a href='https://github.com/Eric-Coutinho/TrevisForecast' target='_blank' id='link'>
                        <FaGithub size={100}/>
                    </a>
                </div>
            </div>
        </>
    )
}