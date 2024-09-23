import { character } from "./Sprites";

export var movements = [
    { id: 0, x: -0.2, y: 0, start_anm: character.static, final_anm: character.static, duration: 0, delay: 2, scaleX: 1 },
    { id: 1, x: 0.35, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 7, delay: 0, scaleX: 1, text: "hi!" },
    { id: 2, x: 0.35, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "welcome to the projects page" },
    { id: 3, x: 0.35, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "i'm <blank> and i'm going to guide you today" },
]