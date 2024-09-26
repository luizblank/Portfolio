import { character } from "./Sprites";

export var movements = [
    { id: 0, x: -0.2, y: 0, start_anm: character.static, final_anm: character.static, duration: 0, delay: 2, scaleX: 1 },
    { id: 1, x: 0.35, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 6, delay: 0, scaleX: 1, text: "hi!" },
    { id: 2, x: 0.35, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "welcome to the projects page" },
    { id: 3, x: 0.35, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "i'm <blank> and i'm going to guide you today" },
    { id: 4, x: 0.5, y: 0, start_anm: character.walking, final_anm: character.talking_pointing_br, duration: 3, delay: 0, scaleX: 1, text: "this is gizmo, he may appear a few times during the tour" },
    { id: 5, x: 0.45, y: 0, start_anm: character.walking, final_anm: character.static, duration: 1, delay: 0, scaleX: -1 },
    { id: 6, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.static, duration: 0, delay: 0, scaleX: 1, text: "now, going to the first project" },
    { id: 7, x: 0.45, y: 0, start_anm: character.static, final_anm: character.changing, duration: 1, delay: 0, scaleX: 1, action: "nextSlide", action_time: 1300, page_transition: 1},
    { id: 8, x: 0.45, y: 0, start_anm: character.static, final_anm: character.presenting, duration: 0, delay: 0, scaleX: 1 },
    { id: 9, x: 0.45, y: 0, start_anm: character.presenting, final_anm: character.presenting, duration: 0, delay: 0, scaleX: 1, text: "this is trevis forecast" },
    { id: 10, x: 0.8, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 4, delay: 0, scaleX: 1, text: "trevis forecast is a course project done at senai by..." },
    { id: 11, x: 0.8, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "luizblank in collaboration with eric coutinho using 2 external apis" },
    { id: 12, x: 0.8, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "VisualCrossingAPI - an API that obtains weather forecast information using coordinates" },
    { id: 13, x: 0.8, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "OpenCageAPI - an API that converts coordinates to places" },
    { id: 14, x: 0.8, y: 0, start_anm: character.static, final_anm: character.pressing_button, duration: 1, delay: 0, scaleX: 1, action: "setBackground2Status", action_time: 1600},
    { id: 15, x: 0.4, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 4, delay: 0, scaleX: -1, text: "as you can see and as the name suggests" },
    { id: 16, x: 0.4, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "this is an weather forecasting website" },
    { id: 17, x: 0.4, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "it gets your current location and uses visual crossing to obtain..." },
    { id: 18, x: 0.4, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "the weather forecast for your location" },
    { id: 19, x: 0.6, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 3, delay: 0, scaleX: 1, text: "creating an account and logging in, gives you access to two new features" },
    { id: 20, x: 0.6, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "1. add new locations to your account by selecting them on the map" },
    { id: 21, x: 0.6, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "2. switching between them anytime you want" },
    { id: 22, x: 0.45, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 2, delay: 0, scaleX: -1, text: "this was the first time they used external apis like this" },
    { id: 23, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "which gave a great overview of what you can do with them" },
    { id: 24, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "sometimes a two week project can teach you a lot" },
    { id: 25, x: 0.1, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 4, delay: 0, scaleX: -1, text: "when you're ready to move on to the next project, let me know"},
    { id: 26, x: 0.7, y: 0, start_anm: character.walking, final_anm: character.static, duration: 10, delay: 0, scaleX: 1, action: "wNextSlide", page_transition: 10 },
    { id: 27, x: 0.7, y: 0, start_anm: character.looking, final_anm: character.looking, duration: 0, delay: 1, scaleX: 1, text: "?"  },
    { id: 28, x: 0.7, y: 0, start_anm: character.talking_pointing_cf, final_anm: character.talking_pointing_cf, duration: 0, delay: 0, scaleX: 1, text: "i have no idea what this is" },
    { id: 29, x: 0.7, y: 0, start_anm: character.looking, final_anm: character.looking, duration: 0, delay: 0, scaleX: 1, text: "..." },
    { id: 30, x: 0.45, y: 0, start_anm: character.walking, final_anm: character.static, duration: 5, delay: 0, scaleX: -1 },
    { id: 31, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "i was just kidding, this is luizblank's course completion project..." },
    { id: 32, x: 0.45, y: 0, start_anm: character.presenting, final_anm: character.presenting, duration: 0, delay: 0, scaleX: 1, text: "Sorting Conveyor", action: "setBackground3Status", action_time: 0 },
    { id: 33, x: 0.45, y: 0, start_anm: character.static, final_anm: character.looking_talking, duration: 0, delay: 1.5, scaleX: 1, text: "you can leave now conveyor", cutscene_text: true, cutscene_text_time: 3000, action: "setLeavingConveyorStatus", action_time: 2000 },
    { id: 34, x: 0.65, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 3, delay: 0, scaleX: 1, text: "luizblank made this project in collaboration with vinimslima with extracurricular use" },
    { id: 35, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "simulating a production line conveyor but with a part sorting feature" },
    { id: 36, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "in the case of the project, the parts are represented by lego cubes" },
    { id: 37, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "if the cube has a solid color, it's considered good, and will be sorted by it's color" },
    { id: 38, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "if the cube has different colors on it, it's considered bad, and will be discarded" },
    { id: 39, x: 0.25, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 3, delay: 0, scaleX: -1, text: "as you can see in the video behind me" },
    { id: 40, x: 0.25, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "the conveyor has a tube where you can place the cubes" },
    { id: 41, x: 0.25, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "and they will be automatically dispensed" },
    { id: 42, x: 0.25, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "after being dispensed, the cube will slide down to the treadmill" },
    { id: 43, x: 0.25, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "and will start walking along the conveyor, passing inside this big lego compartment" },
    { id: 44, x: 0.25, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "which has a webcam positioned to take photos when a cube enters" },
    { id: 45, x: 0.65, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 3, delay: 0, scaleX: 1, text: "after the photo is taken, it's processed by the AI which will send..." },
    { id: 46, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "the corresponding signal from that block to the Arduino board" },
    { id: 47, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "then, the Arduino board will send a signal to the articulated arm..." },
    { id: 48, x: 0.65, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: 1, text: "that will redirect the block that is coming" },
    { id: 49, x: 0.45, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 2, delay: 0, scaleX: -1, text: "even though it was an important project" },
    { id: 50, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "they surely had a lot of fun creating it" },
    { id: 51, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "also, this project led to their participation in the Mundo Senai event" },
    { id: 52, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "where they presented to various public schools..." },
    { id: 53, x: 0.45, y: 0, start_anm: character.talking, final_anm: character.talking, duration: 0, delay: 0, scaleX: -1, text: "the types of projects that are carried out at Senai" },
    { id: 54, x: 0.2, y: 0, start_anm: character.walking, final_anm: character.talking, duration: 3, delay: 0, scaleX: -1, text: "ready to go to the last project, let me know" },
    { id: 55, x: 0.2, y: 0, start_anm: character.static, final_anm: character.static, duration: 0, delay: 2, scaleX: -1 },
    { id: 56, x: 0.2, y: 0, start_anm: character.static, final_anm: character.looking_talking, duration: 0, delay: 0, scaleX: -1, text: "Marcos?", cutscene_text: true, cutscene_text_time: 2000, action: "setMarcosAnimationStatus", action_time: 0 },
    { id: 57, x: 0.25, y: 0, start_anm: character.walking, final_anm: character.static, duration: 8, delay: 0, scaleX: 1, action: "wNextSlide", page_transition: 8},
    { id: 58, x: 0.25, y: 0, start_anm: character.looking, final_anm: character.looking_talking, duration: 0, delay: 0, scaleX: -1, text: "come back here!", cutscene_text: true, cutscene_text_time: 1500 },
    { id: 59, x: 0.25, y: 0, start_anm: character.looking_shocked, final_anm: character.looking_shocked, duration: 0, delay: 7.5, scaleX: -1},
    { id: 60, x: 0.25, y: 0, start_anm: character.looking_shocked, final_anm: character.looking_up, duration: 0, delay: 0, scaleX: -1},
]