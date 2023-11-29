export function BarraResumen(){
    return(
      <section className='border-[#FDF0D5] border rounded  p-8 m-auto w-[100%] shadow-2xl'>
        <ul className='flex text-[#FDF0D5] justify-between text-center'>
          <li className='text-3xl font-black w-[20%]'>+10<br/><span className='text-xl font-normal'>Proyectos</span></li>
          <li className='text-3xl font-black w-[20%]'>+2<br/><span className='text-xl font-normal'>Años de experiencia</span></li>
          <li className='text-3xl font-black w-[20%]'>+5<br/><span className='text-xl font-normal'>Clientes</span></li>
        </ul>
      </section>
    )
}