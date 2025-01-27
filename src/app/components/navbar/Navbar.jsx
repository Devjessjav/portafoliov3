import React from 'react'
// Styles
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar_bg}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portafolio</span>
                </a>
             
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className={`flex ${styles.container_links}`}>
                        <li>
                            <a href="#" className={styles.links_style} aria-current="page">Acerca de mi</a>
                        </li>
                        <li>
                            <a href="#" className={styles.links_style}>Habilidades</a>
                        </li>
                        <li>
                            <a href="#" className={styles.links_style}>Experiencia</a>
                        </li>
                        <li>
                            <a href="#" className={styles.links_style}>Proyectos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
