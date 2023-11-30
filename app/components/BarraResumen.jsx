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
      <section className='rounded-2xl p-8 m-auto w-[100%] shadow-2xl border-2 border-[#293e4b]' data-aos="fade-right">
        <ul className='flex text-[#FDF0D5] justify-between text-center'>
          <li className='text-3xl font-black w-[20%]'>+10<br/><span className='text-xl font-normal'>Proyectos</span></li>
          <li className='text-3xl font-black w-[20%]'>+2<br/><span className='text-xl font-normal'>Años de experiencia</span></li>
          <li className='text-3xl font-black w-[20%]'>+5<br/><span className='text-xl font-normal'>Clientes</span></li>
        </ul>
      </section>
    )
}