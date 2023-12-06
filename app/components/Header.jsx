"use client"
import { useState } from "react";
import { FaCodeBranch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";

export function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
      <header className='z-10 shadow-xl bg-[#e0582ca] bg-[#003049] fixed top-0 w-[100%] '>
        <ul className='flex items-center justify-between gap-14 p-6 pl-0 pr-0 text-[#FDF0D5] h-[100%] max-w-[65%] m-auto max-[600px]:max-w-[90%]'>
          <div className="flex items-center gap-2" >
            <FaCodeBranch/>
            <li className="cursor-pointer max-[600px]:">Franco</li>
          </div>
          <div className={`transition-all flex gap-10 max-[600px]:${isOpen ? "open" : "hidden"} max-[600px]:h-screen max-[600px]:absolute max-[600px]:bg-[rgba(17,25,40,.75)] max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:right-0 max-[600px]:left-0 max-[600px]:top-20 max-[600px]:text-2xl max-[600px]:font-bold`}>
            <li onClick={()=> setIsOpen(false)}><a href="#proyectos" className="no-underline  text-white">Proyectos</a></li>
            <li onClick={()=> setIsOpen(false)}><a href="#inicio" className="no-underline text-white">Inicio</a></li>
            <li onClick={()=> setIsOpen(false)}><a href="#habilidades" className="no-underline text-white">Habilidades</a></li>
          </div>
          <div className="md:hidden">
              {isOpen ? <TbMenuDeep size={50} onClick={()=> setIsOpen(!isOpen)}/> : <IoMdMenu size={50} onClick={()=> setIsOpen(!isOpen)}/>}
          </div>
        </ul>
      </header>
    )
}