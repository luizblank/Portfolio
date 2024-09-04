import { animations } from "./Animations";

export const actions = [
    { id: 0, x: 0, y: 0, start_anm: animations.talking, final_anm: animations.talking, duration: 0, delay: 1, scaleX: 1, text: null },
    { id: 1, x: 100, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 1, delay: 0, scaleX: 1, text: null },
    { id: 2, x: 500, y: 0, start_anm: animations.walking, final_anm: animations.pointing, duration: 3, delay: 0, scaleX: 1, text: "isso ai faz isso isso e aquilo e aquilo ali tambem e muito legal" },
    { id: 3, x: 100, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 3, delay: 1, scaleX: -1, text: null },
]