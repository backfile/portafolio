import { MyComponent } from "./Componente"
import { TikTokIcon, GitHubIcon, LinkedinIcon } from "./Icons"
import { FaAngleDoubleDown } from "react-icons/fa";



export function Hero(){
    return(
      <section className='flex flex-col justify-center min-h-screen'>
        <div className='flex-col flex'>
          <h1 className='text-6xl font-bold text-[#FDF0D5] mb-10'><span className='text-[16px] text-[#FCDA95]'>¡Hola! Mi nombre es,</span><br/>Franco Caraffa.</h1>
          <MyComponent/>
          <div className='flex gap-5 mt-7'>
            <TikTokIcon/>
            <GitHubIcon/>
            <LinkedinIcon/>
            <button className='bg-[#FDF0D5] p-2 rounded w-[150px] ml-5'>Descargar CV</button>
          </div>
        </div>
        <div className="absolute bottom-24 left-[49.2%] animate-bounce">
          <FaAngleDoubleDown color="#FDF0D5"  size={35}/>
        </div>
      </section>
    )
}