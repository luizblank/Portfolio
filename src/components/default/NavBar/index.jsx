import styles from './styles.module.scss';

export default function NavBar() {
    const path = window.location.pathname;

    return (
        <>
            <div className={styles.navbar}>
                <button
                    className={styles.links} type="button"
                    onClick={() => { window.open('/', '_self') }}
                >home</button>
                <button
                    className={styles.links} type="button"
                    onClick={() => { window.open('/introduction', '_self') }}
                >introduction</button>
                <button
                    className={styles.links} type="button"
                    onClick={() => { window.open('/about', '_self') }}
                >about</button>
                <button
                    className={styles.links} type="button"
                    onClick={() => { window.open('/contact', '_self') }}
                >get in touch</button>
            </div>
        </>
    )
}