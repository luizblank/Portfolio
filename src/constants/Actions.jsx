import { animations } from "./Animations";

export const actions = [
    { id: 0, x: 0, y: 0, start_anm: animations.static, final_anm: animations.static, duration: 0, text: null },
    { id: 1, x: 100, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 1, text: null },
    { id: 2, x: 500, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 3, text: null },
    { id: 3, x: 100, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 3, text: null },
]