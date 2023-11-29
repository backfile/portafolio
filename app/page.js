import Image from 'next/image'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BarraResumen } from './components/BarraResumen'
import { AcercaMi } from './components/AcercaMi'
import { Tecnologias } from './components/Tecnologias'
import { MyComponent } from './components/Componente'


export default function Home() {
  return (
  <>
    <Header/>
    <main className='max-w-[80%] m-auto'>
      <Hero/>
      <BarraResumen/>
      <Tecnologias/>
      <section>Proyectos</section>
      <section>Contactame</section>
      <footer>Made by Franco Caraffa</footer>
    </main>
  </>
  )
}
