/* eslint-disable react/no-unescaped-entities */
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function About() {
    const topics = ['about', 'stack', 'experiences', 'education']
    const [currTopic, setCurrTopic] = useState(0)

    const [windowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <>
            <a onClick={() => setCurrTopic(currTopic - 1)} className={`${styles.nav_button} ${styles.up_button}`} style={{display: currTopic == 0 ? 'none' : 'block'}} href={`#${topics[currTopic]}`}><FaChevronUp/></a>
            <a onClick={() =>
                setCurrTopic(
                    currTopic < topics.length - 1 ?
                    currTopic + 1 :
                    0
                )
            } className={`${styles.nav_button} ${styles.down_button}`} href={`#${topics[currTopic]}`}><FaChevronDown/></a>

            <div className={styles.wrapper} id='about' onMouseEnter={() => setCurrTopic(0)}>
                <div className={styles.container}>
                    <h1>
                        <div className={styles.ab}>ab</div>
                        <div className={styles.out}>out</div>
                        <div className={styles.me}>me</div>
                    </h1>
                    <div className={styles.description}>
                        <span>hi! welcome to my creation corner</span>
                        <span>you can call me Luiz, but i go by</span>
                        <span className={styles.cube}>
                            <div className={`${styles.face} ${styles.front}`}>luizblank</div>
                            <div className={`${styles.face} ${styles.up}`}>blank</div>
                            <div className={`${styles.face} ${styles.back}`}>rosa</div>
                            <div className={`${styles.face} ${styles.down}`}>knalb</div>
                        </span>
                        <span>too</span>
                        <span style={{ marginTop: '20px' }}>i'm frontend/ios developer and 3d designer who loves building new products</span>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper} id='stack' onMouseEnter={() => setCurrTopic(1)}>
                <div className={styles.container}>
                    <h1>tech stack</h1>
                    <div className={styles.sections}>
                        <div className={styles.stack_section}>
                            <span className={styles.title}>frontend</span>
                            <span className={styles.content}>react, vite, typescript, javascript, html, css, tailwind</span>
                        </div>
                        <div className={styles.stack_section}>
                            <span className={styles.title}>mobile</span>
                            <span className={styles.content}>swiftui, swift, realitykit, swiftdata, combine</span>
                        </div>
                        <div className={styles.stack_section}>
                            <span className={styles.title}>backend</span>
                            <span className={styles.content}>node.js, python, c#, mongodb, sqlserver, rest apis</span>
                        </div>
                        <div className={styles.stack_section}>
                            <span className={styles.title}>tools</span>
                            <span className={styles.content}>figma, blender, git, github</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper} id='experiences' onMouseEnter={() => setCurrTopic(2)}>
                <div className={styles.container}>
                    <h1>experiences</h1>
                    <div className={styles.sections}>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>ios developer & designer</span>
                                <span className={styles.place}>apple developer academy (scholarship)</span>
                            </div>
                            <span className={styles.date}>mar 2025 - dec 2026</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>web designer</span>
                                <span className={styles.place}>ibacbrasil - educational technologies</span>
                            </div>
                            <span className={styles.date}>jun 2025 - mar 2026</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>systems developer</span>
                                <span className={styles.place}>bosch (internship)</span>
                            </div>
                            <span className={styles.date}>feb 2023 - oct 2024</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>web developer</span>
                                <span className={styles.place}>bosch (internship)</span>
                            </div>
                            <span className={styles.date}>jan 2022 - aug 2022</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper} id='education' onMouseEnter={() => setCurrTopic(3)}>
                <div className={styles.container}>
                    <h1>education</h1>
                    <div className={styles.sections}>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>systems analysis and development</span>
                                <span className={styles.place}>cruzeiro do sul university</span>
                            </div>
                            <span className={styles.date}>aug 2026 - jun 2028</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>animation design</span>
                                <span className={styles.place}>cruzeiro do sul university</span>
                            </div>
                            <span className={styles.date}>oct 2025 - dec 2026</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>systems development</span>
                                <span className={styles.place}>senai</span>
                            </div>
                            <span className={styles.date}>feb 2023 - oct 2024</span>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.main}>
                                <span className={styles.title}>web development</span>
                                <span className={styles.place}>senai</span>
                            </div>
                            <span className={styles.date}>jan 2022 - aug 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}