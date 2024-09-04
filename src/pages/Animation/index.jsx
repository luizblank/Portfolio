import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { actions } from '../../constants/Actions';
import styles from './styles.module.scss';

export default function Animation() {
  const [firstAction, setFirstAction] = useState(
    sessionStorage.getItem('last_action') ? parseInt(sessionStorage.getItem('last_action')) : 0
  );
  
  const [crrAction, setCrrAction] = useState(actions[firstAction]);
  const [crrSprite, setCrrSprite] = useState(crrAction.start_anm.url);

  const [showDialog, setShowDialog] = useState(crrAction.text ? true : false);

  useEffect(() => {
    setCrrSprite(crrAction.start_anm.url);
  }, [crrAction]);

  function handleAnimationComplete() {
    if (crrAction.id < actions.length - 1) {
      const next_action = actions[crrAction.id + 1];
      setCrrAction(next_action);
    }
  };

  const handleDialogClick = () => {
    setShowDialog(false);
    handleAnimationComplete();
  }

  return (
    <>
      <div className={styles.animation_container}>

        <motion.div 
          className={styles.dialog}
          onClick={handleDialogClick}
          style={{ display: showDialog ? 'flex' : 'none' }}
          animate={{ x: crrAction.x - 28, y: crrAction.y }} // menos 28 por que o tamanho do sprite é 200 e o dialog tem tamanho 256 --> 256 - 200 = 56 / 2 = 28
          transition={{ type: 'tween', duration: crrAction.duration, delay: crrAction.delay }}
        >
          <div className={styles.dialog_text}>
            { crrAction.text }
          </div>
        </motion.div>

        <motion.img
          className={styles.sprite} alt='sprite'
          src={crrSprite}
          style={{ scaleX: crrAction.x > actions[crrAction.id - 1]?.x ? 1 : -1 }}
          animate={{ x: crrAction.x, y: crrAction.y }}
          transition={{ type: 'tween', duration: crrAction.duration, delay: crrAction.delay }}
          onAnimationComplete={() => {
            if (crrAction.text == null) {
              handleAnimationComplete();
              setCrrSprite(crrAction.final_anm.url);
              return;
            }
            setCrrSprite(crrAction.final_anm.url);
            setShowDialog(true);
          }}
        />

        <div className={styles.ground}/>
      </div>
    </>
  );
}
