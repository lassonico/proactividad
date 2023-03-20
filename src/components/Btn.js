import Link from "next/link"

const Btn = () => {
  return (
    <>
      <button className="text-white w-[100%] text-xl font-normal text-shadow shadow-insaid from-pro-yellow to-pro-yellow2 bg-gradient-to-t px-14 py-2 rounded-full mt-5 md:mt-2 hover:cursor-pointer hover:from-pro-yellow hover:to-pro-yellow hover:bg-gradient-to-t ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
      ><Link href="/servicios">Solícitalo ahora</Link>
      </button>
    </>
  )
}

export default Btn