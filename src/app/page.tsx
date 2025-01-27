import Image from "next/image";
// Components
import Navbar from '../app/components/navbar/Navbar'
import About from '../app/components/about/About'
import Skills from '../app/components/skills/Skills'
import Experience from '../app/components/experience/Experience'

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
