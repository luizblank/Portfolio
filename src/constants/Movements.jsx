import { animations } from "./Animations";

export const movements = [
    { id: 0, x: 0.2, y: 0, start_anm: animations.static, final_anm: animations.static, duration: 1, delay: 1, scaleX: 1 },
    { id: 1, x: 0.3, y: 0, start_anm: animations.walking, final_anm: animations.talking, duration: 0.5, delay: 0, scaleX: 1, text: "vou passar o slide" },
    { id: 2, x: 0.3, y: 0, start_anm: animations.talking, final_anm: animations.talking, duration: 0, delay: 0, scaleX: 1, text: "deixa eu ir pro meio da tela" },
    { id: 3, x: 0.5, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 2, delay: 0, scaleX: 1, action: "nextSlide", action_time: 2000 },
    { id: 4, x: 0.1, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 2, delay: 1, scaleX: -1 },
]