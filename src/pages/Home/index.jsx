import { FaArrowUp } from "react-icons/fa6";
import styles from './styles.module.scss';

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                <h1>
                    <div className={styles.josefin}>luizblank's</div>
                    <div className={styles.gochi}>&nbsp;portfolio</div>
                </h1>
                <div className={styles.description}>
                    <div>welcome to my portfolio</div>
                    <div>here you can see some of my projects and know me better</div>
                    <div className={styles.text_arrow}>you can see more information by browsing the other pages <FaArrowUp className={styles.arrow}/></div>
                </div>
            </div>
            <div className={styles.project}>
                <div>this portfolio was made in react by me</div>
                <div>you can check <a href="https://github.com/luizblank" target="_blank">here</a> for more</div>
            </div>
        </>
    )
}