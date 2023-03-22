import Layout from "../components/layout"

const Testimonios = () => {
  return (
    <>
      <Layout
        title="Nuestros testimonios"
        description="Credito de libranzas para pensionados y empleados oficiales | Ellos cryeron en nosotros"
      >
      <section className="md:flex-row md:items-center flex flex-col gap-5 md:gap-10 md:w-full px-5">
        <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl text-pro-blue font-black text-center md:text-start">Ellos creyeron <span className="md:text-7xl text-pro-blue2">en Nosotros</span></h1>
            <p className="text-2xl font-light mt-4 text-slate-700 text-center md:text-start">Deja que te cuenten su experiencia</p>
          </div>
          <div className="md:w-1/2 entrada">
            
          </div>
      </section>
      </Layout>
    </>
  )
}

export default Testimonios