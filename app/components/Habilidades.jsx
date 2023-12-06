"use client"

import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import { BootstrapIcon, CssIcon, HtmlIcon, JsIcon, NextIcon, NodeIcon, PyIcon, ReactIcon, TailwindIcon } from "./Icons"

export function Habilidades(){
    useEffect(()=>{
      console.log("AOS")
      AOS.init()
    },[])

    return(
      <section data-aos="zoom-in" className="flex flex-col text-center items-center mt-7 max-[600px]:mt-2" id="habilidades">
        <h2 className='font-black text-5xl text-[#669BBC] mt-32 mb-10 max-[600px]:text-3xl'>HABILIDADES</h2>
        <div className='grid grid-cols-3 items-center gap-10 p-8 border-2 border-[#293e4b] shadow-2xl rounded max-[600px]:gap-5 max-[600px]:p-4'>
          <HtmlIcon/>
          <CssIcon/>
          <ReactIcon/>
          <BootstrapIcon/>
          <JsIcon/>
          <TailwindIcon/>
          <NextIcon/>
          <NodeIcon/>
          <PyIcon/>
        </div>
      </section>
    )
}