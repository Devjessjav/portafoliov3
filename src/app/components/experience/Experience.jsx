import React from 'react'
// Image
import Image from 'next/image';
// Style
import styles from '../../styles/Experience.module.css'
// Foonts
import { Poppins } from "next/font/google";
// icons
import Dev from '../../_images/icons/dev2.gif'

const poppins = Poppins({ weight: '400', subsets: ['latin'] });


export default function Experience() {


    const experienceList = [
        {
            title: 'Hispano Soluciones C.A',
            fecha: '15/01/2020 -       27/6/2020',
            rol: '< FrontEnd Developer />',
            description: 'Desarrollador de Interfaz'
        },
        {
            title: 'Juicetic',
            fecha: '02/9/2020 -       18/01/2021',
            rol: '< FrontEnd Developer />',
            description: 'Desarrollador de Interfaz'
        },
        {
            title: 'ADG Force',
            fecha: '22/03/2023 -       15/9/2023',
            rol: '< FrontEnd Developer />',
            description: 'Desarrollador de Interfaz y colaborador en diseño UX'
        },
        {
            title: 'Sev7n',
            fecha: '13/09/2024 -       28/12/2024',
            rol: '< FrontEnd Developer />',
            description: 'Desarrollador de Interfaz y colaborador en diseño UX'
        },
    ]

    return (
        <div className="p-5">
            <div className={`p-5 ${styles.container_section}`}>
                <h2 className={`title_sections ${poppins.className}`}>
                    Experiencia laboral
                </h2>


                <ul className="m_tp_6">
                    {
                        experienceList.map((item, index) => (
                            <li class="pb-3 sm:pb-4 mb-4" key={index}>
                                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div class="shrink-0">
                                        <Image className={styles.border_img_list} src={Dev} alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p className={styles.title_experience}>
                                            {item.title}
                                        </p>
                                        <p className={styles.subtitle_experience}>
                                            {item.rol}
                                        </p>
                                        <p className={styles.subtitle_experience}>
                                            - {item.description}
                                        </p>
                                    </div>
                                    <div className={`inline-flex items-center ${styles.title_experience}`}>
                                        {item.fecha}
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
