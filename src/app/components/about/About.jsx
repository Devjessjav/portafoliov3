import React from 'react'
// Image
import Image from 'next/image'
// Styles
import styles from '../../styles/About.module.css'
// Images
import Avatar from '../../../../public/_images/avatar/avatar2.png'

export default function About() {
    return (
        <div className="mt-4 p-5">
            <div className={`${styles.container_section}`}>
                <div className="max-w-screen-xl  mx-auto p-4">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-4 flex justify-center items-center" style={{ position: 'relative' }}>
                            <Image className={styles.avatar_style} src={Avatar} alt='avatar' />
                            <div className={styles.container_nombre}>
                                Jesús Javier Ruiz Ruiz
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-8 flex justify-center items-center">
                            <form className={styles.container_styles}>
                                <div className="grid grid-cols-12 gap-4">

                                    <div className="col-span-6">
                                        <div className={`mb-5 ${styles.padding_forms}`}>
                                            <label className={styles.text_labels}>Edad</label>
                                            <br></br>
                                            <span className={styles.data_text}>30</span>
                                        </div>
                                    </div>

                                    <div className="col-span-6">
                                        <div className={`mb-5 ${styles.padding_forms}`}>
                                            <label className={styles.text_labels}>País</label>
                                            <br></br>

                                            <span className={styles.data_text}>Venezuela</span>
                                        </div>
                                    </div>

                                    <div className="col-span-12 md:col-span-6">
                                        <div className={`mb-5 ${styles.padding_forms}`}>
                                            <label className={styles.text_labels}>Correo</label>
                                            <br></br>

                                            <span className={styles.data_text}>Javier.ruiz2506@gmail.com</span>
                                        </div>
                                    </div>

                                    <div className="col-span-12 md:col-span-6">
                                        <div className={`mb-5 ${styles.padding_forms}`}>
                                            <label className={styles.text_labels}>Telefono</label>
                                            <br></br>

                                            <a href="#" className={styles.data_text}>+(58) 426-212-4233</a>
                                        </div>
                                    </div>

                                    <div className="col-span-6">
                                        <div className={`mb-5 ${styles.padding_forms}`}>
                                            <label className={styles.text_labels}>Estado</label>
                                            <br></br>

                                            <span className={styles.data_text}>Portuguesa</span>
                                        </div>
                                    </div>




                                    <div className="col-span-6">
                                        <div className={`mb-5 ${styles.padding_forms}`}>
                                            <label className={styles.text_labels}>Ciudad</label>
                                            <br></br>

                                            <span className={styles.data_text}>Guanare</span>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
