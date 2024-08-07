import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const stepPrev = () => {
		setActiveIndex(activeIndex - 1);
	}

	const stepNext = () => {
		setActiveIndex(activeIndex + 1);
	}

	const startOver = () => {
		setActiveIndex(0);
	}

	let isFirstStep = activeIndex == 0 ? true : false;
	let isLastStep = activeIndex == data.length - 1 ? true : false;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li className={styles['steps-item']
							+ " "
							+ (activeIndex == index ? styles.active : "")
							+ " "
							+ (index <= activeIndex ? styles.done : "")} key={step.id}>
							<button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>{index + 1}</button>
							{step.title}
						</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={stepPrev} disabled={isFirstStep}>Назад</button>
						{isLastStep ?
							<button className={styles.button} onClick={startOver}>
								Начать сначала
							</button>
							:
							<button className={styles.button} onClick={stepNext}>
								Далее
							</button>
						}
					</div>
				</div>
			</div>
		</div>
	);
};
