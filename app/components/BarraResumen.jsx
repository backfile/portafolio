"use client"

import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

export function BarraResumen(){
  useEffect(()=>{
    console.log("AOS")
    AOS.init()
  },[])

    return(
      <section className='rounded-2xl p-4  w-[100%] shadow-2xl border-2 border-[#293e4b] max-[600px]:hidden' data-aos="fade-right">
        <div className='flex text-[#FDF0D5] justify-between text-center'>
          <div className='text-3xl font-black w-[20%] max-[600px]:text-xl'>+10<br/><span className='text-xl font-normal max-[600px]:text-xs'>Proyectos</span></div>
          <div className='text-3xl font-black w-[20%] max-[600px]:text-xl'>+2<br/><span className='text-xl font-normal max-[600px]:text-xs'>Años de Exp.</span></div>
          <div className='text-3xl font-black w-[20%] max-[600px]:text-xl'>+10<br/><span className='text-xl font-normal max-[600px]:text-xs'>Clientes</span></div>
        </div>
      </section>
    )
}