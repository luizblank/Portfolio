import { useEffect, useState } from 'react';
import { movements } from '../../constants/Movements';
import { sprites_sizes } from '../../constants/SpritesSizes';
import { Character, Dialog, Ground } from '../../constants/Styles';
import { backgrounds } from '../../constants/Backgrounds';
import { motion } from 'framer-motion';
import { character } from '../../constants/Sprites';
import { useGlobalContext } from '../../context/GlobalContext';
import styles from './styles.module.scss';

export default function Animation() {
	const [jumpThrough, setjumpThrough] = useState(0);

	const {
        setBackground2Status,
        setBackground3Status,
		setLeavingConveyor
    } = useGlobalContext();

	const [tutorial, setTutorial] = useState(sessionStorage.getItem('tutorial') ? false : true);
	const [clicked, setClicked] = useState(false);
	const [dialogText, setDialogText] = useState("to continue my dialogues, click on the speech balloon.")
	const [dialogTextDisplay, setDialogTextDisplay] = useState('');

	const [firstMovement, setFirstMovement] = useState(
		sessionStorage.getItem('last_movement') ? parseInt(sessionStorage.getItem('last_movement')) : 0
	);

	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const [crrMovement, setCrrMovement] = useState(movements[firstMovement]);
	const [crrSprite, setCrrSprite] = useState(crrMovement.start_anm.url);

	const [showDialog, setShowDialog] = useState(crrMovement.text ? true : false);

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		let speed = 60;
		let i = 0;
		let currentText = '';

		function typeWriter() {
			if (i < dialogText.length) {
				currentText += dialogText.charAt(i);
				setDialogTextDisplay(currentText);
				setTimeout(typeWriter, speed);
				i++;
			}
		}

		typeWriter();
		return () => {
			clearTimeout(typeWriter);
		};
	}, [dialogText])

	useEffect(() => {
		setCrrSprite(crrMovement.start_anm.url);
	}, [crrMovement]);

	function handleAnimationComplete() {
		if (crrMovement.id < movements.length - 1) {
			const next_movement = movements[crrMovement.id + 1];
			setCrrMovement(next_movement);
		}
	};

	function handleDialogClick() {
		setShowDialog(false);
		handleAnimationComplete();
	};

	function nextSlide() {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
	};

	function prevSlide() {
		setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? backgrounds.length - 1 : prevIndex - 1);
	};

	return (
		<>
			{tutorial &&
				<div id='tutorial' className={styles.tutorial}>
					<div className={styles.text}>
						<Dialog onClick={() => {
							setDialogText("that's it, now you can proceed to the tour");
							setClicked(true);
							sessionStorage.setItem('tutorial', true);
						}}>
							<div className={styles.dialog_text}>
								{dialogTextDisplay}
							</div>
						</Dialog>
						<img src={character.talking.url} alt='character talking' />
						<button type='button' onClick={() => { setTutorial(false) }} disabled={!clicked}>start the tour</button>
					</div>
				</div>
			}
			{!tutorial &&
				<div className={styles.container}>

					<motion.div className={styles.carousel}>
						<motion.div
							className={styles.inner_carousel}
							animate={{ x: `-${currentIndex * 100}%` }}
							transition={{ 
								duration: crrMovement.id > jumpThrough ? crrMovement.page_transition : 0,
								ease: 'easeInOut' }}
						>
							{backgrounds.map((background, index) => (
								<motion.div key={index} className={styles.item}>
									{background}
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					<motion.div className={styles.animation_container}>
						<Dialog
							onClick={ () => handleDialogClick() }
							style={{ display: showDialog ? 'flex' : 'none' }}
							animate={{
								x: (windowDimensions.width * crrMovement.x) - ((sprites_sizes.dialog.int_width - sprites_sizes.character.int_width) / 2),
								y: windowDimensions.height * crrMovement.y
							}}
							transition={{ type: 'tween', duration: crrMovement.duration, delay: crrMovement.delay }}
						>
							<div className={styles.dialog_text}>
								{dialogTextDisplay}
							</div>
						</Dialog>
						<Character
							key={crrMovement.id}
							alt='sprite'
							src={crrSprite}
							style={{ scaleX: crrMovement.scaleX }}
							initial={{ x: windowDimensions.width * movements[crrMovement.id == 0 ? 0 : crrMovement.id - 1].x }}
							animate={{
								x: windowDimensions.width * crrMovement.x,
								y: windowDimensions.height * crrMovement.y
							}}
							transition={{ type: 'tween', duration: crrMovement.id > jumpThrough ? crrMovement.duration : 0, delay: crrMovement.delay }}
							onAnimationStart={() => {
								if (crrMovement.action) {
									let transition = crrMovement.id > jumpThrough ? crrMovement.page_transition * 1000 : 0;
									if (crrMovement.action == "wNextSlide") {
										nextSlide();
										setTimeout(() => handleAnimationComplete(), transition);
									}
									if (crrMovement.action == "wPrevSlide") {
										prevSlide();
										setTimeout(() => handleAnimationComplete(), transition);
									}
								}
							}}
							onAnimationComplete={() => {
								if (crrMovement.action) {
									setCrrSprite(crrMovement.final_anm.url);
									let wait_time = crrMovement.id > jumpThrough ? crrMovement.action_time : 0;
									let transition = crrMovement.id > jumpThrough ? crrMovement.page_transition * 1000 + wait_time : 0;
									if (crrMovement.action == "setBackground2Status") {
										setTimeout(() => setBackground2Status(true), wait_time);
										if (!crrMovement.text) {
											setTimeout(() => {
												handleAnimationComplete();
												return;
											}, wait_time * 2);
										}
										return;
									}
									if (crrMovement.action == "setBackground3Status") {
										setTimeout(() => setBackground3Status(true), wait_time);
										if (!crrMovement.text) {
											setTimeout(() => {
												handleAnimationComplete();
												return;
											}, wait_time);
										}
									}
									if (crrMovement.action == "leavingConveyor") {
										setTimeout(() => setLeavingConveyor(true), wait_time);
										setTimeout(() => {
											setShowDialog(false);
											handleAnimationComplete();
											return;
										}, wait_time * 1.2);
									}
									if (crrMovement.action == "nextSlide") {
										setTimeout(() => nextSlide(), wait_time);
										setTimeout(() => handleAnimationComplete(), transition);
									}
									if (crrMovement.action == "prevSlide") {
										setTimeout(() => prevSlide(), wait_time);
										setTimeout(() => handleAnimationComplete(), transition);
									}
								}
								if (crrMovement.text && crrMovement.id > jumpThrough) {
									setCrrSprite(crrMovement.final_anm.url);
									setShowDialog(true);
									let speed = 60;
									let i = 0;
									let currentText = '';

									function typeWriter() {
										if (i < crrMovement.text.length) {
											currentText += crrMovement.text.charAt(i);
											setDialogTextDisplay(currentText);
											setTimeout(typeWriter, speed);
											i++;
										}
									}

									typeWriter();
									return () => {
										clearTimeout(typeWriter);
									};
								}
								handleAnimationComplete();
								setCrrSprite(crrMovement.final_anm.url)
							}}
						/>
						<Ground />
					</motion.div>

				</div>
			}
		</>
	);
}
