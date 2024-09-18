import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './styles.module.scss';

export default function Contact() {
    return (
        <>
            <div className={styles.container}>
                <h1>
                    <div>contact&nbsp;</div>
                    <div className={styles.back}>
                        <a className={styles.redirect} href="https://github.com/luizblank" target="_blank"><FaGithub/></a>
                        <a className={styles.redirect} href="https://www.linkedin.com/in/luiz-antonio-rosa-cardoso-9005512b7/" target="_blank"><FaLinkedin/></a>
                        <a href=""><MdEmail/></a>
                    </div>
                    <div className={styles.front}>me</div>
                </h1>
            </div>
        </>
    )
}