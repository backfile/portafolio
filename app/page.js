import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BarraResumen } from './components/BarraResumen'
import { Habilidades } from './components/Habilidades'
import { Cards, Proyectos } from './components/Cards'
import { Footer } from './components/Footer'



export default function Home() {

  return (
  <>
    <Header/>
    <main className='max-w-[65%] m-auto max-[600px]:max-w-[90%]'>
      <Hero/>
      <BarraResumen/>
      <Proyectos>
        <Cards url={"https://ta-te-ti-henna-three.vercel.app/"} img={"/ta-te-ti.png"} titulo={"Ta Te Ti"} desc={"Juego interactivo realizado con React, utilizando muchas de sus funcionalidades."} github={"https://github.com/backfile/ta-te-ti-react"}/>
        <Cards img={"/conejo.png"} url={"https://juego-interactivo.vercel.app/"} titulo={"Aplasta conejos"} desc={"Juego interactivo, diseñado con HTML, CSS y JavaScript vanilla para potenciar los conocimientos."} github={"https://github.com/backfile/juego-interactivo"}/>
        <Cards img={"/todoo.png"} url={"https://todo-machine-v2.vercel.app/"} titulo={"To Do Machine"} desc={"Permite organizar tareas, marcarlas como logradas o eliminarlas. Realizado con React y utilizando el Local Storage."} github={"https://github.com/backfile/todo-machine-react-v2"}/>
        <Cards img={"/portafolioo.png"} titulo={"Portafolio Web"} desc={"Portafolio Web realizado con NextJs y TailwindCSS."} url={"#inicio"} github={"https://github.com/backfile/portafolio"}/>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"} titulo={"Proximamente..."}/>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"} titulo={"Proximamente..."}/>
      </Proyectos>
      <Habilidades/>
    </main>
    <Footer></Footer>
  </>
  )
}
