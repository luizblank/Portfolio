import styled from "styled-components"
import { motion } from 'framer-motion';
import { sprites_sizes } from "./SpritesSizes"

export const Sprite = styled(motion.img)`
    width: ${sprites_sizes.character.string_width};
    height: ${sprites_sizes.character.string_height};
`

export const Dialog = styled(motion.div)`
    background-image: url('/dialog.png');
    background-repeat: no-repeat;
    background-origin: content-box;
    width: ${sprites_sizes.dialog.string_width};
    height: ${sprites_sizes.dialog.string_height};
    font-family: "Silkscreen", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Ground = styled.div`
    background-color: white;
    border-top: 4px solid black;
    width: 100%;
    height: 100px;
    padding: 0;
    margin: 0;
`