'use client'
import { React, useState, useEffect } from 'react'
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Img
import Image from 'next/image';
// Foonts
import { Poppins } from "next/font/google";
// styles
import styles from '../../styles/Proyects.module.css'
// Images
import Esade from '../../../../public/_images/proyects/esade1.png'
import Esade2 from '../../../../public/_images/proyects/esade2.png'
import Esade3 from '../../../../public/_images/proyects/esade3.png'
import Esade4 from '../../../../public/_images/proyects/esade4.png'
import Seven from '../../../../public/_images/proyects/seven1.png'
import Seven2 from '../../../../public/_images/proyects/seven2.png'
import Seven3 from '../../../../public/_images/proyects/seven3.png'
import Seven4 from '../../../../public/_images/proyects/seven4.png'
import Seven5 from '../../../../public/_images/proyects/seven5.png'
import Seven6 from '../../../../public/_images/proyects/seven6.png'
import Seven7 from '../../../../public/_images/proyects/seven7.png'
import Fxshark from '../../../../public/_images/proyects/shark1.png'
import Fxshark2 from '../../../../public/_images/proyects/shark2.png'
import Fxshark3 from '../../../../public/_images/proyects/shark3.png'
import Fxshark4 from '../../../../public/_images/proyects/shark4.png'
import Fxshark5 from '../../../../public/_images/proyects/shark5.png'
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

const poppins = Poppins({ weight: '400', subsets: ['latin'] });




export default function Proyects() {
    const [openModal, setModal] = useState(false);
    const [handleClass, setHandleClass] = useState(false)

    const [currentSlide, setCurrentSlide] = useState(0);

    const [images, setImages] = useState([])


    const handleModal = () => {
        setModal(!openModal)
    }

    const proyects = [
        {
            src: Seven,
            url: 'https://sevenplatforms.com.co/login',
            title: 'Seven',
            imagesv: [
                {
                    src: Seven
                },

                {
                    src: Seven3
                },
                {
                    src: Seven4
                },
                {
                    src: Seven6
                },
                {
                    src: Seven7
                }
            ],
            Descrip: 'Sistema creado para la gestión de miembros de cultos e iglesias, con tiene sistema de agenda , gestión de usuarios y graficas de asistencia.',
            skills: [
                {
                    src: Html,
                    text: '< HTML />'
                },
                {
                    src: Js,
                    text: '< JavaScript />'
                },
                {
                    src: Css,
                    text: '< Css />'
                },
                {
                    src: Tailwindsvg,
                    text: '< Tailwind/>'
                },
            ]
        },
        {
            src: Esade,
            url: 'https://certi-signer.herokuapp.com/',
            title: 'Esade',
            imagesv: [
                {
                    src: Esade
                },
                {
                    src: Esade2
                },
                {
                    src: Esade3
                },
                {
                    src: Esade4
                },
            ],
            Descrip: 'Sistema diseñado para la universidad Esade, gestión de usuarios, alojamiento de archivos, registro de actividades.',
            skills: [
                {
                    src: Reactjs,
                    text: '< ReactJs />'
                },
                {
                    src: Js,
                    text: '< JavaScript />'
                },
                {
                    src: Tailwindsvg,
                    text: '< Tailwind/>'
                },
            ]
        },
        {
            src: Fxshark,
            url: 'https://trading-fxshark.com/',
            title: 'FxShark',
            imagesv: [
                {
                    src: Fxshark
                },
                {
                    src: Fxshark2
                },
                {
                    src: Fxshark3
                },
                {
                    src: Fxshark4
                },
                {
                    src: Fxshark5
                },
            ],
            Descrip: 'Sistema diseñado para registrar operaciones de Trading, gestión de usuarios, registro de journals con calendario, dashboard administrativo.',
            skills: [
                {
                    src: Reactjs,
                    text: '< ReactJs />'
                },
                {
                    src: Js,
                    text: '< JavaScript />'
                },
                {
                    src: Tailwindsvg,
                    text: '< Tailwind/>'
                },
            ]
        }
    ]


    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };



    return (
        <div className="p-5">
            <div className={`p-5 ${styles.container_section}`}>
                <h2 className={`title_sections ${poppins.className}`}>
                    Proyectos
                </h2>
                <span className={`${styles.subtitle_text}`}>Proyectos en los que he trabajado.</span>

                <div className="grid grid-cols-12 gap-4 m_tp_6">
                    {
                        proyects.map((item, index) => (
                            <div className="col-span-12 md:col-span-3 flex justify-center items-center" key={index}>

                                <div className=" container flex justify-center items-center">

                                    <div className="card"
                                        onClick={() => { handleModal(), setImages(item.imagesv) }}
                                    >

                                        <div className="slide slide1">

                                            <div className="content">

                                                <div className="icon">

                                                    <Image src={item.src} alt={item.title} />

                                                </div>

                                            </div>

                                        </div>

                                        <div className="slide slide2">

                                            <div className="content">

                                                <h3 className={styles.title_proyect}>
                                                    {item.title}
                                                </h3>

                                                <div className="text-center">
                                                    <a href={item.url} className={styles.url_proyect} target="_blank">{item.url}</a>
                                                </div>

                                                <p className={styles.subtitle_proyect}>{item.Descrip}</p>
                                                <div className="grid grid-cols-12 flex justify-center gap-4  m_tp_6 mb-4 " style={{ display: 'flex' }}>
                                                    {

                                                        item.skills.map((item, index) => (
                                                            <div className="col-span-2 mb-3 flex justify-center gap-4" key={index}>
                                                                <div className="flex flex-col items-center">
                                                                    <div className="relative flex justify-center">

                                                                        <Image className="relative proyects_size" src={item.src} alt={item.text} />

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        ))


                                                    }
                                                </div>
                                            </div>


                                        </div>



                                    </div>



                                </div>
                            </div>
                        ))
                    }

                </div>


                {openModal &&
                    <div
                        className={`fixed top-0 left-0 w-full h-full  flex justify-center items-center modal_bg ${handleClass === true ? 'index_sup' : 'index_sup'}`}
                    >
                        <button className="closed_icon_modal" onClick={handleModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-xbox-x icon_size"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" /><path d="M9 8l6 8" /><path d="M15 8l-6 8" /></svg>
                        </button>
                        <div className="relative w-full p_responsive">
                            <AiOutlineLeft
                                onClick={handlePrevSlide}
                                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
                                aria-label="Previous slide"
                            />
                            <Swipe
                                onSwipeLeft={handleNextSlide}
                                onSwipeRight={handlePrevSlide}
                                className="w-full h-[50vh] flex overflow-hidden relative m-auto"
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        {index === currentSlide && (
                                            <Image
                                                src={image.src}
                                                alt="modal_image"
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        )}
                                    </div>
                                ))}
                            </Swipe>
                            <AiOutlineRight
                                onClick={handleNextSlide}
                                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
                                aria-label="Next slide"
                            />
                            <div className="flex justify-center p-2 gap-2">
                                {images.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-4 w-4 rounded-full cursor-pointer ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                }


            </div>


        </div>
    )
}
