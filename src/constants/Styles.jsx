import styled from "styled-components"
import { motion } from 'framer-motion';
import { sprites_sizes } from "./SpritesSizes"

export const Character = styled(motion.img)`
    width: ${sprites_sizes.character.string_width};
    height: ${sprites_sizes.character.string_height};
`

export const Dialog = styled(motion.div)`
    background-image: url('/dialog.png');
    background-repeat: no-repeat;
    background-origin: content-box;
    background-size: cover;
    width: ${sprites_sizes.dialog.string_width};
    height: ${sprites_sizes.dialog.string_height};
    font-family: "Silkscreen", sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Lamp = styled.img`
    position: absolute;
    transform: translate(-50%, 0);
    width: ${sprites_sizes.lamp.string_width};
    height: ${sprites_sizes.lamp.string_height};
    top: 0;
    left: 50%;
`

export const Palm = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.palm_painting.string_width};
    height: ${sprites_sizes.palm_painting.string_height};
    top: 50%;
    left: 20%;
`

export const Table = styled.img`
    position: absolute;
    transform: translate(-50%, 0);
    width: ${sprites_sizes.table.string_width};
    height: ${sprites_sizes.table.string_height};
    bottom: 108px;
    left: 50%;
`

export const Cat = styled.img`
    position: absolute;
    transform: translate(-50%, 0);
    width: ${sprites_sizes.cat.string_width};
    height: ${sprites_sizes.cat.string_height};
    bottom: 108px;
    left: 60%;
`

export const Creeper = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.creeper.string_width};
    height: ${sprites_sizes.creeper.string_height};
    top: 50%;
    left: 65%;
`

export const Hollow = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.hollow.string_width};
    height: ${sprites_sizes.hollow.string_height};
    top: 50%;
    left: 78%;
`

export const Blank = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    width: ${sprites_sizes.blank.string_width};
    height: ${sprites_sizes.blank.string_height};
    top: 50%;
    left: 91%;
`

export const Ground = styled.div`
    background-color: white;
    border-top: 8px solid black;
    width: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
`