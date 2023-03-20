import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children, title = '', description = ''}) {

  return (
    <>
      <Head>
        <title>{`Proactivo ${title}`}</title>
        <meta name='description' content={description} />
        <meta name='theme-color' content='' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./flor.svg" />
      </Head>
      <Navbar />
        <main className='md:mt-32 mt-20 bg-slate-100' >{children}</main>
      <Footer />
    </>
  )
}