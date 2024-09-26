import { Marcos } from '../../../constants/Styles';
import { marcos } from '../../../constants/Sprites';
import { useGlobalContext } from '../../../context/GlobalContext';
import { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function BackgroundFourth() {
    const { marcosAnimation, showWinners } = useGlobalContext();
    const [ marcosSprite, setMarcosSprite ] = useState(marcos.static);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (marcosAnimation) {
                let marcos_element = document.getElementById('marcos');
                let marcos_container = document.getElementById('marcos_container')
                
                marcos_element.classList.add(styles.sneakInAnimation);
                setTimeout(() => {
                    marcos_element.classList.remove(styles.sneakInAnimation);
                    marcos_element.classList.add(styles.returnAnimation);
                    setTimeout(() => {
                        marcos_element.classList.remove(styles.returnAnimation);
                        marcos_element.classList.add(styles.wiggleAnimation);
                        marcos_container.classList.add(styles.runningAnimation);
                        setTimeout(() => {
                            marcos_container.classList.remove(styles.runningAnimation);
                            marcos_container.classList.add(styles.pullingAnimation);
                            setMarcosSprite(marcos.pushing);
                            setTimeout(() => {
                                marcos_container.classList.remove(styles.pullingAnimation);
                                marcos_element.classList.remove(styles.wiggleAnimation);
                                marcos_container.classList.add(styles.suckedInAnimation);
                                setTimeout(() => {
                                    videoRef.current.play().catch(error => {
                                        console.error('Autoplay failed:', error);
                                    });
                                }, 5000)
                            }, 5000)
                        }, 9000)
                    }, 1000)
                }, 2000)
            }
        }
    }, [marcosAnimation]);

    useEffect(() => {
        if (showWinners) {
            console.log("3231232")
            document.getElementById('video').classList.add(styles.videoLeavingAnimation);
            document.getElementById('image').classList.add(styles.imageShowingAnimation);
        }
    }, [showWinners])

    return(
        <>
            <div className={styles.page}>
                <div className={styles.presentation} id='presentation'>
                    <h1>Marcos X Machine</h1>
                    <video ref={videoRef} muted loop id='video'>
                        <source src='/marcosxmachine_video.mp4' type='video/mp4'/>
                        Your browser does not support the video tag.
                    </video>
                    <img src='/winners.jpg' alt='winners' id='image'/>
                </div>
                <div className={styles.marcos_container} id='marcos_container'>
                    <Marcos className={styles.marcos} src={marcosSprite.url} id='marcos' alt={'marcos ' + marcosSprite.name}/>
                </div>
            </div>
        </>
    )
}