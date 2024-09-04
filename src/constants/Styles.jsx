import styled from "styled-components"
import { motion } from 'framer-motion';
import { sprites_sizes } from "./SpritesSizes"

export const Sprite = styled(motion.img)`
    width: ${sprites_sizes.character.string_width};
    height: ${sprites_sizes.character.string_height};
`

export const Dialog = styled(motion.div)`
    position: relative;
    background-image: url('./../../../public/dialog.png');
    background-repeat: no-repeat;
    background-origin: content-box;
    width: ${sprites_sizes.dialog.string_width};
    height: ${sprites_sizes.dialog.string_height};
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`