import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../img/TextoLogo.svg"
import flor from "../img/flor.svg"
import Boton from './Boton'
import IconsRRSS from './IconsRRSS'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

  const [ arrows, setArrow ] = useState(false)
  const [ scrolltop, setScrolltop ] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolltop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const locations = useRouter();
  const cambio = () => {
    setArrow( arrows => !arrows)
  }
  const handleClick = () => {
    setArrow(false)
  }
  return (
    <>
        <section className={`${locations.pathname === '/' ? 'bg-transparent' : 'bg-gradient-to-b from-pro-blue to-pro-blue2 shadow-md shadow-gray-400'} ${ scrolltop > 100 && locations.pathname === '/' ? `${styles.scrolldown}` : `${styles.colores}`} posicion mx-auto md:h-auto h-[56px] px-2 fixed top-[-1px] left-0 w-screen z-10`}>
          <nav className='md:h-10 md:py-10 md:flex md:justify-between items-center w-full' >
            <div className='flex justify-between items-center'>
              <div onClick={handleClick} className="flex items-center justify-center fixed top-0 left-0 md:relative mt-1 md:mt-0 z-[100] ">
                <Link href="/" className='mt-1 md:mt-0 flex flex-row items-center w-[50vw]'>
                  <Image src={flor} sizes="" className="w-[30px] md:w-[50px]" alt="Imagen logotipo"/>
                  <Image src={logo} sizes="" className="w-[150px] md:w-[200px]" alt="Imagen texto del logotipo"/>
                </Link>
              </div>
              
              <div className='md:hidden fixed top-3 right-3 z-50 active:outline-none focus:outline-none hover:outline-none' onClick={cambio}>
                <Boton arrows={arrows}/>
              </div>
            </div>
            <div className={`${styles.navbar} ${ arrows ? styles.active : ''} w-full`}>
              <Link
                onClick={handleClick}
                href="/contacto"
                className={`${locations.pathname === '/contacto' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Contáctanos
              </Link>
              <Link
                onClick={handleClick}
                href="/nosotros"
                className={`${locations.pathname === '/nosotros' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Nosotros
              </Link>
              <Link
                onClick={handleClick}
                href="/testimonios"
                className={`${locations.pathname === '/testimonios' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Testimonios
              </Link>
              <Link
                onClick={handleClick}
                href="/servicios"
                className={`${locations.pathname === '/servicios' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Servicios
              </Link>
              <Link
                onClick={handleClick}
                href="/simulador"
                className={`${locations.pathname === '/simulador' ? styles.pathactive : '' } ${ arrows ? styles.links : styles.linksEnd }`}
              >Simulador
              </Link>
              <Link
                onClick={handleClick}
                href="/"
                className={`${ arrows ? styles.links : styles.linksEnd }`}
              >Inicio
              </Link>
              <div className={`md:hidden border-t-[1px] border-[#7ed6df] ${ arrows ? styles.links : styles.linksEnd }`}>
                <IconsRRSS justify={`justify-start`} />
              </div>
            </div>
          </nav>
        </section>
    </>
  )
}

export default Navbar