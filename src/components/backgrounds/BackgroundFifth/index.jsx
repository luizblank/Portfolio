import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function BackgroundFifth() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.presentation}>
                    <h1>Repository Links</h1>
                    <a className={styles.github_link} href='https://github.com/Eric-Coutinho/TrevisForecast' target='_blank'>
                        <FaGithub className={styles.icon}/>
                        <div className={styles.title}>Trevis Forecast</div>
                    </a>
                    <a className={styles.github_link} href='https://github.com/ilunnie/Marcos-X-Machine' target='_blank'>
                        <FaGithub className={styles.icon}/>
                        <div className={styles.title}>Marcos X Machine</div>
                    </a>
                    <a className={styles.github_link} href='https://github.com/luizblank/TCC_SENAI_WEB' target='_blank'>
                        <FaGithub className={styles.icon}/>
                        <div className={styles.title}>Conveyor&apos;s Website</div>
                    </a>
                    <a className={styles.github_link} href='https://github.com/ViniMSLima/TCC_SENAI_BACK' target='_blank'>
                        <FaGithub className={styles.icon}/>
                        <div className={styles.title}>Conveyor&apos;s Backend</div>
                    </a>
                    <div className={styles.warning}>
                        the sorting conveyor project also included a website that wasn&apos;t mentioned to keep the presentation concise<br/>
                        i focused more on the conveyor&apos;s structure and the website part
                    </div>
                </div>
            </div>
        </>
    )
}