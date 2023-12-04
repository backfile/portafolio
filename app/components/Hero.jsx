import { TypingTitle } from "./TypingTitle"
import { TikTokIcon, GitHubIcon, LinkedinIcon } from "./Icons"
import { FaAngleDoubleDown } from "react-icons/fa";



export function Hero(){
    return(
      <section className='flex flex-col justify-center min-h-screen mb-20'>
        <div className='flex-col flex'>
          <h1 className='text-6xl font-bold text-[#FDF0D5] mb-10'><span className='text-[16px] text-[#FCDA95]'>¡Hola! Mi nombre es,</span><br/>Franco Caraffa.</h1>
          <TypingTitle/>
          <div className='flex gap-4 mt-7'>
            <a target="_blank" href="https://www.tiktok.com/@francoderr?lang=es">
              <TikTokIcon/> 
            </a>
            <a target="_blank" href="https://github.com/backfile">
              <GitHubIcon/>
            </a>
            <a href="https://ar.linkedin.com/in/francocaraffa" target="_blank">
              <LinkedinIcon/>
            </a>
            <button className='bg-[#FDF0D5] p-2 rounded w-[150px] ml-5 hover:bg-slate-700 hover:text-white transition-all'>Descargar CV</button>
          </div>
        </div>
        <div className="absolute bottom-24 left-[49.2%] animate-bounce">
          <FaAngleDoubleDown color="#FDF0D5"  size={35}/>
        </div>
      </section>
    )
}