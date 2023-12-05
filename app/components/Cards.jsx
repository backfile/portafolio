"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import { GitHubIconDark } from './Icons';
import { FaExternalLinkAlt } from "react-icons/fa";


export function Proyectos({children}){
    useEffect(()=>{
        console.log("AOS")
        AOS.init()
      },[])

    return(
    <div data-aos="zoom-in">
        <h1 className='font-black text-5xl text-[#669BBC] mt-32 mb-10'>PROYECTOS</h1>
        <div className='grid grid-cols-3 justify-items-center gap-5'>
          {children}
        </div>
    </div>
    )
}

export function Cards({img, url, titulo, desc, github}) {
  return (
    <div className='w-[100%] border-2 border-[#293e4b] shadow-2xl rounded-2xl overflow-hidden bg-[#669BBC] flex flex-col h-[500px] transition-all hover:scale-105'>
        <img className='rounded h-[50%] object-cover shadow-xl' src={img} alt="" />
        <div className='p-3 flex flex-col justify-between h-[100%]'>
            <h1 className='text-[18px] font-bold'>{titulo}</h1>
            <p>{desc}</p>
            <div className='flex gap-2 cursor-pointer items-center'>
              <a target='_blank' className='text-white no-underline' href={url}>
                <div className='hover:scale-105 transition-all'>
                  <FaExternalLinkAlt size={30} color='#333'/>
                </div>
                </a>
              <a href={github} target='_blank'>
                <GitHubIconDark/>
              </a>
            </div>
        </div>
    </div>
  );
}

