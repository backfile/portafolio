export function Header(){
    return(
      <header className='z-10 shadow-xl bg-[#e0582ca] bg-[#003049] fixed top-0 w-[100%] '>
        <ul className='flex items-center justify-between gap-10 p-6 text-[#FDF0D5] h-[100%]'>
          <li>Franco Caraffa</li>
          <div className="flex gap-3">
            <li>Inicio</li>
            <li>Proyectos</li>
            <li>Habilidades</li>
          </div>
          <li>Contactame!</li>
        </ul>
      </header>
    )
}