import { lamp, palm, table, cat, creeper, hollow, blank } from '../../../constants/Sprites';
import { Lamp, Palm, Table, Cat, Creeper, Hollow, Blank } from '../../../constants/Styles';
import styles from './styles.module.scss';

export default function BackgroundFirst() {
    return(
        <>
            <div className={styles.page}>
                <Lamp className={styles.lamp} src={lamp}/>
                <Palm src={palm}/>
                <Table src={table}/>
                <Cat src={cat}/>
                <Creeper src={creeper}/>
                <Hollow src={hollow}/>
                <Blank src={blank}/>
            </div>
        </>
    )
}