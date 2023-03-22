import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children, title = '', description = ''}) {

  return (
    <>
      <Head>
        <title>{`Proactivo ${title} | Crédito de libranza para pensionados y empleados oficiales | asesorias financieras`}</title>
        <meta name='description' content={description} />
        <meta name='theme-color' content='#0c6c8e' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nicolas Lasso Rodriguez http://soynico.click" />
        <meta name="keywords" content="Credito de libranza, pensionados de todos los fondo de pension, Asesoramiento financiero, Beneficios para empleados públicos" />
        <link rel="icon" href="./flor.svg" />
      </Head>
      <Navbar />
        <main className='md:mt-32 mt-20 bg-slate-100' >{children}</main>
      <Footer />
    </>
  )
}