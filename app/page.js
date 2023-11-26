import Image from 'next/image'
import foto from "./foto-perfil.jpg"

export default function Home() {
  return (
  <>
    <header className='shadow-md'>
      <ul className='flex justify-end gap-10 p-10 text-[#FDF0D5]'>
        <li>Inicio</li>
        <li>Sobre Mi</li>
        <li>Contacto</li>
      </ul>
    </header>
    <main>
      <section className='mt-20 flex justify-center '>
        <div className='flex-col flex'>
          <h1 className='text-6xl font-bold text-[#FDF0D5] mb-10'><span className='text-[16px] text-[#FCDA95]'>¡Hola! Mi nombre es,</span><br/>Franco Caraffa.</h1>
          <h2 className='font-black text-7xl text-[#669BBC] underline'>Frontend developer</h2>
          <div className='flex gap-5 mt-7'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 76 76">
              <path fill="#FDF0D5" fill-rule="evenodd" d="M38 0c20.987 0 38 17.442 38 38.961 0 17.21-10.876 31.81-25.965 36.967-1.927.383-2.611-.833-2.611-1.87 0-1.285.046-5.48.046-10.694 0-3.04 2.257-7.858 5.062-9.029 5.44-2.27 9.712-7.035 9.712-17.407 0-1.947-.308-3.73-.876-5.352-1.21-3.457-2.316-5.703-2.27-9.366.036-2.89-2.891-6.378-5.594-5.354-.333.126-.685.271-1.057.439-3.293 1.477-6.931 2.17-10.518 1.772A37.188 37.188 0 0 0 38 18.84a37.5 37.5 0 0 0-3.923.226c-3.586.399-7.224-.293-10.517-1.77-.37-.165-.72-.31-1.05-.435-2.716-1.03-5.652 2.471-5.609 5.374.054 3.652-1.047 5.878-2.262 9.321-.573 1.628-.887 3.417-.887 5.372 0 12.196 5.925 16.66 12.696 18.422 1.764.46 2.94 2.874 2.48 4.637-.184.7-.669 1.6-1.352 1.837-2.535.88-6.933 1.446-9.856-3.451-.084-.142-.163-.288-.25-.428-.462-.746-2.204-3.242-5.122-3.736a3.981 3.981 0 0 0-1.16-.033c-.668.084-1.587.358-.905 1.253.66.866 1.74 1.31 2.52 2.071.825.804 1.904 2.176 2.804 4.398.082.204.154.413.243.613.39.883 1.813 3.44 5.493 4.405 3.607.947 7.24 3.412 7.24 7.141 0 1.03-.699 2.235-2.595 1.874C10.887 70.782 0 56.175 0 38.961 0 17.441 17.016 0 38 0Z" clip-rule="evenodd"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 76 76">
              <path fill="#FDF0D5" d="M39.916.063C44.69 0 49.43.033 54.166 0c.158 5.148 2.561 9.78 6.385 13.212l-.006-.005c4.115 3.222 9.47 5.31 15.373 5.665l.082.005v12.764c-5.576-.122-10.82-1.24-15.548-3.16l.239.085a46.966 46.966 0 0 1-6.058-3.03l.152.085c-.035 9.249.035 18.497-.073 27.713-.3 4.696-2.097 8.98-4.979 12.556l.059-.079c-4.819 5.997-12.623 9.933-21.499 10.166h-.04c-.36.015-.782.023-1.208.023-5.046 0-9.762-1.222-13.78-3.343l.116.058C6.066 68.891 1.02 62.347.087 54.735l-.012-.103c-.073-1.585-.108-3.169-.035-4.72C1.47 37.8 13.147 28.43 27.343 28.43c1.595 0 3.158.119 4.678.344l-.164-.02c.073 4.686-.145 9.375-.145 14.062a13.962 13.962 0 0 0-4.142-.614c-5.448 0-10.083 3.026-11.798 7.252l-.026.075a10.818 10.818 0 0 0-.612 3.615c0 .522.037 1.039.107 1.546l-.005-.061c.968 5.186 6.084 9.099 12.252 9.099.178 0 .353-.003.528-.01h-.026c4.267-.112 7.971-2.106 10.065-5.054l.03-.046a6.73 6.73 0 0 0 1.49-3.323l.003-.035c.364-5.67.218-11.306.253-16.976.035-12.764-.035-25.497.073-38.228l.012.007Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 76 76">
              <path fill="#FDF0D5" fill-rule="evenodd" d="M17.253 76V24.72H.963V76h16.29ZM9.11 17.722c5.679 0 9.216-3.941 9.216-8.862C18.22 3.83 14.79 0 9.216 0 3.643 0 0 3.83 0 8.86c0 4.92 3.536 8.862 9.003 8.862h.107ZM26.269 76s.214-46.468 0-51.28h16.293v7.437h-.109c2.143-3.5 6.002-8.64 14.79-8.64C67.964 23.516 76 30.845 76 46.596V76H59.71V48.567c0-6.893-2.357-11.597-8.254-11.597-4.5 0-7.181 3.171-8.359 6.236-.43 1.091-.535 2.624-.535 4.157V76H26.269Z" clip-rule="evenodd"/>
            </svg>
            <button className='bg-[#FDF0D5] p-2 rounded w-[150px] ml-5'>Descargar CV</button>
          </div>
        </div>
        
      </section>
      <div className=' mt-32 h-[1000px]'>
        <div className='max-w-[1300px] m-auto p-10'>
          <section className='shadow-2xl'>
            <h2 className='font-bold text-4xl text-[#FCDA95] mb-2'>&lt;Acerca de mi/&gt;</h2>
            <p className='text-[#FDF0D5] p-7 text-[18px]'>¡Hola! Soy un apasionado desarrollador frontend con una dedicación inquebrantable hacia la creación de experiencias web cautivadoras y funcionales. Mi viaje en el mundo del desarrollo web comenzó con la emoción de convertir ideas creativas en realidades digitales, y desde entonces, he estado inmerso en el emocionante universo del frontend.</p>
          </section>
          <section>
            <h2 className='font-bold text-4xl text-[#FCDA95] mt-32'>Tecnologias</h2>
          </section>
          <section>Proyectos</section>
          <section>Contactame</section>
          <footer>Made by Franco Caraffa</footer>
        </div>
      </div>
    </main>
  </>
  )
}
