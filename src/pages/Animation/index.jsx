import { useEffect, useState } from 'react';
import { movements } from '../../constants/Actions';
import { sprites_sizes } from '../../constants/SpritesSizes';
import { Sprite, Dialog, Ground } from '../../constants/Styles';
import { backgrounds } from '../../constants/Backgrounds';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';


export default function Animation() {
	const [firstMovement, setFirstMovement] = useState(
		sessionStorage.getItem('last_movement') ? parseInt(sessionStorage.getItem('last_movement')) : 0
	);

	const [crrMovement, setCrrMovement] = useState(movements[firstMovement]);
	const [crrSprite, setCrrSprite] = useState(crrMovement.start_anm.url);

	const [showDialog, setShowDialog] = useState(crrMovement.text ? true : false);

	const [currentIndex, setCurrentIndex] = useState(0);

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
	}

	function nextSlide() {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
		handleAnimationComplete();
	}
	
	function prevSlide() {
		setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? backgrounds.length - 1 : prevIndex - 1 );
		handleAnimationComplete();
	}

	return (
		<>
			<div className={styles.container}>

				<motion.div className={styles.carousel}>
					<motion.div
						className={styles.inner_carousel}
						animate={{ x: `-${currentIndex * 100}%` }}
						transition={{ duration: 0.8, ease: 'easeInOut' }}
					>
						{backgrounds.map((background, index) => (
							<motion.div key={index} className={styles.item}>
								{background}
							</motion.div>
						))}
					</motion.div>
				</motion.div>
				<button onClick={() => nextSlide()}>proxima</button>
				<button onClick={() => prevSlide()}>antigo</button>

				<div className={styles.animation_container}>
					<Dialog
						onClick={() => handleDialogClick()}
						style={{ display: showDialog ? 'flex' : 'none' }}
						animate={{
							x: crrMovement.x - ((sprites_sizes.dialog.int_width - sprites_sizes.character.int_width) / 2),
							y: crrMovement.y
						}}
						transition={{ type: 'tween', duration: crrMovement.duration, delay: crrMovement.delay }}
					>
						<div className={styles.dialog_text}>
							{crrMovement.text}
						</div>
					</Dialog>
					<Sprite
						alt='sprite'
						src={crrSprite}
						style={{ scaleX: crrMovement.scaleX }}
						animate={{ x: crrMovement.x, y: crrMovement.y }}
						transition={{ type: 'tween', duration: crrMovement.duration, delay: crrMovement.delay }}
						onAnimationComplete={() => {
							if (crrMovement.text != null) {
								setCrrSprite(crrMovement.final_anm.url);
								setShowDialog(true);
								return;
							}
							if (crrMovement.action != null) {
								setCrrSprite(crrMovement.final_anm.url);
								setTimeout(() => {
									if (crrMovement.action == "nextSlide")
									nextSlide();
									if (crrMovement.action == "prevSlide")
										prevSlide();
								}, crrMovement.action_time);
								return;
							}
							handleAnimationComplete();
							setCrrSprite(crrMovement.final_anm.url);
						}}
					/>
					<Ground />
				</div>
				
			</div>
		</>
	);
}
