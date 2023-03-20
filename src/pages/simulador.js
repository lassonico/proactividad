import Layout from "../components/layout"
import Simular from "../components/Simulador"

export default function Simulador() {
  return (
    <>
      <Layout 
        title="Simula tu credito"
      >
      <main className="md:flex-row md:items-center flex flex-col gap-5 md:gap-10 md:w-full px-5">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl text-pro-blue font-black text-center md:text-start">Aquí puedes Simular <span className="md:text-7xl text-pro-blue2">tu crédito</span></h1>
          <p className="text-2xl font-light mt-4 text-slate-700 text-center md:text-start">Ésta simulación es informativa y no garantiza una solicitud formal. Está sujeta a verificación</p>
        </div>
        <div className="md:w-1/2 entrada">
          <Simular/>
        </div>
      </main>
      </Layout>
    </>
  )
}
