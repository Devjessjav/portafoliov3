import React from 'react'
// Img
import Image from 'next/image';
// Foonts
import { Poppins } from "next/font/google";
// Icons
import Html from '../../_images/icons/htmlsvg.svg'
import Js from '../../_images/icons/jssvg.svg'
import Angular from '../../_images/icons/angularsvg.svg'
import Vue from '../../_images/icons/vuesvg.svg'
import Reactjs from '../../_images/icons/reactsvg.svg'
import Redux from '../../_images/icons/reduxsvg.svg'
import Nextjs from '../../_images/icons/nextjs2.svg'
import Css from '../../_images/icons/csssvg.svg'
import Bootstrapsvg from '../../_images/icons/bootstrapsvg.svg'
import Tailwindsvg from '../../_images/icons/tailwindsvg.svg'
import Trellosvg from '../../_images/icons/trellosvg.svg'
import Figmasvg from '../../_images/icons/figmasvg.svg'
import Github from '../../_images/icons/githubsvg.svg'
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
                            <div className="col-span-2 mb-3 justify-center gap-4" key={index}>
                                <div className="flex flex-col items-center">

                                    <div class="holographic-container">
                                        <div class="holographic-card">
                                            <div className="relative flex justify-center">

                                                <Image className="relative" src={item.src} alt={item.text} />

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
