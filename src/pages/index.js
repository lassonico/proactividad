import Seccion from "../components/Seccion"
import Btn from "../components/Btn"
import Layout from "../components/layout"
import style from "../styles/Hero.module.css"
import Bigcons from "../components/Bigcons"

export default function Home() {
  
  return (
    <>
      <Layout
        title={'Inicio'}
        description="Credito de libranzas para pensionados y empleados oficiales"
      >
      <main className="flex items-center justify-center overflow-y-scroll" >
        <div className={`${style.hero}`} >
            <h1 className="entrada font-hero text-[2.1rem] md:text-4xl xl:text-6xl font-black md:font-black text-white text-left">¡Solicita tu crédito de libranza sin importar reportes en centrales!</h1>
            <p className="entrada font-light text-3xl mt-3 text-left text-pro-yellow">Cómodos plazos y aprobación oportuna</p>
            <div className="entrada md:my-0 mb-10 md:mx-0">
                <Btn />
            </div>
            <svg className="w-full absolute bottom-[-2px] md:hidden left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f1f5f9" fillOpacity="1" d="M0,0L1440,224L1440,320L0,320Z"></path>
            </svg>
        </div>
      </main>
      <div className="flex items-center px-5 justify-center mt-[calc(100vh+50px)]">
        <Seccion />
      </div>
      <div className="my-20">
        <Bigcons />
      </div>
      </Layout>
    </>
  )
}
