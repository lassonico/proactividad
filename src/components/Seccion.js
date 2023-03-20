import Image from "next/image"
import imag from "../img/empleados.jpg"

function Seccion() {
  return (
    <div className="md:w-1/2 mx-auto">
        <h2 className="text-4xl text-pro-blue text-center font-extrabold mb-5">Tenemos la mejor experiencia para ti</h2>
        <Image 
          src={imag}
          alt="imagen principal"
          width={400}
          height={400}
          className="w-[50%] md:w-[30%] mx-auto my-12 shadow-xl shadow-gray-300 rounded-full"
        />
        <p className="text-xl font-normal text-slate-700 text-justify">En <span className="text-pro-blue2">Proactivo Soluciones Financieras</span> te damos opciones para que puedas elegir la que mejor se ajuste a lo que necesitas. Nuestro propósito es crear una relación de largo plazo con nuestros clientes basada en la confianza, la integridad y el respeto. Solicita tu crédito de Libranza sin importar si tienes reportes en centrales de riesgo. Contáctanos, estamos para ayudarte.</p>
    </div>
  )
}

export default Seccion