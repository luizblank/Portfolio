import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Background({ children }) {
    return (
        <>
            <motion.div className={styles.background}>
                { children }
            </motion.div>
        </>
    )
}