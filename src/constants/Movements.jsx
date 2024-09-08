import { animations } from "./Animations";

export const movements = [
    { id: 0, x: 0, y: 0, start_anm: animations.static, final_anm: animations.static, duration: 3, delay: 3, scaleX: 1 },
    { id: 1, x: 0.3, y: 0, start_anm: animations.walking, final_anm: animations.talking, duration: 4, delay: 0, scaleX: 1, text: "vou passar o slide" },
    { id: 2, x: 0.3, y: 0, start_anm: animations.talking, final_anm: animations.talking, duration: 0, delay: 0, scaleX: 1, text: "só vou pro meio da tela antes" },
    { id: 3, x: 0.5, y: 0, start_anm: animations.walking, final_anm: animations.changing, duration: 3, delay: 0, scaleX: 1, action: "nextSlide", action_time: 1200 },
    { id: 4, x: 0.5, y: 0, start_anm: animations.talking, final_anm: animations.talking, duration: 3, delay: 0, scaleX: 1, text: "assim fico melhor"},
]