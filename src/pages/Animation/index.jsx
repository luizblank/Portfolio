import { useEffect, useState } from 'react';
import { actions } from '../../constants/Actions';
import { sprites_sizes } from '../../constants/SpritesSizes';
import { Sprite, Dialog, Ground } from '../../constants/Styles';
import { backgrounds } from '../../constants/Backgrounds';
import Background from '../../components/Background';
import styles from './styles.module.scss';


export default function Animation() {
	const [firstAction, setFirstAction] = useState(
		sessionStorage.getItem('last_action') ? parseInt(sessionStorage.getItem('last_action')) : 0
	);

	const [crrAction, setCrrAction] = useState(actions[firstAction]);
	const [crrSprite, setCrrSprite] = useState(crrAction.start_anm.url);

	const [showDialog, setShowDialog] = useState(crrAction.text ? true : false);
	const [backgroundIndex, setBackgroundIndex] = useState(0);

	useEffect(() => {
		setCrrSprite(crrAction.start_anm.url);
	}, [crrAction]);

	function handleAnimationComplete() {
		if (crrAction.id < actions.length - 1) {
			const next_action = actions[crrAction.id + 1];
			setCrrAction(next_action);
		}
	};

	const handleDialogClick = () => {
		setShowDialog(false);
		handleAnimationComplete();
	}

	const nextSlide = () => {
		setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
	};

	const prevSlide = () => {
		setBackgroundIndex((prevIndex) =>
			prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
		);
	};

	return (
		<>
			<div className={styles.container}>
        <Background>
          <div>ddfdsfds</div>
        </Background>
				<button onClick={nextSlide}>fsddfds</button>
				<div className={styles.animation_container}>
					<Dialog
						onClick={handleDialogClick}
						style={{ display: showDialog ? 'flex' : 'none' }}
						animate={{
							x: crrAction.x - ((sprites_sizes.dialog.int_width - sprites_sizes.character.int_width) / 2),
							y: crrAction.y
						}}
						transition={{ type: 'tween', duration: crrAction.duration, delay: crrAction.delay }}
					>
						<div className={styles.dialog_text}>
							{crrAction.text}
						</div>
					</Dialog>
					<Sprite
						alt='sprite'
						src={crrSprite}
						style={{ scaleX: crrAction.scaleX }}
						animate={{ x: crrAction.x, y: crrAction.y }}
						transition={{ type: 'tween', duration: crrAction.duration, delay: crrAction.delay }}
						onAnimationComplete={() => {
							if (crrAction.text == null) {
								handleAnimationComplete();
								setCrrSprite(crrAction.final_anm.url);
								return;
							}
							setCrrSprite(crrAction.final_anm.url);
							setShowDialog(true);
						}}
					/>
					<Ground />
				</div>
			</div>
		</>
	);
}
