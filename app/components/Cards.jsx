"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import { GitHubIconDark } from './Icons';


export function Proyectos({children}){
    useEffect(()=>{
        console.log("AOS")
        AOS.init()
      },[])

    return(
    <div data-aos="zoom-in">
        <h1 className='font-black text-5xl text-[#669BBC] mt-32 mb-10 underline'>Proyectos</h1>
        <div className='grid grid-cols-3 justify-items-center gap-3'>
          {children}
        </div>
    </div>
    )
}

export function Cards({img, url, titulo, desc}) {
  return (
    <div className='w-[100%] border-2 border-[#293e4b] shadow-2xl rounded-2xl overflow-hidden bg-[#669BBC] flex flex-col h-[400px] transition-all hover:scale-105'>
        <img className='rounded h-[50%] object-cover' src={img} alt="" />
        <div className='p-3 flex flex-col justify-between h-[100%]'>
            <h1 className='text-[18px] font-bold'>{titulo}</h1>
            <p>{desc}</p>
            <div className='flex gap-2 cursor-pointer'>
              <Button className='primary text-white w-[20%]'><a target='_blank' className='text-white no-underline' href={url}>Visitar</a></Button>
              <GitHubIconDark className="hover:scale-105" />
            </div>
        </div>
    </div>
  );
}

