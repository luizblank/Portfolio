import { styled, keyframes } from "styled-components"
import { motion } from 'framer-motion';
import { sprites_sizes } from "./SpritesSizes"

export const Character = styled(motion.img)`
    width: ${sprites_sizes.character.width}px;
    height: ${sprites_sizes.character.height}px;
`

export const Dialog = styled(motion.div)`
    background-image: url('/dialog.png');
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: cover;
    width: ${sprites_sizes.dialog.width}px;
    height: ${sprites_sizes.dialog.height}px;
    font-family: "Silkscreen", sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DialogText = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 48px 24px;
`

export const Lamp = styled.img`
    position: absolute;
    transform: translate(-50%, 0);
    width: ${sprites_sizes.lamp.width}px;
    height: ${sprites_sizes.lamp.height}px;
    top: 0;
    left: 50%;
`

export const Palm = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.palm_painting.width}px;
    height: ${sprites_sizes.palm_painting.height}px;
    top: 50%;
    left: 20%;
`

export const Table = styled.img`
    position: absolute;
    transform: translate(-50%, 0);
    width: ${sprites_sizes.table.width}px;
    height: ${sprites_sizes.table.height}px;
    bottom: 108px;
    left: 50%;
`

export const Cat = styled.img`
    position: absolute;
    transform: translate(-50%, 0);
    width: ${sprites_sizes.cat.width}px;
    height: ${sprites_sizes.cat.height}px;
    bottom: 108px;
    left: 59%;
`

export const Creeper = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.creeper.width}px;
    height: ${sprites_sizes.creeper.height}px;
    top: 50%;
    left: 65%;
`

export const Hollow = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.hollow.width}px;
    height: ${sprites_sizes.hollow.height}px;
    top: 50%;
    left: 78%;
`

export const Blank = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.blank.width}px;
    height: ${sprites_sizes.blank.height}px;
    top: 50%;
    left: 91%;
`

export const Marcos = styled.img`
    position: absolute;
    transform: translate(0, 0);
    width: ${sprites_sizes.marcos.width}px;
    height: ${sprites_sizes.marcos.height}px;
    bottom: 108px;
    left: 0;
`
export const Ground = styled.div`
    background-color: white;
    border-top: 8px solid black;
    width: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
`