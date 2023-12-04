"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function Proyectos({children}){
    return(
    <div>
        <h1 className='font-black text-5xl text-[#669BBC] mt-32 mb-10 underline'>Proyectos</h1>
        <div className='grid grid-cols-3 justify-items-center gap-3'>
          {children}
        </div>
    </div>
    )
}

export function Cards({img, url}) {
  return (
    <div className='border w-[100%]'>
        <img src="/Store.jpg" alt="" />
        <h1>Hola</h1>
        <p>assdsds</p>
        <button>Button</button>
    </div>
  );
}

