import Layout from "../components/layout"
const Nosotros = () => {
  return (
    <>
      <Layout
        title="Nosotros"
        description="Credito de libranzas para pensionados y empleados oficiales | Aquí te contamos nuestra historia"
      > 
      <section className="md:flex-row md:items-center flex flex-col gap-5 md:gap-10 md:w-full px-5">
        <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl text-pro-blue font-black text-center md:text-start">Esta es nuestra historia <span className="md:text-7xl text-pro-blue2">Nosotros</span></h1>
            <p className="text-2xl font-light mt-4 text-center text-slate-700 md:text-start">Estamos para apoyarte. Te contamos como</p>
          </div>
          <div className="md:w-1/2 entrada">
            
          </div>
      </section>
      </Layout>
    </>
  )
}

export default Nosotros