import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BarraResumen } from './components/BarraResumen'
import { Habilidades } from './components/Habilidades'
import { Cards, Proyectos } from './components/Cards'




export default function Home() {

  return (
  <>
    <Header id="inicio"/>
    <main className='max-w-[65%] m-auto'>
      <Hero/>
      <BarraResumen/>
      <Proyectos>
        <Cards url={"https://ta-te-ti-henna-three.vercel.app/"} img={"/ta-te-ti.png"} titulo={"Ta Te Ti"} desc={"Juego interactivo realizado con React."}/>
        <Cards img={"/conejo.png"} url={"https://juego-interactivo.vercel.app/"} titulo={"Aplasta conejos"} desc={"Juego interactivo realizado con HTML, CSS y JavaScript vanilla."}/>
        <Cards img={"/todoo.png"} url={"https://todo-machine-v2.vercel.app/"} titulo={"To Do Machine"} desc={"To Do Machine que te permite organizar tus tareas, marcarlas como realizadas o eliminarlas. Realizado con React y Local Storage."}/>
        <Cards img={"/portafolioo.png"} titulo={"Portafolio Web"} desc={"Potafolio Web realizado con NextJs y TailwindCSS."} url={"#inicio"}/>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"} titulo={"Proximamente..."}/>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"} titulo={"Proximamente..."}/>
      </Proyectos>
      <Habilidades/>
      <section>Contactame</section>
      <footer>Made by Franco Caraffa</footer>
    </main>
  </>
  )
}
