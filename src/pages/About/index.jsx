import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

export default function About() {
    const [topics, setTopics] = useState(false);

    const showTopics = () => {
        setTopics(true);
    }

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <>
            {
                windowDimensions.width > windowDimensions.height && (windowDimensions.width >= 1280 || !windowDimensions.height >= 800) ?
                    <div className={styles.container2} id={styles.absolute_center}>
                        <div style={{ display: topics ? 'flex' : 'none' }} className={styles.container} id={styles.left_topics}>
                            <h1>
                                working
                            </h1>
                            <div className={styles.container}>
                                <div className={styles.topic}>
                                    <h2>web programmer at&nbsp;<a href='https://www.bosch.com.br/' target='_blank'>bosch</a></h2>
                                    <div className={styles.description}>
                                        had my first experience with programming in the internal course that
                                        was given within the company<br />
                                        working period: jan/2022 to aug/2022
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <h2>system developer at&nbsp;<a href='https://www.bosch.com.br/' target='_blank'>bosch</a></h2>
                                    <div className={styles.description}>
                                        joined bosch again to deepen my knowledge and learn new things, this
                                        time i discovered react and it became my favorite tool to work with<br />
                                        working period: fev/2023 to oct/2024
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <h1>
                                <div className={styles.ab}>ab</div>
                                <div className={styles.out}>out</div>
                                <div className={styles.me}>me</div>
                            </h1>
                            <div className={styles.description}>
                                <div>hey! welcome to my little creation corner 👻</div>
                                <div className={styles.text}>
                                    you can call me Luiz, but i go by
                                    <div className={styles.cube}>
                                        <div id={styles.front} className={styles.face}>luizblank</div>
                                        <div id={styles.up} className={styles.face}>blank</div>
                                        <div id={styles.back} className={styles.face}>rosa</div>
                                        <div id={styles.down} className={styles.face}>knalb</div>
                                    </div>
                                    too
                                </div>
                                <div style={{ marginTop: '20px' }}>i'm frontend developer who loves playing with</div>
                                <div className={styles.text}>
                                    animations and&nbsp;
                                    <div className={styles.different}>different&nbsp;</div>
                                    <div className={styles.design}>design&nbsp;</div>
                                    <div className={styles.styles}>styles</div>
                                </div>
                                <button type='button' className={styles.show_button} onClick={showTopics}>see my experiences here</button>
                            </div>
                        </div>
                        <div style={{ display: topics ? 'flex' : 'none' }} className={styles.container} id={styles.right_topics}>
                            <h1>
                                learning
                            </h1>
                            <div className={styles.container}>
                                <div className={styles.topic}>
                                    <h2><a href='https://www.ccaa.com.br/' target='_blank'>ccaa</a>&nbsp;english course</h2>
                                    <div className={styles.description}>
                                        in 2021, i concluded my english course at ccaa progressing through 11 levels of study,
                                        covering basic, intermediate and advanced education, with an average grade of 92,06
                                    </div>
                                </div>
                                <div className={styles.topic}>
                                    <h2><a href='https://www.senaipr.org.br/' target='_blank'>senai</a>&nbsp;technical courses</h2>
                                    <div className={styles.description}>
                                        along with my internal course at bosch, i took two technical courses provided by them at senai,
                                        which were part of the internal course's schedule<br />
                                        taken courses: system developement and web programming
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    <div className={styles.container3} id={styles.absolute_center}>
                        <h1>
                            <div className={styles.ab}>ab</div>
                            <div className={styles.out}>out</div>
                            <div className={styles.me}>me</div>
                        </h1>
                        <div className={styles.description}>
                            <div>hey! welcome to my little creation corner 👻</div>
                            <div className={styles.text}>
                                you can call me Luiz, but i go by
                                <div className={styles.cube}>
                                    <div id={styles.front} className={styles.face}>luizblank</div>
                                    <div id={styles.up} className={styles.face}>blank</div>
                                    <div id={styles.back} className={styles.face}>rosa</div>
                                    <div id={styles.down} className={styles.face}>knalb</div>
                                </div>
                                too
                            </div>
                            <div style={{ marginTop: '20px' }}>i'm frontend developer who loves playing with</div>
                            <div className={styles.text}>
                                animations and&nbsp;
                                <div className={styles.different}>different&nbsp;</div>
                                <div className={styles.design}>design&nbsp;</div>
                                <div className={styles.styles}>styles</div>
                            </div>
                        </div>
                        <a className={styles.show_button} href='https://www.linkedin.com/in/luiz-antonio-rosa-cardoso-9005512b7/' target='_blank'>see my experiences here</a>
                    </div>
            }
        </>
    )
}