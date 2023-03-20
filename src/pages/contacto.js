import FormContact from "../components/FormContact"
import Layout from "../components/layout"

const Contacto = () => {
  return (
    <>
      <Layout
        title="Contacto"
      >
        <section className="md:flex-row md:items-center flex flex-col gap-5 md:gap-10 md:w-full px-5">
          <div className="md:w-1/2" id="contacto">
            <h1 className="text-4xl md:text-6xl text-pro-blue font-black text-center md:text-start">Ponte en contacto con <span className="md:text-7xl text-pro-blue2">Nosotros</span></h1>
            <p className="text-2xl font-light mt-4 text-slate-700 text-center md:text-start">Estaremos atentos para brindarte toda nuestra asesoría</p>
          </div>
          <div className="md:w-1/2 entrada">
          <FormContact />
        </div>
      </section>
      </Layout>
    </>
  )
}

export default Contacto