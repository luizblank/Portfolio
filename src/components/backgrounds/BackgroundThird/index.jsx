import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useGlobalContext } from '../../../context/GlobalContext';

export default function BackgroundThird() {
    const { background3Status, leavingConveyor } = useGlobalContext();
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (background3Status) {
                document.getElementById('presentation').classList.add(styles.falldownAnimation);
                if (leavingConveyor) {
                    document.getElementById('conveyor').classList.add(styles.movingAnimation);
                    document.getElementById('conveyor_container').classList.add(styles.outofwayAmimation);
                }
                setTimeout(() => {
                    videoRef.current.play().catch(error => {
                        console.error('Autoplay failed:', error);
                    });
                }, 200);
            }
        }
    }, [background3Status, leavingConveyor]);

    return (
        <>
            <div className={styles.page}>
                <div className={styles.presentation} id='presentation'>
                    <h1>Sorting Conveyor</h1>
                    <video ref={videoRef} muted loop>
                        <source src='/esteira.mp4' type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.conveyor_container} id='conveyor_container'>
                    <img className={styles.conveyor} src='/esteira.png' alt='lego_conveyor' id='conveyor'/>
                </div>
            </div>
        </>
    )
}