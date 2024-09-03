import { motion, useMotionValue } from 'framer-motion'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [coordinates, setCoordinates] = useState([100, 500, 300, 900, 100])

  const [previousCoordinate, setPreviousCoordinate] = useState(0);
  const [nextCoordinate, setNextCoordinate] = useState(0);

  const [currentSprite, setCurrentSprite] = useState('walking-sprite.png');

  const move = () => {
    setPreviousCoordinate(nextCoordinate);
    setNextCoordinate(coordinates.shift());
  }

  return (
    <>
      <motion.img src={`./../public/${currentSprite}`} alt='sprite'
        style={{ scaleX: previousCoordinate > nextCoordinate ? -1 : 1 }}
        animate={{ x: nextCoordinate }}
        transition={{ type: 'tween', duration: 3 }}
        onAnimationStart={() => setCurrentSprite('walking-sprite.gif')}
        onAnimationComplete={() => setCurrentSprite('walking-sprite.png')}
      ></motion.img>
      <button type='button' onClick={move}>Next move</button>
    </>
  )
}

