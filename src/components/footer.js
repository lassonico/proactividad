import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/TextoLogo.svg'
import sic from '../img/logo-sic-footer.svg'
import IconsRRSS from './IconsRRSS'

const fecha = new Date().getFullYear()

function Footer() {
  return (
    <>
        <footer className='w-full h-auto bg-[#192a56] px-2 mt-14 pt-24'>
          <div className='w-auto h-auto mx-auto md:flex md:items-start md:justify-center md:gap-48'>
            <div>
              <h3 className='text-[#7ed6df] text-center text-3xl my-9 md:mt-0'>Contáctanos</h3>
              <p className='text-center text-white text-xl font-normal mb-0 leading-none'>Dirección</p>
              <p className='text-slate-100 text-center text-lg font-light mb-5'>calle 17 No 6 - 57 centro - Bogotá</p>
              <p className='text-center text-white text-xl font-normal mb-0 leading-none'>Teléfono</p>
              <p className='text-slate-100 text-center text-lg font-light mb-5'>3232858951</p>
              <p className='text-center text-white text-xl font-normal mb-0 leading-none'>Email</p>
              <p className='text-slate-100 text-center text-lg font-light mb-5'>contacto@proactivosoluciones.com</p>
              <p className='text-center text-white text-xl font-normal mb-0 leading-none'>Horario de atención</p>
              <p className='text-slate-100 text-center text-lg font-light mb-5'>lunes a vierne de 8:00AM a 4:00PM</p>
            </div>
            <div>
              <h3 className='text-[#7ed6df] text-center text-3xl my-9 md:mt-0'>Legales</h3>
              <p className='text-center text-white text-xl font-normal mb-0 leading-none'>Normativa</p>
              <p className='text-slate-100 text-center text-lg font-light mb-5'><Link href="/privacidad">Política de tratamiento de datos</Link></p>
              <h3 className='text-[#7ed6df] text-center text-3xl mt-9 mb-3'>Síguenos</h3>
              <div className='border-t border-[#7ed6df] pb-3 pt-5 w-[70%] mx-auto'>
                <IconsRRSS justify={`justify-center gap-5`} />
              </div>
              <Link href='/' className='text-center bg-[#7ed6df] text-[#192a56] px-9 pb-2 pt-3 rounded-md mx-auto mt-10 font-semibold uppercase text-sm block md:w-full w-[70%] cursor-pointer'>Trabaja con nosotros</Link>
            </div>
          </div>
          <Image
            src={logo}
            alt='imagen de texto del logotipo'
            className='w-[100px] md:w-[10%] mx-auto pt-11 pb-1 border-b border-white'
            width={120}
            height={40}
          />
          <p className='text-center text-white font-light text-xs mt-1 md:mt-0'>soluciones financieras</p>
          <div className='flex flex-col items-center justify-center md:gap-7'>
            <Image
              src={sic}
              alt="imagen superintendencia de industria y comercio"
              width={100}
              height={30}
              className='w-40 md:w-52 mt-3 mb-3'
            />
            <p className='text-center text-white text-sm mt-7 font-light'>Todos los derechos reservados <span className='text-pro-blue2 font-normal'>&copy;Proactivo Soluciones</span> {fecha}</p>
          </div>
        </footer>
    </>
  )
}

export default Footer