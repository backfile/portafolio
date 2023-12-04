import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BarraResumen } from './components/BarraResumen'
import { Habilidades } from './components/Habilidades'
import { Cards, Proyectos } from './components/Cards'




export default function Home() {

  return (
  <>
    <Header/>
    <main className='max-w-[65%] m-auto'>
      <Hero/>
      <BarraResumen/>
      <Proyectos>
        <Cards url={"https://carrito-compras-sooty.vercel.app/"} img={"/Store.jpg"}></Cards>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"}></Cards>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"}></Cards>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"}></Cards>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"}></Cards>
        <Cards img={"https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp"}></Cards>
      </Proyectos>
      <Habilidades/>
      <section>Contactame</section>
      <footer>Made by Franco Caraffa</footer>
    </main>
  </>
  )
}
