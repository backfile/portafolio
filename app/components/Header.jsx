import { FaCodeBranch } from "react-icons/fa";

export function Header(){
    return(
      <header className='z-10 shadow-xl bg-[#e0582ca] bg-[#003049] fixed top-0 w-[100%] '>
        <ul className='flex items-center justify-between gap-14 p-6 pl-0 pr-0 text-[#FDF0D5] h-[100%] max-w-[65%] m-auto'>
          <div className="flex items-center gap-2">
            <li>Franco Caraffa</li>
            <FaCodeBranch/>
          </div>
          <div className="flex gap-10">
            <li>Proyectos</li>
            <li>Inicio</li>
            <li>Habilidades</li>
          </div>
        </ul>
      </header>
    )
}