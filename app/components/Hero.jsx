import { TypingTitle } from "./TypingTitle"
import { TikTokIcon, GitHubIcon, LinkedinIcon } from "./Icons"
import { FaAngleDoubleDown } from "react-icons/fa";



export function Hero(){
    return(
      <section id="inicio" className='flex flex-col justify-center min-h-screen mb-10'>
        <div className='flex-col flex'>
          <h1 className='text-6xl font-bold text-[#FDF0D5] mb-7 max-[600px]:text-4xl max-[600px]:text-center max-[600px]:mb-36'><span className='text-[16px] text-[#FCDA95] max-[600px]:text-2xl max-[600px]:font-bold'>Hola, mi nombre es</span><br/>Franco Caraffa.</h1>
          <TypingTitle/>
          <div className='flex  mt-7 max-[600px]:justify-center '>
            <div className="flex gap-3">
              <a target="_blank" href="https://www.tiktok.com/@francoderr?lang=es">
                <TikTokIcon/> 
              </a>
              <a target="_blank" href="https://github.com/backfile">
                <GitHubIcon/>
              </a>
              <a href="https://ar.linkedin.com/in/francocaraffa" target="_blank">
                <LinkedinIcon/>
              </a>
            </div>
            <button className='bg-[#FDF0D5] p-2 rounded w-[150px] ml-5 hover:bg-slate-700 hover:text-white transition-all'>Descargar CV</button>
          </div>
        </div>
        <div className="absolute bottom-24 left-[49.2%] animate-bounce max-[600px]:left-[46.5%]">
          <FaAngleDoubleDown color="#FDF0D5"  size={35}/>
        </div>
      </section>
    )
}