import Image from 'next/image'
import foto from "./foto-perfil.jpg"

export default function Home() {
  return (
  <>
    <header className='shadow-md'>
      <ul className='flex justify-end gap-10 p-6 text-[#FDF0D5]'>
        <li>Inicio</li>
        <li>Sobre Mi</li>
        <li>Contacto</li>
      </ul>
    </header>
    <main className='max-w-[80%] m-auto'>
      <section className='mt-32 flex justify-center '>
        <div className='flex-col flex'>
          <h1 className='text-6xl font-bold text-[#FDF0D5] mb-10'><span className='text-[16px] text-[#FCDA95]'>¡Hola! Mi nombre es,</span><br/>Franco Caraffa.</h1>
          <h2 className='font-black text-9xl text-[#669BBC] underline'>Frontend developer</h2>
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
      <section className='border-[#355d75] border rounded mt-48 p-7  m-auto w-[100%]'>
        <ul className='flex text-[#FDF0D5] justify-between text-center'>
          <li className='text-3xl font-black'>+2<br/><span className='text-xl font-normal'>Años de experiencia</span></li>
          <li className='text-3xl font-black'>+10<br/><span className='text-xl font-normal'>Proyectos</span></li>
          <li className='text-3xl font-black'>+5<br/><span className='text-xl font-normal'>Clientes</span></li>
        </ul>
      </section>
      <section className='mt-32'>
        <h2 className='font-bold text-4xl text-[#FCDA95] mb-2'>&lt;Acerca de mi/&gt;</h2>
        <p className='text-[#FDF0D5] p-7 text-[18px]'>¡Hola! Soy un apasionado desarrollador frontend con una dedicación inquebrantable hacia la creación de experiencias web cautivadoras y funcionales. Mi viaje en el mundo del desarrollo web comenzó con la emoción de convertir ideas creativas en realidades digitales, y desde entonces, he estado inmerso en el emocionante universo del frontend.</p>
      </section>
      <section>
        <h2 className='font-bold text-4xl text-[#FCDA95] mt-32 mb-2'>&lt;Tecnologias/&gt;</h2>
        <div className='flex items-center gap-3 p-7'>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 191 158">
              <path fill="#E44D26" d="M35.813 138.25 23.874 14.812h143.25L155.188 138.25 95.5 153.062 35.812 138.25Z"/>
              <path fill="#F16529" d="M155.188 24.688H95.5v120.968l47.75-12.344 11.938-108.625Z"/>
              <path fill="#fff" d="M56.703 86.406 50.734 39.5h92.516l-2.984 14.813H68.641l2.984 17.28h65.656l-5.969 46.907-35.812 9.875-35.813-9.875-2.984-24.688H74.61l2.985 12.344 17.906 4.938 17.906-4.938 2.985-19.75H56.703Z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 200 173">
            <path fill="#1572B6" d="M36.888 147.055 22.85 10.812h154.3l-14.056 136.222-63.188 15.154-63.019-15.133Z"/>
            <path fill="#33A9DC" d="m100 150.607 51.062-12.245 12.013-116.407H100v128.652Z"/>
            <path fill="#fff" d="M100 71.314h25.562l1.763-17.11H100V37.491h48.438l-.463 4.482-4.744 46.05H100v-16.71Z"/>
            <path fill="#EBEBEB" d="m100.119 114.71-.088.021-21.512-5.027-1.375-13.327H57.75l2.706 26.237 39.569 9.504.094-.022V114.71Z"/>
            <path fill="#fff" d="m123.919 87.316-2.325 22.377-21.544 5.028v17.386l39.6-9.493.294-2.822 3.356-32.476h-19.381Z"/>
            <path fill="#EBEBEB" d="M100.069 37.492v16.711H53.406l-.387-3.757-.881-8.472-.463-4.482h48.394ZM100 71.314v16.711H78.756l-.387-3.758-.875-8.471-.463-4.482H100Z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 137 125">
            <path fill="#F7DF1E" d="M0 0h137v125H0V0Z"/>
            <path fill="#000" d="m36.022 104.459 10.485-5.789c2.022 3.272 3.862 6.041 8.276 6.041 4.23 0 6.897-1.51 6.897-7.383v-39.94h12.875v40.106c0 12.166-7.817 17.704-19.22 17.704-10.3 0-16.278-4.867-19.313-10.74m45.525-1.258 10.483-5.538c2.76 4.112 6.346 7.133 12.692 7.133 5.334 0 8.736-2.434 8.736-5.79 0-4.028-3.495-5.454-9.38-7.803l-3.218-1.26c-9.289-3.607-15.45-8.138-15.45-17.703 0-8.81 7.356-15.524 18.852-15.524 8.185 0 14.07 2.602 18.3 9.398l-10.024 5.874c-2.207-3.608-4.597-5.034-8.276-5.034-3.77 0-6.161 2.181-6.161 5.034 0 3.524 2.391 4.95 7.908 7.133l3.218 1.258c10.944 4.28 17.106 8.642 17.106 18.46 0 10.572-9.104 16.361-21.335 16.361-11.955 0-19.68-5.202-23.45-11.999Z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 191 189">
            <path fill="#53C1DE" d="M111.49 94.358c0-8.472-7.159-15.341-15.99-15.341-8.83 0-15.99 6.869-15.99 15.34 0 8.474 7.16 15.342 15.99 15.342 8.831 0 15.99-6.868 15.99-15.341Z"/>
            <path fill="#53C1DE" fill-rule="evenodd" d="M147.431 65.876c3.376-13.164 7.62-37.576-7.342-45.853-14.893-8.24-34.273 7.55-44.506 17.028-10.204-9.384-30.128-25.106-45.078-16.804C35.62 28.515 40.21 52.523 43.661 65.77 29.774 69.554 5.969 77.705 5.969 94.358c0 16.605 23.78 25.473 37.585 29.253-3.464 13.321-7.825 36.985 7.08 45.235 15.006 8.301 34.868-7.047 45.197-16.629 10.299 9.534 29.492 24.983 44.388 16.71 14.942-8.299 11.051-32.384 7.599-45.708 13.382-3.789 37.213-12.463 37.213-28.861 0-16.493-23.933-24.71-37.6-28.482Zm-1.697 50.282c-2.266-6.883-5.325-14.203-9.067-21.764 3.572-7.383 6.512-14.608 8.715-21.447 10.02 2.788 32 9.157 32 21.41 0 12.369-21.093 18.799-31.648 21.801Zm-9.348 46.417c-11.114 6.172-27.623-8.601-35.229-15.622 5.046-5.295 10.089-11.451 15.01-18.286 8.657-.736 16.835-1.941 24.251-3.586 2.43 9.424 7.131 31.295-4.032 37.494Zm-81.93-.088c-11.114-6.149-6.034-27.266-3.485-37.078 7.334 1.557 15.453 2.677 24.13 3.352 4.954 6.688 10.142 12.836 15.37 18.22-6.46 5.996-24.848 21.684-36.014 15.506Zm-40.838-68.13c0-12.414 21.849-18.737 32.097-21.518 2.241 6.993 5.18 14.304 8.727 21.698-3.593 7.503-6.574 14.93-8.836 22.005-9.772-2.684-31.988-9.762-31.988-22.184ZM54.338 26.6c11.16-6.198 28.477 8.897 35.885 15.69-5.202 5.36-10.343 11.46-15.254 18.11-8.421.75-16.483 1.952-23.894 3.563-2.78-10.684-7.886-31.173 3.263-37.364Zm67.301 41.778c5.713.692 11.187 1.612 16.327 2.738-1.543 4.745-3.466 9.707-5.731 14.793a242.736 242.736 0 0 0-10.596-17.53ZM95.585 47.534c3.529 3.667 7.062 7.762 10.538 12.205-7.05-.32-14.113-.322-21.164-.005 3.48-4.401 7.043-8.49 10.626-12.2ZM58.831 85.903c-2.228-5.069-4.134-10.053-5.69-14.866 5.11-1.096 10.558-1.993 16.234-2.673A213.926 213.926 0 0 0 58.83 85.903Zm10.707 34.973c-5.864-.628-11.395-1.479-16.502-2.546 1.58-4.898 3.529-9.989 5.804-15.167a213.959 213.959 0 0 0 10.698 17.713Zm26.26 20.824c-3.626-3.754-7.243-7.905-10.774-12.37 7.09.267 14.195.267 21.285-.036-3.487 4.546-7.007 8.704-10.512 12.406Zm36.509-38.8c2.394 5.234 4.411 10.297 6.014 15.112-5.192 1.137-10.797 2.053-16.704 2.732a241.838 241.838 0 0 0 10.69-17.844Zm-20.409 18.734c-10.846.743-21.76.735-32.61.061a205.856 205.856 0 0 1-16.391-27.16 205.719 205.719 0 0 1 16.299-27.11 224.82 224.82 0 0 1 32.64.004c6.083 8.626 11.523 17.672 16.347 27-4.767 9.41-10.243 18.497-16.285 27.205Zm24.37-95.253c11.164 6.177 6.195 28.117 3.756 37.658-7.429-1.645-15.496-2.869-23.942-3.63-4.921-6.721-10.019-12.833-15.136-18.123 7.503-6.94 24.267-22.022 35.322-15.905Z" clip-rule="evenodd"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 157 148">
            <g clip-path="url(#a)">
              <path fill="#563D7C" d="M0 128.917C0 139.457 9.063 148 20.244 148h116.512c11.182 0 20.244-8.544 20.244-19.083V19.083C157 8.543 147.937 0 136.756 0H20.244C9.062 0 0 8.544 0 19.083v109.834Z"/>
              <path fill="#fff" d="M65.104 65.466v-20.96h19.571c1.864 0 3.662.147 5.392.44 1.731.293 3.262.816 4.594 1.569a8.598 8.598 0 0 1 3.195 3.137c.799 1.34 1.198 3.054 1.198 5.146 0 3.765-1.198 6.484-3.595 8.158-2.396 1.673-5.458 2.51-9.186 2.51H65.104Zm-20.902-36.27v89.609h46.065c4.26 0 8.41-.502 12.448-1.506 4.039-1.004 7.633-2.552 10.784-4.644a23.347 23.347 0 0 0 7.522-8.095c1.864-3.305 2.796-7.216 2.796-11.734 0-5.606-1.442-10.396-4.327-14.37-2.884-3.975-7.256-6.757-13.114-8.347 4.261-1.924 7.478-4.392 9.653-7.404 2.174-3.012 3.262-6.777 3.262-11.296 0-4.183-.733-7.697-2.197-10.542-1.465-2.845-3.528-5.125-6.191-6.84-2.663-1.715-5.858-2.95-9.586-3.702-3.728-.753-7.855-1.13-12.381-1.13H44.202Zm20.902 74.297V78.895h22.767c4.526 0 8.165.983 10.917 2.949 2.751 1.966 4.127 5.25 4.127 9.852 0 2.343-.422 4.267-1.265 5.773-.843 1.506-1.975 2.698-3.395 3.577-1.42.878-3.062 1.506-4.926 1.883a29.568 29.568 0 0 1-5.858.564H65.104Z"/>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 186 175">
              <path fill="url(#a)" d="M93 34.863c-24.8 0-40.3 11.667-46.5 35 9.3-11.666 20.15-16.041 32.55-13.125 7.075 1.664 12.132 6.493 17.729 11.839 9.118 8.708 19.671 18.786 42.721 18.786 24.8 0 40.3-11.666 46.5-35-9.3 11.667-20.15 16.042-32.55 13.125-7.075-1.664-12.132-6.493-17.729-11.838C126.603 44.942 116.05 34.863 93 34.863Zm-46.5 52.5c-24.8 0-40.3 11.667-46.5 35 9.3-11.666 20.15-16.041 32.55-13.125 7.075 1.664 12.132 6.493 17.729 11.839 9.118 8.708 19.671 18.786 42.721 18.786 24.8 0 40.3-11.666 46.5-35-9.3 11.667-20.15 16.042-32.55 13.125-7.075-1.664-12.132-6.493-17.729-11.838C80.103 97.442 69.55 87.363 46.5 87.363Z"/>
              <defs>
                <linearGradient id="a" x1="-516.667" x2="15044.1" y1="3394.86" y2="12930.8" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2298BD"/>
                  <stop offset="1" stop-color="#0ED7B5"/>
                </linearGradient>
              </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 154 152">
            <g clip-path="url(#a)">
              <path fill="#fff" fill-rule="evenodd" d="M0 76C0 34.026 34.474 0 77 0s77 34.026 77 76c0 26.215-13.447 49.33-33.906 62.992L50.377 42.656a5.17 5.17 0 0 0-5.744-1.88c-2.125.672-3.566 2.622-3.566 4.824v76h10.266V61.41l59.854 82.707C100.887 149.164 89.279 152 77 152c-42.526 0-77-34.027-77-76Zm102.667 25.333v-60.8h10.266v60.8h-10.266Z" clip-rule="evenodd"/>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h154v152H0z"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 142 150">
            <path fill="#539E43" d="M71 150c-2.205 0-4.263-.551-6.174-1.516l-19.55-10.886c-2.94-1.516-1.47-2.067-.589-2.343 3.97-1.24 4.704-1.516 8.82-3.721.441-.275 1.03-.138 1.47.138l14.994 8.406c.588.276 1.323.276 1.764 0l58.652-31.833c.588-.275.882-.827.882-1.516V43.202c0-.69-.294-1.24-.882-1.516L71.735 9.99c-.588-.276-1.323-.276-1.764 0L11.319 41.686c-.588.275-.882.964-.882 1.516v63.527c0 .552.294 1.241.882 1.516l16.023 8.682c8.672 4.134 14.111-.689 14.111-5.512V48.714c0-.827.735-1.654 1.764-1.654h7.497c.882 0 1.764.69 1.764 1.654v62.701c0 10.886-6.32 17.225-17.346 17.225-3.38 0-6.026 0-13.523-3.445l-15.435-8.268C2.352 114.86 0 111.001 0 106.867V43.339c0-4.134 2.352-7.992 6.174-10.06L64.826 1.448c3.675-1.93 8.673-1.93 12.348 0l58.652 31.833c3.822 2.067 6.174 5.925 6.174 10.06v63.527c0 4.134-2.352 7.993-6.174 10.06L77.174 148.76c-1.911.827-4.116 1.24-6.174 1.24Zm18.08-43.684c-25.724 0-31.016-11.024-31.016-20.395 0-.827.735-1.654 1.764-1.654h7.644c.882 0 1.617.552 1.617 1.378 1.176 7.304 4.557 10.887 20.139 10.887 12.348 0 17.639-2.618 17.639-8.82 0-3.583-1.469-6.2-20.726-7.992-16.023-1.516-26.019-4.823-26.019-16.812 0-11.163 9.996-17.777 26.754-17.777 18.816 0 28.076 6.063 29.252 19.293 0 .413-.147.826-.441 1.24-.294.275-.735.551-1.176.551h-7.644c-.734 0-1.469-.551-1.616-1.24-1.764-7.58-6.321-10.06-18.375-10.06-13.524 0-15.141 4.41-15.141 7.717 0 3.996 1.911 5.237 20.139 7.441 18.08 2.205 26.606 5.375 26.606 17.226-.147 12.127-10.731 19.017-29.4 19.017Z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 175 156">
            <path fill="url(#a)" fill-rule="evenodd" d="M71.183 9.75c-12.015 0-21.755 8.407-21.755 18.778v13h37.654v3.61H32.693c-12.015 0-21.755 8.408-21.755 18.779v28.166c0 10.371 9.74 18.778 21.755 18.778h12.551V94.972c0-10.37 9.74-18.778 21.756-18.778h40.163c10.167 0 18.409-7.113 18.409-15.888V28.528c0-10.37-9.74-18.778-21.755-18.778H71.183Zm-5.02 23.111c4.16 0 7.53-2.91 7.53-6.5s-3.37-6.5-7.53-6.5-7.53 2.91-7.53 6.5 3.37 6.5 7.53 6.5Z" clip-rule="evenodd"/>
            <path fill="url(#b)" fill-rule="evenodd" d="M103.815 146.25c12.016 0 21.756-8.407 21.756-18.778v-13H87.917v-3.611h54.389c12.016 0 21.755-8.407 21.755-18.778V63.917c0-10.371-9.739-18.778-21.755-18.778h-12.551v15.889c0 10.37-9.741 18.778-21.755 18.778H67.835c-10.166 0-18.408 7.113-18.408 15.888v31.778c0 10.371 9.74 18.778 21.755 18.778h32.633Zm5.021-23.111c-4.159 0-7.531 2.91-7.531 6.5s3.372 6.5 7.531 6.5 7.531-2.91 7.531-6.5-3.372-6.5-7.531-6.5Z" clip-rule="evenodd"/>
            <defs>
              <linearGradient id="a" x1="68.255" x2="68.255" y1="9.75" y2="110.861" gradientUnits="userSpaceOnUse">
                <stop stop-color="#327EBD"/>
                <stop offset="1" stop-color="#1565A7"/>
              </linearGradient>
              <linearGradient id="b" x1="106.745" x2="106.745" y1="45.139" y2="146.25" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFDA4B"/>
                <stop offset="1" stop-color="#F9C600"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      <section>Proyectos</section>
      <section>Contactame</section>
      <footer>Made by Franco Caraffa</footer>
    </main>
  </>
  )
}
