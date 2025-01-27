'use client'
import { useState, useEffect } from 'react';

// Components
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Proyects from './components/proyectos/Proyects'
// Styles
import styles from './styles/Navbar.module.css'

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [classAct, setClassAct] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollskills = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    setClassAct('2')
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScrollabout = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    setClassAct('1')
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScrollexperience = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    setClassAct('3')
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScrollproyects = (e) => {
    e.preventDefault(); // Evita la recarga de la página
    setClassAct('4')
    const element = document.getElementById('proyects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <nav className={`${isSticky ? 'sticky' : ''} ${styles.navbar_bg}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portafolio</span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className={`flex ${styles.container_links}`}>
              <li>
                <a href="#about" onClick={handleScrollabout} className={`${styles.links_style} ${classAct === '1' ? 'active_link' : ''}`} aria-current="page">Acerca de mi</a>
              </li>
              <li>
                <a href="#skills" onClick={handleScrollskills} className={`${styles.links_style} ${classAct === '2' ? 'active_link' : ''}`}>Habilidades</a>
              </li>
              <li>
                <a href="#experience" onClick={handleScrollexperience} className={`${styles.links_style} ${classAct === '3' ? 'active_link' : ''}`}>Experiencia</a>
              </li>
              <li>
                <a href="#proyects" onClick={handleScrollproyects} className={`${styles.links_style} ${classAct === '4' ? 'active_link' : ''}`}>Proyectos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="proyects">
        <Proyects />
      </section>
    </>
  );
}
