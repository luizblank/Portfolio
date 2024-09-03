import { useState } from 'react'
import { animate, motion, useAnimate } from 'framer-motion'
import './App.css'

import { actions } from './constants/Actions'

export default function App() {
  const [first_action, set_first_action] = useState(
    sessionStorage.getItem('last_action') ? parseInt(sessionStorage.getItem('last_action')) : 0
  );

  const [prev_action, set_prev_action] = useState(actions[first_action]);
  const [curr_action, set_curr_action] = useState(actions[first_action]);
  const [next_action, set_next_action] = useState(actions[first_action + 1]);

  return (
    <>
      <motion.img
        alt='sprite'
        src={`/static.png`}
        style={{ scaleX: prev_action.x > next_action.x ? -1 : 1 }}
        animate={{ x: curr_action.x, y: curr_action.y }}
        transition={{ type: 'tween', duration: curr_action.duration }}
        onAnimationStart={() => {
          
        }}
        onAnimationComplete={() => {

        }}
      />

      {/* <motion.img src={`./../public/${currentSprite}`} alt='sprite'
        style={{ scaleX: previousCoordinate > nextCoordinate ? -1 : 1 }}
        animate={{ x: nextCoordinate }}
        transition={{ type: 'tween', duration: 3 }}
        onAnimationStart={() => setCurrentSprite('/walking-sprite.gif')}
        onAnimationComplete={() => setCurrentSprite('/walking-sprite.png')}
      ></motion.img> */}
      {/* <button type='button' onClick={move}>Next move</button> */}
    </>
  )
}

