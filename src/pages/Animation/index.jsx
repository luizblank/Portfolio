import { useEffect, useState } from 'react';
import { movements } from '../../constants/Movements';
import { sprites_sizes } from '../../constants/SpritesSizes';
import { Character, Dialog, DialogText, Ground } from '../../constants/Styles';
import { backgrounds } from '../../constants/Backgrounds';
import { motion } from 'framer-motion';
import { character } from '../../constants/Sprites';
import { useGlobalContext } from '../../context/GlobalContext';
import { RiSpeedLine } from "react-icons/ri";
import { BsArrowRepeat } from "react-icons/bs";
import styles from './styles.module.scss';

export default function Animation() {
	const [jumpThrough, setjumpThrough] = useState(0);

	const {
		setBackground2Status,
		setBackground3Status,
		setLeavingConveyor,
		setMarcosAnimation,
		setShowWinners
	} = useGlobalContext();

	const [animationFinished, setAnimationFinished] = useState(sessionStorage.getItem('animation_finished') ? true : false);
	const [tutorial, setTutorial] = useState(sessionStorage.getItem('tutorial') ? false : true);
	const [firstMovement, setFirstMovement] = useState(animationFinished ? movements.length - 1 : 0)
	const [clicked, setClicked] = useState(false);
	const [skipped, setSkipped] = useState(false);
	const [dialogText, setDialogText] = useState("to continue my dialogues, click on the speech balloon.")
	const [dialogTextDisplay, setDialogTextDisplay] = useState('');

	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const [crrMovement, setCrrMovement] = useState(movements[firstMovement]);
	const [crrSprite, setCrrSprite] = useState(crrMovement.start_anm);

	const [showDialog, setShowDialog] = useState(crrMovement.text ? true : false);

	const [currentIndex, setCurrentIndex] = useState(animationFinished ? backgrounds.length - 1 : 0);

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
		setCrrSprite(crrMovement.start_anm);
		if (crrMovement.id == movements.length - 1) {
			sessionStorage.setItem('animation_finished', true);
			setAnimationFinished(true);
		}
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
			<div style={{ userSelect: 'none' }}>
				{tutorial &&
					<div id='tutorial' className={styles.tutorial}>
						<div className={styles.text}>
							<Dialog onClick={() => {
								setDialogText("that's it, now you can proceed to the tour");
								setClicked(true);
								sessionStorage.setItem('tutorial', true);
							}}>
								<DialogText className={styles.dialog_text}>
									<div>{dialogTextDisplay}</div>
								</DialogText>
							</Dialog>
							<img src={character.talking.url} alt='character talking' />
							<button type='button' onClick={() => { setTutorial(false) }} disabled={!clicked}>start the tour</button>
						</div>
					</div>
				}
				{!tutorial &&
					<>
						<button className={styles.skip} style={{ display: skipped || animationFinished ? 'none' : 'flex' }} onClick={() => {
							setCrrMovement(movements[movements.length - 1]);
							setCurrentIndex(backgrounds.length - 1);
							setShowDialog(false);
							sessionStorage.setItem('animation_finished', true);
							setAnimationFinished(true);
							setSkipped(true);
						}}>
							<div className={styles.skip_text}>skip animation</div>
							<RiSpeedLine className={styles.icon} />
						</button>

						<button className={styles.repeat} style={{ display: skipped || animationFinished ? 'flex' : 'none' }} onClick={() => {
							setCrrMovement(movements[0]);
							setCurrentIndex(0);
							setShowDialog(false);
							sessionStorage.removeItem('animation_finished');
							setAnimationFinished(false);
							setSkipped(false);
						}}>
							<div className={styles.repeat_text}>repeat animation</div>
							<BsArrowRepeat className={styles.icon} />
						</button>

						<div className={styles.container}>

							<motion.div className={styles.carousel}>
								<motion.div
									className={styles.inner_carousel}
									animate={{ x: `-${currentIndex * 100}%` }}
									transition={{
										duration: animationFinished ? 0 : crrMovement.id > jumpThrough ? crrMovement.page_transition : 0,
										ease: 'easeInOut'
									}}
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
									onClick={() => !crrMovement.cutscene_text ? handleDialogClick() : 0}
									style={{ display: showDialog ? 'flex' : 'none' }}
									animate={{
										x: (windowDimensions.width * crrMovement.x) - ((sprites_sizes.dialog.width - sprites_sizes.character.width) / 2),
										y: windowDimensions.height * crrMovement.y
									}}
									transition={{ type: 'tween', duration: crrMovement.duration, delay: crrMovement.delay }}
								>
									<DialogText>
										<div>{dialogTextDisplay}</div>
									</DialogText>
								</Dialog>
								<Character
									key={crrMovement.id}
									alt={"character " + crrSprite.name}
									src={crrSprite.url}
									style={{ scaleX: crrMovement.scaleX }}
									initial={{ x: windowDimensions.width * movements[crrMovement.id == 0 ? 0 : crrMovement.id - 1].x }}
									animate={{
										x: windowDimensions.width * crrMovement.x,
										y: windowDimensions.height * crrMovement.y
									}}
									transition={{
										type: 'tween',
										duration: crrMovement.id > jumpThrough ? crrMovement.duration : 0,
										delay: crrMovement.id > jumpThrough ? crrMovement.delay : 0
									}}
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
											setCrrSprite(crrMovement.final_anm);
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
											if (crrMovement.action == "setLeavingConveyorStatus") {
												setTimeout(() => setLeavingConveyor(true), wait_time);
											}
											if (crrMovement.action == "setMarcosAnimationStatus") {
												setTimeout(() => setMarcosAnimation(true), wait_time);
											}
											if (crrMovement.action == "setShowWinnersStatus") {
												setTimeout(() => setShowWinners(true), wait_time);
											}
											if (crrMovement.action == "nextSlide") {
												setTimeout(() => nextSlide(), wait_time);
												setTimeout(() => handleAnimationComplete(), transition);
												return;
											}
											if (crrMovement.action == "prevSlide") {
												setTimeout(() => prevSlide(), wait_time);
												setTimeout(() => handleAnimationComplete(), transition);
												return;
											}
										}
										if (crrMovement.text && crrMovement.id > jumpThrough) {
											setCrrSprite(crrMovement.final_anm);
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

											if (crrMovement.cutscene_text) {
												setTimeout(() => {
													setShowDialog(false);
													handleAnimationComplete();
													clearTimeout(typeWriter);
													return;
												}, crrMovement.id > jumpThrough ? crrMovement.cutscene_text_time : 0);
											}
											return () => clearTimeout(typeWriter);
										}
										handleAnimationComplete();
										setCrrSprite(crrMovement.final_anm)
									}}
								/>
								<Ground />
							</motion.div>

						</div>
					</>
				}
			</div>
		</>
	);
}
