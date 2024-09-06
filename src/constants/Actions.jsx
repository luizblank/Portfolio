import { animations } from "./Animations";

export const movements = [
    { id: 0, x: 0, y: 0, start_anm: animations.static, final_anm: animations.static, duration: 0, delay: 1, scaleX: 1 },
    { id: 1, x: 200, y: 0, start_anm: animations.walking, final_anm: animations.talking, duration: 1.5, delay: 0, scaleX: 1, text: "vou passar o slide" },
    { id: 2, x: 1200, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 2, delay: 0, scaleX: 1, action: "nextSlide", action_time: 2000 },
    { id: 3, x: 100, y: 0, start_anm: animations.walking, final_anm: animations.static, duration: 2, delay: 1, scaleX: -1 },
]