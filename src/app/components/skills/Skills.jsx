import React from 'react'
// Img
import Image from 'next/image';
// Foonts
import { Poppins } from "next/font/google";
// Icons
import Html from '../../../../public/_images/icons/htmlsvg.svg'
import Js from '../../../../public/_images/icons/jssvg.svg'
import Angular from '../../../../public/_images/icons/angularsvg.svg'
import Vue from '../../../../public/_images/icons/vuesvg.svg'
import Reactjs from '../../../../public/_images/icons/reactsvg.svg'
import Redux from '../../../../public/_images/icons/reduxsvg.svg'
import Nextjs from '../../../../public/_images/icons/nextjs2.svg'
import Css from '../../../../public/_images/icons/csssvg.svg'
import Bootstrapsvg from '../../../../public/_images/icons/bootstrapsvg.svg'
import Tailwindsvg from '../../../../public/_images/icons/tailwindsvg.svg'
import Trellosvg from '../../../../public/_images/icons/trellosvg.svg'
import Figmasvg from '../../../../public/_images/icons/figmasvg.svg'
import Github from '../../../../public/_images/icons/githubsvg.svg'
// styles
import styles from '../../styles/Skills.module.css'


const poppins = Poppins({ weight: '400', subsets: ['latin'] });


export default function Skills() {


    const skills = [
        {
            src: Html,
            text: '< HTML />'
        },
        {
            src: Js,
            text: '< JavaScript />'
        },
        {
            src: Angular,
            text: '< AngularJs />'
        },
        {
            src: Vue,
            text: '< VueJs />'
        },
        {
            src: Nextjs,
            text: '< NextJs />'
        },
        {
            src: Reactjs,
            text: '< ReactJs />'
        },
        {
            src: Redux,
            text: '< Redux />'
        },
        {
            src: Css,
            text: '< Css />'
        },
        {
            src: Bootstrapsvg,
            text: '< Bootstrap />'
        },
        {
            src: Tailwindsvg,
            text: '< Tailwind/>'
        },
        {
            src: Trellosvg,
            text: 'Trello'
        },
        {
            src: Figmasvg,
            text: 'Figma'
        },
        {
            src: Github,
            text: 'GitHub'
        }
    ]
    return (
        <div className="p-5">
            <div className={`p-5 ${styles.container_section}`}>
                <h2 className={`title_sections ${poppins.className}`}>
                    Habilidades
                </h2>
                <span className={`${styles.subtitle_text}`}>Herramientas en las cuales tengo experiencia.</span>



                <div className="grid grid-cols-12 gap-4 m_tp_6">
                        {
                            skills.map((item, index) => (
                                <div className="col-span-4 md:col-span-2 mb-3 justify-center gap-4 " key={index}>
                                    <div className="flex flex-col items-center">

                                        <div className="holographic-container">
                                            <div className="holographic-card">
                                                <div className="relative flex justify-center">

                                                    <Image className="relative size_img_skills" src={item.src} alt={item.text} />

                                                </div>


                                                <p className={`font-bold ${styles.text_skill}`}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            ))
                        }

                    
                </div>



            </div>
        </div>
    )
}
